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
                <li>How it works</li>
                <li>FAQS</li>
                <li>Company</li>
                <li>Bloq</li>
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
