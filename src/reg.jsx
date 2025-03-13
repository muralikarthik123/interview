import React from 'react'
import './reg.css'
import {Link} from "react-router-dom"
export default function Login() {
  return (
    <div className='login'>
      <h1>Registration</h1>
      <form>
        <label className='name'>UserName:</label>
        <input type='text' placeholder='username' className='box1' />
        <br/>
        <label className='name'>Password:</label>
        <input type='password' placeholder='password' className='box2' required/>
        <br/>
        <label className='name'>RetryPassword:</label>
        <input type='password' placeholder='Retry password'className='box3'  required/>
        <br/>
        <label className='name'>Email:</label>
        <input type='email' placeholder='Email'className='box4'  required/>
        <br/>
        <label className='name'>PhNo:</label>
        <input type='number' placeholder='Mobile number'className='box4'  required/>
        <br/>
        <Link to='/login'><input type='submit' className='bt1'/></Link>
      </form>
    </div>
  )
}
