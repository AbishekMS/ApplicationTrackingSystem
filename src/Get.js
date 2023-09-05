import axios from 'axios';
import React, { useState ,useEffect} from 'react'

export default function GetData() {

    const[info,setInfo]=useState([])
    useEffect(() => {
        fetchData();
      }, []);
    const fetchData=(e)=>{
        axios.get('http://localhost:8083/gethrinfo')
        .then(res=>setInfo(res.data))
    }
  return (
    <div>data
        {info.map(data=>(<div>
            <h2>{data.hrName} : {data.hrEmail}</h2>

        </div>))}
    </div>
  )
}