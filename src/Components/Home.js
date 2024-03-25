import React, { useState } from 'react'
import './Home.css'
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

function Home() {
    const [visible,setVisible]= useState(false)

    const handleClick=(e)=>{
        setVisible((currele)=>!currele)
    }
    return (
        <>
            <div className='home'>
                <div className='home-sec1'>
                    <nav className='home-nav'>
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
                    <div className='home-title'>
                        <h1>GSONS<br></br>LUMINOUS</h1>
                        <p>Lights & Accessories</p>
                        <button type='submit'>Contact Now</button>
                    </div>
                    <hr></hr>
                    <p>"Illuminate your life with style and shine"</p>
                </div>
                <div className='home-sec2'>
                    <div className='home-img-bg'>
                        <img src='./Images/decoration-7162595_1920.jpg' className='home-img' alt='...'></img>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Home