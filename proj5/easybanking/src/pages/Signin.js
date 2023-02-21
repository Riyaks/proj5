import React from 'react'
import './signin.css'
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

function Signin() {
  const navigate= useNavigate();

const [data, setData] = useState({
    username: "",
    accountnum: "",
    password: "",
    
  });


  const handle = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData); 
  };
 
  const loginhandler = (e) => {

    console.log(JSON.stringify(data))
    e.preventDefault();
    var enterpassword=document.getElementById('password').value;
    var entername=document.getElementById('username').value;
    
var getuentername=localStorage.getItem('username');
var getuenterpassword =localStorage.getItem('upwd');

if(entername == getuentername){
  if(enterpassword == getuenterpassword){
    alert("login successfull")
    localStorage.setItem("password",true);
    navigate('/services')
}
  else{
    alert("wrong password")
  }
}
else{
  alert("invalid details");
}
}
const signupp = (e) => {
  navigate('/Signup')
}
  return (
    <>
    <head>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
    </head>
    <div class="body4" style={{height:"800px"}}>
      <h1 >login</h1>
    <div class="mm" >
      <form >
        <h1 style={{fontFamily:"robosto",textAlign:"center",color:"white"}}>Welcome</h1>
        <h5 style={{marginTop:"10px",textAlign:"center",color:"white"}}>Login here</h5>
        <input class="mmm" type="text" placeholder='username'  id="username" onChange={handle} ></input>
         <input  class="mmm" type="number" placeholder='phone number'  id="accountnum" onChange={handle} ></input>
         <input  class="mmm" type="password" placeholder='Password' id="password" onChange={handle} ></input>
         <br></br>
         <button type="button" class=" submit1 " onClick={loginhandler}>login</button>
        <br></br>
        <div class="hjg">
         <p style={{color:"white"}}>Not a member?</p>
         <span class="signuppp" ><a class="signupp" onClick={signupp}>Signup now</a></span>
        </div>
        </form>
  </div>
  </div>
    </>
  )
}

export default Signin