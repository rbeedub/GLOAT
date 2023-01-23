import React from "react";


function Favorites( {id, model, condition, color, image, price, size, setFavorited, favorited, isForSale, handleClick } ) {

  return (
  
    <div class="ui card">
    <div class="content">
        <button class="ui right floated button"
        onClick={() => setFavorited(!favorited)}>
            {favorited ? "🖤" : "♡"}
        </button>
        <div class="center aligned header">{model}</div>
        <div class="center aligned description">
        <img src={image} alt={model} />
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

)


}
        

export default Favorites;
