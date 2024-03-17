import React, { useState } from "react";
import "./index.css";
// import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";
import Modal from 'react-bootstrap/Modal';

function ModuleList() {
  const { cid } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  // const modulesList = modules.filter((module) => module.course === cid);
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  // Modal config
  const [show, setShow] = useState(false);
  console.log("Show", show);
  const handleClose = () => {setShow(false); window.location.reload();};
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <div className="row justify-content-end p-3">
          <div className="col-auto">
              <button className="btn btn-light">Collapse All</button>
          </div>
          <div className="col-auto">
              <button className="btn btn-light">View Progress</button>
          </div>
          <div className="col-auto">
              <select className="form-select" aria-label="Default select example">
                  <option>Publish All</option>
                  <option>Unpublish All</option>
              </select>
          </div>
          <div className="col-auto">
              <button className="btn btn-danger" onClick={handleShow}>+ Modules</button>
          </div>
      </div>
      <hr/>
      
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <button onClick={() => dispatch(addModule({ ...module, course: cid }))}>
            Add
          </button>
          <button onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          <input value={module.name}
            onChange={(e) => dispatch(setModule({ 
              ...module, name: e.target.value }))}
          />
          <textarea value={module.description}
            onChange={(e) => dispatch(setModule({ 
              ...module, description: e.target.value }))
          }
          />
        </li>
        {moduleList.filter((module) => module.course === cid)
        .map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <button
              onClick={(event) => dispatch(setModule(module))}>
              Edit
            </button>

            <button
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <p>{module.description}</p>
              <p>{module._id}</p>
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson:any) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <Modal show={show} 
        backdrop="static"
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Module</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you are reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button className="btn btn-primary" onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
      </ul>
    </>
  );
}
export default ModuleList;