import { useEffect } from 'react'
import './Navbar.css'
function Navbar() {
    return (
        <nav className="largeScreenNav" style={{backgroundColor: "#090B0C"}}>
            <div className="navbar m-0">
                <h1 className="text-white">L O G O</h1>
                <button className="toggleBtn text-center p-0" id="toggleBtnId">
                    <i id="bars" className="fa-solid fa-bars m-0 mt-auto" style={{color: "#DB435C", fontSize: "40px"}}></i>
                    <i id="cross" className="fa-solid fa-xmark m-0 mt-auto " style={{color: "#DB435C" ,fontSize: "40px"}}></i>
                </button>
            </div>
            <ul className="navLinks text-white" id="navLinksId">
                <li className="listCss"> <a>Clubs</a> </li>
                <li className="listCss"> <a>About Us</a> </li>
                <li className="listCss"> <button className="pb-2 signBtn">Sign Up</button> </li>
            </ul>
        </nav>
    )
}
export default Navbar