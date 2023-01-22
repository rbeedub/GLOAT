import React from "react";


function Form() {

  return (
    <div className="new-plant-form">
      <h2>Sell Your Jordans</h2>

      {/* <form onSubmit={onFormSubmit} > */}
        {/* <input value= {formData.name} type="text" name="name" placeholder="Plant name" onChange={handleFormSubmit} />
        <input value= {formData.image} type="text" name="image" placeholder="Image URL" onChange={handleFormSubmit}/>
        <input value= {formData.price} type="number" name="price" step="0.01" placeholder="Price" onChange={handleFormSubmit} /> */}
        <button type="submit">Sell Now</button>
      {/* </form> */}
    </div>
  );
}

export default Form;