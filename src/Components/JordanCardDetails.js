import React from "react";
import { useState } from 'react';


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
            {/* <button type="submit" class="ui right floated button"
            onClick={updateIsWanted}>
                {isWanted ? "🖤" : "♡"}
            </button> */}
            <div class="center aligned header">{model}</div>
            <div class="center aligned description">
            <p> Size: {size}</p> 
            <p> Condition: {condition}</p>
            <p>Color: {color}</p>
            <p>Price: $ {price}</p>
           
            </div>
        </div>
     
        </div>
     </>
  )


}
    

export default JordanCardDetails;
