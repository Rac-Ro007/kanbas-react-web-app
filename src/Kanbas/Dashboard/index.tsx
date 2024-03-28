import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Collapse from 'react-bootstrap/Collapse';
import Modal from 'react-bootstrap/Modal';
import * as client from "../Courses/client";
// import {courses} from "../Database";
// import db from "../Database";
// import * as db from "../Database";

function Dashboard() {
    // Modal config
  const [show, setShow] = useState(false);

  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({} as any);

  const fetchAllCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };

  const clearCourse = () => setCourse([]);

  const createCourse = async () => {
    const newCourses = await client.createCourse(course);
    // fetchAllCourses();
    setCourses(newCourses);
    clearCourse();
    setShow(false);
  };

  const updateCourse = async (id: string) => {
    const courses = await client.updateCourse(id, course);
    // fetchAllCourses();
    setCourses(courses);
    clearCourse();
    setShow(false);
  };

  const deleteCourse = async (id: string) => {
    const courses = await client.deleteCourse(id);
    setCourses(courses);
    // fetchAllCourses();
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);
  
  // const handleCreate = () => {
  //   addNewCourse();
  //   clearCourse();
  //   setShow(false);
  // };

  // const handleUpdate = () => {
  //   updateCourse();
  //   clearCourse();
  //   setShow(false);
  // };

  const handleDelete = () => {
    deleteCourse(course._id);
    setDeleteModal(false);
  }

  const [deleteModal, setDeleteModal] = useState(false);
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
            <button className="btn btn-success w-100" onClick={createCourse}>
              Add Course
            </button>
            </div>
            <div className="col-6">
            <button className="btn btn-primary w-100" onClick={() => {updateCourse(course._id)}}>
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
          {courses.map((course:any) => (
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
                    to={`/Kanbas/Courses/${course?._id}`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course?.name}
                  </Link>
                  <p className="card-text">Full Stack software developer</p>
                  <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-outline-danger w-100">
                    Open Course
                  </Link>
                  <hr/>
                  <div className="d-flex justify-content-between">
                    <button className="btn w-100 btn-outline-warning m-2" onClick={(event) => {
                        event.preventDefault();
                        setShow(true);
                        setCourse(course);
                      }}>
                      Edit
                    </button>
                    <button className="btn w-100 btn-outline-danger m-2" onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                        setDeleteModal(true);
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
      {/* Delete Modal */}
      {deleteModal && (
          <Modal 
          show={deleteModal}
          backdrop="static"
          onHide={()=> {setDeleteModal(false);}}
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title>Delete Module?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container align-items-center">
              <h5>Are you sure you want to delete the Module?</h5>
              <h5 style={{color:"red"}}>{course._id} | {course.name}</h5>
              <hr/>
              <div className="d-flex justify-content-around m-2">
                <button className="btn btn-secondary m-2 w-100" onClick={() => setDeleteModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-outline-danger m-2 w-100" onClick={handleDelete}>
                  Delete 
                </button>
              </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <div className="d-flex justify-content-around">
              <button className="btn btn-secondary w-100" onClick={() => setDeleteModal(false)}>
                Cancel
              </button>
              <button className="btn btn-danger w-100" onClick={handleDelete}>
                Delete 
              </button>
            </div>
          </Modal.Footer> */}
        </Modal>
      )}
      {/* <pre>
        <code>{JSON.stringify(courses, null, 2)}</code>
      </pre> */}
    </div>
  );
}

export default Dashboard;