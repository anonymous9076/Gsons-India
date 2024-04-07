import React from 'react'
import './Product.css'
function product() {
  return (
    <div className='products'>
      <div className='pro-left'>
        <div className='pro-img-cont'>
          <img className='pro-img' src='./Images/dinner-table-7910402_1920.jpg' alt='...'></img>
        </div>
      </div>

      <div className='pro-right'>
        <div className='pro-heading'>
          OUR PRODUCTS
        </div>

        <div className='items-list-cont'>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>

        </div>
        <div className='button-area'>
          <button className='pro-btn' >View All</button>
        </div>
      </div>

    </div>
  )
}

export default product