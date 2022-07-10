import React , { useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

const Auth = () => {
    const navigate = useNavigate(true);
    const [user1,setuser1] = useState();
    const [username,setusername] = useState();
    const [password,setpassword] = useState();
    const Validation = () => {
        axios.get("http://localhost:3001/validation")
        .then((respons)=>{
            setuser1(respons.data)
        })
        var username1 = user1.map(e=>{return e.data.username}).join() 
        var password1 = user1.map(e=>{return e.data.password}).join()
        if((username !== username1) || (password !== password1)){
            return alert("usernamne or password has problem")
        }
        else{
            Cookies.set("user", "1");
            navigate("/")
        }
    }
    const handleSubmit=(e)=> {
        e.preventDefault();
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                <legend>login validation</legend>
                <label htmlFor="username">username : </label>
                <input 
                value={username}
                onChange={e=>setusername(e.target.value)}
                required
                type="text"
                placeholder="please enter your username"
                size={30}
                id="username"/><br/><br/>
                <label htmlFor="password">password : </label>
                <input 
                value={password}
                onChange={e=>setpassword(e.target.value)}
                required
                type="password"
                placeholder="please enter your password"
                size={30}
                id="password"/><br/><br/>
                <input
                type="submit"
                value="submit"
                onClick={Validation}/>
                </fieldset>
            </form>
        </div>
    )
}

export default Auth;