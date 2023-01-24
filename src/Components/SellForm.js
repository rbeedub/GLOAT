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
    <div>
      <h2>Sell Your Jordans</h2>

      <form>
       <div class="ui form" onSubmit={handleFormSubmit} >
          <div class="fields">
            <div class="field">
              <label>Model</label>
              <input value= {formData.model} type="text" name="model" placeholder="Model" onChange={handleFormChange} />
            </div>
            <div class="field">
              <label>Size</label>
              <input value= {formData.size} type="number" name="size" placeholder="Size" onChange={handleFormChange} />
              </div>
            <div class="field">
              <label>Condition</label>
              <input value= {formData.condition} type="text" name="condition" placeholder="Condition" onChange={handleFormChange} />
            </div>
            <div class="field">
              <label>Price</label>
              <input value= {formData.price} type="number" name="price" placeholder="Price" onChange={handleFormChange}/>
            </div>
            <div class="field">
              <label>Color</label>
              <input value= {formData.color} type="text" name="color"  placeholder="Color" onChange={handleFormChange} />
            </div>
            <div class="field">
              <label>Photo</label>
              <input value= {formData.image} type="text" name="image"  placeholder="Image" onChange={handleFormChange} />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
  </div>
    )
    }



{/* 
            <input value= {formData.model} type="text" name="model" placeholder="Model" onChange={handleFormChange} />
            <input value= {formData.size} type="number" name="size" placeholder="Size" onChange={handleFormChange} />
            <input value= {formData.condition} type="text" name="condition" placeholder="Condition" onChange={handleFormChange} />
            <input value= {formData.price} type="number" name="price" placeholder="Price" onChange={handleFormChange}/>
            <input value= {formData.color} type="text" name="color"  placeholder="Color" onChange={handleFormChange} />
            <input value= {formData.image} type="text" name="image"  placeholder="Image" onChange={handleFormChange} />
            <button type="submit">Submit</button>
          </form>
        </div> */}

    
    export default SellForm;


