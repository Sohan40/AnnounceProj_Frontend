import { useEffect } from "react";
import { useState } from "react";
import Logo from "./images/logo.png";
import "./Navbar.css";
import Lists from "./Lists";
import axios from "axios";
function Navbar(props) {
  const [log, setlog] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/user/protected");
       // console.log(response, "innavbar");
        setlog();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    return () => {};
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setShowMenu(false);
    }
    setMinWidth(window.innerWidth <= 768);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  function expand() {
    setShowMenu(!showMenu);
  }
  const [showMenu, setShowMenu] = useState(false);
  const [minWidth, setMinWidth] = useState(window.innerWidth <= 768);
  return (
    <nav className="navbar">
      <div className="logoDiv">
        <img src={Logo} className="logoCss" />
        {minWidth ? (
          <button className="toggleBtn text-center p-0" id="toggleBtnId">
            {!showMenu ? (
              <i
                onClick={expand}
                className="fa-solid fa-bars m-0 mt-auto"
                style={{ color: "#b5836d", fontSize: "40px" }}
              ></i>
            ) : (
              <i
                onClick={expand}
                className="fa-solid fa-xmark m-0 mt-auto "
                style={{ color: "#b5836d", fontSize: "40px" }}
              ></i>
            )}
          </button>
        ) : null}
      </div>
      <Lists addClass={showMenu}  func={props.func} func2= {props.func2}/>
    </nav>
  );
}
export default Navbar;
