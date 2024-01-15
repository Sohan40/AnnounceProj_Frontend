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
 const [userlog, setUserlog] = useState(()=>{
  let rv
  fetch("/api/user/protected")
  .then((response) => {

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    rv=1;
  })
  .catch((error) => {
    rv=0;
    // Handle error
    console.error(error);
  });
  return rv;
 });
  const [clublog,setClublog]  = useState(()=>{
   return fetch("/api/club/protected")
  .then((response) => {

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return 1;
  })
  .catch((error) => {
    return 0;
    // Handle error
    console.error(error);
  });

  });
  console.log("First",userlog,clublog)
  // useEffect(() => {
  //   console.log("Use Effect first line")
  //   const fetchData = async () => {
  //     try {
  //       try{
  //         const response1 = await axios.get("/api/club/protected");
  //         setClublog(1)
  //         return;
  //       }
  //       catch(error)
  //       {
  //         console.log("club login",error)
  //       }

  //       const response = await axios.get("/api/user/protected");
  //       setUserlog(1)
  //     } catch (error) {
  //       setUserlog(0)
  //       console.log(error)
  //     }
  //   };
  //   fetchData();
  //   return () => {
  //      };
  // },[]);
  console.log("Last")
  return (
    <>
     <Navbar userlog={userlog} clublog={clublog} setUserlog={setUserlog}  setClublog={setClublog} />
      <Routes>
        <Route path="/" element={<Home log={userlog || clublog} />} />
        <Route path="/login" element={<Login  setUserlog={setUserlog}  setClublog={setClublog}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/Clubs" element={userlog?(<Clubs />):(<PleaseLogin/>)} />
        <Route path="/Profile" element={userlog?(<Profile />):(<PleaseLogin/>)} />
        <Route path="/ClubPage/:id" element={<ClubPage />} /> 
        
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
