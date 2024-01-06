import { Link, NavLink, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useContext } from "react";

export const Account = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1 className="font-bold text-xl mb-2">Account</h1>
      <div className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          id=""
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className="p-3 py-2 w-96 rounded-md  border-2 border-gray-300 bg-slate-50 outline-none focus:border-gray-400 hover:border-gray-400 focus:bg-slate-100"
        />
        <input
          type="email"
          name="email"
          id=""
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="p-3 py-2 w-96 rounded-md  border-2 border-gray-300 bg-slate-50 outline-none focus:border-gray-400 hover:border-gray-400 focus:bg-slate-100"
        />
        <input
          type="number"
          name="number"
          id=""
          value={user.number}
            onChange={(e)=>setUser({...user, number: e.target.value})}
          className="p-3 py-2 w-96 rounded-md  border-2 border-gray-300 bg-slate-50 outline-none focus:border-gray-400 hover:border-gray-400 focus:bg-slate-100"
        />
      </div>
    </>
  );
};
 
const UserProfile = () => {
  return (
    <div className="mx-32 my-10">
      <h1 className="font-bold text-3xl">My Profile</h1>
      <div className="flex my-10 shadow-2xl rounded-lg">
        <div className=" w-1/3 p-8 pr-0 flex flex-col gap-5 bg-sky-200 rounded-l-md">
          <NavLink to="account" className=" p-3 rounded-l-md text-[18px] font-semibold">
            Account
          </NavLink>
          <NavLink to="orders" className="p-3 rounded-l-md text-[18px] font-semibold">
            Orders
          </NavLink>
          <NavLink to="Address" className="p-3 rounded-l-md text-[18px] font-semibold">
            Address
          </NavLink>
          <NavLink to="payments" className="p-3 rounded-l-md text-[18px] font-semibold">
            Payments
          </NavLink>
        </div>
        <div className="px-5 py-2">
          <Outlet/>
          {/* <Account /> */}
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
