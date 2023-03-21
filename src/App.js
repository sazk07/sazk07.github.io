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
  return (
    <div className="App">
      <Nav propsIds={navs} />
      <Hero />
      <Skills propsSkills={data.skills} propsId={navs[0].name}  />
      <Projects propsProjects={data.projects} propsId={navs[1].name} />
      <WorkExperience propsWorkExp={data.workExperience} propsId={navs[2].name} />
      <Education propsEdu={data.education} propsId={navs[3].name} />
      <Certifications propsCert={data.certifications} propsId={navs[4].name} />
      <Footer />
    </div>
  );
}

export default App;
