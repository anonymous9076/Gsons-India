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
    return (
        <>
            <div className='home'>
                <div className='home-sec1'>
                    <nav className='home-nav' data-aos='fade-up'>
                    {visible?  <ul> 
                            <li>Home</li>
                            <li>About</li>
                            <li>Product</li>
                            <li>Catelog</li>
                            <li>Contact</li>
                        </ul> : <ul className='notvisible'> 
                            <li>Home</li>
                            <li>About</li>
                            <li>Product</li>
                            <li>Catelog</li>
                            <li>Contact</li>
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