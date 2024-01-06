import "./Home.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const [log, setlog] = useState(0);

  const [clublog,setClublog]  = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        try{
          const response1 = await axios.get("/api/club/protected");
          setClublog(1)
          console.log(response1)
          return;
        }
        catch(error)
        {
          console.log("club login",error)
        }

        const response = await axios.get("/api/user/protected");
        console.log(response)
        setlog(1)
      } catch (error) {
        setlog(0)
        console.log(error)
      }
    };
    fetchData();
    return () => {
       };
  },[]);

  const navigate = useNavigate();
  const navigateToRegister = () => navigate("/register");
  const navigateToLogin = () => navigate("/login");
  return (
    <div className="home">
      <div class="content">
        <h1 className="homeHead">A place for all announcements...</h1>
        <p
          className="text-white"
          style={{ textAlign: "justify", lineHeight: "1.8" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="signBtnContainer">
          {
            (!log && !clublog)&&
            <button className="signBtn" onClick={navigateToRegister}>
            Sign Up
          </button>}
          { (!log && !clublog)&&
            <button className="signBtn" onClick={navigateToLogin}>
              Sign In
            </button>
          }
        </div>
      </div>
      <div className="image" style={{ padding: "0", margin: "0" }}></div>
    </div>
  );
}

export default Home;
