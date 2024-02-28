import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-evenly">
      <div>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/fast-food-4119390-3425151.png"
          alt=""
        />
      </div>
      <div className="w-80">
        <h1 className="font-bold text-3xl">Sign up</h1>
        <div className="flex flex-col gap-4 mt-6 w-full">
          <input
            type="email"
            name="email"
            id=""
            className="p-3 py-2 w-80 rounded-md  border-2 border-gray-300 bg-slate-50 outline-none focus:border-gray-400 hover:border-gray-400 focus:bg-slate-100"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            id=""
            className="p-3 py-2 w-80 rounded-md border-2 border-gray-300 bg-slate-50 outline-none focus:border-gray-400 hover:border-gray-400 focus:bg-slate-100"
            placeholder="Password"
          />
          <input
            type="password"
            name="password-comfirm"
            id=""
            className="p-3 py-2 w-80 rounded-md border-2 border-gray-300 bg-slate-50 outline-none focus:border-gray-400 hover:border-gray-400 focus:bg-slate-100"
            placeholder="Confirm Password"
          />

          <button className="w-80 bg-blue-600 rounded-md p-2 text-white font-semibold hover:bg-blue-700">
            Sign up
          </button>
          <p className="text-sm font-medium text-gray-600">
            Already have an account?
            <Link
              to={"/login"}
              className="text-blue-600 ml-1 hover:text-blue-700"
            >
              Login
            </Link>
          </p>
        </div>

        <div className="inline-flex relative items-center my-6">
          <hr className="w-80 h-px  bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute px-2 text-xs text-gray-500 -translate-x-1/2 bg-white left-1/2 -mt-1">
            or login using
          </span>
        </div>

        <div className="flex justify-between">
          <button className="p-3 pt-2 flex justify-center align-middle gap-3 w-36 rounded-md border-2 border-gray-300 bg-slate-50 outline-none hover:border-gray-400 hover:bg-slate-100">
            <img
              className="h-5 pt-1"
              src="https://static-00.iconduck.com/assets.00/google-icon-512x512-tqc9el3r.png"
              alt="google"
            />
            Google
          </button>
          <button className="p-3 pt-2 flex justify-center align-middle gap-3 w-36 rounded-md  border-2 border-gray-300 bg-slate-50 outline-none hover:border-gray-400 hover:bg-slate-100">
            <img
              className="h-5 pt-1"
              src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
              alt="google"
            />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
