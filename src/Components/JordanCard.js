import React from "react";
import { useState } from 'react';
import JordanCardDetails from "./JordanCardDetails";


function JordanCard( { id, model, condition, color, image, price, size, isWanted, handleFavorite } ) {

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
        .then(res => handleFavorite(res))
  

  }
   
    
  return (
    <li className="card">
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
        <div className="ui buttons">

        <button type="submit" class="ui small basic circular right floated button"
            onClick={updateIsWanted}>
                {isWanted ? "🖤" : "♡"}
            </button>

        <button className= "ui tiny basic button"
        onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Less info" : "More info"}
        </button>


        </div>
    </li>
);

    }


export default JordanCard;
