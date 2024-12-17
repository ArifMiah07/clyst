import { Outlet } from "react-router-dom";
import Nav from "../../pages/Shared/Nav/Nav";


const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="p-2">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;