import { Link } from "react-router-dom";
function Lists(props) {
    return (
        <ul className={`navLinks text-white${props.addClass?' active':null}`} id="navLinksId">
            <li className="listCss"> <Link>Home</Link> </li>
            <li className="listCss"> <Link>Clubs</Link> </li>
            <li className="listCss"> <Link to="/login" >Login</Link> </li>
            <li className="listCss"> <Link>Sign Up</Link> </li>
            <li className="listCss">
                <span>
                    <Link className="profile">
                        <svg style={{marginBottom:'5px'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                        </svg>
                    </Link>
                </span>
            </li>
            <li className="listCss">
                <span>
                    <Link className="logout">
                    <svg style={{marginBottom:'5px'}} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                    </Link>
                </span>
            </li>
        </ul>
    );
}
export default Lists;