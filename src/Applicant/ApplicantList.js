import React from 'react'
import { Link } from 'react-router-dom'
import ApplicantService from './ApplicantController'
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export default function ApplicantList() {
    const [info,setInfo]=useState([]);
    const getApplicant=()=>{
      fetchData();
    }
   const deleteApplicant=(id)=>{
    toast.error('Deleted !', {
        position: toast.POSITION.TOP_RIGHT
    });
      ApplicantService.deleteApplicantbyId(id).then((response)=>{
        getApplicant();
    })

        
   }
    useEffect(()=>{
        fetchData();
    },[]);  
    const fetchData=(e)=>{  
        axios.get('http://localhost:8083/getinfo')
        .then(res=>setInfo(res.data))
    }
  return (
    <div className='cont text-center'>
    <h2 className='text-center'>Applicant List</h2>
    <table  class="table table-dark">
    <thead>
    <th>Id</th>
    <th>Name</th>
    <th>Qualification</th>
    <th>Cgpa</th>
    <th>Email</th>
    <th>Address</th>
    <th>Contact No.</th>
    <th>Actions</th>
    </thead>
    <tbody>
   {info.map(data=>
      <tr key={data.applicantId} class="table-primary">
      <td class="table-secondary">{data.applicantId}</td>
      <td class="table-secondary">{data.name}</td>
      <td class="table-secondary">{data.qualification}</td>
       <td class="table-secondary">{data.cgpa}</td>
       <td class="table-secondary">{data.ap.email}</td>
       <td class="table-secondary">{data.ap.address}</td>
       <td class="table-secondary">{data.ap.contactNo}</td>
       <td>
       <Link className="btn btn-info" to={`/edit-applicant/${data.applicantId}`}>Update</Link>
       <button class='btn btn-danger' onClick={()=>deleteApplicant(data.applicantId)}>DELETE</button>
       <ToastContainer />
       </td>
      </tr>)}
      
    </tbody>
    </table>
  </div>
  )
}
