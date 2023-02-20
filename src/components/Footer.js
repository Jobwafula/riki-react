import React from 'react'


export default function Footer() {
  return (
    <footer>
      <div className='row'>
        <div className='col-sm-6'>
            <a>Home</a>
            <a>How it works</a>
             <a>Company</a> 
             <a>Bloq</a>
            <a>Apply</a>
            <a>Login</a>
            <a>Contact Support</a>   

            <div>
                <a>Visit main website</a>
            </div>
        </div>
        <div className='col-sm-6'>
            <ul id='ul-footer'>
                <li><i style={{color:'white'}} class="fab fa-twitter"></i></li>
                <li> <i style={{color:'white'}} class="fab fa-youtube"></i> </li>
                <li> <i style={{color:'white'}} class="fab fa-linkedin"></i> </li>
                <li><i style={{color:'white'}}class="fab fa-facebook"></i> </li>
                <li> <i style={{color:'white'}} class="fab fa-instagram"></i> </li>
            </ul>
        </div>
      </div>
     

            <h3><small>copyright , All rights reserved</small></h3>
       
    </footer>
  )
}
