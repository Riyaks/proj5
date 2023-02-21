import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import './Navbar.css'
import { FaSignOutAlt} from 'react-icons/fa'
import { Link } from "react-router-dom";
function Navbar() {
  const navigate= useNavigate();


	const [logout,setlogout] = useState(false)
    const logoutHandler = e =>{
        e.preventDefault();
        localStorage.removeItem("password")
        setlogout(true)
        navigate('/signin');
    }


     return (
    <>
 <html>
        <head>
            <title></title>
            
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
   </head>
   <body>
<nav class="navbar navbar-expand-md fixed-top navbar-dark">
<p class="tyhg">EC</p><span class="twoo">EasyBanking</span>
<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#myNavbar">
   <span class="navbar-toggler-icon" ></span>
</button>
  <div  class="collapse navbar-collapse show " id="myNavbar" style={{justifyContent:"center"}} >
      <ul class="navbar-nav " >
            <li class="nav-item active">
            <Link to='/' class="onn nav-link" >Home</Link>
            </li>
            <li class="nav-item">
            <span class="hs4"><Link  to='/contacts' class='nav-link' >Transactions</Link></span>
            </li>
            <li class="nav-item">
            <span class="hs5"><Link to="/services" class='nav-link' >Customers</Link></span>  
            </li>

           </ul>
    </div>


  <div className='signin' >
  <button class="op9o" ><a class="sinin ml-3" onClick={logoutHandler}><FaSignOutAlt/></a></button></div>
   </nav>
   </body>
     </html>
    </>
  )
}

export default Navbar