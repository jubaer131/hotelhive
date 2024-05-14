import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Home from "../pages/Home";
import Footer from "../component/Footer";


const Root = () => {
    return (
        <div >
            <div className="container mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[600px] container mx-auto">
                <Outlet></Outlet>
            </div>

            <div>
                <Footer></Footer>
            </div>


        </div>
    );
};

export default Root;