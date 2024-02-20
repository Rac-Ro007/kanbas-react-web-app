import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { cid } = useParams();
  const modulesList = modules.filter((module) => module.course === cid);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
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
              <button className="btn btn-danger">+ Modules</button>
          </div>
      </div>
      <hr/>
      
      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
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
      </ul>
    </>
  );
}
export default ModuleList;