import React,{useState} from 'react'

export default function A2() {
  const [data,setData]=useState({
    name:"",
    email:"",
    phno:""
  })
  const[old,setnew]=useState([])

  const {name,email,phno}=data
  const open=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submiting=()=>{
    setnew([...old,{name,email,phno}])
  }
  const [data1,setData1]=useState("")
  const deletes=(index)=>{
    const deleted=old.filter((value,indexs)=>index!==indexs)
    setnew(deleted)
  }
  return (
    <div>
      <label>Name:</label>
      <input type='text' value={name} name="name" onChange={open}/>
      <br/>
      <label>Email:</label>
      <input type='email' value={email} name="email" onChange={open}/>
      <br/>
      <label>Phone number:</label>
      <input type='number' value={phno}  name="phno" onChange={open}/>
      <br/>
      <button onClick={submiting}>Submit</button>
      <input type='text' placeholder='enter the value' value={data1} onChange={(e)=>setData1(e.target.value)}/>
      <br/>
      <table style={{borderCollapse:"collapse"}}>
        <tr>
          <th  style={{border:'1px solid black'}}>Name:</th>
          <th  style={{border:'1px solid black'}}>Email:</th>
          <th  style={{border:'1px solid black'}}>Phno:</th>
        </tr>
          {old.filter(responce=>data1? responce.name.includes(data1):true || responce.email.includes(data1)).map((iteam,index)=>
            {
              return(<tr key={index}>
                <td  style={{border:'1px solid black'}}>{iteam.name}</td>
                <td  style={{border:'1px solid black'}}>{iteam.email}</td>
                <td  style={{border:'1px solid black'}}>{iteam.phno}</td>
                <button onClick={()=>deletes(index)}>Delete</button>
              </tr>)
            }
          )}
      </table>
    </div>
  )
}
