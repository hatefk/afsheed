import React from "react";
import { NavLink } from "react-router-dom";
function Hdr() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/newpost">New Post</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Hdr;
