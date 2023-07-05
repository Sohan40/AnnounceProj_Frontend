import { Link } from "react-router-dom";
function Lists(props) {
    return (
        <ul className={`navLinks text-white${props.addClass?' active':null}`} id="navLinksId">
            <li className="listCss topElement"> <Link>Clubs</Link> </li>
            <li className="listCss"> <Link>About Us</Link> </li>
            <li className="listCss"> <Link className="signBtn" to="/login" >Login</Link> </li>
            <li className="listCss"> <Link className="signBtn" >Sign Up</Link> </li>
        </ul>
    );
}
export default Lists;