import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Header />
            <div className="my-20"></div>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;