"use strict";

const fetchData = async (url) => {
  try {
    const dataPromise = await fetch(url);
    if (!dataPromise.ok) {
      throw new Error(dataPromise.statusText);
    }
    const data = await dataPromise.json();
    if (!data) {
      throw new Error("No data");
    }
    return data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
};

const retrieveObject = (data, node) => {
  const dataVals = Object.values(data);
  const correctObject = dataVals.find((object) => object?.htmlId === node?.id);
  return correctObject;
};

const createCustomHeadings = (elem, heading) => {
  heading.textContent = elem?.title ?? "";
};

const createCustomLists = (elem, vcUl) => {
  const kbdArray = ["<kbd>", "</kbd>"];
  const sanitizeKeyword = (str) => str?.replace(/</g, "&lt;");
  for (const {
    keyword,
    additional_keyword2,
    additional_keyword3,
    description,
  } of elem.commands) {
    const keywords = [keyword, additional_keyword2, additional_keyword3]
      .map(sanitizeKeyword)
      .filter(Boolean);

    const keywordString = keywords
      .map((kw, i) => {
        const prefix = i === 0 ? "" : " or ";
        return `${prefix}${kbdArray[0]}${kw}${kbdArray[1]}`;
      })
      .join("");

    const li = document.createElement("li");
    li.innerHTML = `${keywordString} - ${description}`;
    vcUl.appendChild(li);
  }
};

const createCustomTips = (elem, tip) => {
  tip.innerHTML = elem?.tip ?? "";
  if (!tip.innerHTML) {
    tip.style.display = "none";
  }
};

const main = async () => {
  // Fetch data
  const data = await fetchData("data/en_us.json");
  if (data instanceof Error) {
    const p = document.createElement("p");
    p.textContent = data.message;
    document.body.appendChild(p);
    return
  }

  // get relevant custom components
  const vimComponentNodes = Array.from(
    document.querySelectorAll("vim-component"),
  );

  // get relevant objects from data
  const dataObjects = vimComponentNodes
    .map((node) => retrieveObject(data, node))
    .filter(Boolean);

  // Headings, lists and tips
  for (const elem of dataObjects) {
    const vimComponent = document.querySelector(`#${elem.htmlId}`);
    const vcHeading = vimComponent.querySelector("[name='heading']");
    createCustomHeadings(elem, vcHeading);
    const vcUl = vimComponent.querySelector("[name='list']");
    createCustomLists(elem, vcUl);
    const vcTip = vimComponent.querySelector("[name='tip']");
    createCustomTips(elem, vcTip);
  }

  // Footer
  const footer = document.querySelector("footer");
  const anchor = document.createElement("a");
  anchor.setAttribute(
    "href",
    "https://github.com/sazk07/sazk07.github.io/vim-cheatsheet",
  );
  anchor.textContent = "GitHub";
  footer.textContent = `${data.footer} `;
  footer.appendChild(anchor);
};

main();
