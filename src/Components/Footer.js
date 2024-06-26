import React from 'react';
import './Footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start footer'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link to='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </Link>
          <Link to='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </Link>
          <Link to='https://www.instagram.com/gsonsindia/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </Link>
          <Link to='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </Link>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Gsons India
              </h6>
              <p>
                "Illuminate your world with GSOSN lights,
                Where brilliance meets your every sight.
                Let your space shine, day or night."
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Catelogs</h6>
              <p>
                <Link to='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712740209/pdfs/RATAIL_ALL_ITEMS_LIST_yvtrtg.pdf' className='text-reset'>
                  Lights
                </Link>
              </p>
              <p>
                <Link to='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712739498/pdfs/GSONS_SWITCHES_ogrms7.pdf' className='text-reset'>
                  Switches
                </Link>
              </p>
              <p>
                <Link to='https://res.cloudinary.com/djnjmmgu8/image/upload/v1712739495/pdfs/WIRE_LIST_yxez8z.pdf' className='text-reset'>
                  wires
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <Link to='/' className='text-reset'>
                  Home
                </Link>
              </p>
              <p>
                <Link to='/about' className='text-reset'>
                  About
                </Link>
              </p>
              <p>
                <Link to='/products' className='text-reset'>
                  products
                </Link>
              </p>
              <p>
                <Link to='/contact' className='text-reset'>
                  Contact
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Goel Bijli House Batala, Punjab
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                gsonsindia@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 9815695810
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <Link className='text-reset fw-bold' to='https://mdbootstrap.com/'>
          gsonsindia.com
        </Link>
      </div>
    </MDBFooter>
  );
}