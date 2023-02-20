import React from 'react'

export default function Success(props) {
  return (
    <div className='container-fluid' style={{backgroundColor:'whitesmoke'}}>
      <h2>Success stories from our side</h2>
      <div className='container'>
        <div className='container' style={{backgroundColor:'white'}}>
          <h1><small>{props.text}</small></h1>
          <p className='bold'>{props.name}</p>
          <span><small>{props.country}.</small></span>
        </div>
          
      </div>
     
      
    </div>
  )
}
