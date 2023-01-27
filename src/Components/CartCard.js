import React from "react";
import { useState } from "react";



function CartCard ( {id, model, color, size, condition, image, price, inCart, removeFromFavorites, noDuplicatesInCart, handleCart} ) {
    
    function deleteFav() {
        const updateCart = {inCart: !inCart}
    fetch(`http://localhost:6001/jordans/${id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(updateCart),
    })
        .then((res) => res.json())

        .then(res => removeFromFavorites(res))
    }
    


    return (
      <>
          <div class="ui segment">
              <div class="ui card">
          
           <div class="content">
            <img src={image} />
            <div class="ui very padded segment"> 
  
              <div class="center aligned padded header">
                <h1>{model}</h1>
              </div>
              </div>
              <div class="center aligned description">
              <p> Size: {size}</p> 
              <p> Condition: {condition}</p>
              <p> Color: {color}</p>
              <p> Price: $ {price}</p>
              <button class="ui right floated" onClick={deleteFav}><i class="times circle icon"></i></button>
              </div>
          </div>
          </div>
          </div>
    </>     
  
    )
}

export default CartCard;