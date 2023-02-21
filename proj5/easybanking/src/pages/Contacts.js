import React from 'react'
import Transfermoney from './Transfermoney'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Contacts() {
  const navigate = useNavigate()

   return (
    <>
     <Transfermoney/>
    </>
  )
}

export default Contacts