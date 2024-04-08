import React, { useEffect } from 'react'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 

function About() {
    useEffect(()=>{
        AOS.init({
            delay:500
        })
    },[])
  return (
    <div className='about'>
        <div className='about-title'>
            <div data-aos='fade-left'>ABOUT US</div>
            <hr></hr>
        </div>
        <div className='about-body'>
        <div className='about-img'>
            <img  data-aos="fade-down-right" src='./Images/ai-generated-8515044_1920.jpg' alt='...'></img>
        </div>
        <div className='about-text'>
            <p data-aos='fade-left'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br></br>  <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        </div>
    </div>
  )
}

export default About
