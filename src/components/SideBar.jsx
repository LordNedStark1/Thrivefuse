import React from "react";
import generalImage from "../assets/blue back ground cross.jpeg";
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

      <div className="side-options flex flex-row">
        <FaBookReader />
        <button className="ml-6">Courses</button>
        {false && <div className="h-6 w-2 ml-8 bg-cyan-700 ">I</div>}
      </div>

      <div className="side-options flex flex-row">
        <GrResources />
        <button className="ml-5 hover:bg-cyan-100 pr-3 pl-3 focus:bg-cyan-100">
          Resources
        </button>
        {false && <div className="h-6 w-2 ml-8 bg-cyan-700 ">I</div>}
      </div>
      <div className="side-options flex flex-row">
        <GiBookshelf />
        <button className="ml-5 hover:bg-cyan-100 pr-3 pl-3 focus:bg-cyan-100">
          Assessments
        </button>
        {false && <div className="h-6 w-2 ml-8 bg-cyan-700 ">I</div>}
      </div>
    </div>
  );
}

export default SideBar;