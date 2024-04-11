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
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712727091/CONCIELD/5_iwsu0s.png' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712726789/FANCY%20WALL/1_bimnjp.png' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712725449/GATE/38_cgggxu.png' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712725278/STRIP/5-removebg-preview_u8bmvh.png' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712725566/WALL/WhatsApp_Image_2024-03-02_at_6.36.59_PM-removebg-preview_u0lrxk.png' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712725526/WALL/WhatsApp_Image_2024-03-02_at_6.06.17_PM_quwtkn.jpg' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712725280/STRIP/12-removebg-preview_1_ug3tgn.png' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712725704/FANCY%20WALL/69f10bbfaafed2feda1b90a216a4969e_be3j9b.jpg' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712725421/GATE/27_cxu9zx.jpg' alt='...' className='item'></img>

        </div>
        <div className='button-area'>
          <button className='pro-btn' >View All</button>
        </div>
      </div>

    </div>
  )
}

export default product