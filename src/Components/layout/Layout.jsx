import { Outlet } from "react-router";
import Sidebar from "../sidebar/SideBar";


export default function AppLayout() {
    return (
        <div style={{padding: "50px 0px 0px 370px"}}>
        
            <Sidebar />
            <Outlet />
        </div>
    )

}