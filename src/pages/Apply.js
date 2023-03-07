import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Apply() {



  const NavLinkStyles = ({isActive}) =>{
    return {
      fontWeight:isActive? 'bold':'normal',
       textDecoration:isActive? 'none':'normal',
       color:isActive?'blue':'white'
    }
    
  }

  const styles = {
    formcontainer:{
      display:'block'
    },
    names:{
      display:'flex',
      gap:'95px'
    },
    labeltext:{
      fontWeight:'light'
    },
    width:{
      width:'50%'
    }

  }
  return (
    <div>

      <div>
      <div style={{backgroundColor:'black'}} id='footer-links'>
            <NavLink to='/'>Home</NavLink>
            
            <NavLink style={NavLinkStyles} to='/HowItWorks' >How it works</NavLink>
            <NavLink style={NavLinkStyles} to='/Company'>Company</NavLink>
            <NavLink style={NavLinkStyles} to='/Bloq'>Bloq</NavLink>
            <NavLink style={NavLinkStyles} to='/Apply'>Apply</NavLink>
            <NavLink style={NavLinkStyles} to='/ContactSupport'>Contact support</NavLink>  

          </div>
      </div>
      <div className='container'>
      <h1 style={styles.labeltext}>create account</h1>
      <form style={styles.formcontainer}>

        <div className='form-group'>
            <label>Email addres:</label>
                <input style={styles.width} className='form-control' type='text'/>
            
        </div>
        <div style={styles.names}>
            <div >
                <label style={styles.labeltext}>First Name:</label>
                    <input className='form-control' type='text'/>
                
            </div>

            <div>
                <label style={styles.labeltext}>Last Name: </label>
                    <input className='form-control' type='text'/>
               
            </div>
        
        </div>
        
       
        <div>
            <label style={styles.labeltext}>password:</label>
                <input style={styles.width} className='form-control' type='password'/>
            
        </div>
        <div>
          <label style={styles.labeltext}>country of residence</label>
          <input style={styles.width} className='form-control' placeholder='select' />

        </div>
        <div style={styles.names}>
          <input type='checkbox'/>
          <p className='text-center'>I certify that i'm 18 years and above old and read and understood the data privacy.  </p>
        </div>
      </form>
      <div>
        <NavLink to='/Apply'>create account</NavLink>
        <h2>Have an account?</h2>
        <NavLink>Sign in!</NavLink>
      </div>
      <div>
        <p>Need help?</p>
        <NavLink to='/ContactSupport'>ContactSupport</NavLink>
      </div>
      </div>

      
     
      
    </div>
  )
}
