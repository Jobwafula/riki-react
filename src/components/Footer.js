import React from 'react'

export default function Footer() {
  return (
    <footer>

        <div className=''>
            <a>Home</a>
            <a>How it works</a>
            <a>Company</a>
            <a>Bloq</a>
            <a>Apply</a>
            <a>Login</a>
            <a>Contact Support</a>

            
        </div>
        <div className=''>
            <ul>
                <li><i style={{color:'white'}} class="fab fa-twitter"></i></li>
                <li> <i style={{color:'white'}} class="fab fa-youtube"></i> </li>
                <li> <i style={{color:'white'}} class="fab fa-linkedin"></i> </li>
                <li><i style={{color:'white'}}class="fab fa-facebook"></i> </li>
                <li> <i style={{color:'white'}} class="fab fa-instagram"></i> </li>
            </ul>

            <a>Visit main website</a>

            <h3><small>copyright , All rights reserved</small></h3>
        </div>
       
    </footer>
  )
}
