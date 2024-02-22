import React from "react";
import generalImage from "../assets/blue back ground cross.jpeg";
import SideBarItem from './reuseables/SideBarItem'
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaBookReader } from "react-icons/fa";
import { GrResources } from "react-icons/gr";
import { GiBookshelf } from "react-icons/gi";
import "../css/SideBar.css";

function SideBar() {
  return (
    <div className="mr-16">
      <img className="logo" src={generalImage} alt="" />
      <div className="side-options relative flex flex-row">
        <BsGrid1X2Fill />
        <button className="ml-6">Dashboard</button>
        {true && <div className="h-6 w-2 absolute left-44 bg-cyan-700 "></div>}
      </div>

      {/* <SideBarItem icon={<BsGrid1X2Fill />} name={"Dashboard"} condition={true}/> */}
      <SideBarItem icon={<FaBookReader />} name={"Courses"} condition={false}/>
      <SideBarItem icon={<GrResources />} name={"Resources"} condition={false}/>
      <SideBarItem icon={<GiBookshelf />} name={"Assessments"} condition={false}/>   
    </div>
  );
}

export default SideBar;
