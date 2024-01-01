import { useState } from "react";
import { Link } from "react-router-dom";

const logedinUser =()=>{
    return true;
}

const Header = () => {
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    return <div className="nav">
        <h1>Header</h1>
        <ul className="navLinks">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </ul>
        {isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>}
    </div>
}
export default Header;