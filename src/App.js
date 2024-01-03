import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Error from "./components/Error";
import AboutUs from "./components/AboutUs";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import LoadingUI from "./components/LoadingUI";
import Login from "./components/Login";

const Instamart = lazy(()=> import('./components/Instamart'))

const AppLayout = () => {
    return <>
        <Header />
        <Outlet />
        <Footer />
    </>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />, 
        children: [{
                path: "/",
                element: <Body />
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
                element: <Contact />
            },{
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<LoadingUI/>}><Instamart/></Suspense> 
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)