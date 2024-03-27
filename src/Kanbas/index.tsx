import { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router";
import Courses from "./Courses";
// import { courses } from "./Database";
import * as client from './Courses/client'
import store from "./store";
import { Provider } from "react-redux"

function Kanbas() {
  const [_courses, setCourses] = useState<any[]>([]);
  // const COURSES_API = "http://localhost:4000/api/courses";
  const findAllCourses = async () => {
    const response = await client.fetchAllCourses();
    setCourses(response);
  };
  
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = () => {
    setCourses([..._courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  const deleteCourse = (courseId: any) => {
    setCourses(_courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      _courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
    <div className="d-flex">
      <div>
        <KanbasNavigation />
      </div>
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Account" element={<h1>Account</h1>} />
          <Route path="/Courses/:cid/*" element={<Courses courses={_courses} />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;