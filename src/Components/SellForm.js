import React from "react";
import { useState } from 'react';

function SellForm( {onFormSubmit} ) {

  const initialData = {
      model:'',
      color:'',
      size:'',
      condition:'',
      price:'',
      image:'',
      isWanted: false,
      inCart: false
    }
  
  const [formData, setFormdata] = useState(initialData)
 
  function handleFormChange(e) {
    const {name, value} = e.target;
    setFormdata({...formData, [name]: value})
  }

  function handleFormSubmit (e) {
    e.preventDefault();

    fetch('http://localhost:6001/jordans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then(onFormSubmit)

    .then(setFormdata(initialData))
  }
 
  
    
    return (
      <form class="ui form" onSubmit={handleFormSubmit} >
        <div class="ui two column centered grid">
        {/* <div class="column">ONE </div> */}
       
          <div >
              <div class="one field">
                <div class="field">
                  <label>Model</label>
                  <input value= {formData.model} type="text" name="model" placeholder="Model" onChange={handleFormChange} required />
                </div>
                <div class="field">
                  <label>Size</label>
                  <input value= {formData.size} type="number" name="size" placeholder="Size" onChange={handleFormChange}required  />
                  </div>
                <div class="field">
                  <label>Condition</label>
                  <input value= {formData.condition} type="text" name="condition" placeholder="Condition" onChange={handleFormChange}required  />
                </div>
                <div class="field">
                  <label>Price</label>
                  <input value= {formData.price} type="number" name="price" placeholder="Price" onChange={handleFormChange} required />
                </div>
                <div class="field">
                  <label>Color</label>
                  <input value= {formData.color} type="text" name="color"  placeholder="Color" onChange={handleFormChange}required  />
                </div>
                <div class="field">
                  <label>Photo</label>
                  <input value= {formData.image} type="text" name="image"  placeholder="Image" onChange={handleFormChange}required  />
                </div>
              </div>
              <button class='ui left floated button' type="submit">Submit</button>
            </div>
            <div class="ui vertical stripe quote segment"></div> 
  
          {/* <div class="column">three</div> */}
          <div class="ui card">
        
            <div class="content">
              <img src={formData.image} />
              <div class="ui very padded segment"> 

                <div class="center aligned padded header">
                  <h1>{formData.model}</h1>
                </div>
                </div>
                
                <div class="center aligned description">
                  
      

                <p> Size: {formData.size}</p> 
                <p> Condition: {formData.condition}</p>
                <p> Color: {formData.color}</p>
                <p> Price: $ {formData.price}</p>
                </div>
            </div>
            </div>
         </div>
      </form>
 
    )
    }

    export default SellForm;