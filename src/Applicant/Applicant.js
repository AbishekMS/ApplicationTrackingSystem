import React, { useState } from 'react'
import './Applicant.css';

import ApplicantService from './ApplicantController';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
export default function ApplicantRegister() {
    const [name, setName] = useState('');
    const [qualification,setQualification]=useState('');
    const [skills, setSkills] = useState('') ;
    const [cgpa, setCgpa] = useState(); 
    const [experience,setExperience]=useState('');  
    const [address,setAddress]=useState('');
    const [contact,setContact]=useState();
    const [email,setEmail]=useState('');
    const [status,setStatus]=useState('');
    const [college,setCollege]=useState('');
    const {Appid}=useParams();
    const history=useNavigate();
    const navigate=useNavigate();
    const getApplicant=()=>{
        navigate('/applicantList');
        ApplicantService.fillApplicantjobid();
    }
    function validateForm() {
        if (email.length === 0) {
            alert('Invalid Form, Email Address can not be empty')
            return
        }
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address");
          return;
        }
       
        if(!qualification) {
            alert('Enter your Qualification')
            return
         }
        if(!name){
            alert('Enter Your Name')
            return
        }
        if(!skills){
            alert('Enter Skills')
            return
        }  
        if(!name){
            alert('Enter Your Name')
            return
        } if(!cgpa){
            alert('Enter Your Cgpa')
            return
        } if(!experience){
            alert('Enter Your Experience')
            return
        } if(!address){
            alert('Enter City')
            return
        } if(!contact){
            alert('Enter Contact number')
            return
        } if(!college){
            alert('Enter Your College name')
            return
        } 
       
      alert('SignUp successful')
    }
    const handleSubmit =(e) =>{
      e.preventDefault();
      if(validateForm){
      
        if(Appid){
            ApplicantService.updateApplicantbyId(Appid, {
                name:name,qualification:qualification,skills:skills,cgpa:cgpa,jobExperience:experience,
                ap:{
                   address:address,contactNo:contact,email:email,status:status,clg:college
                }
               
               }).then((response)=>
                {
                  console.log(response.data)
                  history('/applicantList');
                }
                ).catch(error =>{
                  console.log(error);
                })
          }
          else{
      try
    {
      
     axios.post("http://localhost:8083/addinfoindividually",
    {
     name:name,qualification:qualification,skills:skills,cgpa:cgpa,jobExperience:experience,
     ap:{
        address:address,contactNo:contact,email:email,status:status,clg:college
     }
    
    });
      setName("");
      setQualification("");
      setSkills("");
      setCgpa();
      setExperience("");
      setAddress("");
      setContact();
      setCollege("");
      setEmail("");
      setStatus("");
    }
  catch(err)
    {
      alert("Applicant Registation Failed");
    }
}
    
  }
}

    return ( 
        <>
        <div class="split left1">
     <nav class="navbar bg-body-tertiary">
    
     </nav> <div class="centered">
     <h2 className='head'>Login into your ATS Account.</h2>
     <p>Access your ATS account using your email address to add and verify your mobile number.</p>
     </div>
     </div>
        <div class="split right2">
        <div className='header' >
        <div class="container" id='cont'>
        <h2 className='head'>Applicant Registation Page</h2> <br></br>
        <form class="form-table"  onSubmit={handleSubmit}>
        
        <div class="form-group">
            <label for="inputHrname">Name</label>
            <input type="text" class="form-control" id="inputHrname" aria-describedby="NameHelp" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}></input>
            
        </div>
        <div class="form-group">
       <label for="exampleFormControlSelect2">Qualification</label>
     <select class="form-control" id="exampleFormControlSelect2"
      name="offer"
      onChange={(e)=>setQualification(e.target.value)}>
      <option>Select Oualification</option>
     <option value="BE/B.Tech">BE/B.Tech</option>
     <option value="ME/M.Tech">ME/M.Tech</option>
     <option value="M.sc">M.sc</option>
     <option value="B.sc">B.sc</option>
     <option value="B.com">B.com</option>
     <option value="M.com">M.com</option>
     <option value="BBA">BBA</option>
     <option value="MBA">MBA</option>
</select>
</div>
        <div class="form-group">
            <label for="inputCompany">Skills</label>
            <input type="text" class="form-control" id="inputCompany" aria-describedby="NameHelp" placeholder='Skills' onChange={(e) => setSkills(e.target.value)} ></input>
            
        </div>
        <div class="form-group">
            <label for="inputCompany">Gmail</label>
            <input type="gmail" class="form-control" id="inputCompany" aria-describedby="NameHelp" placeholder='e-mail' onChange={(e) => setEmail(e.target.value)} ></input>
            
        </div>
         
        <div class="form-group">
            <label for="exampleInputEmail1">CGPA</label>
            <input type="floatNumber" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter cgpa" onChange={(e) => setCgpa(e.target.value)}></input>
            </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Work Experience</label>
            <input type="text" class="form-control" id="exampleInputPassword1" aria-describedby='pw-help' placeholder="Work Experience" onChange={(e) => setExperience(e.target.value)}></input>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">City</label>
            <input type="text" class="form-control" id="exampleInputPassword1" aria-describedby='pw-help' placeholder="City" onChange={(e) => setAddress(e.target.value)}></input>
        </div>
        <div class="form-group">
        <label for="exampleInputPassword1">Status</label>
      <select class="form-control" id="exampleFormControlSelect2"
       name="Status" 
       onChange={(e)=>setStatus(e.target.value)}>
       <option>select status</option>
      <option value="UM">UM</option>
      <option value="M">M</option>
 </select>
 </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Contact</label>
            <input type='tel' placeholder="phone number" class="form-control" id="exampleInputPassword1" aria-describedby='pw-help'      onChange={(e) => setContact(e.target.value)}></input>
        </div>
        
        <div class="form-group">
            <label for="exampleInputPassword1">College</label>
            <input type="text" class="form-control" id="exampleInputPassword1" aria-describedby='pw-help' placeholder="college" onChange={(e) => setCollege(e.target.value)}></input>
        </div>
        <center>
        <div class="d-grid gap-2" id='but'>
        <button type="submit" class="btn btn-info" onClick={(e) => {validateForm(e)}}>Submit</button>
        <button type='submit' class="btn btn-info" id='danger' onClick={()=>{getApplicant()}}>List</button></div>

        </center>
        </form>
        </div>
        </div>
        </div>
        </>
     );
}


