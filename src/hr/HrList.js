import React, { useEffect, useState } from 'react';
import axios from 'axios';
import hrControllerInstance from './HrController';
import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
import './HrList.css';
export default function HrList() {
    const [info,setInfo]=useState([]);
    const getAllhr=()=>{
      fetchData();
    }
   const deletehr=(id)=>{
        hrControllerInstance.deletehrbyid(id).then((response)=>{
            getAllhr();
        })

        
   }
    useEffect(()=>{
        fetchData();
    },[]);  
    const fetchData=(e)=>{  
        axios.get('http://localhost:8083/gethrinfo')
        .then(res=>setInfo(res.data))
    }
  return (  
    <div className='cont text-center'>
      <h2 className='text-center'>HR List</h2>
      <table  class="table table-dark">
      <thead>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Company</th>
      <th>Offers</th>
      <th>Actions</th>
      </thead>
      <tbody>
     {info.map(data=>
        <tr key={data.hrId} class="table-primary">
        <td class="table-secondary">{data.hrId}</td>
        <td class="table-secondary">{data.hrName}</td>
        <td class="table-secondary">{data.hrEmail}</td>
        <td class="table-secondary">{data.hrCompany}</td>
         <td class="table-secondary">{data.offers}</td>
         <td>
         <Link className="btn btn-info" to={`/edit-hr/${data.hrId}`}>Update</Link>
         <button class='btn btn-danger' onClick={()=>deletehr(data.hrId)}>DELETE</button>
         </td>
        </tr>)}
        
      </tbody>
      </table>
    </div>
  )
}
