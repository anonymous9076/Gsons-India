import React from 'react'
import './AllItems.css'
import CardItems from './CardItems'

function AllItems() {


    return (
        <>
        <div className='display-items'>
            <div className='items-head'>
            lights
            </div>
            <div className='all-item-cont'>

                <CardItems></CardItems>
                <CardItems></CardItems>
                <CardItems></CardItems>
                <CardItems></CardItems>

            </div>
            
        </div>
        <div className='display-items'>
            <div className='items-head'>
            Concield
            </div>
            <div className='all-item-cont'>

                <CardItems></CardItems>
                <CardItems></CardItems>
                <CardItems></CardItems>
                <CardItems></CardItems>

            </div>
            
        </div>
        </>
    )
}

export default AllItems