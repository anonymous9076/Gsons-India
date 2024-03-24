import React from 'react'
import './Home.css'
import { IoMdMenu } from "react-icons/io";

function Home() {
    return (
        <>
            <div className='home'>
                <div className='home-sec1'>
                    <nav className='home-nav'>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Product</li>
                            <li>Catelog</li>
                            <li>Contact</li>
                        </ul>
                        <IoMdMenu className='menu-icon'></IoMdMenu>
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