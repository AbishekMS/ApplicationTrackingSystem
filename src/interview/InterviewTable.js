import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InterviewController from './InterviewSchedule';
export default function InterviewTable() {
    const [interviews,setInterviews]=useState([]);
    useEffect(()=>{
        fetchData();
    },[]);  
    function getInterviews(){
        fetchData();
    }
    const fetchData=(e)=>{  
        axios.get('http://localhost:8083/getinterviewschedule')
        .then(res=>setInterviews(res.data))
    }
    
   function deleteInterview(id){
    toast.error('Deleted', {
        position: toast.POSITION.TOP_RIGHT
    });
    InterviewController.deleteInterview(id).then((response)=>{
        getInterviews();
    })
   }

  return (
    
    <div className='cont text-center'>
    <h2 className='text-center'>Interview Schedule</h2>
    <table  class="table table-dark">
    <thead>
    <th>Id</th>
    <th>Applicant_Id</th>
    <th>Applicant_Name</th>
    <th>HR_ID</th>
    <th>HR_Name</th>
    <th>Link</th>
    <th>Date</th>
    <th>Actions</th>
    </thead>
    <tbody>
    {Array.isArray(interviews) ? (
        interviews.map((data) => (
          <tr key={data.interviewid} class="table-primary">
          <td class="table-secondary">{data.interviewid}</td>
          <td class="table-secondary">{data.applicant.applicantId}</td>
      <td class="table-secondary">{data.applicant.name}</td>
      <td class="table-secondary">{data.hr.hrId}</td>
      <td class="table-secondary">{data.hr.hrName}</td>
       <td class="table-secondary">{data.link}</td>
       <td class="table-secondary">{data.interviewdate}</td>
       <td>
       <button class='btn btn-danger' onClick={()=>deleteInterview(data.interviewid)}>DELETE</button>
       <ToastContainer />
       </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="6">No interviews available</td>
        </tr>
      )}
      
    </tbody>
    </table>
  </div>
  )
}
