import img from './images/image.png';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import './App.css';

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className="App">
      <nav className="navbar">
        <h2 className="logo">My Portfolio</h2>
        <ul>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("contact")}>Contacts</li>
        </ul>
      </nav>

      <header className="App-header">
        
        <section id="about" className="about-section">
          <div className="about">
            <img src={img} alt="profile" />
            <div>
              <p>Hello! I am Laiba Aslam</p>
            </div>
          </div>

          <div className="box"> 
            <h1>Hi, I'm Frontend Developer</h1>
            <p>
              I am a fresh IT graduate with practical experience in multiple domains 
              of technology, including:
            </p>
            <ul>
              <li>Web Development: HTML, CSS, PHP, JavaScript, React, figma</li>
              <li>Android Development: Kotlin, XML</li>
              <li>Data Science: Python (web scraping, data preprocessing, model training)</li>
            </ul>
            <p>
              I am passionate about building useful and creative solutions that solve 
              real-world problems. With a strong ability to quickly adapt to new 
              technologies, I am always eager to keep learning and improving my skills.
            </p>
            <p>
              I am seeking an opportunity where I can grow, contribute my knowledge, 
              and make a meaningful impact on the success of the team and organization.
            </p>
          </div>
        </section>

        <section id="projects" className="projects">
          <h2>My Projects</h2>

          <div className="projects-grid">
            <div className="project-card">
              <h3>Detecting Biased Reviews</h3>
              <p>
                A machine learning system that classifies e-commerce reviews
                as biased or unbiased for better decision-making.
              </p>
              <a href="https://github.com/laibaaslam713/FYP_Biasness_Detection">
              <button className="project-btn">Learn More</button>
              </a>
            </div>

            <div className="project-card">
              <h3>AI Recipe Generator</h3>
              <p>
                An AI-powered recipe generator built with Next.js,
                Supabase and n8n, deployed on Vercel.
              </p>
              <a href="https://nexium-laiba-aslam-internship-zj2e.vercel.app/">
              <button className="project-btn">Learn More</button>
              </a>
            </div>

            <div className="project-card">
              <h3>Quote Generator Web App</h3>
              <p>
                A clean and simple web app that displays motivational
                quotes based on user-entered topics.
              </p>
              <a href='https://nexium-laiba-aslam-assign1.vercel.app/'>
              <button className="project-btn">Learn More</button>
              </a>
            </div>

            <div className="project-card">
              <h3>Food Express</h3>
              <p>
                Food Express lets users order food directly through WhatsApp
                with one click, making the process quick and simple.
              </p>
              <a href='https://foodexpress-td2v-7w0mscmwz-laiba-aslams-projects-82178a37.vercel.app '>
              <button className="project-btn">Learn More</button>
              </a>
            </div>
            
          </div>
        </section>
        <section id="skills" className="section skills">
        <h1>Skills</h1>
        <ul>
          <li>HTML & CSS</li>
          <li>figma</li> 
          <li>Tailwind</li>         
          <li>JavaScript</li>
          <li>React</li>
          <li>PHP</li>
          <li>Kotlin & XML</li>
          <li>Python</li>
          <li>Feature Engineering</li>
          <li>Web Scraping</li>
          <li>Data Preprocessing</li>
          <li>Model Training</li>
          <li>Supabase</li>
          <li>SQL</li>
          <li>MongoDB</li>
        </ul>
      </section>
      <section id="contact" className="contact-section">
  <h2>Contact Me</h2>

  <div className="contact-icons">

    <a href="https://github.com/laibaaslam713" target="_blank" rel="noopener noreferrer">
      <FaGithub className="icon" />
    </a>

    <a href="	https://www.linkedin.com/in/laiba-aslam-070b53275/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="icon" />
    </a>

    <a href="https://wa.me/923121494114" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="icon" />
    </a>

    <a href="mailto:aslamlaiba713@gmail.com">
      <MdEmail className="icon" />
    </a>

  </div>
</section>

      </header>
    </div>
  );
}

export default App;
