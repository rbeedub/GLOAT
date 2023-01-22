import React from "react";
import JordanCard from "./JordanCard";

function JordanList( {jordanArray}) {
  const { id } = jordanArray
console.log(jordanArray);

const jordanDetails = jordanArray.map((shoe) => {
  return <JordanCard key={id} {...shoe} />;
})

  return (
    <div>
        <h1> JORDAN LIST </h1>
        <ul className="cards">
       
        {jordanDetails}
        </ul>
    </div>
  );
}

export default JordanList;
