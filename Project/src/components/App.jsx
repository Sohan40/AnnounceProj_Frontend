import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./loginRegister/Login";
import Register from "./loginRegister/Register";
import Clubs from "./Clubs";
import Navbar from "./Navbar";
import ClubPage from "./clubPage/ClubPage";
import Footer from "./Footer";
import Profile from "./Profile/Profile";
import { useEffect, useState } from "react";
import axios from "axios";
import PleaseLogin from "./PleaseLogin";
function App() {
 const [log, setlog] = useState(0);
  const [clublog,setClublog]  = useState(0);
  function changeLog() {
    setlog(0);
  }
  function changeLog2() {
    setlog(1);
  }

  function clublogchange()
  {
    setClublog(0);
  }
  function clublogchange2()
  {
    setClublog(1);
  }
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
  });

  return (
    <>
     <Navbar func={changeLog}  func2={clublogchange} />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/login" element={<Login  func={changeLog2} func2={clublogchange2}/>} />
          <Route path="/register" element={<Register />} />
         <Route path="/Clubs" element={log?(<Clubs />):(<PleaseLogin/>)} />
        <Route path="/Profile" element={log?(<Profile />):(<PleaseLogin/>)} />
        <Route path="/ClubPage/:id" element={<ClubPage />} /> 
        
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
