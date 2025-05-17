import './App.css';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';
import Whatsnew from './sections/Whatsnew/Whatsnew';
import Projects from './sections/Projects/Projects';
import Juerney from './sections/Juerney/Juerney';
import Experience from './sections/Experience/Experience';
import Certifications from './sections/Certifications/Certifications';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Juerney />
      <Experience />
      <Certifications />
      <Whatsnew />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
