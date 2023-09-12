import { useEffect, useState } from "react";
import "./App.css";
import MainRoute from "./components/MainRoute/MainRoute";
import Navbar from "./components/Navbaar/Navbar";
import TheamPage from "./page/TheamPage/TheamPage";
import { Box } from "@chakra-ui/react";

function App() { 
  // const login = useSelector((state)=>state.manageuser); 
  const [toggle, setToggle] = useState(false);
  const [backgroundcolor, setbackgroundcolor] = useState("light");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    let color = localStorage.getItem("bgcolor");
    if (color === "dark" || color === "light") {
      setbackgroundcolor(color);
    }
  }, []);

  const handlechange = () => {
    const newColor = backgroundcolor === "dark" ? "light" : "dark";
    setbackgroundcolor(newColor);
    localStorage.setItem("bgcolor", newColor);
  };

  return (
    <Box> 
      <div className={`${"App"} ${backgroundcolor}`}>
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
      </div>
    </Box>
  );
}

export default App;
