import React,{useState} from 'react'
import axios from 'axios'
export default function Sending() {
    const [data,setData]=useState('')
    const open=(e)=>{
        setData(e.target.value)
    }
    const submiting=  async (e)=>{
        e.preventDefault()
        await axios.post("http://localhost:5000/data",{data})
        console.log("hello")
    }
  return (
    <div>
      <form onSubmit={submiting}>
        <input type='text' value={data} onChange={open}/>
        <input type='submit'/>
      </form>
    </div>
  )
}
