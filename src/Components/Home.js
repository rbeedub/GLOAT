import React from 'react';
import { Link } from 'react-router-dom';

function Home() {


return (
    <>
        <div>
            <div class="ui fade reveal image">
            <div class="visible content">
            <img src="https://raw.githubusercontent.com/rbeedub/GLOAT/7ec712f640ee9b1d4fed604c5bd3173035d5c4f9/forSale.svg" class="ui image"/>
             </div>
            <div class="hidden content">
            <img src="https://raw.githubusercontent.com/rbeedub/GLOAT/e4f7ddd0bead7b9b223e7e4a4976e28bc11c94ca/G%20L%20OA%20T.svg" class="ui image"/>
            </div>
            </div>

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