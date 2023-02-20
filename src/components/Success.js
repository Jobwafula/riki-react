import React from 'react'

export default function Success(props) {
  return (
    <div>
      <h2>Success stories from our side</h2>
     <h1><small>{props.text}</small></h1>
     <p className='bold'>job</p>
     <span><small>Kenya.</small></span>
      
    </div>
  )
}
