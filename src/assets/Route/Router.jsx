import Root from "../../Layout/Root"
import {
    createBrowserRouter
} from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import RoomsPage from "../../pages/RoomsPage";
import RoomPageDetail from "../../pages/RoomPageDetail";
import Review from "../../pages/Review";
import Mybooking from "../../pages/Mybooking";

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
            {
                path: "/rooms-page",
                element: <RoomsPage></RoomsPage>,
            },
            {
                path: "/roompagedetail/:id",
                element: <RoomPageDetail></RoomPageDetail>,
                loader: ({ params }) => fetch(`http://localhost:5000/roompagedetail/${params.id}`)

            },
            {
                path: "/review",
                element: <Review></Review>,
            },
            {
                path: "/my-booking",
                element: <Mybooking></Mybooking>,
            },

        ],
    },
]);

export default router