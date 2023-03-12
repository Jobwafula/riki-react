import React from 'react'
import {NavLink} from 'react-router-dom'
export default function Apply() {
  const [email,setEmail] = React.useState('example@gmail.com')
  const [lastName,setLastName] = React.useState('Wafula')
  const [firstName,setFirstName] = React.useState('Job')
  const [password,setPassword] = React.useState(123456)
  const [country,setCountry] = React.useState("Uganda")

  // form handle && fetch api
  const handleSubmit=(event)=>{
    event.preventDefault()
     alert(`${email} + ${firstName} + ${lastName}: success`)
     const data = {email,firstName,lastName,password,country}
    //  fetch(){

    //  }
     
  }
  //email state
 const  handleEmail=(event)=>{
      
    setEmail(event.target.value)
  }
  // first name state
  const  handlFirstName=(event)=>{
      
    setFirstName(event.target.value)
}
// lastname state
const  handlLastName=(event)=>{
      
  setLastName(
    event.target.value
  )
}
// password state
const  handlePassword=(event)=>{
      
  setPassword(event.target.value)
}
// country
const handleCountry =(event)=>{
  setCountry(
    event.target.value
  )
}



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
      <form  onSubmit={handleSubmit} name='myForm' style={styles.formcontainer}>

        <div className='form-group'>
            <label>Email addres:</label>
                <input style={styles.width} className='form-control' onChange={handleEmail} value={email} name='email' type='text'/>
            
        </div>
        <div style={styles.names}>
            <div >
                <label style={styles.labeltext}>First Name:</label>
                    <input className='form-control' onChange={handlFirstName} value={firstName} name='firstName'type='text'/>
                
            </div>

            <div>
                <label style={styles.labeltext}>Last Name: </label>
                    <input className='form-control' onChange={handlLastName} value={lastName} name='lastName'type='text'/>
               
            </div>
        
        </div>
        
       
        <div>
            <label style={styles.labeltext}>password:</label>
                <input style={styles.width}  value={password} onChange={handlePassword} className='form-control'  type='password'/>
            
        </div>
        <div>
          <label style={styles.labeltext}>country of residence</label>
          {/* <input style={styles.width} className='form-control' placeholder='select' /> */}
          <select value={country} onChange={handleCountry} style={styles.width} className='form-control' placeholder='select'>
            <option>Kenya</option>
            <option>Tanzania</option>
            <option>Somalia</option>
            <option>Ethiopia</option>
            <option>Uganda</option>
            <option>South Sudan</option>
          </select>
          

        </div>
        <div style={styles.names}>
          <input type='checkbox'/>
          <p className='text-center'>I certify that i'm 18 years and above old and read and understood the data privacy.  </p>
        </div>
        <input  type='submit' placeholder='submit'/>
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
