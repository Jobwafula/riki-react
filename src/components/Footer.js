import React from 'react';
import {Link} from 'react-router-dom';



export default function Footer() {
  return (
    <footer>
      <div className='row'>
        <div className='col-sm-6' >
          <div id='footer-links'>
            <Link to='/'>Home</Link>
            
            <Link >How it works</Link>
            <Link>Company</Link>
            <Link>Bloq</Link>
            <Link to='/Apply'>Apply</Link>
            <Link>Login</Link>
            <Link>Contact support</Link>  

          </div>
            
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
