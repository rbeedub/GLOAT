import React from "react";
import { useState } from 'react';


function Cart( {id, model, condition, color, image, price, size, isWanted, inCart, removeFromFavorites} ) {

const [buyNow, setBuyNow] = useState(false)

const handleClick = () => (
    setBuyNow(!buyNow)
  )


  const initialData = {
      first:'',
      last:'',
      address:'',
      city:'',
      state:'',
      zip:'',
    }

    function deleteFav() {
        const updateWant = {"isWanted": !isWanted}

    fetch(`http://localhost:6001/jordans/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateWant),
      })
        .then((res) => res.json())
        .then(res => removeFromFavorites(res))
    }
  
  const [formData, setFormdata] = useState(initialData)
//   const [checked, setChecked]= useState[[]]
//   function handleFormChange(e) {
//     const {name, value} = e.target;
//     setFormdata({...formData, [name]: value})
//   }

//   function handleFormSubmit (e) {
//     e.preventDefault();

//     fetch('http://localhost:6001/jordans', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//     .then((response) => response.json())
//     .then(onFormSubmit)

//     .then(setFormdata(initialData))
//   }
 
  
    
    return ( 
    <>
  
        <div class="ui two column centered grid">
        <div class="ui card">
        
        <div class="content">
          <img src={image} />
          <div class="ui very padded segment"> 

            <div class="center aligned padded header">
              <h1>{model}</h1>
            </div>
            </div>
            
            <div class="center aligned description">
              
  

            <p> Size: {size}</p> 
            <p> Condition: {condition}</p>
            <p> Color: {color}</p>
            <p> Price: $ {price}</p>
            <button class="ui right floated" onClick={deleteFav}><i class="times circle icon"></i></button>
            </div>
        </div>
        </div>

        {/* <div class="column">ONE </div> */}
          <form class="column">
            <h1> Billing Address</h1>
          <div class="ui form" >
              <div class="one field">
                <div class="field">
                  <label>First Name</label>
                  <input value="" type="text" name="first" placeholder="First"  required />
                </div>
                <div class="field">
                  <label>Last Name</label>
                  <input value=""type="number" name="last" placeholder="Last"required  />
                  </div>
                <div class="field">
                  <label>Street Address</label>
                  <input value=""type="text" name="adress" placeholder="Address" required  />
                </div>
                <div class="field">
                  <label>City</label>
                  <input value="" type="text" name="city" placeholder="City" required />
                </div>
                <div class="field">
                  <label>State</label>
                  <input value="" type="text" name="Stater"  placeholder="State"required  />
                </div>
                <div class="field">
                  <label>Zip</label>
                  <input value=""type="number" name="zip"  placeholder="Zip"required  />
                  <div class="field">
                     </div> 
                </div>
              </div>
            </div>
            
            <div class="ui vertical stripe quote segment"></div>
          </form>
          <form class="column">
            <h1> Shipping Address</h1>
          <div class="ui form" >
              <div class="one field">
                <div class="field">
                  <label>First Name</label>
                  <input value="" type="text" name="first" placeholder="First"  required />
                </div>
                <div class="field">
                  <label>Last Name</label>
                  <input value=""type="number" name="last" placeholder="Last"required  />
                  </div>
                <div class="field">
                  <label>Street Address</label>
                  <input value=""type="text" name="adress" placeholder="Address" required  />
                </div>
                <div class="field">
                  <label>City</label>
                  <input value="" type="text" name="city" placeholder="City" required />
                </div>
                <div class="field">
                  <label>State</label>
                  <input value="" type="text" name="Stater"  placeholder="State"required  />
                </div>
                <div class="field">
                  <label>Zip</label>
                  <input value=""type="number" name="zip"  placeholder="Zip"required  />
                  <div class="field">
           
                     </div> 
                </div>
              </div>
            </div>
            <div class="ui vertical stripe quote segment"></div>
          </form>
          {/* <div class="column">three</div> */}
          <div class="ui card">  
            <div class="content">
                <br></br>
              
              <br></br>
                <div class="center aligned description">
                    <h1>Payment Information</h1>
                    <img src="https://github.com/rbeedub/GLOAT/blob/main/paymentCard.gif?raw=true" />
                <br></br>
                <div class="ui form" >
                <div class="field">
                  <input value="" type="number" name="creditCard" placeholder="16 digit credit card number"  required />
                </div>
                <div class="field">
                  <input value="" type="number" name="ssi" placeholder="3 digit security code"  required />
                </div>
                <div class="field">
                  <input value="" type="number" name="zip" placeholder="5 digit zip code"  required />
                </div>
                {buyNow ? (
                         // If isInStock === true, only this button is rendered.
                         <button class='ui left medium red floated button' onClick={handleClick}>Buy Now</button>
                     ) : (
                         // If isInStock === false, only this button is rendered.
                         <button class='ui left medium grey floated button' onClick={handleClick}>Thank you for your purchase!</button>
                     )}
                
                
                
                </div>
                </div>
            </div>
            </div>

      </div>

</> 
    )
    }

    export default Cart;