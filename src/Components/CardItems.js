import React from 'react'
import './CardItems.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
} from "mdb-react-ui-kit";

function CardItems(props) {

  return (
    <>
       <MDBCard style={{ borderRadius: "15px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay"
            >
              <MDBCardImage
                src={props.image}
                fluid
                className="w-100 helllo"
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                }}
              />
             
                <div className="mask"></div>
         
            </MDBRipple>
            <MDBCardBody className="pb-0" id='white'>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="small text-muted" id='white'>{props.cat}</p>
                </div>
                <div>
                  <div className="d-flex flex-row justify-content-end mt-1 mb-4 text" id='white'>
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                  </div>
                  <p className="small text-muted" id='white'>Rated 4.0/5</p>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
    </>
  );
}

export default CardItems