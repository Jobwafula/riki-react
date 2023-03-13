import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ApplyLogin() {

    const styles = {
        container:{
            display:"flex",
            gap:"50%"
        }
    }
  return (
    <div style={styles.container}>
      <div>
            <ul>
                <li><NavLink>How it Works</NavLink></li>
                <li><NavLink>FAQS</NavLink></li>
                <li><NavLink>Company</NavLink></li>
                <li><NavLink>Blog</NavLink></li>
            </ul>
      </div>
      <div>
                 <div id="button-wrapper">
                    <button id="apply" className="btn-lg  "><NavLink to='/Apply'>Apply</NavLink></button>
                    <button id="how-it-works" className="btn-lg  "><NavLink to='/Login'>Login</NavLink></button>
                </div>
      </div>
    </div>
  )
}
