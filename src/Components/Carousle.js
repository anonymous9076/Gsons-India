import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function IndividualIntervalsExample() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={5000} className='img-cont'>
        <img src='./Images/wall-823611_1920.jpg' alt='...'></img>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000} className='img-cont'>
      <img src='./Images/logo-6173652_1920.jpg' alt='...'></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='img-cont'>
      <img src='./Images/dinner-table-7910402_1920.jpg' alt='...'></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;