import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className='bg-Home' >
        <div className="navbar">
          <div>
          <Link to="/breeds" >Breeds</Link>
          <Link to="/facts" >Facts</Link>
          </div>
          <div>
          <span>Sign In</span>
          <span>Sign Up</span>
          </div>
        </div>
        <div className="home-content">
          <div>
          <div className='shadow' >
          <h1 className='typewriter' >Welcome in WebSite  </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, doloribus.</p>
          </div>
          <div className='images' >
            <img data-aos="fade-up" src="/logo.png" width={100} height={100} alt="sad" />
            <img data-aos="fade-up" data-aos-delay="250" src="/logo.png" width={100} height={100} alt="sad" />
            <img data-aos="fade-up" data-aos-delay="500" src="/logo.png" width={100} height={100} alt="sad" />
            <img data-aos="fade-up" data-aos-delay="750" src="/logo.png" width={100} height={100} alt="sad" />
            <img data-aos="fade-up" data-aos-delay="1000" src="/logo.png" width={100} height={100} alt="sad" />
          </div>
          </div>
        </div>
    </div>
  )
}

export default Landing