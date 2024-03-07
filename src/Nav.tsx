import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  return (
    <>
      {JSON.stringify(pathname)}
      <nav className="nav nav-pills mt-2">
        <Link
          className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
          to="/Labs/a3"
        >
          A3
        </Link>
        <Link
          className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}
          to="/Labs/a4"
        >
          A4
        </Link>
        <Link
          className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}
          to="/hello"
        >
          Hello World
        </Link>
        <Link
          className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}
          to="/Kanbas"
        >
          Kanbas
        </Link>
      </nav>
      <hr/>
    </>
  );
}

export default Nav;