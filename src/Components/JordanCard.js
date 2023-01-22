import React from "react";


function JordanCard( {id, model, condition, color, image, price, size } ) {

  return (
    <li className="card">
        <img src={image} alt={model} />
        <h4>{model}</h4>
        <p>Price: {price}</p>
        <p>Size: {size}</p>
        <p>Condition: {condition}</p>
        <p>Color: {color}</p>
        {/* {isForSale ? (
            // If isInStock === true, only this button is rendered.
            <button onClick={handleClick} className="primary">In Stock</button>
        ) : (
            // If isInStock === false, only this button is rendered.
            <button onClick={handleClick}>Out of Stock</button>
        )} */}
    </li>
);

    }

      

export default JordanCard;
