
import React, { useState } from 'react';
import { useContext } from 'react';
//import  AuthContextProvider  from '../context/AuthContextProvider.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { useContext } from 'react'
//import { navigate , useNavigate } from 'react-router-dom';

// to check user login data is correct or not
export default function Login () {
    const [username , setUsername] = useState("");
    const [password , sertPassword] = useState("")
    const [ error , setError] = useState(null)
  //  const { Login } = useContext(AuthContext)
   const navigate = useNavigate()
   
    // to check user login data from backend
    const handleLogin=  async ( e) => {
        e.preventDefault()
        try{
        //    const response = await axios ({
        //      method:"POST",
        //      url: `https://airy-short-danthus.glitch.me/login`,
        //      data:{
        //         username, password
        //      }
        const response = await axios.post(`https://airy-short-danthus.glitch.me/login`,{
            username , password
        } )
           
           if(response.data.success){
            console.log( response.data.token , "response")
            navigate('/Quiz')
            const {token} = response.data
            Login(token)
            console.log("working")
           }
        }catch(err) {
          //  setError(err)
            setError(err.response.data.message )
            console.log ( err.response.data.message)

        }
    }
    return(
        <>
        {/* Login Form on Page */}
        <h1>Login</h1>
        <form onSubmit={handleLogin} style={{ display : "flex" , justifyContent:"coloumn", backgroundColor: " blue" , color: " white" , padding: "10px" , margin:"10px"}}>
            <input type="text" placeholder="Enter your Usrname" value={ username} onChange={ (e)=> setUsername(e.target.value)}  />
            <input type="password" placeholder="Enter your password" value={ password} onChange={ (e)=> sertPassword(e.target.value)}  />
            <input style={ {color:"white" , backgroundColor:"blue"}} type="submit"  value="Login" />
        </form>
        { error && <p> {error}</p>}

        </>
    )
}

//export  default Login ;