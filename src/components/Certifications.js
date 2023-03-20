function Certifications(props) {
  const propsCert = props.propsCert
  const listCert = propsCert.map((item) => (
    <div key={item.id} className="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-medium">
        <a href={item.link} className="capitalize focus:outline-none" target="_blank" rel="noreferrer">{item.certName}</a>
      </h3>
      <p className="tracking-wide leading-relaxed text-lg">{item.issuer}</p>
      {item.link &&
        <a type="button" href={item.link} className="inline-flex items-center gap-2 rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-white" target="_blank" rel="noreferrer">click to view certification</a>
      }
    </div>
    </div>
  )
  )
  return (
    <section id="certifications" className="md:px-8 lg:px-12 relative flex flex-col items-center min-h-[50vh] justify-center gap-12 border-gray-100 py-16 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
    <h2 className="mx-auto max-w-prose">
      <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">Certifications</span>
    </h2>
    <div className="mx-auto max-w-screen-md divide-y divide-gray-200 overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {listCert}
    </div>
    </section>
  )
}
export default Certifications;
