import { Route } from "react-router-dom";
import "./ClubComponent.css"
import ClubPage from "../Club Page/ClubPage"
import { Link } from "react-router-dom";

function ClubComponent({ club, id }) {
    return (
        <Link to={"/club/" + id}>
            <div className="clubcomponent">
                <h2>{club.name}</h2>
                <p>{club.description}</p>
            </div>
        </Link>
    );
}
export default ClubComponent;