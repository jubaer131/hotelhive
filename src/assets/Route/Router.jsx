import Root from "../../Layout/Root"
import {
    createBrowserRouter
} from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/registation",
                element: <Registration></Registration>,
            },
        ],
    },
]);

export default router