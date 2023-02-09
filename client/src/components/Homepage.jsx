import React, { useState } from "react";

const Homepage = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const login=()=>{
    
        props.users.filter((el)=>{
            if(el.name===name){
                if(el.pw===password){
                    props.setUser(el)
                    return (
                        props.changeView("posts")
                    )
                }
                else {
                    alert("wrong password")
                    return
                }
            }
        })
    }
    return (
        <div className="login">
           
            
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
                <button type="submit" onClick={()=>login()}className=" button-34">Login</button>
                <button type="signup" onClick={()=>props.changeView("signUp")}className=" button-34">SignUp</button>
            </form>

            <h1 className="welcome">Welcome to Recetty</h1> <br />
            

        </div>
    )
};

export default Homepage;