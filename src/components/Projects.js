import { faFolderOpen } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Projects(props) {
  const sectionId = props.propsId
  const projects = props.propsProjects
  const listProjects = projects.map(item => (
    <div key={item.id} className="relative overflow-hidden">
      <div className="relative flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-prose">
          <span className="block text-center text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Project</span>
          <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">{item.projectName}</span>
        </h2>
        <div className="mx-auto flex w-full flex-row items-center justify-center gap-4">
          { item.link && <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus: ring-2 focus:ring-blue-500 focus:ring-offset-2" type="button">View Repo
            <FontAwesomeIcon icon={faFolderOpen} />
            </a> }
        </div>
        <div className="mx-auto flex max-w-prose flex-col gap-2">
          <p className="tracking-wide leading-relaxed text-lg text-left">{item.description}</p>
        </div>
      </div>
    </div>
  ))
  return (
    <section id={sectionId.slice(1)} className="relative flex flex-col items-center justify-center gap-12 min-h-[50vh] py-16 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <div className="flex flex-col items-center justify-center gap-12">
        {listProjects}
      </div>
    </section>
  )
}
