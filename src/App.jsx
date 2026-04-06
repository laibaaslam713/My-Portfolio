


import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
    
  return (
    <div className="App">
      
      <Navbar/>

      <header className="App-header">
        
        <section id="about" className="about-section">
          
          <Hero/>
          <About/>
        </section>

        <section id="projects" className="projects">
          <Projects/>
        </section>
        <section id="skills" className="section skills">
          <Skills/>
        </section>
      <section id="contact" className="contact-section">
         <Contact/> 
      </section>

      </header>
      <Footer/>
    </div>
  );
}

export default App;
