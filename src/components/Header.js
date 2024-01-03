import { useState } from "react";
import { Link } from "react-router-dom";

const logedinUser =()=>{
    return true;
}

const Header = () => {
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    return <div className="p-7 flex justify-between items-center shadow-lg ">
        <h1>FoodApp</h1>
        <ul className="flex gap-6 text-blue-400 font-semibold text-base">
            <Link to="/" className="hover:text-blue-700">Home</Link>
            <Link to="/about" className=" hover:text-blue-700">About</Link>
            <Link to="/contact" className=" hover:text-blue-700">Contact</Link>
            <Link to="/instamart" className=" hover:text-blue-700">Instamart</Link>
        </ul>
        {isLoggedIn ? <button className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"onClick={()=>setIsLoggedIn(false)}>Logout</button> :
         <button className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm" onClick={()=>setIsLoggedIn(true)}>Login</button>}
    </div>
}
export default Header;