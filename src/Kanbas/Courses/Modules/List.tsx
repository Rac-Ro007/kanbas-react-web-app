import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { cid } = useParams();
  const [moduleList, setModuleList] = useState<any[]>(modules);
  // const modulesList = modules.filter((module) => module.course === cid);
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  const [module, setModule] = useState({
    _id: "",
    name: "New Module",
    description: "New Description",
    course: cid || '',
  });
  
  const addModule = (module: any) => {
    const newModule = { ...module,
      _id: new Date().getTime().toString() };
    const newModuleList = [newModule, ...moduleList];
    setModuleList(newModuleList);
  };

  const deleteModule = (moduleId: string) => {
    const newModuleList = moduleList.filter(
      (module) => module._id !== moduleId );
    setModuleList(newModuleList);
  };

  const updateModule = () => {
    const newModuleList = moduleList.map((m) => {
      if (m._id === module._id) {
        return module;
      } else {
        return m;
      }
    });
    setModuleList(newModuleList);
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
              <button className="btn btn-danger">+ Modules</button>
          </div>
      </div>
      <hr/>
      
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <button onClick={() => { addModule(module) }}>
            Add
          </button>
          <button onClick={updateModule}>
            Update
          </button>
          <input value={module.name}
            onChange={(e) => setModule({
              ...module, name: e.target.value })}
          />
          <textarea value={module.description}
            onChange={(e) => setModule({
              ...module, description: e.target.value })}
          />
        </li>
        {moduleList.filter((module) => module.course === cid)
        .map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <button
              onClick={(event) => { setModule(module); }}>
              Edit
            </button>

            <button
              onClick={() => deleteModule(module._id)}>
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
      </ul>
    </>
  );
}
export default ModuleList;