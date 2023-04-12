import React, { createContext, useEffect, useState } from 'react'
import { Data_fetch } from '../Const-Files/fetch-product';

export const myContext=createContext();
const ContextProvider = ({children}) => {
    const[product,setProduct]=useState([])
    useEffect(()=>{
      Data_fetch(setProduct)
    },[])
  return (
   <>
   <myContext.Provider value={{product}}>
    {children}
   </myContext.Provider>
   </>
  )
}

export default ContextProvider