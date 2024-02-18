import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { cid } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    alert('Saving the Data!');
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };
  
  return (
    <div className="container">
      <h2>Assignment Name</h2>
      <input value={assignment?.title}
             className="form-control mb-2" />
      <textarea className="form-control" name="bio" cols={20} rows={3}>This is the assignment description</textarea><br/>
                
      <div className="row align-items-top pb-3">
          <div className="col-3 text-end">
              <label htmlFor="points">Points</label>
          </div>
          <div className="col-9">
              <input className="form-control" type="number" value="100" />
          </div>
      </div>

      <div className="row align-items-top pb-3">
          <div className="col-3 text-end">
              <label htmlFor="assignment-grp">Assignment Group</label>
          </div>
          <div className="col-9">
              <select className="form-control">
                  <option>ASSIGNMENTS</option>
              </select>
          </div>
      </div>

      <div className="row align-items-top pb-3">
          <div className="col-3 text-end">
              <label htmlFor="display-grade">Display Grade as</label>
          </div>
          <div className="col-9">
              <select className="form-control">
                  <option>Percentage</option>
                  <option>GPA</option>
              </select>
          </div>
      </div>

      <div className="row align-items-top pb-3">
          <div className="col-3">
              
          </div>
          <div className="col-9">
              <input
                  type="checkbox"
                  value="Website URL"
                  name="websiteUrl-chbox"
              /> 
              <label htmlFor="websiteUrl-chbox">Do not count this assignment towards the final grade</label> <br />
          </div>
      </div>


      <div className="row align-items-top pb-3">
          <div className="col-3 text-end">
              <label htmlFor="Submission-type">Submission Type</label>
          </div>
          <div className="col-9">
              <select className="form-control">
                  <option>Online</option>
              </select>
          </div>
      </div>


      <div className="row align-items-top pb-3">
          <div className="col-3 text-end">
              <label htmlFor="Submission-type">Assign</label>
          </div>
          <div className="col-9">
              <div className="p-3 border border-dark rounded ">
                  <label htmlFor="due"><b>Assign to</b></label> <br/>
                  <input className="form-control" type="text" value="Everyone" /> 
                  
                  <br/>
                  <label htmlFor="due">Due</label> <br />
                  <input className="form-control" type="date" name="due-date" value="2021-01-01" /> 

                  <br/>

                  <div className="row">
                      <div className="col-6">
                          <label htmlFor="due">Available from</label>
                          <input className="form-control" type="date" name="available-date" value="2021-01-01" />
                      </div>
                      
                      <div className="col-6">
                          <label htmlFor="due">Until</label> <br />
                          <input className="form-control" type="date" name="until-date" value="2021-01-01" /> 
                      </div>
                  </div>
                  <br/>
                  <button className="btn btn-secondary w-100">
                      <i className="fs fa-plus"></i>  Add</button>
              </div>
          </div>
      </div>
      <hr/>
      <div className="d-flex justify-content-between align-items-center">
          <div>
              <input type="checkbox" /> 
              <label>Notify users that this content has changed.</label>
          </div>
          <div className="d-flex">
              <button onClick={handleSave} className="btn btn-success ms-2  float-end">
            Save
          </button>
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}
                className="btn btn-danger float-end">
            Cancel
          </Link>  
          </div>
      </div>
    </div>
  );
}
export default AssignmentEditor;