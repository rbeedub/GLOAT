import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
return (
    <>
        <div>
            <h2 style={{ fontSize: "3rem" }}>Looking for some Jordans? Want to sell some Jordans?  </h2>
        
       
            <h3>Check out our offerings:</h3>
            
     
            <div style={{ margin: "1rem 0" }}>
                <Link className="button" to="/jordans">
                View All Jordans
                </Link>
            </div>
          
            </div>
</>
  )
}

export default Home; 