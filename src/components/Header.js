import { useState, useContext } from "react";
import { NavLink,Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('login'));
  // const isLoggedIn = localStorage.getItem('login')
  const { user } = useContext(UserContext);
  const cartItem = useSelector((store)=> store.cart.items)
  console.log(cartItem)
  console.log( "login "+isLoggedIn);

  const logoutBtnHandler =()=>{
    localStorage.removeItem('login')
    setIsLoggedIn(false)
    // window.location.reload();

  }

  return (
    <div className="p-7 flex justify-between items-center shadow-lg ">
      {/* <h1 className="font-bold text-2xl">YumByte</h1> */}
      <img className="h-16" src="https://scontent.fstv8-1.fna.fbcdn.net/v/t39.30808-6/299842146_492697136194039_5611518144860645531_n.png?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=-r7LMi0AVScAX_cGBbh&_nc_ht=scontent.fstv8-1.fna&oh=00_AfDEjPfK_K-BrIsncCFHG9VOnfYaxz5c-o6bC8-xhEiiZA&oe=65B62F36" alt="img" />
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

      <div>
        <NavLink to="/profile/account" className="text-sky-700 font-semibold mr-4">Hello, {(isLoggedIn) ? user?.name : 'user'}</NavLink>
        {isLoggedIn ? (
          <button
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
            onClick={() => logoutBtnHandler()}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm"
          >
            <Link to="/login">Login</Link>
            
          </button>
        )}
      </div>
    </div>
  );
};
export default Header;
