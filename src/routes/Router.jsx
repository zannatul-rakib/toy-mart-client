import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRouter from "./PrivateRouter";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: '/toys/:id',
                element: <PrivateRouter><ToyDetails />,</PrivateRouter>,
                loader: ({ params }) => fetch(`https://toy-market-server-drab.vercel.app/toys/${params.id}`)
            },
            {
                path: '/all-toys',
                element: <PrivateRouter><AllToys /></PrivateRouter>,
            },
            {
                path: "/add-toy",
                element: <AddToy/>
            },
            {
                path: '/my-toys',
                element: <MyToys/>
            }
        ]
    },
    {
        path: "*",
        element: <h2>404 not found</h2>
    }
])