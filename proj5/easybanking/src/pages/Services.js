import React from 'react'
import Itemcard from './Itemcard'
import Data from './Data'
import { useState } from 'react';
import './services.css'
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Services() {
  const navigate= useNavigate();
  const [logout,setlogout] = useState(false)
	React.useEffect(() =>{
		if(!localStorage.getItem("password")) navigate("/signin");
	  },[logout]); 
 
  const [filter, setFilter] = useState('');

 const searchText = (event) =>{
 setFilter(event.target.value);
 }
let dataSearch =Data.productData.filter(item =>{
return Object.keys(item).some(key =>
 item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
});
 return (
    <>  
     <div class="body2" >
 <div className='container'>
    <h1>ghjkl</h1> 
    
    <div class="mb-3 col-4 mx-auto text-center tabletop" >
		<label class="form-lable h4"></label>
    <span><FaSearch/><input type="text" class="from-control" placeholder='search' value={filter} onChange={searchText.bind(this)}></input></span>
	</div>
    <table class="pp table table-bordereless " style={{marginTop:"50px"}} >
    <tr>
      <th>Id</th>
      <th >Name</th>
      <th>Email</th>
      <th>Accountnum</th>
      <th >Amount</th>
    </tr>
    

  {dataSearch.map((item,index)=>{
    return(
    
<Itemcard id={item.id} name={item.name} email={item.email} accountnum={item.accountnum} 
amount={item.amount} title={item.title} img={item.img} des={item.des}
phone={item.phone} address={item.address} />
    )
  })}
</table>
</div>
</div>
    </>
  )
}

export default Services