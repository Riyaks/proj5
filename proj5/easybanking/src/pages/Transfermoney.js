import React from 'react'
import Data from './Data'
import { useState ,useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';
function Transfermoney() {
 const navigate = useNavigate()
 const [logout,setlogout] = useState(false)
 React.useEffect(() =>{
   if(!localStorage.getItem("password")) navigate("/signin");
   },[logout]); 
const handleSubmit = (e) => {
  
  console.log(JSON.stringify(Data));
  e.preventDefault();
  localStorage.setItem("Data",JSON.stringify(Data));
  localStorage.getItem("Data");
 var Transfrom=document.getElementById('amnt').value;
   var Amount=document.getElementById('amount').value;
 localStorage.setItem("amnt",Transfrom);
 localStorage.setItem("amount",Amount);
 var Balamnt= (Transfrom - Amount);
if(Balamnt<Amount)
 {
 alert("no amount")

  }
  else{
    localStorage.setItem("amnt1",Balamnt);
    alert("Transfer successful.Your balance amount is "+" " +Balamnt);
    }
  }
  const  backtocust= (e) => {
navigate('/Services')
}

return (
    <>
 <div class="body3" >
 <div className='container'>
    <h1>ghjkl</h1> 
    <form name='form1'>
    <div class="main" >
        <div class="form-group">
          
            <label for="amnt" style={{fontSize:"20px",color:"white",fontFamily:"times new roman",marginTop:"30px"}}>Transfer from :</label>
            <select class="form-control" id="amnt"> 
            
        {Data.productData.map((item,index)=>{
    return(
        <option key={item.id} value={item.amount}>
      {item.name}
      </option>
      
)
        })}

         </select>
         </div>
         <div class="form-group">
            <label for="amnt" style={{fontSize:"20px",color:"white",fontFamily:"times new roman"}}>Transfer to :</label>
            <select class="form-control" id="amnt" > 
        {Data.productData.map((item,index)=>{
    return(
        <option key={item.id}>
      {item.name}
     </option>
    
    )
        })}
         </select>
         </div>
         <div class="form-group">
            <label for="amount" style={{fontSize:"20px",color:"white",fontFamily:"times new roman",fontWeight:"700"}}>Amount :</label><br></br>

            <input type="number"  style={{width:"100%"}} id="amount">
             
            </input>
             
            </div>
            <div class="form-group2 mt-5">
              <button type='button' class="btn bg-dark mr-4" onClick={handleSubmit} style={{color:"white"}}>Transfer Amount</button>
              <button type='button' class="btn bg-dark" onClick={backtocust}  style={{color:"white"}}>Go to customer list</button>
            </div>
    </div>
    </form>
    </div>
  </div>
    </>
  )
}

export default Transfermoney