import { Outlet } from "react-router-dom";
import Nav from "../../pages/Shared/Nav/Nav";


const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="lg:h-[525px] overflow-y-scroll ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;