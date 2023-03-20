import Footer from './components/Footer';
import Certifications from './components/Certifications';
import Education from './components/Education'
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import data from "./data/data.json"
import './App.css';
import Skills from './components/Skills';
import Hero from './components/Hero.js'
import Nav from './components/Nav.js'
import navs from './data/ids.json'

function App() {
  const ids = navs
  return (
    <div className="App">
      <Nav propsIds={ids} />
      <Hero />
      <Skills propsSkills={data.skills}  />
      <Projects propsProjects={data.projects} />
      <WorkExperience propsWorkExp={data.workExperience} />
      <Education propsEdu={data.education} />
      <Certifications propsCert={data.certifications} />
      <Footer />
    </div>
  );
}

export default App;
