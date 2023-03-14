import React from 'react'
import {useState} from 'react'

export default function LoginForm({onLogin}) {
        const [username,setUsername] = useState("")
        const [password,setPassword]= useState("")

        const handleUsername = (event)=>{
            setUsername(event.target.vakue)
        }

        const handlePassword = (event) =>{
            setPassword(event.target.value)
        }

    const styles ={
        margin:{
            marginTop:'20px'
        }
    }
  return (
    <div className='text-center'>
      <form>
        <div style={styles.margin} >
            <label>Username</label>
            <input  onChange={handleUsername}type='text' id='username' value={username}/>
        </div>
        <div style={styles.margin}>
            <label>password</label>
            <input onChange={handlePassword} value={password} type='password' />
        </div>
        <button style={styles.margin} onClick ={onLogin}type='submit'>Login</button>
      </form>
    </div>
  )
}
