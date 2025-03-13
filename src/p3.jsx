import React,{useState} from 'react'
import axios from 'axios'
export default function P3() {
    const[data,setData]=useState()
    const open=(e)=>{
        e.preventDefault()
        console.log(data)
        axios.post("http://localhost:5000/api/users",{data})
        .then(
            responce=>alert('sucess')
        )
        .catch(
            responces=>alert('false')
        )
    }
  return (
    <div>
      <input type='text' placeholder='enter the value' value={data} onChange={(e)=>setData(e.target.value)}/>
      <button onClick={open}>Add</button>
    </div>
  )
}
