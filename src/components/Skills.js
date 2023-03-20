export default function Skills(props) {
  const skills = props.propsSkills
  const programmingLanguagesArray = skills.programmingLanguages.map(item => <li key={item.id} className="flex flex-col items-center justify-center gap-4 hover:scale-110 sm:flex-row col-span-1 md:col-span-2 transition-transform duration-700">{item.name}</li>)
  const frameworksArray = skills.frameworks.map(item => <li key={item.id} className="flex flex-col items-center justify-center gap-4 hover:scale-110 sm:flex-row col-span-1 md:col-span-2 transition-transform duration-700">{item.name}</li>)
  const versionControlArray = skills.versionControl.map(item => <li className="flex flex-col items-center justify-center gap-4 hover:scale-110 sm:flex-row col-span-1 md:col-span-2 transition-transform duration-700" key={item.id}>{item.name}</li>)
  const osArray = skills.os.map(item => <li key={item.id} className="flex flex-col items-center justify-center gap-4 hover:scale-110 sm:flex-row col-span-1 md:col-span-2 transition-transform duration-700" >{item.name}</li>)
  const databaseArray = skills.database.map(item => <li key={item.id} className="flex flex-col items-center justify-center gap-4 hover:scale-110 sm:flex-row col-span-1 md:col-span-2 transition-transform duration-700" >{item.name}</li>)
  const biToolsArray = skills.biTools.map(item => <li key={item.id} className="flex flex-col items-center justify-center gap-4 hover:scale-110 sm:flex-row col-span-1 md:col-span-2 transition-transform duration-700" >{item.name}</li>)
  const analyticalSkillsArray = skills.analyticalSkills.map(item => <li key={item.id} className="flex flex-col items-center justify-center gap-4 hover:scale-110 sm:flex-row col-span-1 md:col-span-2 transition-transform duration-700" >{item.name}</li>)
  return (
    <section id="skills" className="relative flex flex-col items-center justify-center gap-12 min-h-[50vh] py-16 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="mx-auto flex max-w-screen-sm flex-col gap-8 px-4 py-8">
        <h2 className="mx-auto max-w-prose">
          <span className="block text-center text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Most Developed</span>
          <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">Skills</span>
        </h2>
        <p className="tracking-wide leading-relaxed text-lg font-semibold">Programming Languages</p>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4">
          <ul className="mx-auto grid w-full cursor-default grid-cols-2 items-center justify-center gap-8 px-2 md:grid-cols-6 md:px-0">
            {programmingLanguagesArray}
          </ul>
        </div>
        <p className="tracking-wide leading-relaxed text-lg font-semibold">Frameworks</p>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4">
          <ul className="mx-auto grid w-full cursor-default grid-cols-2 items-center justify-center gap-8 px-2 md:grid-cols-6 md:px-0">
            {frameworksArray}
          </ul>
        </div>
        <p className="tracking-wide leading-relaxed text-lg font-semibold">Version Control</p>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4">
          <ul className="mx-auto grid w-full cursor-default grid-cols-2 items-center justify-center gap-8 px-2 md:grid-cols-6 md:px-0">
            {versionControlArray}
          </ul>
        </div>
        <p className="tracking-wide leading-relaxed text-lg font-semibold">OS</p>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4">
          <ul className="mx-auto grid w-full cursor-default grid-cols-2 items-center justify-center gap-8 px-2 md:grid-cols-6 md:px-0">
            {osArray}
          </ul>
        </div>
        <p className="tracking-wide leading-relaxed text-lg font-semibold">Databases</p>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4">
          <ul className="mx-auto grid w-full cursor-default grid-cols-2 items-center justify-center gap-8 px-2 md:grid-cols-6 md:px-0">
            {databaseArray}
          </ul>
        </div>
        <p className="tracking-wide leading-relaxed text-lg font-semibold">BI Tools</p>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4">
          <ul className="mx-auto grid w-full cursor-default grid-cols-2 items-center justify-center gap-8 px-2 md:grid-cols-6 md:px-0">
            {biToolsArray}
          </ul>
        </div>
        <p className="tracking-wide leading-relaxed text-lg font-semibold">Analytical Skills</p>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-4">
          <ul className="mx-auto grid w-full cursor-default grid-cols-2 items-center justify-center gap-8 px-2 md:grid-cols-6 md:px-0">
            {analyticalSkillsArray}
          </ul>
        </div>
      </div>
    </section>
  )
}
