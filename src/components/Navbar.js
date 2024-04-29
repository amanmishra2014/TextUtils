import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import {NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" href="#">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-info" type="submit">
              Search
            </button>
          </form>
          <div className="d-flex">
            <div
              className="bg-success rounded mx-2"
              style={{ height: "30px", width: "30px" }}
              onClick={() => {
                props.toggleMode("success");
              }}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              style={{ height: "30px", width: "30px" }}
              onClick={() => {
                props.toggleMode("warning");
              }}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              style={{ height: "30px", width: "30px" }}
              onClick={() => {
                props.toggleMode("danger");
              }}
            ></div>
            <div
              className="bg-primary rounded mx-2"
              style={{ height: "30px", width: "30px" }}
              onClick={() => {
                props.toggleMode("primary");
              }}
            ></div>
          </div>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              onClick={() => {
                props.toggleMode("null");
              }}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Toggle Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "set title here",
  aboutText: "About",
};
