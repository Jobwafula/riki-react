import React from 'react'
import {Link} from 'react-router-dom'

export default function Target() {
  return (
    <div className='row container-fluid jumbotron' id='row-target'>
                <div className='col-sm-6 '>
                    <h1>With the recent  <span style={{color:'red'}}>increase in scams</span> targeting job seekers</h1>
                    <h3>we have put together helpful tips and resources to keep you safe</h3>
                </div>
                <div className='col-sm-6 learn-wrap'>
                    <p className='text-center'><Link>learn more</Link></p>
                </div>
    </div>
  )
}
