import ModuleList from "../Modules/List";
import {FaFileImport, FaBullhorn, FaBullseye, FaChartSimple, FaBell} from "react-icons/fa6";
import { TbCircle5Filled } from "react-icons/tb";

function Home() {
  return (
    <div className="d-flex">

        <div className="flex-fill p-1">
            
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
            {/* <ul className="list-group wd-modules p-4">
                <li className="list-group-item">
                    <div>
                        <i className="fa fa-ellipsis-v"></i> Week 1 - INTRO
                        <span className="float-end">
                        <i className="fa fa-check-circle text-success"></i>
                        <i className="fa fa-plus ms-2"></i>
                        <i className="fa fa-ellipsis-v ms-2"></i>
                        </span>
                    </div>
                    <ul className="list-group">
                    <li className="list-group-item">
                        <i className="fa fa-ellipsis-v"></i> LEARNING OBJECIVES
                        <span className="float-end">
                        <i className="fa fa-check-circle text-success"></i>
                        <i className="fa fa-ellipsis-v ms-2"></i>
                        </span>
                    </li>
                        <!-- Inner Loop -->
                        <li className="list-group-item">
                            <i className="fa fa-ellipsis-v"></i> &emsp;&emsp; Introduction to the course
                            <span className="float-end">
                            <i className="fa fa-check-circle text-success"></i>
                            <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-ellipsis-v"></i> &emsp;&emsp; Learn what is Web Development
                            <span className="float-end">
                            <i className="fa fa-check-circle text-success"></i>
                            <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-ellipsis-v"></i> &emsp;&emsp; Creating a development environment
                            <span className="float-end">
                            <i className="fa fa-check-circle text-success"></i>
                            <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-ellipsis-v"></i> &emsp;&emsp; Creating a Web Application
                            <span className="float-end">
                            <i className="fa fa-check-circle text-success"></i>
                            <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-ellipsis-v"></i> &emsp;&emsp; Getting started with the 1st assignment
                            <span className="float-end">
                            <i className="fa fa-check-circle text-success"></i>
                            <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </li>
                    </ul>
                    <ul className="list-group">
                    <li className="list-group-item">
                        <i className="fa fa-ellipsis-v"></i> READING
                        <span className="float-end">
                        <i className="fa fa-check-circle text-success"></i>
                        <i className="fa fa-ellipsis-v ms-2"></i>
                        </span>
                    </li>
                        <!-- Inner Loop -->
                        <li className="list-group-item">
                            <i className="fa fa-ellipsis-v"></i> &emsp;&emsp; Full Stack Developer - Chapter 1 - Introduction
                            <span className="float-end">
                            <i className="fa fa-check-circle text-success"></i>
                            <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-ellipsis-v"></i> &emsp;&emsp; Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML
                            <span className="float-end">
                            <i className="fa fa-check-circle text-success"></i>
                            <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </li>
                    </ul>
                    <ul className="list-group">
                    <li className="list-group-item">
                        <i className="fa fa-ellipsis-v"></i> SLIDES
                        <span className="float-end">
                        <i className="fa fa-check-circle text-success"></i>
                        <i className="fa fa-ellipsis-v ms-2"></i>
                        </span>
                    </li>
                        <!-- Inner Loop -->
                        <li className="list-group-item">
                            <i className="fa fa-ellipsis-v"></i> &emsp;&emsp; Introduction to Web Development Links to an external site.
                            <span className="float-end">
                            <i className="fa fa-check-circle text-success"></i>
                            <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-ellipsis-v"></i> &emsp;&emsp; Creating an HTTP server with Node.js Links to an external site.
                            <span className="float-end">
                            <i className="fa fa-check-circle text-success"></i>
                            <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-ellipsis-v"></i> &emsp;&emsp; Creating a React Application Links to an external site.
                            <span className="float-end">
                            <i className="fa fa-check-circle text-success"></i>
                            <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </li>
                    </ul>
                </li>
                <!-- Week 2 -->
                <li className="list-group-item">
                    <div>
                        <i className="fa fa-ellipsis-v"></i> Week 2 - HTML
                        <span className="float-end">
                        <i className="fa fa-check-circle text-success"></i>
                        <i className="fa fa-plus ms-2"></i>
                        <i className="fa fa-ellipsis-v ms-2"></i>
                        </span>
                    </div>
                    <ul className="list-group">
                    <li className="list-group-item">
                        <i className="fa fa-ellipsis-v"></i> LEARNING OBJECIVES
                        <span className="float-end">
                        <i className="fa fa-check-circle text-success"></i>
                        <i className="fa fa-ellipsis-v ms-2"></i>
                        </span>
                    </li>
                        <!-- Inner Loop -->
                        <li className="list-group-item">
                            <i className="fa fa-ellipsis-v"></i> &emsp;&emsp; Learn how to create user interfaces with HTML
                            <span className="float-end">
                            <i className="fa fa-check-circle text-success"></i>
                            <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-ellipsis-v"></i> &emsp;&emsp; Keep working on assigment 1
                            <span className="float-end">
                            <i className="fa fa-check-circle text-success"></i>
                            <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-ellipsis-v"></i> &emsp;&emsp; Deploy the assignment to Netlify
                            <span className="float-end">
                            <i className="fa fa-check-circle text-success"></i>
                            <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </li>
                    </ul>
                    <ul className="list-group">
                    <li className="list-group-item">
                        <i className="fa fa-ellipsis-v"></i> READING
                        <span className="float-end">
                        <i className="fa fa-check-circle text-success"></i>
                        <i className="fa fa-ellipsis-v ms-2"></i>
                        </span>
                    </li>
                        <!-- Inner Loop -->
                        <li className="list-group-item">
                            <i className="fa fa-ellipsis-v"></i> &emsp;&emsp; Full Stack Developer - Chapter 1 - Introduction
                            <span className="float-end">
                            <i className="fa fa-check-circle text-success"></i>
                            <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </li>
                        <li className="list-group-item">
                            <i className="fa fa-ellipsis-v"></i> &emsp;&emsp; Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML
                            <span className="float-end">
                            <i className="fa fa-check-circle text-success"></i>
                            <i className="fa fa-ellipsis-v ms-2"></i>
                            </span>
                        </li>
                    </ul>
                </li>
            </ul> */}
            <ModuleList />
        </div>

        <div className="flex-grow-0 me-2 d-none d-lg-block p-3" style={{width: "250px"}}>
            {/* // <!-- <h3>Course Status</h3> --> */}
            <h4>Course Status</h4>
            <div className="d-flex justify-content-center">
                <button className="btn btn-light w-100 btn-sm p-2 m-1"><i className="fa fa-ban"></i> Unpublish</button>
                <button className="btn btn-success w-100 btn-sm p-2 m-1"><i className="fa fa-check-circle text-white"></i> Published</button>
            </div>

            <div className="pt-4">
                <button className="btn btn-light w-100 p-2 m-1 text-start"><FaFileImport /> Import Existing Content</button>
                <button className="btn btn-light w-100 p-2 m-1 text-start"><FaBullseye /> Import From Commons</button>
                <button className="btn btn-light w-100 p-2 m-1 text-start"><FaBullseye /> Choose Home Page</button>
                <button className="btn btn-light w-100 p-2 m-1 text-start"><FaChartSimple/> View Course Stream</button>
                <button className="btn btn-light w-100 p-2 m-1 text-start"><FaBullhorn /> New Announcements</button>
                <button className="btn btn-light w-100 p-2 m-1 text-start"><FaChartSimple/> New Analytics</button>
                <button className="btn btn-light w-100 p-2 m-1 text-start"><FaBell/> Course Notifications</button>
            </div>
            
            <div className="pt-4 align-items-center">
                {/* <!-- <div className="d-flex justify-content-between">
                    <div>
                        <p style="font-size: 12px;">Coming Up</p>
                    </div>
                    <div className="d-flex align-items-center" style="font-size: 12px;">
                        <i className="fa fa-calendar"></i>&nbsp;View Calendar
                    </div>
                </div> --> */}
                <div className="row">
                    <div className="col-6">
                        <p style={{fontSize: "14px"}}><b>To Do</b></p>
                    </div>
                    {/* <div className="col-6" style={{fontSize: "12px"}}>
                        <i className="fa fa-calendar"></i>&nbsp;View Calendar
                    </div> */}
                </div>
            
                <hr className="m-0"/>

                <div className="row align-items-top pt-2">
                    <div className="col-2 text-end">
                        <TbCircle5Filled color="red" size={22} />
                    </div>
                    <div className="col-10" style={{fontSize: "12px"}}>
                        <span style={{color:"red"}}>Grade A1 - ENV + HTML</span><br/>
                        100 points . Sep 7 at 11.45am
                    </div>
                </div>

                <div className="row align-items-top pt-2">
                    <div className="col-2 text-end">
                        <TbCircle5Filled color="red" size={22} />
                    </div>
                    <div className="col-10" style={{fontSize: "12px"}}>
                        <span style={{color:"red"}}>Grade A2 - CSS + Bootstrap</span><br/>
                        100 points . Oct 12 at 11.45am
                    </div>
                </div>
            </div>
        </div>
    </div>
    // <div>
    //   <h2>Home</h2>
      
    //   <h2>Status</h2>
    // </div>
  );
}
export default Home;