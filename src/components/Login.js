import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loginUser = () => {
    localStorage.setItem('login', true)
    navigate("/");
  };
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-evenly">
      <div className="w-80">
        <h1 className="font-bold text-3xl">Welcome back</h1>
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
            name="email"
            id=""
            className="p-3 py-2 w-80 rounded-md border-2 border-gray-300 bg-slate-50 outline-none focus:border-gray-400 hover:border-gray-400 focus:bg-slate-100"
            placeholder="Password"
          />
          <a
            href="#"
            className="text-blue-600 font-semibold text-sm hover:text-blue-700"
          >
            Forgot Password?
          </a>
          <button
            className="w-80 bg-blue-600 rounded-md p-2 text-white font-semibold hover:bg-blue-700"
            onClick={() => {
              loginUser()
            }}
          >
            Log in
          </button>
          <p className="text-sm font-medium text-gray-600">
            Don't have an account?
            <Link
              to={"/signup"}
              className="text-blue-600 ml-1 hover:text-blue-700"
            >
              Sign up
            </Link>
          </p>
        </div>

        <div class="inline-flex relative items-center my-6">
          <hr class="w-80 h-px  bg-gray-200 border-0 dark:bg-gray-700" />
          <span class="absolute px-2 text-xs text-gray-500 -translate-x-1/2 bg-white left-1/2 -mt-1">
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
      <div>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/fast-food-4119390-3425151.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
