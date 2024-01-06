import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../utils/UserContext";

const logedinUser = () => {
  return true;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="p-7 flex justify-between items-center shadow-lg ">
      <h1>FoodApp</h1>
      <ul className="flex gap-6  font-semibold text-base text-gray-500">
        <NavLink to="/" className="hover:text-blue-600">
          Home
        </NavLink>
        <NavLink to="/about" className=" hover:text-blue-600">
          About
        </NavLink>
        <NavLink to="/contact" className=" hover:text-blue-600">
          Contact
        </NavLink>
        <NavLink to="/instamart" className=" hover:text-blue-600">
          Instamart
        </NavLink>
      </ul>

      <div>
        <NavLink to="/profile/account" className="text-sky-700 font-semibold mr-4">Hello, {user.name}</NavLink>
        {isLoggedIn ? (
          <button
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
