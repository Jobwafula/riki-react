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
        },
        image:{
          width:"100px",
          height:"100px"
        }
     }


    const arrayelement = data.map( (item)=>(
        <div className='col-sm-6' style={styles.item} key={item.id}>
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
