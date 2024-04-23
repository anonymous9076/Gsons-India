import React, { useEffect } from 'react'
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import About from './About'
import Team from './Team'
import Contact from './Contact'

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 200
    })
  }, [])
  return (
    <>
      <div className='home'>
        <div className='home-text' >
          <h1 data-aos="fade-left" data-aos-delay="500">Gsons India</h1>
          <h2 data-aos="fade-left" data-aos-delay="1000">Lights & Accessories</h2>
          <h3 data-aos="fade-left" data-aos-delay="1500">
            "Illuminate your world with GSOSN lights,
            Where brilliance meets your every sight.
            Let your space shine, day or night."</h3>
        </div>

      </div>
      <About></About>
      <Team></Team>
      <Contact></Contact>
    </>

  )
}

export default Home
