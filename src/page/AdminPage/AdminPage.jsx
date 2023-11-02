import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const AdminPage = () => {  
  const userdetail = useSelector((state)=>state.admindetail);  
  const [serchParam, setSerchParams] = useSearchParams(); 
  const prePage = serchParam.get("page");  
  const Inputdetail = serchParam.get("search");  
  const [data, setData] = useState([]);
  const [userRole, setUserRole] = useState(""); 
  const [inp, setInp] = useState(Inputdetail || ""); 
  const [page, setPage] = useState(prePage || 1);  

  const allAdmin = async()=>{
    await axios.get(`${process.env.REACT_APP_URL}/admin/all?role=${userRole}`).then((e)=>{
      console.log(e.data);  
    }).catch((err)=>console.log(err)); 
  }
   
  useEffect(()=>{ 

    setUserRole(userdetail.role); 
    let obj ={}; 

    inp && (obj.search=inp); 
    page && (obj.page=page); 

    userdetail.role && (obj.role=userdetail.role); 

    console.log(obj); 
    
    setSerchParams(obj); 

    allAdmin(); 
  },[inp, page]);  

  console.log(userdetail);  

  return (
    <div>
      
    </div>
  )
}

export default AdminPage; 

