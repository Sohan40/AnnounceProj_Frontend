import ClubProfile from "./ClubProfile";
import clubsinfo from "../Club Search/clubsinfo";
import Events from "./Events";
import "./ClubPage.css"
import { useParams } from "react-router-dom";
import clubinfo from "../clubinfo";
import { useEffect, useState } from "react";
import axios from "axios";
function ClubPage()
{   
    console.log('hi')
    const {id}=useParams();
    const [value,setValue] = useState("no");
    const [ourDataObject,setourDataObject] = useState({});
    useEffect(()=>{
        const fetchData = async () => {
            try {
              try{

                let res2 = await axios.get("/api/club/getMyClub");
                setValue("yes")
                setourDataObject(res2.data)
                return
              }catch(error)
              {
                console.log(error)
              }

              const response = await axios.get(`/api/user/getEachClub?clubId=${id}`);
              setourDataObject(response.data);
            } catch (error) {

              console.log(error)
            }
          };
          fetchData();

          return () => {
             };
    },[])
    console.log(ourDataObject)
    return(
        <div className="clubpage">
             <ClubProfile club={ourDataObject} />
             <Events events={ourDataObject.posts ? ourDataObject.posts : []} id={id} admin={value}/>  
        </div>
    );
}

export default ClubPage;