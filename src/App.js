import { useEffect, useState } from "react";
import "./App.css";
import MainRoute from "./components/MainRoute/MainRoute";
import Navbar from "./components/Navbaar/Navbar";
import TheamPage from "./page/TheamPage/TheamPage";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { adminPrelogin } from "./redux/admin/action";
import Loader from "./components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import UserDetailInfo from "./components/UserDetail/UserDetailInfo";

function App() {
  const userdetail = useSelector((state) => state.admindetail);
  const [toggle, setToggle] = useState(false);
  const [backgroundcolor, setbackgroundcolor] = useState("light");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    let color = localStorage.getItem("bgcolor");
    if (color === "dark" || color === "light") {
      setbackgroundcolor(color); 
    }

    let id = localStorage.getItem("astadid");
    let token = localStorage.getItem("astadToken");

    let obj = {
      id,
      authorization: token,
    };

    if (id && token) {
      console.log("skjvnsjn", id, token);
      dispatch(adminPrelogin(obj));
    }

    if (userdetail.token.length > 0) { 
      navigate("/");
    }
    else{  
      navigate("/panel"); 
    } 


  }, []);

  const handlechange = () => {
    const newColor = backgroundcolor === "dark" ? "light" : "dark";
    setbackgroundcolor(newColor);
    localStorage.setItem("bgcolor", newColor);
  };

  return (
    <>
      {userdetail.isLoading ? (
        <Loader />
      ) : (
        <Box>
          {userdetail.name.length>0 && (
            <UserDetailInfo backgroundcolor={backgroundcolor} /> 
          )}
          {userdetail?.token?.length > 0 ? (
            <Box as={"div"} className={`${"App"} ${backgroundcolor}`}>
              <div style={{ flex: `${toggle ? 1 : 4}` }}>
                <Navbar
                  toggle={toggle}
                  backgroundcolor={backgroundcolor}
                  handleToggle={handleToggle}
                />
              </div>
              <div style={{ flex: 20 }}>
                <MainRoute />
                {/* theam button */}
                <TheamPage
                  handlechange={handlechange}
                  backgroundcolor={backgroundcolor}
                />
              </div>
            </Box>
          ) : (
            <MainRoute />
          )}
        </Box>
      )}
    </>
  );
}

export default App;
