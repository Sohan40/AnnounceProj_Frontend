import ClubProfile from "./ClubProfile";
import clubsinfo from "../Club Search/clubsinfo";
import Events from "./Events";
import "./ClubPage.css"
import { useParams } from "react-router-dom";
import clubinfo from "../clubinfo";
import { useEffect, useState } from "react";

function ClubPage()
{   
    const {id}=useParams();
   
   
        let ourDataObject=clubinfo.find(element=>{return element.clubId===id})
        console.log(id);
        console.log(ourDataObject);
    return(
        <div className="clubpage">
            <ClubProfile club={ourDataObject} />
            <Events events={ourDataObject.events?ourDataObject.events:[]} id={id}/>
        </div>
    );
}

export default ClubPage;