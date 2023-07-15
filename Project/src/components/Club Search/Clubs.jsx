import ClubComponent from "./ClubComponent";
import SearchBar from "./SearchBar";
import "./Clubs.css";
import { useState ,useEffect} from "react";
import clubsinfo from "./clubsinfo";

function Clubs()
{
    const clubsInfo=[{name:"CSEA",description:"This is CSEA club."},{name:"Music",description:"This is Music club."}];
    const [clubs,setClubs]=useState(clubsinfo);
    useEffect(()=>{console.log("ok",clubs)},[clubs]);
    function updateClubs(value)
    {
        const startWithClubs=clubsinfo.filter((club)=>club.name.toLowerCase().startsWith(value.toLowerCase()));
        const containClubs=clubsinfo.filter((club)=>(!club.name.toLowerCase().startsWith(value.toLowerCase()))&&(club.name.toLowerCase().includes(value.toLowerCase())));
        setClubs(startWithClubs.concat(containClubs));
    }
    for(let i=0;i<10;i++)
    {
        clubsInfo.push({name:"CSEA",description:"This is CSEA club."});
    }
    function handleSearch(e)
    {
        updateClubs(e.target.value);
    }
    return(
        <>
        <h1>Clubs</h1>
        {/* <SearchBar updateClubs={updateClubs} /> */}
        <input type="text" onChange={handleSearch}/>
        <div className="clubscontainer">
            {
                clubs.map((club,i)=>(
                    <ClubComponent key={i} club={club} id={i}/>
                ))
            }
        </div>
        </>
    );
}

export default Clubs;