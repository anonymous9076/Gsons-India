import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function IndividualIntervalsExample() {
  const arr = ['https://res.cloudinary.com/djnjmmgu8/image/upload/v1712723809/ADV/ADD62_oighsg.png',
    'https://res.cloudinary.com/djnjmmgu8/image/upload/v1712723738/ADV/ADD43_t4y2sy.png',
    'https://res.cloudinary.com/djnjmmgu8/image/upload/v1712723806/ADV/ADD55_a0qkfa.png',
    'https://res.cloudinary.com/djnjmmgu8/image/upload/v1712723694/ADV/ADD6_bq42qi.png'
  ]
  return (
    <Carousel className='carousel'>

      {
        arr.map((item) => 
          <Carousel.Item interval={3000}  className='img-cont'>
            <img src={item} alt='...'></img>

          </Carousel.Item>
        )
      }


    </Carousel>
  );
}

export default IndividualIntervalsExample;