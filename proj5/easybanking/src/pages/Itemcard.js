import Data from "./Data"
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
const Itemcard = (props) =>{
  
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
    return (
 <>

      <tr>
      <td >{props.id}</td>
     <td class="oo" ><a variant="primary" onClick={handleShow}>{props.name} </a></td>
     <td >{props.email}</td>
     <td >{props.accountnum}</td>
      <td>{props.amount}</td>
    </tr> 
    
    <Modal show={show} onClick={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered >
        <Modal.Header closeButton> 
          <Modal.Title style={{color:"red"}}>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img  src={props.img} className="img-thumbnail br-5" style={{float:"left"}} width="300" height="300px"></img>
          <p class="ii" style={{marginLeft:"290px"}}><ul  style={{listStyleType:"none"}}>
          <li style={{marginTop:"15px"}}>Name:  <span style={{color:"red"}}>{props.name}</span> </li>
          <li style={{marginTop:"15px"}}> Account NO:  <span style={{color:"red"}}>{props.accountnum}</span></li>
          <li style={{marginTop:"15px"}}>Phone No:  <span  style={{color:"red"}}>{props.phone}</span></li>
          <li style={{marginTop:"15px"}}>Address:  <span  style={{color:"red"}}>{props.address}</span></li>
        <li style={{marginTop:"15px"}} >Amount:  <span  style={{color:"red"}}>{props.amount}</span></li>
          </ul>
          </p>
        </Modal.Body>
         </Modal>
    
    </>
  )
}

export default Itemcard
  
