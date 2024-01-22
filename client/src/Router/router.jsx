import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Shop from "../Shop/shop";
import About from "../components/About";
import Blog from "../components/Blog";
import Home from "../Home/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/blog',
                element: <Blog/>
            }
        ]
    },
]);

export default router;