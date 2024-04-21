import React from 'react'
import './CardItems.css'

function CardItems(props) {

  return (

    <>
      <div className="item-card" >
        <img className="img-top" src={props.image} alt="..."/>
      </div>
    
    </>
  );
}

export default CardItems