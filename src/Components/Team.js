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
            <h1>Our Team</h1>
            <div  className='team-cont'>
            <div className="card" data-aos='fade-left' data-aos-delay="500">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" className="card-img-top" alt="Fissure in Sandstone" />
                <div className="card-body">
                    <h5 className="card-title">Kashish Aggarwal</h5>
                    <p className="card-text"> Alongside Sumit Goel, Kashish Aggarwal stands as a stalwart leader at Gsons,
                        contributing invaluable expertise and a strategic vision to drive the company forward.</p>
                </div>
            </div>

            <div className="card" data-aos='fade-left' data-aos-delay="1000">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp" className="card-img-top" alt="Fissure in Sandstone" />
                <div className="card-body">
                    <h5 className="card-title">Sumit Goel</h5>
                    <p className="card-text">   Sumit Goel, the visionary founder of Gsons,
                        brings a passion for innovation and a keen eye for design to every aspect of the company.
                        As the CEO, he leads with a commitment to excellence.</p>
                </div>
            </div>

            <div className="card" data-aos='fade-left' data-aos-delay="1500">
                <img src="./Images/ac.jpeg" className="card-img-top" alt="Fissure in Sandstone" />
                <div className="card-body">
                    <h5 className="card-title">Avtar Singh</h5>
                    <p className="card-text">   At Gsons, Avtar Singh plays a pivotal role as the head of the accounts department,
                        where he expertly manages all financial transactions with precision and diligence.
                        With his meticulous attention to detail and unwavering dedication.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Team