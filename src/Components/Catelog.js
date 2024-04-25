import React, { useEffect } from 'react'
import './Catelog.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Catelog() {

  const light = 'https://res.cloudinary.com/djnjmmgu8/image/upload/v1712740209/pdfs/RATAIL_ALL_ITEMS_LIST_yvtrtg.pdf';
  const switches = 'https://res.cloudinary.com/djnjmmgu8/image/upload/v1712739498/pdfs/GSONS_SWITCHES_ogrms7.pdf';
  const wire = 'https://res.cloudinary.com/djnjmmgu8/image/upload/v1713946774/pdfs/NO_PRICE_WIRE_ljn4se.pdf';
  const concield = 'https://res.cloudinary.com/djnjmmgu8/image/upload/v1714043155/pdfs/GSONS_CONCIELD_LIGHTS_compressed_1_tymgbi.pdf';
  const gate = 'https://res.cloudinary.com/djnjmmgu8/image/upload/v1714043426/pdfs/GATE_NO_PRICE_yfl0z7.pdf';
  const openPdf = (pdf) => {

    const atag = document.createElement('a')
    atag.href = pdf
    document.body.appendChild(atag)
    atag.click()
    atag.remove()
  }

  useEffect(() => {
    AOS.init({

    })
  }, [])
  return (
    <div className='catelog'>
      <div className='cat-left'>
        <div className='cat-heading' data-aos="fade-down">Our Catelogs</div>
        <div className='cat-pdfs'>
          <div data-aos="fade-down-right" onClick={() => openPdf(wire)}> Wires
            <div id='wire'></div>
          </div>
          <div data-aos="fade-down" onClick={() => openPdf(switches)}>Switches
            <div id='switch'></div>
          </div>
          <div data-aos="fade-down-left" onClick={() => openPdf(light)}>Lights
            <div id='light'></div>
          </div>
          <div data-aos="fade-down-left" onClick={() => openPdf(concield)}>Concield
            <div id='concield'></div>
          </div>
          <div data-aos="fade-down-left" onClick={() => openPdf(gate)}>Gate Lamps
            <div id='gate'></div>
          </div>
        </div>
      </div>
      <div className='cat-right'>
        <img data-aos="fade-left" src='./Images/rope-2368997_1920.jpg' alt='...'></img>
      </div>
    </div>
  )
}

export default Catelog