import React from "react";
import { useState } from "react";

function Favorites( {id, model, color, condition, isWanted, price, size, image, inCart, handleInCart, removeFromFavorites} ) {
    
    const [isForSale, setIsForSale] = useState(true)
    
    const handleClick = () => (
        setIsForSale(!isForSale)
      )
   
     function deleteFav() {
        const updateWant = {"isWanted": !isWanted}

    fetch(`http://localhost:6001/jordans/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateWant),
      })
        .then((res) => res.json())
        .then(res => removeFromFavorites(res))
    }




      function updateInCart () {
        const updateCart = {"inCart": !inCart}
    
        fetch(`http://localhost:6001/jordans/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateCart),
          })
            .then((res) => res.json())
            .then(res => handleInCart(res))
    
      }

   
   
    return (  
<>


    <div class="ui one row centered grid">
        <div class="row">
        <div class="ui card">
        <div class="content">
            {/* <button class="ui right floated button"
            onClick={() => setFavorited(!favorited)}>
                {favorited ? "🖤" : "♡"}
            </button> */}
            <div class="center aligned header">{model}</div>
            <div class="center aligned description">
            <img src={image} alt={model} />
            <p> Size: {size}</p> 
            <p> Condition: {condition}</p>
            <p>Color: {color}</p>
            <p>Price: $ {price}</p>
            
            </div>
        </div>
        <div class="extra content">
            <div class="center aligned author">
            <div class="ui buttons">
                <button class="ui button active" onClick={deleteFav} >Delete</button>
                <div class="or"></div>
                <button class="ui black button" onClick={updateInCart} >Add to Cart</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</>
)}        

export default Favorites;
