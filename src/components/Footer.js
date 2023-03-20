import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className="bg-gray-200 pb-16 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
      <div className="mx-auto flex max-w-7-xl flex-col gap-4 overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center" aria-label="Footer">
          <div className="px-5 py-2">
            <a className="text-base" href="#hero">Back to Top</a>
          </div>
        </nav>
        <a className="mx-auto block max-w-max px-5 py-2" href="mailto:shahan@gmail.com">shahan@gmail.com</a>
        <div className="flex justify-center gap-6 py-2">
          <a href="https://www.linkedin.com/in/sazk" target="_blank" rel="noreferrer">
            <span className="sr-only">Linkedin</span>
            <FontAwesomeIcon className="h-6 w-6" icon={faLinkedin} />
          </a>
          <a href="https://github.com/sazk07" target="_blank" rel="noreferrer">
            <span className="sr-only">GitHub</span>
            <FontAwesomeIcon className="h-6 w-6" icon={faGithub} />
          </a>
          <a href="https://twitter.com/sha_2_5_6" target="_blank" rel="noreferrer" >
            <span className="sr-only">Twitter</span>
            <FontAwesomeIcon className="h-6 w-6" icon={faTwitter} />
          </a>
        </div>
        <p className="mt-8 text-center text-base text-opacity-60">
          © {new Date().getFullYear()} Shahan Arshad Khan. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
export default Footer;
