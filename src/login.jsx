import React from 'react'
import './login.css'
import {Link} from "react-router-dom"
export default function login() {
  return (
    <div className='login'>
        <h1>Login Page</h1>
      <form>
        <label className='name'>UserName:</label>
        <input type='text' placeholder='username' className='box1' required/>
        <br/>
        <label className='name'>Password:</label>
        <input type='password' placeholder='password' className='box2' required/>
        <br/>
        <Link to='/home'><input type='submit' className='bt1'/></Link>
      </form>
    </div>
  )
}
