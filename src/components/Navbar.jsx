import React from "react";
import { Nav } from "react-bootstrap";
import NavbarData from "./NavbarData";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <Nav className="navbar-items">
          <ul>
            {NavbarData.map((prop, key) => {
              return (
                <li key={key}>
                  <a className="mx-3" href={prop.link}>
                    {prop.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </Nav>
      </div>
    );
  }
}

export default Navbar;
