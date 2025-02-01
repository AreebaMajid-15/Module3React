
import React from "react";
import "../styles/Home.css"
import { Navigate, NavigationType, useNavigate } from "react-router-dom";
import Login  from "./Login";
import { Link} from "react-router-dom"

const Home = () => {
  // Navigate = useNavigate()
    //  const  HandleLogin =() => {
    //     Navigate("/Login")
    //  }

  return(
    <>
    <h1>Welcome to the Quiz App!</h1>
    <div id="Login">
     <div id="LoginPara"> 
         <p> Test your Knowledge and challenge yourself with our quiz.</p>  </div>
     <div id="Loginbutton"> 
        <p> Please </p>
        <Link to="/Login"  style={{ paddingTop: "15px", width: " 80px"}}> Login</Link>
        <p> to get started</p>
     </div>
    </div>
    </>
  )
}
export default Home ;