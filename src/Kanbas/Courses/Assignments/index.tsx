import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import './index.css'
import { FaFilePen } from "react-icons/fa6";
import { assignments } from "../../Database";

function Assignments() {
  const { cid } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === cid);
  console.log(assignmentList)
  
  return (
    <div className="container">
      {/* {*<!-- Add buttons and other fields here -->} */}
      <div className="d-flex justify-content-between">
        <input className="form-control" style={{width: "20%"}} placeholder="Search for Assignments"/>
        <div className="d-flex">
            <button className="btn btn-light align-items-center me-2" style={{marginRight: "20px"}}>
                {/* <FaPlus/> */}
                Group</button>
            <button className="btn btn-danger" style={{marginRight: "20px"}}>
                {/* <FaPlus/> */}
                Assignment</button>
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
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <FaFilePen className="me-2 text-success" />
                <Link
                   to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </div>
);}
export default Assignments;