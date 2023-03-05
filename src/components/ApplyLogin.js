import React from 'react'

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
                    <button id="apply" className="btn-lg  "><a href="./account.html">Apply</a></button>
                    <button id="how-it-works" className="btn-lg  "><a>Login</a></button>
                </div>
      </div>
    </div>
  )
}
