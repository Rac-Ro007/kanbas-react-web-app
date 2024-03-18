import React, {useState} from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { useNavigate, Link, useParams } from "react-router-dom";
import './index.css'
import { FaFilePen } from "react-icons/fa6";
import { assignments } from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignment } from "./reducer";
import { KanbasState } from "../../store";
import { MdDelete } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';

function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();

  const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments.filter(
      (assignment) => assignment.course === cid));
  
      const assignment = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignment);
  
  const dispatch = useDispatch();
  
  const [deleteModal, setDeleteModal] = useState(false);
  
  var newAssignmentId = 'A10' + (assignmentList.length + 1);
  // const assignmentList = assignments.filter(
  //   (assignment) => assignment.course === cid);
  // console.log(assignmentList)
  
  const newAssignment = () => {
    dispatch(setAssignment([]));
    navigate(`/Kanbas/Courses/${cid}/Assignments/${newAssignmentId}`)
  }
  console.log(assignmentList)

  const handleDelete = () => {
    dispatch(deleteAssignment(assignment._id));
    setDeleteModal(false);
  }

  
  
  return (
    <div className="container">
      {/* {*<!-- Add buttons and other fields here -->} */}
      <div className="d-flex justify-content-between">
        <input className="form-control" style={{width: "20%"}} placeholder="Search for Assignments"/>
        <div className="d-flex">
            <button className="btn btn-light align-items-center me-2" style={{marginRight: "20px"}}>
                {/* <FaPlus/> */}
                Group</button>
            <button className="btn btn-danger" onClick={newAssignment} style={{marginRight: "20px"}}>
                {/* <FaPlus/> */}
                +Assignment</button>
            <select className="form-select">
                <option selected>:</option>
                <option>Edit Assignment Dates</option>
                <option>Assignment Groups Weight</option>
                <option>Gradescope 1.3</option>
                <option>Common Favourites</option>
            </select>
        </div>
      </div>

      <hr />

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <button className="badge rounded-pill bg-light text-dark p-2">40% of Total</button>
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item align-items-between">
                <div className="d-flex">
                  <div style={{ alignSelf: "center" }}>
                    <FaEllipsisV className="me-2" />
                    <FaFilePen className="m-2 text-success" />
                  </div>
                  <div className="text-secondary p-1">
                    <Link
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </Link>
                    <br />
                    <small>
                      {assignment.module} | Due {assignment.Due ? assignment.Due: assignment.dueDate} | {" "}
                      {assignment.points} pts
                    </small>
                  </div>
                  <div className="ms-auto" style={{ alignSelf: "center" }}>
                    <span>
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                    <a style={{cursor:"pointer"}} onClick={() => {dispatch(setAssignment(assignment)); setDeleteModal(true)}}>
                      <MdDelete className="text-danger ms-2" size={20} /></a>
                  </div>
                </div>
                {/* <FaEllipsisV className="me-2" /><FaFilePen className="wd-filepen"/>
                <span className="ms-2">                
                  <Link
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>{assignment.title}</Link><br/>
                  <span className="wd-assignment-details">  <span className="wd-assignment-module">{assignment.module} </span>| <b>Due</b> {assignment.Due} | {assignment.points}</span> 
                 </span>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                  <button className="btn btn-sm btn-danger" onClick={() => dispatch(deleteAssignment(assignment._id))}>Delete</button>
                  </span> */}
              </li>))}
          </ul>
          {/* <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <FaFilePen className="me-2 text-success" />
                <Link
                   to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul> */}
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
                <h5>Are you sure you want to delete the Assignment?</h5>
                <h5 style={{color:"red"}}>{assignment._id} | {assignment.title}</h5>
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
          </Modal>
          )}
        </li>
      </ul>
    </div>
);}
export default Assignments;