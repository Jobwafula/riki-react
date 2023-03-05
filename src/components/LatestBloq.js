import React from 'react'
import bloq from './Bloqsdata'

export default function LatestBloq() {

    const styles = {
        main:{
            backgroundColor:"rgb(4, 45, 68)",
            padding:"20px"
        },
        mainofitems:{
            display:"flex",
            gap:"10px"
        },
        text:{
            color:"white"
        },
        item:{
            backgroundColor:"white",
            width:"30%",
            padding:"10px"
            
        },
        posts:{
            width:"10%",
            border:"1px solid white",
            margin:"10px"
        }
    }


    const bloqelement = bloq.map((item)=>(
        <div style={styles.item} key={item.id}>
            <img src='' alt=''/>
            <h2 style={{color:"red"}}>Bloq</h2>
            <p>{item.text}</p>
            <p>Read more</p>
        </div>
    ));
  return (
    <div style={styles.main}>
        <div>
            <h1 style={styles.text}>Latest Bloq Posts</h1>
        </div>
        <div style={styles.mainofitems}>
            {bloqelement}
        </div>
        <div style={styles.posts}>
            <p style={styles.text}>View All Bloq Posts</p>
        </div>
      
      
    </div>
  )
}
