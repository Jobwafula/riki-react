import React from 'react'
import {useState,useEffect} from 'react'
import ethics from './Ethicsdata'

export default function Ethics() {
   //is small screen?
    
   const [isMobile,setIsMobile]= useState(false)
   useEffect(()=>{
       function handleResize(){
           setIsMobile(window.innerWidth<=768);
       }
       handleResize() //initialized state
       window.addEventListener('resize',handleResize)

       return ()=>window.removeEventListener('resize',handleResize)
       
   },[]
       
   )
     //  styles

     const styles = {
        ethics:{
            color:"red"
        },
        par:{
            fontSize:"2rem"
        },
        item:{
            display:isMobile?"block":"inline-block",
            width:isMobile?"100%":"30%",
            height:isMobile?"200px":"100px",
            padding:"20px",
            
        },
        title:{
            color:"red",
            textTransform:"capitalize"

        }


    }

    
    // mapping data array ethics
    const arrayelement = ethics.map((item)=>(
        <div style={styles.item} key={item.id}>
            <h2 style={styles.title}>{item.title}</h2>
            <p style={styles.par}>{item.ethicmsg}</p>
        </div>
    ));




   
  return (
    <div>
      <h1>Crowd Code <span style={styles.ethics}>Of Ethics</span></h1>

      <div>
        {arrayelement}
      </div>
    </div>
  )
}
