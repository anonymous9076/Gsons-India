import React, { useEffect } from 'react'
import './Team.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Team() {
    useEffect(() => {
        AOS.init({
        })
    }, [])
    return (
        <div className='team'>
            <h1>The Founders</h1>
        <div className='team-cont'>

            <div className="card" data-aos='fade-left' data-aos-delay="1000">
                <img src="./Images/sumit goel.jpeg" className="card-img-top" alt="Fissure in Sandstone" />
                <div className="card-body">
                    <h5 className="card-title">Sumit Goel (CEO)</h5>
                    <p className="card-text">   Sumit Goel, the visionary founder of Gsons,
                        brings a passion for innovation and a keen eye for design to every aspect of the company.
                        As the CEO, he leads with a commitment to excellence.</p>
                </div>
            </div>

            <div className="card" data-aos='fade-left' data-aos-delay="1500">
                <img src="./Images/rakesh goel.jpeg" className="card-img-top" alt="Fissure in Sandstone" />
                <div className="card-body">
                    <h5 className="card-title">Rakesh Goel (Founder)</h5>
                    <p className="card-text">Rakesh Goel, the main founder of the empire and father of Sumit Goel, 
                    is a visionary entrepreneur known for his innovative spirit and strategic leadership.
                     With a relentless drive for success, he has built a global powerhouse,
                      leaving an enduring legacy in the business world..</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Team