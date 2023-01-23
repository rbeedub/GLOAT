import React from "react";
import JordanCard from "./JordanCard";

function JordanList( {jordanArray}) {
  const { id } = jordanArray
console.log(jordanArray);

const jordanDetails = jordanArray.map((shoe) => {
  return <JordanCard key={id} {...shoe} />;
})

  return (
    <div class="ui hidden divider">
      <div class="ui center aligned segment">
        <br></br>
        <h1> JORDAN LIST </h1>
        <br></br>
        <ul className="cards"> 
        {jordanDetails}
        </ul>
      </div>
    </div>

  );
}

export default JordanList;
