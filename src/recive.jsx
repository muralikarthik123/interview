import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext1 } from './middle.jsx'
export default function Recive() {
  const {data}=useContext(DataContext1)
  const Nav=useNavigate()
  return (
    <div>
      <h1>Table</h1>
      <table>
        <tr>
          <th>Name:</th>
          <th>Password:</th>
        </tr>
        {data.length>0 ?(
          data.map((iteam,index)=>
          <tr key={index}>
            <td>{iteam.name}</td>
            <td>{iteam.password}</td>
          </tr>)
        ):(
          <tr>
            <td>No data</td>
          </tr>
        )}
      </table>
      <button onClick={()=>Nav('/p2')}>Page2</button>
    </div>
  )
}
