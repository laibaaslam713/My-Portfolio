import React from 'react'
import img from '../images/image.png';

const Hero = () => {
  return (
    <div className="about">
            <div>

              <h2>Laiba Aslam</h2>
              <p>Developer . Researcher . Creator</p>
            </div>  
            <img src={img} alt="profile" />
            
    </div>
  )
}

export default Hero