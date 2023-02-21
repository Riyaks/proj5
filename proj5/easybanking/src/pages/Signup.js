import React from 'react'
import './Signup.css'
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaUser} from 'react-icons/fa'
function Signup() {
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
    var uenterpassword=document.getElementById('upassword').value;
    var uentername=document.getElementById('uusername').value;
if(uentername==null||uentername=="" ){
  alert("name can't be blank")
}

  else if(uenterpassword.length<6){
    alert("password should contain atleast 6 letters")
  }
  else{
    alert("User registerd successfully")
    navigate('/Signin')
  }

  localStorage.setItem('username',uentername);
  localStorage.setItem('upwd',uenterpassword);

  }
  return (
    <>
    <head>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
    </head>
    <div class="body4" style={{height:"900px"}}>
      <h1 >login</h1>
    <div class="mmk" >
      <form >
        <h1 style={{textAlign:"center",color:"rgb(23, 202, 148)",fontFamily:"times new roman"}}>Register here</h1>
      
       <div class="colone" style={{display:"flex",flexDirection:"row",marginTop:"30px"}}>
        <span  style={{color:"white"}}><FaUser/> User name:
        <input class="colmmm" type="text" placeholder='username'  id="uusername" onChange={handle} ></input></span> 
        <span  style={{color:"white"}}><FaUser/> User Account:
   <input  class="colmmm" type="number" placeholder='Account no'  id="accountnum" onChange={handle} ></input> </span>
      </div>       
      <div class="colone" style={{display:"flex",flexDirection:"row",marginTop:"40px"}}>
      <span style={{color:"white"}}><FaUser/>  password:
        <input  class="colmmm" type="password" placeholder='Password' id="upassword" onChange={handle} ></input></span>
        <span  style={{color:"white"}}><FaUser/> User Phone:
        <input  class="colmmm" type="number" placeholder='Phone no' id="uphone" onChange={handle} style={{marginBottom:"30px"}}></input></span>
        </div> 
         <br></br>
         <span style={{color:"white",marginLeft:"45px"}}>upload your photo:
          <input type="file" className='form-control-file border'  style={{width:"500px",display:"block",marginLeft:"auto",
          marginRight:"auto"}}></input></span>
         
         <button type="button" class=" submit1 " onClick={loginhandler} style={{marginTop:"40px"}}>Register</button>
      
        
        </form>
  </div>
  </div>
    </>
  )
}

export default Signup