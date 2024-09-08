import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer"
const MainLayout = () => {
    const location = useLocation()
    const noNavbar = location.pathname.includes('login')
//extra
    return (
        <div className="max-w-screen-xl mx-auto">
            {noNavbar || <Navbar></Navbar>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;