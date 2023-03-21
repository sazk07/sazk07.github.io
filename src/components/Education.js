function Education(props) {
  const sectionId = props.propsId
  const propsEdu = props.propsEdu
  const listEdu = propsEdu.map((item) => (
    <div className="relative overflow-hidden" key={item.id}>
      <div className="relative flex flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <h3 className="mx-auto max-w-prose">
          <span className="block text-center text-base font-semibold uppercase tracking-wide" >
            {item.school}
          </span>
          <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl" >
            {item.degreeName}
          </span>
        </h3>
        <div className="mx-auto flex max-w-prose flex-col gap-2">
          {item.honors &&
            <ul className="border-l-4 border-blue-600 dark:border-blue-400 ml-2 py-2 my-2 tracking-wide ">
            <li key={item.honors[0]} className=" text-left list-disc ml-6">{item.honors[0]}</li>
            <li className="list-disc ml-6 text-left" key={item.honors[1]}>{item.honors[1]}</li>
            <li className="list-disc ml-6 text-left" key={item.honors[2]}>{item.honors[2]}</li>
            </ul>
          }
        </div>
      </div>
    </div>
  ))
  return (
    <section id={sectionId.slice(1)} className="relative flex flex-col items-center gap-12 min-h-[50vh] py-16 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="flex flex-col items-center justify-center gap-12">
        <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">Education</span>
        {listEdu}
      </div>
    </section>
  )
}
export default Education;
