import React from 'react'
import { useState } from 'react'
import Info from '../data/Info'
function BasicInfo(id) {
    // eslint-disable-next-line
    const [info, setInfo]= useState(Info)


  return (
    <div >
    {info.map(x=>
        <>
        <h1 key={x.id}>{x.name}</h1>
        <p>{x.number}</p>
        <p>{x.dateOfBirth}</p>
       
        </>)}
    
    </div>
  )
}

export default BasicInfo

