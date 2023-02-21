import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">MyMovie</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Favorite</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
