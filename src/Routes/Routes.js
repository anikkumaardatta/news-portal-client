import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Category from "../Pages/Category/Category/Category";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Signup from "../Pages/Login/Signup/Signup";
import News from "../Pages/News/News/News";
import TAndC from "../Pages/Others/TAndC";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {    
                path: '/',
                loader: () => fetch('https://news-portal-server-five.vercel.app/news'),
                element: <Home></Home>
            },
            {    
                path: '/category/:id',
                loader: ({params}) => fetch(`https://news-portal-server-five.vercel.app/category/${params.id}`),
                element: <Category></Category>
            },
            {
                path: '/news/:id',
                loader: ({params}) => fetch(`https://news-portal-server-five.vercel.app/news/${params.id}`),
                element: <PrivateRoute><News></News></PrivateRoute>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/terms',
                element: <TAndC></TAndC>
            }

        ]
    }
])