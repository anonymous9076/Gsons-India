import React, { useEffect } from 'react'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css';

function About() {
    useEffect(() => {
        AOS.init({
        })
    }, [])
    return (
        <div className='about'>
            <div className='about-title'>
                <div data-aos='fade-left'>ABOUT US</div>
                <hr></hr>
            </div>
            <div className='about-body'>
                <div className='about-img'>
                    <img data-aos="fade-down-right" src='./Images/ai-generated-8515044_1920.jpg' alt='...'></img>
                </div>
                <div className='about-text'>
                    <p data-aos='fade-left'>
                        Welcome to Gsons, your ultimate destination for illuminating spaces and enhancing ambiances! At Gsons, we're passionate about brightening up your world with our exquisite range of lights and accessories. Whether you're looking to create a cozy atmosphere in your living room, add a touch of sophistication to your office, or transform your outdoor space into a captivating haven, we've got you covered.
<br></br><br></br>
                        Our Journey:
                        <br></br>
                        Founded in [YEAR], Gsons was born out of a vision to redefine the way people perceive lighting. It all started in the vibrant city of Batala, Punjab, where our founder, Sumit Goel, set out on a mission to illuminate homes and lives with creativity and innovation. Drawing inspiration from the interplay of lights and shadows, Sumit embarked on a journey to curate a collection of lighting solutions that not only illuminate spaces but also evoke emotions and enhance experiences.
                        <br></br><br></br>
                        Our Vision:
                        <br></br>
                        At Gsons, we believe that lighting is more than just a functional aspect of a space; it's an art form that has the power to transform ordinary moments into extraordinary memories. With this vision in mind, we meticulously handpick each product, ensuring that it not only meets our stringent quality standards but also resonates with our philosophy of blending form with function.
                        <br></br><br></br>
                        Our Offering:
                        <br></br>
                        Step into the world of Gsons, and you'll discover a treasure trove of lights and accessories designed to cater to every taste and style. From elegant wall hangings to statement chandeliers, from minimalist table lamps to intricately crafted pendant lights, our diverse collection boasts something for every discerning customer. Whether you're drawn to contemporary designs, timeless classics, or eclectic pieces that make a bold statement, you'll find it all here at Gsons.
                        <br></br><br></br>
                        Our Commitment:
                        <br></br>
                        At Gsons, customer satisfaction is at the heart of everything we do. We strive to not only meet but exceed your expectations at every turn. Our team of lighting experts is dedicated to providing personalized service, offering expert advice, and guiding you through every step of your lighting journey. From selecting the perfect fixture to ensuring seamless installation, we're here to make your experience with us as effortless and enjoyable as possible.
                        <br></br><br></br>
                        Join Us:
                        <br></br>
                        Join us on our quest to illuminate homes and hearts across the globe. Whether you're a design enthusiast, a homeowner looking to elevate your space, or a business seeking to create a memorable ambiance, Gsons invites you to explore our world of lights and accessories. Let's embark on this illuminating journey together and transform spaces into unforgettable experiences, one light at a time.

                        Experience the magic of Gsons today and let your space shine brighter than ever before!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
