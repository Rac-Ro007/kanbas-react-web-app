import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { FaN, FaRegCircleQuestion, FaRegClock, FaRegEnvelopeOpen, FaYoutube } from "react-icons/fa6";

function KanbasNavigation() {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2 user" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaRegEnvelopeOpen className="fs-2" /> },
    { label: "History", icon: <FaRegClock className="fs-2" /> },
    { label: "Studio", icon: <FaYoutube className="fs-2" /> },
    { label: "Commons", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Help", icon: <FaRegCircleQuestion className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li style={{padding:"12px"}}>
        <Link to="/Kanbas">  <FaN className="fs-2 f-2" color="red" size="60px" /></Link>
      </li>
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? "wd-active" : ""}
        >
          <Link to={link.label.includes('Courses') ? `/Kanbas/Courses/RS101/Home` :`/Kanbas/${link.label}` }>
            <i>{link.icon}</i> {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;