import { Avatar, Box, Button, Heading, Select, Text } from '@chakra-ui/react'; // Import Text from Chakra UI
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import style from "./Admin.module.css";
import AdminDetail from './AdminDetail';

const AdminPage = () => {
  const userdetail = useSelector((state) => state.admindetail);
  const [searchParam, setSearchParams] = useSearchParams();
  const prePage = searchParam.get("page");
  const Inputdetail = searchParam.get("search");
  const [data, setData] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [inp, setInp] = useState(Inputdetail || "");
  const [page, setPage] = useState(prePage || 1);  
  const [box1, setBoxone] = useState(false); 

  const allAdmin = async () => {
    try {
      let id = localStorage.getItem("astadid");
      let token = localStorage.getItem("astadToken");

      let obj = {
        id,
        authorization: token,
        'Content-Type': 'application/json',
      };

      await axios
        .get(`${process.env.REACT_APP_URL}/admin/all`, {
          headers: obj,
        })
        .then((e) => {
          setData(e.data.data);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlocking = async (myid, status) => {
    try {
      let id = localStorage.getItem("astadid");
      let token = localStorage.getItem("astadToken");

      let obj = {
        id,
        authorization: token,
        'Content-Type': 'application/json',
      };

      let body = { 
        id:myid,
        status
      }

      console.log(status); 

      
      await axios.post(`${process.env.REACT_APP_URL}/admin/block`, body, { headers: obj }).then((e) => {
        console.log(e.data); 
      })
    } catch (err) { 
      console.log(err)
    }
  }



  useEffect(() => {
    let obj = {};

    inp && (obj.search = inp);
    page && (obj.page = page);

    userRole && (obj.role = userRole);

    setSearchParams(obj);

    allAdmin();
 

  }, [inp, page, userRole, setSearchParams]);

  console.log(data);

  return (
    <Box marginTop={"20px"}>
      <Heading> Admin Detail </Heading>
      <Box className={style.adminone} >
        {data.map((e) => (
          <AdminDetail key={e._id} e={e} handleBlocking={handleBlocking} />
        ))}
      </Box>
    </Box>
  );
};

export default AdminPage;
