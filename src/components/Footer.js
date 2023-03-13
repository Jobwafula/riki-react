import React from 'react';
import {NavLink,Link} from 'react-router-dom';



export default function Footer() {

    const NavLinkStyles = ({isActive}) =>{
      return {
        fontWeight:isActive? 'bold':'normal',
         textDecoration:isActive? 'none':'normal'
      }
      
    }

  return (
    <footer>
      <div className='row'>
        <div className='col-sm-6' >
          <div id='footer-links'>
            <NavLink to='/'>Home</NavLink>
            
            <NavLink style={NavLinkStyles} to='/HowItWorks' >How it works</NavLink>
            <NavLink style={NavLinkStyles} to='/Company'>Company</NavLink>
            <NavLink style={NavLinkStyles} to='/Bloq'>Bloq</NavLink>
            <NavLink style={NavLinkStyles} to='/Apply'>Apply</NavLink>
            <NavLink style={NavLinkStyles} to='/ContactSupport'>Contact support</NavLink>  

          </div>
            
            <div>
                <Link>Visit main website</Link>
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
