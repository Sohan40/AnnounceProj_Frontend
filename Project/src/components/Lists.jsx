import { Link } from "react-router-dom";
function Lists() {
    return (
        <ul className="navLinks text-white" id="navLinksId">
            <li className="listCss"> <Link>Clubs</Link> </li>
            <li className="listCss"> <Link>About Us</Link> </li>
            <li className="listCss"> <Link className="pb-2 signBtn" to="/login" >Login</Link> </li>
            <li className="listCss"> <Link className="pb-2 signBtn" >Sign Up</Link> </li>
        </ul>
    );
}
export default Lists;