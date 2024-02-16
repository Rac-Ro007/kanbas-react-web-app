import { Link, useLocation } from "react-router-dom";

import "./index.css"; // feel free to use the CSS from previous assignments
function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Grades", "Assignments", "Quizzes", "People", "Panopto Video",
                  "Discussions", "Announcements", "Pages", "Settings "];
  const { pathname } = useLocation();
  return (
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}

export default CourseNavigation;