import React, { useEffect } from 'react'
import './Product.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Product() {
  useEffect(() => {
    AOS.init({
    })
  }, [])


 

  return (
    <div className='products'>
      <div className='pro-left'>
        <div className='pro-img-cont'>
          <video className='pro-img' autoPlay={true} loop={true}>
            <source src='./Images/wallvid.mp4' type="video/mp4" />
          </video>
        </div>
      </div>

      <div className='pro-right'>
        <div className='pro-heading'>
          OUR PRODUCTS
        </div>

        <div className='items-list-cont' data-aos='fade-up'  >
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1713425140/CONCIELD/CN001_xvbwuw.png' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712726789/FANCY%20WALL/1_bimnjp.png' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712725449/GATE/38_cgggxu.png' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712725278/STRIP/5-removebg-preview_u8bmvh.png' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712725566/WALL/WhatsApp_Image_2024-03-02_at_6.36.59_PM-removebg-preview_u0lrxk.png' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712725526/WALL/WhatsApp_Image_2024-03-02_at_6.06.17_PM_quwtkn.jpg' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712725280/STRIP/12-removebg-preview_1_ug3tgn.png' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1713425149/CONCIELD/DL0025_whhthx.png' alt='...' className='item'></img>
          <img src='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712725421/GATE/27_cxu9zx.jpg' alt='...' className='item'></img>

        </div>
        <div className='button-area'>
          <Link  className="nav-link" to='/allitems'>
          <button className='pro-btn'>View All</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Product