import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import hrControllerInstance from './HrController';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './HrRegister.css';

import axios from 'axios';
function HRRegister() {
 
    const navigate=useNavigate();
    const [name, setName] = useState('') 
    const [company,setCompany]=useState('')
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('') 
    const [offer,setOffers]=useState('')
    const history=useNavigate()
    const {id}=useParams();
    const notify = (name) => {
        toast(`Welcome ${name}!`, {
          position: "top-right", 
          autoClose: 3000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };
      function gethr(){
        navigate('/hrlist');
      }
    function validateForm() {
        if (email.length === 0) {
            alert('Invalid Form, Email Address can not be empty')
            return
        }
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Please enter a valid email address");
          return ;
        }
        if (password.length < 8) {
            alert('Invalid Password ')
            return
        }   
    }
    const handleSubmit =(e) =>{
      e.preventDefault();
      //const hr={name,company,email,password,offer}
      notify(name);
      hrControllerInstance.fillhrjobid();
      if(id){
        hrControllerInstance.updatehrbyid(id, {
              hrName:name, hrCompany:company,hrEmail:email,hrPassword:password,offers:offer
               }).then((response)=>
            {
              toast.success('Updated successfully', {
                position: toast.POSITION.TOP_RIGHT
            })
              console.log(response.data)
              history('/hrlist');
            }
            ).catch(error =>{
              console.log(error);
            })
      }
      else{
        hrControllerInstance.fillhrjobid();
      try
    {
      
     axios.post("http://localhost:8083/addhrindividually", {
   hrName:name, hrCompany:company,hrEmail:email,hrPassword:password,offers:offer
    }
    );
    
      setName("");
      setCompany("");
      setEmail("");
      setOffers("");
      setPassword("");
      
      
    }
  catch(err)
    {
      alert("HR Registation Failed");
    }
    
      }
}

    return ( 
        <div className='bod'>
        <div class="split left3">
     <nav class="navbar bg-body-tertiary">
     
     </nav> <div class="centered">
     <h2 id='shadow'>Login into your ATS Account.</h2>
     <p>Access your ATS account using your email address to add and verify your mobile number.</p>
     </div>
     </div>

        <div class="split right1">
        <div className='header'>
        <div class="container" id='head'>
          <h2>HR Registation Page</h2> <br></br> 
        <form id='loginForm' class="form-table" onSubmit={handleSubmit}>
        
        <div class="form-group">
            <label for="inputHrname1">Name</label>
            <input type="text" class="form-control" value={name} id="inputHrname" aria-describedby="NameHelp" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)}></input>
            
        </div>
        <div class="form-group">
            <label for="inputCompany" aria-describedby="emailHelp" placeholder="Enter email">Company</label>
            <input type="text" class="form-control" id="inputCompany" aria-describedby="NameHelp" placeholder='Company' onChange={(e) => setCompany(e.target.value)} ></input>
            
        </div>
         
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}></input>
            </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" aria-describedby='pw-help' placeholder="New Password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div class="form-group">
        <label for="exampleFormControlSelect2">Offers</label>
     <select class="form-control" id="exampleFormControlSelect2"
      name="offer"
      onChange={(e)=>setOffers(e.target.value)}>
      <option>Select Offers</option>
     <option value="Front-end  Designer">Front-end  Designer</option>
     <option value="Backend Designer">Backend Designer</option>
     <option value="Auditor">Auditor</option>
     <option value="Marketing officer">Marketing officer</option>
     <option value="Recruitment Coordinator">Recruitment Coordinator</option>
     <option value="Recruitment Specialist">Recruitment Specialist</option>
     <option value="Bank manager">Bank manager</option>
     <option value="Assistant Engineer">Assistant Engineer</option>
     <option value="Assets Manager">Assets Manager</option>
     <option value="Developer">Developer</option>
</select>
</div>
        
        <center>
        <div class="d-grid gap-2" id='but'>
        <button type="submit"  class="btn btn-info" onClick={(e) => {validateForm(e)}}>Submit</button>
      <button type='submit' class="btn btn-info" id='danger' onClick={()=>{gethr()}}>List</button></div>
        </center>
        </form>
        </div>
        </div>
        </div>
        </div>
     );
}

export default HRRegister;
