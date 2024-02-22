import React from "react";
import SideBar from "../components/SideBar";
import Profile from "./Profile";
import "../css/StudentDashboard.css";
import DateRangeCalendarCalendarsProp from "../components/Calendar";
import Courses from "./Courses";

function StudentDashboard() {
  return (
    <div>
      <div className="student-dashboard-main-container flex">
        <div className="ml-7 mt-8">
          <SideBar/>
        </div>
        <div className="dashboard-display-section">
        <div className="ml-7 mt-5">
            <h2 className=" text-xl font-bold">Dashboard</h2>
          </div>
          <Profile />
          {/* <Courses/> */}
        </div>
        <DateRangeCalendarCalendarsProp/>
      </div>
    </div>
  );
}

export default StudentDashboard;
