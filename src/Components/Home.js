import React, { useState,useEffect } from 'react'
import './Home.css'
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import AOS from 'aos'
import 'aos/dist/aos.css'; 

function Home() {

    const [visible,setVisible]= useState(false)

    useEffect(()=>{
        AOS.init({
            delay:500
        })
    },[])

    const handleClick=(e)=>{
        setVisible((currele)=>!currele)
    }
    const scrollToTop = (e) => {
        if(e===1)
        window.scrollTo({
          top: 0, // Scroll to 100vh from the top
          behavior: 'smooth'
        })
        if(e===2)
        window.scrollTo({
          top:2* window.innerHeight, // Scroll to 100vh from the top
          behavior: 'smooth'
        })
        if(e===3)
        window.scrollTo({
          top:4* window.innerHeight, // Scroll to 100vh from the top
          behavior: 'smooth'
        })
        if(e===4)
        window.scrollTo({
          top: 3*window.innerHeight, // Scroll to 100vh from the top
          behavior: 'smooth'
        })
        if(e===5)
        window.scrollTo({
          top: 6*window.innerHeight, // Scroll to 100vh from the top
          behavior: 'smooth'
        })
        ;}
    return (
        <>
            <div className='home'>
                <div className='home-sec1'>
                    <nav className='home-nav' data-aos='fade-up'>
                    {visible?  <ul> 
                            <li onClick={()=>scrollToTop(1)}>Home</li>
                            <li onClick={()=>scrollToTop(2)}>About</li>
                            <li onClick={()=>scrollToTop(3)}>Product</li>
                            <li onClick={()=>scrollToTop(4)}>Catelog</li>
                            <li onClick={()=>scrollToTop(5)}>Contact</li>
                        </ul> : <ul className='notvisible'> 
                            <li onClick={()=>scrollToTop(1)}>Home</li>
                            <li onClick={()=>scrollToTop(2)}>About</li>
                            <li onClick={()=>scrollToTop(3)}>Product</li>
                            <li onClick={()=>scrollToTop(4)}>Catelog</li>
                            <li onClick={()=>scrollToTop(5)}>Contact</li>
                        </ul>}
                       <span className='nav-icons'>
                        {!visible?
                        <IoMdMenu id='menu-icon' onClick={handleClick}></IoMdMenu>:
                        <RxCross2 id='menu-icon' onClick={handleClick}></RxCross2>
                        }
                       </span>
                    </nav>
                    <hr></hr>
                    <div className='home-title' data-aos='fade-right'>
                        <h1>GSONS<br></br>LUMINOUS</h1>
                        <p>Lights & Accessories</p>
                        <button type='submit'>Contact Now</button>
                    </div>
                    <hr></hr>
                    <p data-aos='fade-up'>"Illuminate your life with style and shine"</p>
                </div>
                <div className='home-sec2'>
                    <div className='home-img-bg'>
                        <img data-aos='fade-up-left' src='./Images/decoration-7162595_1920.jpg' className='home-img' alt='...'></img>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Home