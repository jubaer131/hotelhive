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
import Updatedate from "../../pages/Updatedate";
import PriveRout from "./PriveRout";

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
                element: <PriveRout><RoomsPage></RoomsPage></PriveRout>,
            },
            {
                path: "/roompagedetail/:id",
                element: <RoomPageDetail></RoomPageDetail>,
                loader: ({ params }) => fetch(`https://hotelhive-server.vercel.app/roompagedetail/${params.id}`)

            },
            {
                path: "/review",
                element: <Review></Review>,
            },
            {
                path: "/my-booking",
                element: <PriveRout> <Mybooking></Mybooking></PriveRout>,
                loader: () => fetch('https://hotelhive-server.vercel.app/our-roomdataall')
            },
            {
                path: "/updatedate",
                element: <Updatedate></Updatedate>,

            },

        ],
    },
]);

export default router