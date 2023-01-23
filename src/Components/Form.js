import React, {useState} from "react";

function Form({formData, handleFormChange, handleSubmit}) {

  const {model, color, size, condition, price, image } = formData


  return (
    <div className="new-sneaker-form">
      <h1>Sell Your Jordans</h1>
      <form onSubmit={handleSubmit}> 
        <input onChange={handleFormChange} value={model}  type="text" name="model" placeholder= "Model"  />
        <input onChange={handleFormChange} value={color} type="text" name="color" placeholder= "Color Way"  />
        <input onChange={handleFormChange} value={size} type="number" name="size" placeholder= "Size" /> Mens
        <input onChange={handleFormChange} value={condition} type="text" name="condition" placeholder= "Condition" />
        <input onChange={handleFormChange} value={price} type="number" name="price" placeholder= "Price" />
        <input onChange={handleFormChange} value={image} type="text" name="image" placeholder= "Image" />
        <button type="submit">Sell Now</button>
       </form>
    </div>
  );
}

export default Form;