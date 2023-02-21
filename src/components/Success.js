import React from 'react'

export default function Success(props) {
  return (
    <div className='container-fluid success-background' style={{backgroundColor:'whitesmoke',padding:'20px'}}>
      <h2>Success stories from our side</h2>
      
      <div className='container'>
      <span style={{marginRight:'10px'}}><i style={{color:'red'}} className="fas fa-quote-left fa-2x mb-4"></i></span>
      
        <div className='container' style={{backgroundColor:'white',width:'60%',padding:'20px'}}>
        
          <h1> <small>{props.text}</small> </h1>
          {/* <i style={{color:'red'}} className="fas fa-quote-right fa-2x mb-4"></i> */}
          
          <p className='bold'>{props.name}</p>
          <span><small>{props.country}.</small></span>
        </div>
          
      </div>
     
      
    </div>
  )
}
