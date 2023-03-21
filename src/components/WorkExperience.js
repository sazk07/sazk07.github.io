export default function WorkExperience(props) {
  const sectionId = props.propsId
  const workExperience = props.propsWorkExp
  const listWorkExperience = workExperience.map(item => (
    <div className="relative overflow-hidden" key={item.id}>
      <div className="relative flex flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <h3 className="mx-auto max-w-prose">
          <span className="block text-center text-base font-semibold uppercase tracking-wide" >
            {item.employer}
          </span>
          <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl" >
            {item.position}
          </span>
        </h3>
        <div className="mx-auto flex w-full flex-row items-center justify-center gap-4">
          <p>{item.dateFrom} - {item.dateTo}</p>
        </div>
        <div className="mx-auto flex max-w-prose flex-col gap-2">
          <p className="tracking-wide leading-relaxed text-lg text-left">
            {item.jobDescription}
          </p>
          {item.projectsExecuted.length !==0 ? <>
              <p className="tracking-wide leading-relaxed text-lg">Projects Executed:</p>
              <ul className="border-l-4 border-blue-600 dark:border-blue-400 ml-2 py-2 my-2">
                {item.projectsExecuted.map(subitem => (
                  <li className="text-left list-disc ml-6" key={subitem.id}>
                    {subitem.name}
                  </li>
                ))}
              </ul>
            </>
            : ""
          }
          {item.impact.length !==0 ?
            <>
              <p className="tracking-wide leading-relaxed text-lg">Impact</p>
              <ul className="border-l-4 border-blue-600 dark:border-blue-400 ml-2 py-2 my-2">
                {item.impact.map(subitem => (
                  <li className="text-left list-disc ml-6" key={subitem.id}>
                    {subitem.name}
                  </li>
                ))}
              </ul>
            </>
            : ""
          }
        </div>
      </div>
    </div>
  ))
  return (
    <section id={sectionId.slice(1)} className="relative flex flex-col items-center justify-center gap-12 py-16 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="flex flex-col items-center justify-center gap-12">
        <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">Work Experience</span>
        {listWorkExperience}
      </div>
    </section>
  )
}
