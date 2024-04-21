import React from 'react'
import './AllItems.css'
import CardItems from './CardItems'
import *as products from '../products.js'

function AllItems() {
    console.log(products.bulb)

    return (
        <>
            <div className='display-items'>
                <div className='items-head'>
                    Led Bulb
                </div>
                <div className='all-item-cont'>
                    {products.bulb ? products.bulb.map((itmes) =>
                        <CardItems
                        image={itmes}
                        cat='Bulb'>
                        </CardItems>
                    ) : 'No Data Load'
                    }
                </div>
            </div>

            <div className='display-items'>
                <div className='items-head'>
                    Led Concield Lights
                </div>
                <div className='all-item-cont'>
                    {products.concield ? products.concield.map((itmes) =>
                        <CardItems
                        image={itmes}
                        cat='concield'>
                        </CardItems>
                    ) : 'No Data Load'
                    }
                </div>
            </div>

            <div className='display-items'>
                <div className='items-head'>
                    Hanging Lights
                </div>
                <div className='all-item-cont'>
                    {products.hanging ? products.hanging.map((itmes) =>
                        <CardItems
                        image={itmes}
                        cat='hanging'>
                        </CardItems>
                    ) : 'No Data Load'
                    }
                </div>
            </div>

            <div className='display-items'>
                <div className='items-head'>
                    Fancy Wall Lights
                </div>
                <div className='all-item-cont'>
                    {products.fancyWall ? products.fancyWall.map((itmes) =>
                        <CardItems
                        image={itmes}
                        cat='fancyWall'>
                        </CardItems>
                    ) : 'No Data Load'
                    }
                </div>
            </div>

            <div className='display-items'>
                <div className='items-head'>
                   Gate Lights
                </div>
                <div className='all-item-cont'>
                    {products.gate ? products.gate.map((itmes) =>
                        <CardItems
                        image={itmes}
                        cat='gate'>
                        </CardItems>
                    ) : 'No Data Load'
                    }
                </div>
            </div>

            <div className='display-items'>
                <div className='items-head'>
                    Led Strip Lights
                </div>
                <div className='all-item-cont'>
                    {products.strip ? products.strip.map((itmes) =>
                        <CardItems
                        image={itmes}
                        cat='strip'>
                        </CardItems>
                    ) : 'No Data Load'
                    }
                </div>
            </div>

            <div className='display-items'>
                <div className='items-head'>
                    Strip Adeptors
                </div>
                <div className='all-item-cont'>
                    {products.adeptor ? products.adeptor.map((itmes) =>
                        <CardItems
                        image={itmes}
                        cat='adeptor'>
                        </CardItems>
                    ) : 'No Data Load'
                    }
                </div>
            </div>

            <div className='display-items'>
                <div className='items-head'>
                   Walls lights
                </div>
                <div className='all-item-cont'>
                    {products.wall ? products.wall.map((itmes) =>
                        <CardItems
                        image={itmes}
                        cat='wall'>
                        </CardItems>
                    ) : 'No Data Load'
                    }
                </div>
            </div>

            <div className='display-items'>
                <div className='items-head'>
                   Jhummer
                </div>
                <div className='all-item-cont'>
                    {products.jhummer ? products.jhummer.map((itmes) =>
                        <CardItems
                        image={itmes}
                        cat='jhummer'>
                        </CardItems>
                    ) : 'No Data Load'
                    }
                </div>
            </div>

        </>
    )
}

export default AllItems