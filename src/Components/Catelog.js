import React, { useEffect } from 'react'
import './Catelog.css'
import AOS from 'aos'
import 'aos/dist/aos.css'; 

function Catelog() {

  const light ='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712740209/pdfs/RATAIL_ALL_ITEMS_LIST_yvtrtg.pdf';
  const switches ='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712739498/pdfs/GSONS_SWITCHES_ogrms7.pdf';
  const wire = 'https://res.cloudinary.com/djnjmmgu8/image/upload/v1712739495/pdfs/WIRE_LIST_yxez8z.pdf';

  const openPdf = (pdf) => {
  
      const atag = document.createElement('a')
      atag.href = pdf
      document.body.appendChild(atag)
      atag.click()
      atag.remove()
  }

  useEffect(()=>{
    AOS.init({
        delay:500
    })
},[])
  return (
    <div className='catelog'>
      <div className='cat-left'>
        <div className='cat-heading' data-aos="fade-down">Our Catelogs</div>
        <div className='cat-pdfs'>
        <div  data-aos="fade-down-right" onClick={()=>openPdf(wire)}> Wires 
        <div id='wire'></div>
        </div>
        <div  data-aos="fade-down" onClick={()=>openPdf(switches)}>Switches 
        <div id='switch'></div>
        </div>
        <div  data-aos="fade-down-left" onClick={()=>openPdf(light)}>Lights 
          <div id='light'></div>
        </div>
        </div>
      </div>
      <div className='cat-right'>
        <img data-aos="fade-left" src='./Images/ai-generated-8593619_1920.jpg' alt='...'></img>
      </div>
    </div>
  )
}

export default Catelog