import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Home from "../pages/Home";
import Footer from "../component/Footer";


const Root = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Root;