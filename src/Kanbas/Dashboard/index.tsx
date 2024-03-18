import React, {useState} from "react";
import { Link } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';
// import {courses} from "../Database";
// import db from "../Database";
// import * as db from "../Database";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void; })
  {
    // Modal config
  const [show, setShow] = useState(false);
  
  const clearCourse = () => setCourse([]);
  
  const handleCreate = () => {
    addNewCourse();
    clearCourse();
  };

  const handleUpdate = () => {
    updateCourse();
    clearCourse();
  };
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <h5>Course</h5>
      <a className="btn btn-outline-primary" onClick={()=> setShow(!show)}
        aria-controls="example-collapse-text"
        aria-expanded={show}>
        Course Operations
      </a>
      <Collapse in={show}>
        <div className="p-4" id="example-collapse-text">
          <div className="d-flex justify-content-around">
            <input value={course.name} className="form-control m-2 w-100"
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control m-2 w-100"
                  onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
          </div>

          <div className="d-flex justify-content-around">
            <input value={course.startDate} className="form-control m-2 w-100" type="date"
                  onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control m-2 w-100" type="date"
                  onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
          </div>

          <div className="row m-2">
            <div className="col-6">
            <button className="btn btn-success w-100" onClick={handleCreate}>
              Add Course
            </button>
            </div>
            <div className="col-6">
            <button className="btn btn-primary w-100" onClick={handleUpdate}>
              Update Course
            </button>
          </div>
         </div>
        </div>
      </Collapse>
      {/* <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button> */}
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div className="col" style={{ width: "300px" }}>
              <div className="card">
                <img
                  src="/images/canvas.jpeg"
                  className="card-img-top"
                  style={{ maxHeight: "150px" }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}
                  </Link>
                  <p className="card-text">Full Stack software developer</p>
                  <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-outline-danger w-100">
                    Open Course
                  </Link>
                  <hr/>
                  <div className="d-flex justify-content-between">
                    <button className="btn w-100 btn-outline-warning m-2" onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                      Edit
                    </button>
                    <button className="btn w-100 btn-outline-danger m-2" onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <pre>
        <code>{JSON.stringify(courses, null, 2)}</code>
      </pre> */}
    </div>
  );
}

export default Dashboard;