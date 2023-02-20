import React from 'react'

import appen from '../images/Appen-Connect-Flower.png'

export default function Join() {
  return (
    <div >
      <div className='row'>
      <div class="col-sm-6 col-md-6  ">
                <h1>Join Our Global</h1>
                    
            
                <h1 >community</h1> 
                <h1>
                    <small>Over one million people who embrace flexible work</small>    
                </h1>   
                
                
                
                <div id="button-wrapper">
                    <button id="apply" className="btn-lg  "><a href="./account.html">Apply Now</a></button>
                    <button id="how-it-works" className="btn-lg  "><a>How it Works</a></button>
                </div>
            </div>
            <div className="col-sm-6  col-md-6  appen-flower ">
                <img  src={appen}  width="390px"
              className="img-responsive"  alt="" />
            </div>
            
      </div>
         
            
      
    </div>
  )
}
