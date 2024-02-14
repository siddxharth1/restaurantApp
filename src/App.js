import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import AboutUs from "./components/AboutUs";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import LoadingUI from "./components/LoadingUI";
import UserContext from "./utils/UserContext";
import UserProfile, { Account } from "./UserProfile";
import { Provider, useDispatch } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Protected from "./components/Protected";
import Breadcrumbs from "./components/Breadcrumbs";

const Instamart = lazy(() => import("./components/Instamart"));
const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/Signup"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Siddharth Sharma",
    email: "sid@gmail.com",
    number: "1234567890",
  });

  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <Header />
          <Breadcrumbs/>
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
        // children: [{
        //     path: "profile",
        //     element: <Profile/>
        // }]
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant",
        element: <Body/>
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<LoadingUI />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Protected Component={ Cart}/> 
      },
      {
        path: "/profile",
        element: <Protected Component={UserProfile} />,
        children: [
          {
            path: "account",
            element: <Account />,
          },
          {
            path: "orders",
            element: <h1>Orders</h1>,
          },
          {
            path: "address",
            element: <h1>Address</h1>,
          },
          {
            path: "payments",
            element: <h1>Payments</h1>,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense>
        <Signup />
      </Suspense>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
