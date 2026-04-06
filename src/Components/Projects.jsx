import React from 'react'

const Projects = () => {
  return (
    <div>
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
                with one click, making the process easy.
              </p>
              <a href='https://foodexpress-um4q.vercel.app/ '>
              <button className="project-btn">Learn More</button>
              </a>
            </div>
            <div className="project-card">
              <h3>To-Do list</h3>
              <p>
                A clean task management app with create,
                delete, and completion tracking in a smooth, responsive interface.
              </p>
              <a href='https://github.com/laibaaslam713/To-Do-List'>
              <button className="project-btn">Learn More</button>
              </a>
            </div>
            <div className="project-card">
              <h3>Note App</h3>
              <p>
                A minimalist note-taking app built with React.js and Tailwind CSS to create,
                 edit, organize, and store notes easily.
              </p>
              <a href='https://note-app-omega-swart.vercel.app/ '>
              <button className="project-btn">Learn More</button>
              </a>
            </div>
            
          </div>
    </div>
  )
}

export default Projects