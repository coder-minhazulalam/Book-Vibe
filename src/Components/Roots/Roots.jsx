import { Outlet } from "react-router";
import Navbar from "../Outlets/Navbar";

const Roots = () => {
    return (
        <div>
            <Navbar/>
            <div className="flex justify-center gap-3">
            <Outlet/>
            </div>
        </div>
    );
};

export default Roots;