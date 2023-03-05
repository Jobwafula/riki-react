import React from 'react'

export default function Navbar() {

  const styles ={
    container:{
      backgroundColor:'black'

    },
   ulcontainer:{
    float:"right"
   }
  }
  return (
    <div style={styles.container}>
         <ul id='ul-nav'>
                <li><i style={{color:'white'}} class="fab fa-twitter"></i></li>
                <li> <i style={{color:'white'}} class="fab fa-youtube"></i> </li>
                <li> <i style={{color:'white'}} class="fab fa-linkedin"></i> </li>
                <li><i style={{color:'white'}}class="fab fa-facebook"></i> </li>
                <li> <i style={{color:'white'}} class="fab fa-instagram"></i> </li>
          </ul>
    </div>
  )
}
