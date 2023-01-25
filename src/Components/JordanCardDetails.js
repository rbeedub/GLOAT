import React from "react";
import { useState } from 'react';
import Favorites from "./Favorites";


function JordanCardDetails( { id, model, condition, color, image, price, size, isWanted } ) {
  const [isForSale, setIsForSale] = useState(true)
  const [favorited, setFavorited] = useState(false)

  
    const handleClick = () => (
      setIsForSale(!isForSale)
    )


  return (
    <>  
        <div class="ui card">
        <div class="content">
            <button class="ui right floated button"
            onClick={() => setFavorited(!favorited)}>
                {favorited ? "🖤" : "♡"}
            </button>
            <div class="center aligned header">{model}</div>
            <div class="center aligned description">
            <p> Size: {size}</p> 
            <p> Condition: {condition}</p>
            <p>Color: {color}</p>
            <p>Price: {price}</p>
           
            </div>
        </div>
        <div class="extra content">
            <div class="center aligned author">
                {isForSale ? (
                            // If isInStock === true, only this button is rendered.
                            <button onClick={handleClick} className= "ui button">In Stock</button>
                        ) : (
                            // If isInStock === false, only this button is rendered.
                            <button onClick={handleClick} className= "ui button">Out of Stock</button>
                        )}
            </div>
        </div>
        </div>
     </>
  )


}
    

export default JordanCardDetails;
