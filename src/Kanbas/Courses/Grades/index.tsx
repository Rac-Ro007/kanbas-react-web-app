import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport, FaChevronDown, FaGear, FaMagnifyingGlass } from "react-icons/fa6";

function Grades() {
  const { cid } = useParams();
  const as = assignments.filter((assignment) => assignment.course === cid);
  const es = enrollments.filter((enrollment) => enrollment.course === cid);
  return (
    <div className="container p-5">
      {/* <div className="container p-5"> */}
      <div className="row justify-content-end p-3">
          <div className="col-auto">
              <button className="btn btn-light align-items-center">
                  <FaFileImport /> Import
              </button>
          </div>
          <div className="col-auto">
              <button className="btn btn-light align-items-center">
                  <FaFileExport/> Export <FaChevronDown /></button>
          </div>
          <div className="col-auto">
              <button className="btn btn-outline-secondary p-1">
                <FaGear/></button>
          </div>
      </div>

      <div className="row pb-4">
        <div className="col-6">
            <h4 color="red">Student Names</h4>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1" style={{padding:"12px"}}>
                    <FaMagnifyingGlass/>
                  </span>
                </div>
                {/* <!-- <select type="form-select" className="form-control" placeholder="Search Students"> --> */}
                <select className="form-select" aria-label="Default select example">
                    <option selected>Search Students</option>
                </select>
            </div>
        </div>
        <div className="col-6">
            <h4 color="red">Assignment Names</h4>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1" style={{padding:"12px"}}>
                    <FaMagnifyingGlass/>
                  </span>
                </div>
                {/* <!-- <input type="text" className="form-control" placeholder="Search Assignments" /> --> */}
                <select className="form-select" aria-label="Default select example">
                    <option selected>Search Students</option>
                </select>
            </div>
            
        </div>
    </div>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (<th style={{textAlign:"center"}}>{assignment.title}</th>))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user?.firstName} {user?.lastName}</td>
                   {assignments.map((assignment) => {
                     const grade = grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td style={{textAlign:"center"}}>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;