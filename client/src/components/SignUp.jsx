import axios from 'axios';
import React, { useState } from 'react'


function SignUp() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

       const handleSubmit = () => {
        
        axios
            .post("/api/user", {
                name: name,
                pw: password,
            })
            .then((response) => {
                if (response.data.success) {
                    window.location.href = "/";
                }
            }).catch((err)=>console.log(err));
    };
  return (
    <div className="signUp">
       
            <h1>Sign Up</h1>
            <form>
                
                <input className="Inputlogin"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
                <input className="Inputlogin"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit" onClick={()=>{
                    handleSubmit()
                    props.changeView("homepage")
                }}className=" button-34">SignUp</button>
            </form>

            <h1 className="welcome">Welcome to Recetty</h1> <br />
            

        </div>
    
  )
}

export default SignUp