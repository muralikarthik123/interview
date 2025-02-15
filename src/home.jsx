import React from 'react'
import './home.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa"
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
export default function home() {
  return (
    <div className='p1'>
      {/*header*/}
      <ul className='starts'>
        <li><img src='./logo.png' className='logo' alt=''/></li>
        <li><FaPhoneAlt style={{color:'red'}}/> +91932080762</li>
      </ul>

      {/*main image*/}
      <div>
        <img src='./main.png' alt='' className='mainimg'/>
        <p className='p1'>We are an innovative and dynamic event management company, dedicated to providing
        exceptional events for both Corporate and private clients throughout Hyderabad.</p>
      </div>

      {/*box1*/}
      <div className='box1'>
        {/*left form*/}
        <div className='left'>
          <form className='forms'>
              <h2>Share Your Details</h2>
              <input type='text' placeholder='Name' className='inputs' required/>
              <br/>
              <input type='text' placeholder='Mobile Number' className='inputs' required/>
              <button className='otpbt1'>Send OTP</button>
              <br/>
              <input type='text' placeholder='Enter OTP' className='inputs' required/>
              <br/>
              <br/>
              <p><input type='checkbox'/>Send me Update on Whatsapp</p>
              <br/>
              <button className='submit'>Submit</button>
              <br/>
              <p className='text'>By Submiting This form,you agree to the <span style={{color:'red'}}>privacy policy</span> & <span style={{color:'red'}}>terms and conditions</span></p>
          </form>
        </div>
        {/*right side*/}
        <div className='right'>
          <img src='./group.png' className='group' alt=''/>
        </div>
      </div>

      {/*box2*/}
      <div className='box2'>
        <h1>Explore<span style={{color:'red'}}> Events We Offer</span></h1>
        {/*image container 1*/}
        <div className='imgcontainer'>
          {/*image1*/}
          <div>
            <img src='./img1.png' alt='' className='img1'/>
            <div className='border'>
              {/*down borders*/}
              <h2>Event Design</h2>
            </div>
          </div>
          {/*image2*/}
          <div>
            <img src='./img2.png' alt='' className='img1'/>
            <div className='border'>
              {/*down borders*/}
              <h2>Event Management</h2>
            </div>
          </div>
          {/*image3*/}
          <div>
            <img src='./img3.png' alt='' className='img1'/>
            <div className='border'>
              {/*down borders*/}
              <h2>Catering Solutions</h2>
            </div>
          </div>
        </div>

      {/*box3*/}
      <div className='box3'>
        {/*image container 1*/}
        <div className='imgcontainer'>
          {/*image1*/}
          <div>
            <img src='./img4.png' alt='' className='img1'/>
            <div className='border1'>
              {/*down borders*/}
              <h2>Engagement</h2>
            </div>
          </div>
          {/*image2*/}
          <div>
            <img src='./img5.png' alt='' className='img1'/>
            <div className='border1'>
              {/*down borders*/}
              <h2>Haldi</h2>
            </div>
          </div>
          {/*image3*/}
          <div>
            <img src='./img6.png' alt='' className='img1'/>
            <div className='border1'>
              {/*down borders*/}
              <h2>Mehandi</h2>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/*box4*/}
      <div className='box4'>
        {/*image container 1*/}
        <div className='imgcontainer'>
          {/*image1*/}
          <div>
            <img src='./img10.png' alt='' className='img1'/>
            <div className='border1'>
              {/*down borders*/}
              <h2>Sangeeth</h2>
            </div>
          </div>
          {/*image2*/}
          <div>
            <img src='./img8.png' alt='' className='img1'/>
            <div className='border1'>
              {/*down borders*/}
              <h2>Wedding</h2>
            </div>
          </div>
          {/*image3*/}
          <div>
            <img src='./img9.png' alt='' className='img1'/>
            <div className='border1'>
              {/*down borders*/}
              <h2>Reception</h2>
            </div>
          </div>
        </div>
        </div>
      {/*view more button*/}
      <button className='bt3'>View More</button>

    {/*barrer code Scanner*/}
    <div className='box5'>
      <h2>Effortless Events with Around Me</h2>
      <p>Get the Aroundme chat to start booking your orders!</p>
      <img src='./img7.png' alt='' className='scanner'/>
      <p>Scan to Whatsapp now</p>
      <h2>Event management Services Near You</h2>
      <h1>What <span style={{color:'red'}}>Client Say</span></h1>
    </div>

    {/*our Client */}
    <div className='box6'>
      {/*reviews*/}
      {/*review 1*/}
      <div className='box7'>
        <img src='./h3.png' alt='' className='human'/>
        <p>"Thanks to thoughful planning and attention to details.Every activity was engaging and made
          an impact.The team was great adpation to your need.If you want to take corpate events to the next leve,unified Events to the next level,Unified Events is the best choice.I'm happ to share my Greate experience"
        </p>
      </div>

      {/*review 2*/}
      <div className='box8'>
      <img src='./h1.png' alt='' className='human'/>
        <p>Thanks to thoughful planning and attention to details.Every activity was engaging and made
        an impact.The team was great adpation to your need.If you want to take corpate events to the next leve,unified Events to the next level,Unified Events is the best choice.I'm happ to share my Greate experience"
        </p>
      </div>

      {/*review 3*/}
      <div className='box7'>
      <img src='./h2.png' alt='' className='human'/>
        <p>"Thanks to thoughful planning and attention to details.Every activity was engaging and made
          an impact.The team was great adpation to your need."
        </p>
      </div>
    </div>
    
    {/*footer*/}
    <div className='footer'>
      <ul className='headings'>
        <li><p><FaPhoneAlt style={{color:'red'}}/> +91932080762</p></li>
        <li>Privary Policy</li>
        <li>Terms of use</li>
        <li>Terms and Conditions</li>
        <li><img src='./logo.png' className='footerlogo' alt=''/></li>
      </ul>
      <div className='follow'>
        <p>Follow us on</p>
        <FaLinkedin  className='icons' style={{color:'rightblue'}}/>
        <FaInstagramSquare  className='icons'/>
        <FaSquareTwitter  className='icons'/>
        <FaSquareFacebook  className='icons'/>
        <FaSquareTwitter  className='icons'/>
        <FaYoutube  className='icons'/>
      </div>
    </div>
    </div>
  )
}
