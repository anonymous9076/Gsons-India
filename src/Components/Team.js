import React, { useEffect } from 'react'
import './Team.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Team() {
    useEffect(() => {
        AOS.init({
            delay: 500
        })
    }, [])
    return (
        <div className='team'>
            <h1 data-aos='fade-down'>Our Team</h1>
            <div className='co staff'>
                <div className='team-img-cont ' data-aos='fade-down-right'>
                    <img src='./Images/ceiling-5190252_1920.jpg' alt='...'></img>
                    <p id='staff-detail'>
                        Alongside Sumit Goel, Kashish Aggarwal stands as a stalwart leader at Gsons,
                        contributing invaluable expertise and a strategic vision to drive the company forward.
                        Together, as co-heads, they synergize their talents to innovate,
                        inspire, and redefine the world of lighting. With their combined leadership,
                        Gsons continues to illuminate spaces with unparalleled elegance and flair.</p>

                    <div className='name'>
                        <h2> Kashish Aggarwal</h2>
                        CO
                    </div>
                </div>
            </div>
            <div className='ceo staff' data-aos='fade-up'>
                <h1>Our Team</h1>
                <div className='team-img-co '>
                    <img src='./Images/ceiling-5190252_1920.jpg' alt='...'></img>
                    <p id='staff-detail'>
                        Sumit Goel, the visionary founder of Gsons,
                        brings a passion for innovation and a keen eye for design to every aspect of the company.
                        As the CEO, he leads with a commitment to excellence,
                        ensuring that Gsons continues to illuminate lives with creativity and distinction.</p>

                    <div className='name-co'>
                        <h2>Sumit Goel</h2>
                        CEO
                    </div>
                </div>
            </div>
            <div className='ac staff'>
                <div className='team-img-cont ' data-aos='fade-down-left'>
                    <img src='./Images/ac.jpeg' alt='...'></img>
                    <p id='staff-detail'>
                        At Gsons, Avtar Singh plays a pivotal role as the head of the accounts department,
                        where he expertly manages all financial transactions with precision and diligence.
                        With his meticulous attention to detail and unwavering dedication,
                        Avtar ensures the smooth functioning of the company's financial operations,
                        contributing to Gsons' success and growth.</p>
                    <div className='name'>
                        <h2> Avtar singh</h2>
                        AC.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Team