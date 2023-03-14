import React from 'react'
import {useState} from 'react'
import Profile from './Profile'
import LoginForm from '../components/LoginForm'

export default function Login() {
  // profile authenticate
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const handleLogin = ()=>{
    setIsLoggedIn(true)
  }

  const handleLogout = ()=>{
    setIsLoggedIn(false)
  }
  return (
    <div>
     {isLoggedIn?(
      <div>
         <Profile onLogout={handleLogout} />
      </div>
     ):(
     <div>
      <LoginForm onLogin={handleLogin}/> 
     </div>)}
    </div>
  )
}
