import ClubProfile from "./ClubProfile";
import clubsinfo from "../Club Search/clubsinfo";
import Events from "./Events";
import "./ClubPage.css"
import { useParams } from "react-router-dom";
import clubinfo from "./clubinfo";

function ClubPage()
{
    const {id}=useParams();
    return(
        <div className="clubpage">
            <ClubProfile club={clubinfo[id]} />
            <Events events={clubinfo[id].events?clubinfo[id].events:[]} id={id}/>
        </div>
    );
}

export default ClubPage;