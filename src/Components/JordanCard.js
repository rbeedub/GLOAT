import React from "react";
import { useState } from 'react';
import JordanCardDetails from "./JordanCardDetails";


function JordanCard( { id, model, condition, color, image, price, size, isWanted } ) {

const [showDetails, setShowDetails]= useState(false)

function updateIsWanted () {
    const update = {"isWanted": !isWanted,}

    fetch(`http://localhost:6001/jordans/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),
      })
        .then((res) => res.json())
        .then(res => console.log(res))

  }
   
    
  return (
    <li className="card">
          <button type="submit" class="ui right floated button"
            onClick={updateIsWanted}>
                {isWanted ? "🖤" : "♡"}
            </button>
        <img src={image} alt={model} />
        <div>
            {showDetails && 
            <JordanCardDetails
            model={model}
            condition={condition}
            color={color} 
            price={price}
            size={size}
            isWanted={isWanted}
            />}
        </div>
        <br></br>
        <button className= "ui button"
        onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Less info" : "More info"}
        </button>
    </li>
);

    }


export default JordanCard;
