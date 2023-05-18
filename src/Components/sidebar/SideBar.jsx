import React from "react";
import { NavLink } from "react-router-dom"
import sideBarData from "./SideBarData";
import "./sideBarStyles.css"

export default function Sidebar() {
    return (

        <aside className="nav-menu">
            {
                sideBarData.map((item) => (
                    <NavLink className="sidebar" to={item.path} key={item.id}>
                        <div className="nav-info">{item.nameDisplay}</div>
                    </NavLink>
                ))
            }
        </aside>

    )
}