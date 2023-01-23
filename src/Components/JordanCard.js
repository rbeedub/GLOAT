import React from "react";
import { useState } from 'react';
import JordanCardDetails from "./JordanCardDetails";


function JordanCard( {id, model, condition, color, image, price, size } ) {

const [showDetails, setShowDetails]= useState(false)


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
