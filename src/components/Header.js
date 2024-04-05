import { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import img from "../assets/download.png";
import useOnline from "../utils/hooks/useOnline";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("login"));
  // const isLoggedIn = localStorage.getItem('login')
  const { user } = useContext(UserContext);
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  console.log("login " + isLoggedIn);

  const logoutBtnHandler = () => {
    localStorage.removeItem("login");
    setIsLoggedIn(false);
    // window.location.reload();
  };

  const online = useOnline();

  return (
    <div className="p-7 flex justify-between items-center shadow-lg ">
      {/* <h1 className="font-bold text-2xl">YumByte</h1> */}
      <img className="h-16" src={img} alt="YumBites" />
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
        <NavLink to="/cart" className=" hover:text-blue-600">
          cart: {cartItem.length}
        </NavLink>
      </ul>

      <div className="flex items-center">
        <span
          className={
            "w-2 h-2 mx-2 rounded-full " +
            (online ? "bg-green-500" : "bg-gray-500")
          }
        ></span>
        <div>
          <NavLink
            to="/profile/account"
            className="text-sky-700 font-semibold mr-4"
          >
            Hello, {isLoggedIn ? user?.name : "user"}
          </NavLink>
          {isLoggedIn ? (
            <button
              className="px-5 py-2.5 font-medium bg-blue-100 hover:bg-blue-200 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
              onClick={() => logoutBtnHandler()}
            >
              Logout
            </button>
          ) : (
            <button className="px-5 py-2.5 font-medium bg-blue-100 hover:bg-blue-200 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
