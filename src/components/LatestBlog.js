import React from 'react'
import {useState,useEffect} from 'react'
import blog from './Blogsdata'

export default function LatestBlog() {

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


    const styles = {
        main:{
            backgroundColor:"rgb(4, 45, 68)",
            padding:"20px",
            
        },
        mainofitems:{
            display:isMobile?"block":"flex",
            gap:"10px"
        },
        text:{
            color:"white"
        },
        item:{
            backgroundColor:"white",
            width:isMobile?"100%":"30%",
            margin:isMobile?"10px":"0px",
            padding:"10px"
            
        },
        posts:{
            width:"10%",
            border:"1px solid white",
            margin:"10px"
        }
    }


    

    


    const blogelement = blog.map((item)=>(

        
        <div  style={styles.item}  key={item.id}>
            <img src='' alt=''/>
            <h2 style={{color:"red"}}>Blog</h2>
            <p>{item.text}</p>
            <p>Read more</p>
        </div>
    ));
  return (
    <div style={styles.main}>
        <div>
            <h1 style={styles.text}>Latest Blog Posts</h1>
        </div>
        <div style={styles.mainofitems}>
            {blogelement}
        </div>
        <div style={styles.posts}>
            <p style={styles.text}>View All Blog Posts</p>
        </div>
      
      
    </div>
  )
}
