import React from 'react'
import './Team.css'

function Team() {
    return (
        <div className='team'>
                <h1>Our Team</h1>
            <div className='co staff'>
                <div className='team-img-cont '>
                <img src='./Images/ceiling-5190252_1920.jpg' alt='...'></img>
                <p id='staff-detail'> hello ther</p>

                    <div className='name'>
                    <h2> Kashish Aggarwal</h2>
                        CO
                    </div>
                </div>
            </div>
            <div className='ceo staff'>
                <h1>Our Team</h1>
                <div className='team-img-co '>
                    <img src='./Images/ceiling-5190252_1920.jpg' alt='...'></img>
                <p id='staff-detail'> hello ther</p>
                   
                    <div className='name-co'>
                    <h2>Sumit Goel</h2>
                        CEO
                    </div>
                </div>
            </div>
            <div className='ac staff'>
                <div className='team-img-cont '>
                <img src='./Images/ceiling-5190252_1920.jpg' alt='...'></img>
                <p id='staff-detail'> hello ther</p>
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