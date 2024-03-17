import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
// import { assignments } from "../../../Database";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, setAssignment } from "../reducer";
import { KanbasState } from "../../../store";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { cid } = useParams();
  const navigate = useNavigate();
  
  const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);

  const assignment = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignment);

  const dispatch = useDispatch();
    
  // Check whether existing key is present
    const existingAssignment  = assignmentList.find(
    (assignment) => assignment._id === assignmentId);

  useEffect(() => {
    if(existingAssignment !== undefined) {
        console.log('Setting Found ID')
        dispatch(setAssignment(existingAssignment))
        console.log(assignment)
    }
  },[])

  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    console.log("Payload to Save", assignment)
    // dispatch(addAssignment({ ...assignment, course: cid, _id: assignmentId }))
    if (existingAssignment !== undefined) {
            console.log('Update')
            dispatch(updateAssignment(assignment))
            alert(`Updating the Data with Assignment ID ${assignmentId}`)
    }
    else {
        dispatch(addAssignment({ ...assignment, course: cid, _id: assignmentId, module:'Multiple Modules' }))
        alert('Saving the Data!');
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };
  
  return (
    <div className="container p-2">
      <h2>Assignment Name</h2>
      <input onChange={(e) => dispatch(setAssignment({ 
              ...assignment, title: e.target.value }))} 
        value={assignment?.title} className="form-control mb-2" />

      <textarea onChange={(e) => dispatch(setAssignment({ 
              ...assignment, description: e.target.value }))}
      className="form-control" name="bio" cols={20} rows={3}>{assignment?.description}</textarea><br/>
                
      <div className="row align-items-top pb-3">
          <div className="col-3 text-end">
              <label htmlFor="points">Points</label>
          </div>
          <div className="col-9">
              <input onChange={(e) => dispatch(setAssignment({ 
              ...assignment, points: e.target.value }))}
              className="form-control" type="number" value={assignment.points} />
          </div>
      </div>

      <div className="row align-items-top pb-3">
          <div className="col-3 text-end">
              <label htmlFor="assignment-grp">Assignment Group</label>
          </div>
          <div className="col-9">
              <select className="form-select">
                  <option>ASSIGNMENTS</option>
              </select>
          </div>
      </div>

      <div className="row align-items-top pb-3">
          <div className="col-3 text-end">
              <label htmlFor="display-grade">Display Grade as</label>
          </div>
          <div className="col-9">
              <select className="form-select">
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
              <label htmlFor="websiteUrl-chbox"> Do not count this assignment towards the final grade</label> <br />
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
                  <input onChange={(e) => dispatch(setAssignment({ 
                        ...assignment, dueDate: e.target.value }))} 
                  className="form-control" type="date" name="due-date" 
                  value={assignment?.dueDate} />

                  <br/>

                  <div className="row">
                      <div className="col-6">
                          <label htmlFor="due">Available from</label>
                          <input onChange={(e) => dispatch(setAssignment({ 
                                ...assignment, availableFromDate: e.target.value }))} 
                          className="form-control" type="date" name="available-date" 
                          value={assignment.availableFromDate ? assignment.availableFromDate : "2021-01-01" } />
                      </div>
                      
                      <div className="col-6">
                          <label htmlFor="due">Until</label> <br />
                          <input onChange={(e) => dispatch(setAssignment({ 
                                ...assignment, availableUntilDate: e.target.value }))} 
                          className="form-control" type="date" name="until-date" 
                          value={assignment.availableUntilDate ? assignment.availableUntilDate : "2021-01-01" } /> 
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
              <label> Notify users that this content has changed.</label>
          </div>
          <div className="d-flex">
              <button onClick={handleSave} className="btn btn-success me-2 float-end">
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