import React ,{useState}from "react";

const Upload=(props)=>{
    
  return (
        
        <div className="upload">

        <button onClick={()=>props.handleOpenWidget()}className=" button-34">Upload image!</button>
       {props.images && props.images.map((image,i)=>(
        
        <div key={i} className="image-container">
          <img className='image-preview' src={image.url} />
          
          </div>
       ))} 
      </div>

    )
}


export default Upload