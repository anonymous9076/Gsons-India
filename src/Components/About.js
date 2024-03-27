import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
        <div className='about-title'>
            <div>ABOUT US</div>
            <hr></hr>
        </div>
        <div className='about-body'>
        <div className='about-img'>
            <img src='./images/ai-generated-8515044_1920.jpg' alt='...'></img>
        </div>
        <div className='about-text'>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br></br>  <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        </div>
    </div>
  )
}

export default About