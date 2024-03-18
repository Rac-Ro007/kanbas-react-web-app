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
import { MdEdit, MdDelete } from "react-icons/md";

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

  const [showModal, setShowModal] = useState(false);

  const [deleteModal, setDeleteModal] = useState(false);

  const handleDelete = () => {
    dispatch(deleteModule(module._id));
    setDeleteModal(false);
  }
  
  const clearModule = () => dispatch(setModule([]))
  
  const handleCreate = () => {
    dispatch(addModule({ ...module, course: cid }));
    setShowModal(false);
    clearModule();
  };

  const handleUpdate = () => {
    dispatch(updateModule(module));
    setShowModal(false);
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
              <button className="btn btn-danger" onClick={()=> {clearModule(); setShowModal(true)}}>+ Modules</button>
          </div>
      </div>
      <hr/>
      
      <p style={{color:"red"}}>To Add - Click on "+Modules", To Edit - Click on "Pen" Icon, To Delete - Click on "Bin" Icon</p>
      {/* <a className="btn btn-danger" onClick={()=> setShow(!show)}
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

      <a className="btn btn-danger" onClick={()=> setShowModal(true)}>
        Module Modal
      </a> */}
    
      <ul className="list-group wd-modules">
        {/* <li className="list-group-item"> */}
        {/* </li> */}
        {moduleList.filter((module) => module.course === cid)
        .map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div className="d-flex">
              <div style={{ alignSelf: "center" }}>
                <FaEllipsisV className="me-2" />
              </div>
              <div className="p-1">
                  {module.name}
                <br />
                <small>
                  {module.description} | {module._id}
                </small>
              </div>
              <div className="ms-auto" style={{ alignSelf: "center" }}>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                  <a style={{cursor:"pointer"}} onClick={() => {dispatch(setModule(module)); setShowModal(true)}}><MdEdit className="text-warning ms-2" size={20} /></a>
                        <a style={{cursor:"pointer"}} onClick={() => {dispatch(setModule(module)); setDeleteModal(true)}}><MdDelete className="text-danger ms-2" size={20} /></a>
                </span>
              </div>
              {/* {module.name}
              <p>{module.description}</p>
              <p>{module._id}</p> */}
              {/* <button
                onClick={(event) => {dispatch(setModule(module)); setShowModal(true)}}>
                Edit
              </button>

              <button
                onClick={() => {dispatch(setModule(module)); setDeleteModal(true)}}>
                Delete
              </button> */}
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
        {showModal && (
          <Modal 
          show={showModal}
          onHide={()=> {setShowModal(false);}}
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title>Add / Update Module</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container align-items-center">
              <div className="p-2">
              <input className="form-control m-2" value={module.name}
                placeholder="Enter Module Name"
                onChange={(e) => dispatch(setModule({ 
                  ...module, name: e.target.value }))}
              />
              <textarea className="form-control m-2" value={module.description}
                placeholder="Enter Module Description"
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
          </Modal.Body>
          {/* <Modal.Footer>
            <div className="d-flex justify-content-around">
              <button className="btn btn-warning w-100" onClick={handleUpdate}>
                Update
              </button>
              <button className="btn btn-primary" onClick={handleCreate}>
                Create 
              </button>
            </div>
          </Modal.Footer> */}
        </Modal>
        )}

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
              <h5 style={{color:"red"}}>{module._id} | {module.name}</h5>
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
      </ul>
    </>
  );
}
export default ModuleList;