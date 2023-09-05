import React from 'react'
import './home.css'
import InterviewController from './interview/InterviewSchedule';
import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom'
//mport Slideshow from './slideshow'

export default function Home(){
    const navigate1=useNavigate();
    const navigate2=useNavigate();
    const navigate3=useNavigate();
   function gotoapplicant(){
    navigate1("/applicantregister");
   }
   function getInterview(){
    InterviewController.getInterviews();
     navigate3('/interview');
   }
   function gotohr(){
    navigate2("/hrregister")    
   }
    return(
        <div >
        <div className='card-container'>
        <div className="card" >
  <img src="https://wallpaperaccess.com/full/646261.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">JOB SEEKERS</h5>
    <p class="card-text">Recruitment software will help you find, evaluate, and communicate with recruiters for corresponding role. </p>
  <div style={{display:"flex"}}>  <button class="btn btn-info" onClick={gotoapplicant}>Register</button>
    <button class="btn btn-info" onClick={getInterview}>Interview</button></div>
  </div>
</div>
    <div className="card" >
           <img src="https://wallpaperaccess.com/full/646261.jpg" class="card-img-top" alt="..."/>
           <div class="card-body">
  <h5 class="card-title">RECRUITERS</h5>
  <p class="card-text">Recruitment software will help you find, evaluate, and communicate with candidates for any role. </p>
 <div style={{display:"flex"}}> <button className="btn-info" onClick={gotohr}>Register</button>
  <button class="btn btn-info" onClick={getInterview}>Interview</button></div>
</div>
</div>

        </div>
        </div>
    )
}
