import React, { useEffect, useState } from 'react'

const Post = (props) => {
  const[view,setView]=useState("")
  const[title,setTitel]=useState("")
  const[description,setDesription]=useState("")
  const[imageUrl,setImageUrl]=useState("")
return ( <div className="post-container">
   <img src= {props.item.imageUrl} /> 
   <br/>
    {props.item.title}
    <br/>
    { props.item.description }
    <button onClick={()=>(props.remove(props.item.idpost))}className=" button-34">Remove</button>
    <button onClick={()=>(setView(!view))}className=" button-34">update</button>
    {view&&(<div>
        <input type="text" onChange={(e)=>(setTitel(e.target.value))}/>
        <input type="text" onChange={(e)=>(setDesription(e.target.value))} />
        <input type="text" onChange={(e)=>(setImageUrl(e.target.value))} />
        
        <button type="button" onClick={()=>{props.updated(props.item.idpost,title,description,imageUrl) , setView(!view)}}className=" button-34"> Click to modify</button>
      </div>)}
     
  </div>)
}

export default Post;