import React from "react";

function JordanCard() {

  return (
    <li className="card">
        <img src={`https://cdn.flightclub.com/TEMPLATE/176533/1.jpg`} alt={`Jordans`} />
        <h4>{`Jordans`}</h4>
        <p>Price: {`price`}</p>
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
