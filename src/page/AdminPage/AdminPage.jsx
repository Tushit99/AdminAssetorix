import { Box, Heading } from '@chakra-ui/react'; // Import Text from Chakra UI
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import style from "./Admin.module.css";
import AdminDetail from './AdminDetail';
import Loader from '../../components/Loader/Loader';

const AdminPage = () => {
  const userdetail = useSelector((state) => state.admindetail);
  const [searchParam, setSearchParams] = useSearchParams();
  const prePage = searchParam.get("page");
  const Inputdetail = searchParam.get("search");
  const [data, setData] = useState([]);
  const [userRole, setUserRole] = useState("");
  const [inp, setInp] = useState(Inputdetail || "");
  const [page, setPage] = useState(prePage || 1);
  const [loading, setLoading] = useState(false); 

  const allAdmin = async () => {
    try {
      // let id = localStorage.getItem("astadid");
      // let token = localStorage.getItem("astadToken");

      let obj = {
        id: userdetail.id,
        authorization: userdetail.token,
        'Content-Type': 'application/json',
      };
      setLoading(true);
      await axios
        .get(`${process.env.REACT_APP_URL}/admin/all`, {
          headers: obj,
        })
        .then((e) => {
          setData(e.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }; 

  const handleBlockChange = async (userId, statement) => {
    try {
      // let id = localStorage.getItem("astadid");
      // let token = localStorage.getItem("astadToken");

      let obj = {
        id: userdetail.id, 
        authorization: userdetail.token, 
        'Content-Type': 'application/json',
      };

      const body = {
        id: userId,
        status: statement
      }

      console.log(statement);
      setLoading(true);
      await axios.post(`${process.env.REACT_APP_URL}/admin/block`, body, { headers: obj }).then((e) => {
        console.log(e);
        // firstCall(); 
        setLoading(false);
      })
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  const handleVerifieChange = async (userId, validstate) => {
    try {
      // let id = localStorage.getItem("astadid");
      // let token = localStorage.getItem("astadToken");

      let obj = {
        id: userdetail.id, 
        authorization: userdetail.token, 
        'Content-Type': 'application/json',
      };

      let body = {
        id: userId,
        status: validstate
      }
      setLoading(true);
      await axios.post(`${process.env.REACT_APP_URL}/admin/verifyUser`, body, { headers: obj }).then((e) => {
        console.log(e);
        // firstCall();
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  console.log(userdetail);

  const handleBlocking = async (myid, status) => {
    try {
      // let id = localStorage.getItem("astadid");
      // let token = localStorage.getItem("astadToken");

      let obj = {
        id: userdetail.id,
        authorization: userdetail.token,
        'Content-Type': 'application/json',
      };

      let body = {
        id: myid,
        status
      }

      setLoading(true);
      await axios.post(`${process.env.REACT_APP_URL}/admin/block`, body, { headers: obj }).then((e) => {
        console.log(e.data);
        setLoading(false);
      })
    } catch (err) {
      console.log(err);
      setLoading(false);
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
          <AdminDetail key={e._id} e={e} handleBlocking={handleBlocking} handleVerifieChange={handleVerifieChange} />
        ))}
      </Box> 
      {/* loading box */} 
      {loading && <Loader />} 
      {userdetail.isLoading && <Loader />} 
      <div style={{ textAlign: "end" }}></div>
    </Box>
  );

};

export default AdminPage;



