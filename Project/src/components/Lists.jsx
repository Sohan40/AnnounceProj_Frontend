import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Lists({addClass,userlog,clublog,setUserlog,setClublog}) {
    const [pathoid,setpathoid] = useState("")
    const fetchClubData = async () => {
        try {
          let clubResponse = await axios.get("/api/club/getMyClub");
          setpathoid(`/clubPage/${clubResponse.data._id}`)
          console.log(pathtoid)
          return;
        } 
      catch (error) {
        console.log(error);
      }
    };
    
    fetchClubData();



    const handleLogoutClick = async () => {
      try {
        if (userlog === 1) {
          let res = await axios.get("/api/user/logout");
          if (res.status === 200) {
            setUserlog(0);
          }
        } else {
          let res = await axios.get("/api/club/logout");
          if (res.status === 200) {
            setClublog(0);
          }
        }
        // Move useNavigate inside the if-else block
      } catch (error) {
        console.log("Logout failed");
      }
    };
  return (
    <ul
      className={`navLinks text-white${addClass ? " active" : null}`}
      id="navLinksId"
    >
      <li className="listCss">
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      {clublog ?
      (<li className="listCss">
        {" "}
        <Link to={pathoid} >ClubPage</Link>{" "}
      </li>):null}
      {!clublog ? (<li className="listCss">
        {" "}
        <Link to="/Clubs">Clubs</Link>{" "}
      </li>):null}
      {!clublog ? (<li className="listCss">
        <span>
          <Link className="profile" to="/Profile">
            <svg
              style={{ marginBottom: "5px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-person-square"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
            </svg>
          </Link>
        </span>
      </li>):null}

      {(userlog || clublog) ? (
        <li className="listCss">
          <span>
            <Link className="logout" onClick={handleLogoutClick}>
              <svg
                style={{ marginBottom: "5px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fillRule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
            </Link>
          </span>
        </li>
      ):null}
    </ul>
  );
}
export default Lists;
