import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
