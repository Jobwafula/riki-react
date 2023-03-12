import React from 'react'
import data from './data'
import { useState,useEffect } from 'react'


export default function Dataone() {
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


     const styles ={
        container:{
            // backgroundColor:'whitesmoke',
            padding:'10px',
            marginTop:"0px"
            
        },

        item:{
            display:isMobile?"block":"inline-block",
            width:isMobile?"100%":"50%",
            padding:"10px"
        },
         title:{
            color:"red",
            textTransform:"capitalize"
            
        },
        text:{
            fontSize:"2rem"
        },
        image:{
          width:"100px",
          height:"100px"
        }
     }


    const arrayelement = data.map( (item)=>(
        <div style={styles.item} key={item.id}>
            <img src={item.img} alt=''/>
            <h2 style={styles.title}>{item.title}</h2> 
            <p style={styles.text}>{item.text}</p>
        </div>
    )
                    
    )

    
  return (
    <div style={styles.container}>
      {arrayelement}
    </div>
  )
}
