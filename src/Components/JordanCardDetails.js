import React from "react";
import { useState } from 'react';


function JordanCardDetails( {id, model, condition, color, image, price, size } ) {
  const [isForSale, setIsForSale] = useState(true)

    const handleClick = () => (
      setIsForSale(!isForSale)
    )

  return (
    <>
        <div class="ui card">
        <div class="content">
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
                            <button onClick={handleClick} className="primary">In Stock</button>
                        ) : (
                            // If isInStock === false, only this button is rendered.
                            <button onClick={handleClick}>Out of Stock</button>
                        )}
            </div>
        </div>
        </div>
     </>
  )


}
    

export default JordanCardDetails;
