import React from 'react'

function  Profile(props) {
    console.log(props.user)
  
  return (<div className="containerusers">
    
    <div  className="card">
     <h1>Profile</h1>
    <h2>name: {props.user.name}</h2>
    <h2>password: {props.user.pw}</h2>
    <button type='button' onClick={()=>{
    props.deleteAcc(props.user.iduser)
    props.setUser([])
    props.changeView("homepage")
    }}className=" button-34">delete account</button>
    </div>
  
    
    </div>
  )
}


export default Profile