export default function Nav(props) {
  const ids = props.propsIds
  const liIds = ids.map(item => (
    <li key={item.id} className="flex items-center hover:bg-white hover:bg-opacity-10">
      <a href={`/${item.name}`} className="w-full px-2 py-4 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100  md:px-8">
        {item.render}
      </a>
    </li>))
  return (
    <nav className="pointer-events-none fixed bottom-6 z-20 flex w-full justify-center md:bottom-auto md:top-2 lg:left-8 lg:min-h-screen lg:flex-col" aria-label="Breadcrumb">
      <ol className="pointer-events-auto flex gap-2 overflow-hidden rounded-md bg-gray-50 px-2 shadow dark:bg-gray-800 md:px-0 lg:max-w-min lg:flex-col" >
        {liIds}
      </ol>
    </nav>
  )
}
