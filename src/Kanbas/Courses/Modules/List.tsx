import React, { useState } from "react";
import "./index.css";
// import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';

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
  
  const clearModule = () => dispatch(setModule([]))
  
  const handleCreate = () => {
    dispatch(addModule({ ...module, course: cid }));
    clearModule();
  };

  const handleUpdate = () => {
    dispatch(updateModule(module));
    clearModule();
  };

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
              <button className="btn btn-danger" onClick={()=> setShow(!show)}>+ Modules</button>
          </div>
      </div>
      <hr/>
      
      <a className="btn btn-danger" onClick={()=> setShow(!show)}
        aria-controls="example-collapse-text"
        aria-expanded={show}>
        Module Operations
      </a>
      <Collapse in={show}>
        <div className="m-3" id="example-collapse-text">
          <div className="d-flex justify-content-around">
            <input className="form-control m-2" value={module.name}
              onChange={(e) => dispatch(setModule({ 
                ...module, name: e.target.value }))}
            />
            <textarea className="form-control m-2" value={module.description}
              onChange={(e) => dispatch(setModule({ 
                ...module, description: e.target.value }))
            }
            />
          </div>
          <div className="row m-2">
            <div className="col-6">
            <button className="btn btn-success w-100" onClick={handleCreate}>
              Add Module
            </button>
            </div>
            <div className="col-6">
            <button className="btn btn-primary w-100" onClick={handleUpdate}>
              Update Module
            </button>
            </div>
            </div>
        </div>
      </Collapse>
    
      <ul className="list-group wd-modules">
        {/* <li className="list-group-item"> */}
        {/* </li> */}
        {moduleList.filter((module) => module.course === cid)
        .map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
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
        <Modal 
        backdrop="static"
        onHide={()=> {setShow(false); window.location.reload();}}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Module</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <input className="form-control m-2" value={module.name}
                onChange={(e) => dispatch(setModule({ 
                  ...module, name: e.target.value }))}
              />
            </div>

            <div className="row">
              <textarea className="form-control m-2" value={module.description}
                onChange={(e) => dispatch(setModule({ 
                  ...module, description: e.target.value }))
                  }
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-warning" onClick={handleUpdate}>
            Update
          </button>
          <button className="btn btn-primary" onClick={handleCreate}>
            Create 
          </button>
        </Modal.Footer>
      </Modal>
      </ul>
    </>
  );
}
export default ModuleList;