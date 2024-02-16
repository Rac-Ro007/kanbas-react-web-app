import React from "react";
import { useParams, Routes, Route, Navigate } from "react-router-dom";
import courses from "../Database/courses.json";
import ModuleList from "./Modules/List";
import CourseNavigation from "./Navigation";
import Home from "./Home";
import "./Home/index.css"
import { FaBars, FaChevronDown } from "react-icons/fa6";

function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  return (
    <>
        <div
          className="d-flex d-md-none flex-row p-4 justify-content-between"
          style={{backgroundColor: "black"}}
        >
          <button className="wd-top-nav-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <FaBars style={{color: "white"}}/>
          </button>
          <div>
            <ul className="wd-top-nav-content">
              <li><a href="#">CS5610.11744.202310</a></li>
              <li><a href="#">Modules</a></li>
            </ul>
          </div>
          <button className="wd-top-nav-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
            <FaChevronDown style={{color: "white"}}/>
            {/* <i className="fa fa-chevron-down" style={{color: "while"}}></i> */}
          </button>
        </div>
        <div className="d-none d-md-flex flex-row p-2 align-items-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb wd-breadcrumb">
              <li>
                <FaBars className="wd-breadcrumb wd-ham-menu"/>
                {/* <i className="fa fa-solid fa-bars wd-breadcrumb wd-ham-menu"></i> */}
              </li>
              <li className="breadcrumb-item wd-bc-item">
                <a href="#">CS5610.11744.202310</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a className="wd-bc-item-active" href="#">Modules</a>
              </li>
            </ol>
          </nav>
          <hr />
        </div>
      <h2>Courses {course?.name}</h2>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "100px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<ModuleList />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

      <pre>
        <code>{JSON.stringify(course, null, 2)}</code>
      </pre>
    </>
  );
}

export default Courses;