import React from 'react'

const Navbar = () => {

    const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div><nav className="navbar">
        <h2 className="logo"> &lt;Laiba/&gt; </h2>
        <ul>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
          <li onClick={() => scrollToSection("contact")}>Contacts</li>
          <li><a href='https://github.com/laibaaslam713'>Github</a></li>
        </ul>
      </nav></div>
  )
}

export default Navbar