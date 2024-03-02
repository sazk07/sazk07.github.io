"use strict";

const fetchData = async (url) => {
  try {
    const dataPromise = await fetch(url);
    if (!dataPromise.ok) {
      throw new Error(dataPromise.statusText);
    }
    const data = await dataPromise.json();
    if (!data) {
      throw new Error("no data found");
    }
    return data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

const createSpan = (slot, text, parent) => {
  const vocabSpan = document.createElement("span");
  vocabSpan.setAttribute("slot", slot);
  vocabSpan.textContent = text;
  parent.appendChild(vocabSpan);
};

const createLi = (slot, text, parent) => {
  const li = document.createElement("li");
  li.setAttribute("slot", slot);
  li.innerHTML = text;
  parent.appendChild(li);
};

const main = async () => {
  const mainElem = document.querySelector("main");
  const data = await fetchData("data/data.json");
  if (data instanceof Error) {
    mainElem.textContent = data.message;
    return;
  }
  for (const elem of data) {
    const { word, definition, mark, etym } = elem;
    // create custom elem
    const vocabElement = document.createElement("vocab-element");
    mainElem.appendChild(vocabElement);
    createSpan("vocab", word, vocabElement);

    // check if elem definition is in array form
    if (Array.isArray(definition)) {
      for (const def of definition) {
        createLi("definition", def, vocabElement);
      }
    } else {
      createLi("definition", definition, vocabElement);
    }

    // check if elem mark is in array form
    if (Array.isArray(mark)) {
      mark.forEach((mark, index) => {
        const concatEtym = `<mark>${mark}</mark>: <span>${etym[index]}</span>`;
        createLi("etym", concatEtym, vocabElement);
      });
    } else if (mark) {
      const concatEtym = `<mark>${mark}</mark>: <span>${etym}</span>`;
      createLi("etym", concatEtym, vocabElement);
    }

    // close previous details element if new vocab element clicked
    vocabElement.addEventListener("click", () => {
      const allVocabs = document.querySelectorAll("vocab-element");
      for (const vocab of allVocabs) {
        const details = vocab.shadowRoot.querySelector("details");
        if (details.getAttribute("open") === "") {
          details.removeAttribute("open");
        }
      }
    });
  }
};
main();
