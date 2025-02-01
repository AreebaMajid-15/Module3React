import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home.jsx'
import Login from './component/Login.jsx'
import { Route , Routes } from 'react-router-dom'
import  Quiz  from './component/Quiz.jsx'
// import Result from './component/Result.jsx'


function App() {
  
  return (
    <div div>
    
     
     <Routes>
     <Route path="/Home" element = {   < Home />}></Route>

     <Route path="/Login" element = {  <Login />}></Route>
     <Route path="/Quiz" element = {  <Quiz />}></Route>
     {/* <Route path="/Result" element = {  <Result />}></Route> */}



     </Routes>
    </div>
  )
}

export default App
