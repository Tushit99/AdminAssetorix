import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import style from "../Propertystate.module.css";
import Boxdet from "../Boxdlt/Boxdet";

const Rejected = ({ datachange, setLoader }) => {
  const [property, setProperty] = useState([]);

  const propertydetail = async () => {
    setLoader(true);
    try {
      let id = localStorage.getItem("astadid");
      let token = localStorage.getItem("astadToken");

      let obj = {
        id,
        authorization: token,
        "Content-Type": "application/json",
      };

      await axios
        .get(
          `${process.env.REACT_APP_URL}/admin/verificationStateList?adminState=Rejected`,
          {
            headers: obj,
          }
        )
        .then((e) => {
          setProperty(e.data.data);
          setLoader(false);
        });
    } catch (err) {
      setLoader(false);
    }
  };

  const handleChangeState = async (propertyId, status) => {
    setLoader(true);
    let id = localStorage.getItem("astadid");
    let token = localStorage.getItem("astadToken");

    let obj = {
      id,
      authorization: token,
      "Content-Type": "application/json",
    };
    try {
      let body = {
        id: propertyId,
        status,
      };
      await axios
        .post(`${process.env.REACT_APP_URL}/admin/verificationState`, body, {
          headers: obj,
        })
        .then((e) => {
          console.log(e.data);
          setLoader(false);
        });
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
    propertydetail();
    setLoader(false);
  };

  useEffect(() => {
    propertydetail();
  }, [datachange]);

  return (
    <Box>
      <Box className={style.topsection}>
        {property.map((e) => (
          <Boxdet
            e={e}
            key={e._id}
            handleChangeState={handleChangeState}
            disabled={"Rejected"}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Rejected;
