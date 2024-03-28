import React, {useState, useEffect} from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import courses from "../Database/courses.json";
import * as client from './client'
import ModuleList from "./Modules/List";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import CourseNavigation from "./Navigation";
import Home from "./Home";
import "./Home/index.css"
import { HiMiniBars3 } from "react-icons/hi2";
import { FaBars, FaChevronDown, FaGlasses } from "react-icons/fa6";

function Courses({courses} : { courses: any[]; }) {
  const { cid } = useParams();
  // const course = courses.find((course) => course._id === cid);
  const [course, setCourse] = useState({name:"Loading..."})
  const fetchCourse = async (cid?: string) => {
    const course = await client.fetchCourseByID(cid);
    setCourse(course);
  }
  const location = useLocation();
  const { pathname } = location;
  var currentPath = pathname.split(/[\s/]+/).pop();
  
  useEffect(() => {
    fetchCourse(cid)
  }, [cid])
  return (
    <div className="container-fluid">
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
        
        {/* Upper Nav */}
        <div className="d-none d-md-flex flex-row p-2 align-items-center justify-content-between mt-2">
        <div className="mx-4 d-flex align-items-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb wd-breadcrumb">
              <li>
                <HiMiniBars3 className="wd-breadcrumb wd-ham-menu" size={30}/>
                {/* <i className="fa fa-solid fa-bars wd-breadcrumb wd-ham-menu"></i> */}
              </li>
              <li className="breadcrumb-item wd-bc-item">
                <a href="">CS5610.11744.202310</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <a className="wd-bc-item-active">{currentPath}</a>
              </li>
            </ol>
          </nav>
          </div>
          <div className="mr-4">
              <button type="button" className="btn btn-outline-secondary">
                  <FaGlasses /> Student View
              </button>
          </div>
        </div>
        <hr />
        {/* <hr/> */}

      {/* <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "100px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<ModuleList />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div> */}
      <div className="d-flex flex-fill wd-content-fill">
          <div className="d-none d-md-block">
            <p> Courses {course?.name}</p>
            <CourseNavigation />
          </div>
          <div className="flex-grow-1 p-3">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<ModuleList />} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>

      {/* <pre>
        <code>{JSON.stringify(course, null, 2)}</code>
      </pre> */}
    </div>
  );
}

export default Courses;