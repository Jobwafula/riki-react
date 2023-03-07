import React from 'react';
import { NavLink } from 'react-router-dom';

import appen from '../images/Appen-Connect-Flower.png'

export default function Join() {

  const styles={
    htext:{
      fontSize:'6rem'
    }
  }
  return (
    <div >
      <div className=' row'>
      <div className=" col-sm-6 col-md-6  ">
                <div className='container'>
                     <h1 style={styles.htext}>Join Our Global</h1>
                    
            
                      <h1 style={styles.htext}>community</h1> 
                      <h1>
                          <small>Over one million people who embrace flexible work</small>    
                      </h1>   
                
                </div>
               
                
                
                <div className='container' id="button-wrapper">
                    <button id="apply" className="btn-lg "><NavLink to='/Apply'>Apply Now</NavLink></button>
                    <button id="how-it-works" className="btn-lg  "><NavLink to='/HowItWorks'>How it works</NavLink></button>
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
