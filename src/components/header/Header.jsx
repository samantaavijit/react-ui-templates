import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { Dropdown } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Your Brand
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link to="/login">Login</Link>
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            <img
              src="https://via.placeholder.com/30" /* Replace with your profile image URL */
              alt="Profile"
              className="profile-img dropdown-toggle rounded-circle ml-2"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              width="40"
              height="40"
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <NavLink to="/profile" className="dropdown-item">
              <span className="menu_prof">
                {/* <img src={prof_icon_menu} alt="HMC" /> */}
              </span>
              Profile
            </NavLink>
            <Dropdown.Item>
              <span className="menu_logout">
                {/* <img src={menu_logout} alt="HMC" /> */}
              </span>
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </div>
  );
}
