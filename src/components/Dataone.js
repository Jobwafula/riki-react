import React from 'react'
import data from './data'

export default function Dataone() {


     const styles ={
        container:{
            // backgroundColor:'whitesmoke',
            padding:'10px',
            marginTop:"0px"
            
        },

        item:{
            display:"inline-block",
            width:"50%",
            padding:"10px"
        },
         title:{
            color:"red",
            textTransform:"capitalize"
            
        },
        text:{
            fontSize:"2rem"
        }
     }


    const arrayelement = data.map( (item)=>(
        <div style={styles.item} key={item.id}>
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
