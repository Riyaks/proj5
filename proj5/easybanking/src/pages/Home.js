import React from 'react'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import {  FaFacebook,FaHandshake,FaInstagram,FaSmile,FaTrophy,FaTwitter, FaUser} from 'react-icons/fa'
function Home() {
  const handlesub= () =>{
    alert("Subscription added.")
   }
  return (
    <>
    <body>
      <div class="body1" style={{height:"4600px"}}>
    <section>
    <div class="caro " >
    <p class="mteasy">easy banking</p>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block"
        src="https://www.pimafederal.org/assets/files/OAkL9QFV/Hero-CareFREEplus2022.jpg" 
        alt="First slide" 
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
        alt="Second slide" 
      />
    </Carousel.Item>
  </Carousel>
  </div>
    </section>
    <br></br>
    <div class="container">
    <h1 style={{fontFamily:"robosto",textAlign:"center",color:"blue",fontWeight:"800",fontSize:"50px",marginTop:"100px"}}> About Us</h1>
    <div class="nnn" >
    <img style={{float:"right",marginLeft:"12px"}} src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG9ubGluZSUyMGJhbmtpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" class="img-thumbnail"></img>
        <h1 style={{fontFamily:"times new roman",marginBottom:"20px" }}>We provide the best services</h1>
        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio nisl, interdum ut arcu at, tempus viverra enim. Proin sollicitudin lobortis consectetur. Suspendisse hendrerit mauris in mollis condimentum. Suspendisse eu dictum lorem, ac sagittis massa. Vestibulum posuere, sapien et pellentesque mattis, neque ex ultrices libero, ac accumsan ligula tortor vitae urna.
           Fusce condimentum magna at ante aliquet gravida. Aenean non ultricies tortor. Quisque in pretium elit. Nunc justo augue, porttitor ac aliquet vitae, dignissim et sapien. Mauris id tellus vitae libero pulvinar maximus id in nisl. Nullam tempor vestibulum est.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio nisl, interdum ut arcu at, tempus 
        viverra enim. Proin sollicitudin lobortis consectetur. Suspendisse hendrerit mauris in mollis condimentum. 
        Suspendisse eu dictum lorem, ac sagittis massa. Vestibulum posuere, sapien et pellentesque mattis, neque ex ultrices libero, ac accumsan ligula tortor vitae urna. Fusce condimentum magna at ante aliquet gravida. Aenean non ultricies tortor. Quisque in pretium elit. Nunc justo augue, porttitor ac aliquet vitae, dignissim et sapien. Mauris id tellus vitae libero pulvinar maximus id in nisl. Nullam tempor vestibulum est.
        </p>
        </div>
        <br></br>
        </div>

        <section>
        <h1 style={{fontFamily:"times new roman",color:"darkred",textAlign:"center",fontWeight:"900",fontSize:"50px",marginBottom:'90px',marginTop:"100px"}}>Our Team</h1>
       <div class="row ">
        <div class="vvv col-12 c0l-sm-6 col-md-4 col-lg-3 col-xl-2 ml-5 mr-5" style={{position:"relative"}} >
          <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="vv rounded-circle" ></img>
          <div class="middle">
          <h5 class="cc">alex</h5>
          <span class="xxx" > <FaFacebook/> </span><span class="xx" ><FaTwitter/>  <FaInstagram/></span>
          </div>
          <h6 style={{marginLeft:"90px",marginTop:"20px"}}>C E O</h6>
        </div>
        <div class="vvv col-12 c0l-sm-6 col-md-4 col-lg-3 col-xl-2 ml-5 mr-5">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="vv rounded-circle "></img>
          <div class="middle">
          <h5 class="cc">jack</h5>
         <span class="xxx" > <FaFacebook/> </span><span class="xx" ><FaTwitter/>  <FaInstagram/></span>
          </div>
          <h6 style={{marginLeft:"90px",marginTop:"20px"}}>Manager</h6>
       </div>
       <div class="vvv col-12 c0l-sm-6 col-md-4 col-lg-3 col-xl-2 mr-5 ml-5">
          <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="vv rounded-circle "></img>
          <div class="middle">
          <h5 class="cc">mary</h5>
          <span class="xxx" > <FaFacebook/> </span><span class="xx" ><FaTwitter/>  <FaInstagram/></span>
          </div>
          <h6 style={{marginLeft:"90px",marginTop:"20px"}}>Director</h6>
       </div>
       <div class="vvv col-12 c0l-sm-6 col-md-4 col-lg-3 col-xl-2 ml-5">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="vv rounded-circle "></img>
          <div class="middle">
          <h5 class="cc">dany</h5>
         <span class="xxx" > <FaFacebook/> </span><span class="xx" ><FaTwitter/>  <FaInstagram/></span>
          </div>
          <h6 style={{marginLeft:"90px",marginTop:"20px"}}>Chair man</h6>
       </div>
       </div>
        </section>

        
        <section>
         <div class="jumbotron" style={{marginTop:"100px"}}>
        <h1 style={{fontFamily:"cursive",color:"black",marginBottom:"20px"}}>Our Growth</h1>
   <h5>2011:  </h5>   <span class="progress " style={{borderRadius:"12px"}}>
        <div class="progress-bar bg-danger"  style={{width:"30%",borderBottomRightRadius:"12px",borderTopRightRadius:"12px"}}> </div>
       </span><br></br>
       <h5>2014:  </h5>   <span class="progress " style={{borderRadius:"12px"}}>
        <div class="progress-bar bg-dark"  style={{width:"48%",borderBottomRightRadius:"12px",borderTopRightRadius:"12px"}}> </div>
       </span><br></br>
       <h5>2018:  </h5>   <span class="progress " style={{borderRadius:"12px"}}>
        <div class="progress-bar bg-danger"  style={{width:"68%",borderBottomRightRadius:"12px",borderTopRightRadius:"12px"}}> </div>
       </span><br></br>
       <h5>2022:  </h5>   <span class="progress " style={{borderRadius:"12px"}}>
        <div class="progress-bar bg-dark"  style={{width:"88%",borderBottomRightRadius:"12px",borderTopRightRadius:"12px"}}> </div>
       </span>
       </div>
        </section>

        <section>
          <div class="container">
          <h1 style={{marginTop:"100px",fontFamily:"robosto",textAlign:"center",fontSize:"70px",fontWeight:"600"}}>Services</h1>
          <h1  style={{marginTop:"100px",fontFamily:"cursive",color:"darkblue",marginBottom:"30px"}}>Internet Banking</h1>
          <img class="nnnn"  style={{float:"right",marginLeft:"40px",borderRadius:"14px"}} src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8b25saW5lJTIwYmFua2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></img>
          <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio nisl, interdum ut arcu at, tempus viverra enim. Proin sollicitudin lobortis consectetur. Suspendisse hendrerit mauris in mollis condimentum. Suspendisse eu dictum lorem, ac sagittis massa. Vestibulum posuere, sapien et pellentesque mattis, neque ex ultrices libero, ac accumsan ligula tortor vitae urna.
           Fusce condimentum magna at ante aliquet gravida. Aenean non ultricies tortor. Quisque in pretium elit. Nunc justo augue, porttitor ac aliquet vitae, dignissim et sapien. Mauris id tellus vitae libero pulvinar maximus id in nisl. Nullam tempor vestibulum est.
        Lorem ipsum dolor sit amet, consectetur</p>
        <h1  style={{marginTop:"150px",fontFamily:"cursive",color:"darkblue",marginBottom:"30px",marginLeft:"700px"}}>Mobile Banking</h1>
          <img class="nnnn" style={{float:"left",marginRight:"40px",borderRadius:"14px"}} src="https://images.unsplash.com/photo-1544365712-91cd4904cd07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTUyfHxtb2JpbGUlMjBwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"></img>
          <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio nisl, interdum ut arcu at, tempus viverra enim. Proin sollicitudin lobortis consectetur. Suspendisse hendrerit mauris in mollis condimentum. Suspendisse eu dictum lorem, ac sagittis massa. Vestibulum posuere, sapien et pellentesque mattis, neque ex ultrices libero, ac accumsan ligula tortor vitae urna.
           Fusce condimentum magna at ante aliquet gravida. Aenean non ultricies tortor. Quisque in pretium elit. Nunc justo augue, porttitor ac aliquet vitae, dignissim et sapien. Mauris id tellus vitae libero pulvinar maximus id in nisl. Nullam tempor vestibulum est.
        Lorem ipsum dolor sit amet, consectetur</p>
        </div>
        </section>

<br></br><br></br>
  <section>
        <div class="row " style={{justifyContent:"center",marginTop:"200px"}}>
  <div class=" c0l-sm-6 col-md-4 col-lg-3 col-xl-2 ml-5" >
    <div class="zz card" style={{backgroundColor:"grey"}}>
      <p  class="zzz"><FaUser/></p>
      <h3>11+</h3>
      <p>Partners</p>
    </div>
  </div>

  <div class=" c0l-sm-6 col-md-4 col-lg-3 col-xl-2 ml-5">
    <div class="zz card" style={{backgroundColor:"grey"}}>
      <p  class="zzz"><FaTrophy/></p>
      <h3 >55+</h3>
      <p>Awards</p>
    </div>
  </div>

  <div class=" c0l-sm-6 col-md-4 col-lg-3 col-xl-2 ml-5">
    <div class="zz card" style={{backgroundColor:"grey"}}>
      <p class="zzz"><FaSmile/></p>
      <h3>100+</h3>
      <p>Happy Clients</p>
    </div>
  </div>

  <div class="c0l-sm-6 col-md-4 col-lg-3 col-xl-2 ml-5">
    <div class="zz card" style={{backgroundColor:"grey"}}>
      <p  class="zzz"><FaHandshake/></p>
      <h3>200+</h3>
      <p>Collabaration</p>
    </div>
  </div>
</div>
        </section>

<br></br>
<section>
  <div class="container">
  <form>
 <h2 style={{marginTop:"100px",marginBottom:"50px",color:"darkblue",textAlign:"center"}}>Subscribe to our Newsletter</h2>
 <div class="container jumbotron">
  <input class="ss" type="text" placeholder="Name" name="name" required></input><br></br>
    <input class="ss" type="text" placeholder="Email address" name="mail" required></input><br></br>
    <label>
      <input type="checkbox" checked="checked" name="subscribe" style={{marginTop:"20px",marginBottom:"25px"}}></input> Daily Newsletter<br></br>
     <button type='button' class="btn btn-primary " onClick={handlesub} >Subscribe</button>
 </label>
 </div>
  </form>
  </div>
</section>
</div>
</body>
   </>
  )
}

export default Home