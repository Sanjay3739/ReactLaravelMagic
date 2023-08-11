/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

export default function Sidebar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isBackgroundOn, setBackgroundOn] = useState(false);
  const backgroundColor = isBackgroundOn ? "rgb(209, 218, 211)" : "#ffffff";

  const handleToggleClick = () => {
    setBackgroundOn((prevValue) => !prevValue);
  };

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const handleUser = () => {
    navigate("/user/index");
  };

  const handleRole = () => {
    navigate("/role/index");
  };

  const handleOccupation = () => {
    navigate("/occupation/index");
  };

  const userProfile = (id) => {
    navigate(`/user/show/${id}`);
  };

  const userProfileEdit = (id) => {
    navigate(`/user/accountdetails/${id}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    // document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user ? `${user.first_name} ${user.last_name}` : "John Doe";

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="maintain">
      <header
        className="menu-wrap"
        style={{ background: backgroundColor, minHeight: "100vh" }}
      >
        <figure className="user" ref={dropdownRef}>
          <div className="user-avatar" onClick={handleDropdownToggle}>
            <img
              src="https://images.unsplash.com/photo-1440589473619-3cde28941638?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=42ebdb92a644e864e032a2ebccaa25b6&auto=format&fit=crop&w=100&q=80"
              alt="Amanda King"
            />
          </div>
          <figcaption>{userName}</figcaption>
        </figure>
        <div className="userdropdown">
          {isDropdownOpen && (
            <ul>
              <li onClick={() => userProfile(user.id)}>
                {" "}
                <ContactPageOutlinedIcon /> My Profile
              </li>
              <li onClick={() => userProfileEdit(user.id)}>
                <PersonAddAltOutlinedIcon /> Edit Profile
              </li>
              <li onClick={handleLogout}>
                {" "}
                <LogoutOutlinedIcon />
                Logout
              </li>
            </ul>
          )}
        </div>
        <nav>
          <section className="discover">
            <h3>Discover</h3>
            <ul>
              <li>
                <a href="#" onClick={handleDashboard}>
                  {" "}
                  <svg
                    clipRule="evenodd"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.6 11c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v9c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-2.092 0-6.908 0-9zm9.4 6c0-.552-.448-1-1-1h-6c-.538 0-1 .477-1 1v3c0 .552.448 1 1 1h6c.552 0 1-.448 1-1zm-1.5.5v2h-5v-2zm-9.4-6v8h-5.6v-8zm10.9-7.5c0-.552-.448-1-1-1-1.537 0-4.463 0-6 0-.552 0-1 .448-1 1v9.6c0 .552.448 1 1 1h6c.552 0 1-.448 1-1 0-2.194 0-7.406 0-9.6zm-1.5.5v8.6h-5v-8.6zm-7.9-.5c0-.552-.448-1-1-1-1.655 0-4.945 0-6.6 0-.552 0-1 .448-1 1v3.6c0 .552.448 1 1 1h6.6c.552 0 1-.448 1-1 0-1.017 0-2.583 0-3.6zm-1.5.5v2.6h-5.6v-2.6z"
                      fillRule="nonzero"
                    />
                  </svg>{" "}
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" onClick={handleUser}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3,21c0,0.553,0.448,1,1,1h16c0.553,0,1-0.447,1-1v-1c0-3.714-2.261-6.907-5.478-8.281C16.729,10.709,17.5,9.193,17.5,7.5 C17.5,4.468,15.032,2,12,2C8.967,2,6.5,4.468,6.5,7.5c0,1.693,0.771,3.209,1.978,4.219C5.261,13.093,3,16.287,3,20V21z M8.5,7.5 C8.5,5.57,10.07,4,12,4s3.5,1.57,3.5,3.5S13.93,11,12,11S8.5,9.43,8.5,7.5z M12,13c3.859,0,7,3.141,7,7H5C5,16.141,8.14,13,12,13z" />
                  </svg>
                  Users
                </a>
              </li>
              <li>
                <a href="#" onClick={handleRole}>
                  <svg
                    width="24"
                    height="24"
                    clipRule="evenodd"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m18.39 8.428c-.835.186-2.113.51-2.845.866-1.089.529-1.874 1.358-1.874 2.76 0 4.089 3.073 7.956 3.073 8.293 0 .131-.137.203-.227.113 0-.001-.001-.002-.001-.002-.673-.69-1.997-2.747-2.606-3.738v-.001c-.404-.653-.951-1.448-1.903-1.448h-.003c-.961 0-1.509.791-1.914 1.449-2.274 3.698-2.707 3.738-2.607 3.738-.094.095-.228.015-.228-.111 0-.285 3.073-4.285 3.073-8.293 0-1.336-.697-2.139-1.744-2.678-.833-.428-1.923-.669-2.956-.944-.009-.002-.017-.004-.026-.006-.138-.032-.138-.272.011-.299 1.098.25 3.412.923 6.387.923 2.94 0 5.295-.669 6.389-.923.145.029.152.265.001.301m-6.392-4.928c.858 0 1.552.7 1.552 1.562s-.694 1.563-1.552 1.563c-.856 0-1.55-.701-1.55-1.563s.694-1.562 1.55-1.562m6.367 3.125c-.427 0-2.112.584-4.474.821.699-.561 1.157-1.414 1.157-2.384 0-1.691-1.366-3.062-3.05-3.062-1.681 0-3.049 1.371-3.049 3.062 0 .97.458 1.824 1.158 2.385-2.361-.238-4.018-.822-4.472-.822-.897 0-1.635.738-1.635 1.653 0 .765.536 1.437 1.256 1.608 1.805.478 3.573.755 3.573 2.168 0 3.145-2.041 6.072-2.852 7.462-.002.003-.004.006-.005.009-.142.251-.216.536-.216.822 0 .916.737 1.653 1.635 1.653.437 0 .853-.174 1.165-.494.722-.741 2.157-2.937 2.811-3.999.12-.195.238-.383.371-.537.082-.096.151-.199.267-.199.113 0 .176.105.256.198.133.154.252.343.373.539.652 1.06 2.086 3.255 2.809 3.997.31.319.724.495 1.167.495.896 0 1.634-.737 1.634-1.653 0-.282-.07-.562-.226-.837-.002-.002-.003-.005-.005-.008-.83-1.426-2.843-4.3-2.843-7.448 0-1.516 2.067-1.772 3.567-2.167.728-.173 1.263-.846 1.263-1.609 0-.915-.739-1.653-1.635-1.653" />
                  </svg>
                  Role
                </a>
              </li>
              <li>
                <a href="#" onClick={handleOccupation}>
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm-7.363 18.764c1.828 1.989 4.451 3.236 7.363 3.236h.004l-4.618-7.998-2.749 4.762zm16.023-1.764h-9.233l2.749 4.762c2.767-.615 5.104-2.378 6.484-4.762zm-18.201-8c-.298.947-.459 1.955-.459 3 0 1.823.489 3.533 1.343 5.005l2.889-5.003-.001-.002.003-.002 1.731-2.998h-5.506zm18.203-1.997l-4.617 7.997h5.496c.298-.947.459-1.955.459-3 0-1.82-.487-3.526-1.338-4.997zm-6.927 1.997h-3.461l-1.733 3.002 1.731 2.998h3.464l1.731-2.999-1.732-3.001zm2.887 1.001l2.747-4.758c-1.828-1.992-4.452-3.242-7.366-3.243l4.619 8.001zm-6.792-7.764c-2.769.613-5.109 2.377-6.49 4.763h9.24l-2.75-4.763z" />
                  </svg>
                  Occupations
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.707 19.707L12 13.414l4.461 4.461L14.337 20H20v-5.663l-2.125 2.124L13.414 12l4.461-4.461L20 9.663V4h-5.663l2.124 2.125L12 10.586 5.707 4.293 4.293 5.707 10.586 12l-6.293 6.293z" />
                  </svg>
                  Shuffle
                </a>
              </li>
            </ul>
          </section>
          <section className="tools">
            <h3>Tools</h3>
            <ul>
              <li>
                <a href="#" className="active">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                  </svg>
                  Search
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11,15.586l-1.793-1.793l-1.414,1.414l2.5,2.5C10.488,17.902,10.744,18,11,18s0.512-0.098,0.707-0.293l5-5l-1.414-1.414 L11,15.586z" />
                  </svg>
                  Create portfolio
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 14H4V9.227l7.335 6.521a1.003 1.003 0 0 0 1.33-.001L20 9.227V18zm0-11.448l-8 7.11l-8-7.111V6h16v.552z" />
                  </svg>
                  Messages
                </a>
              </li>
            </ul>
          </section>
          <section className="discover">
            <h3>Finance</h3>
            <ul>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 12h2v3h-2z" />
                    <path d="M21 7h-1V4a1 1 0 0 0-1-1H5c-1.206 0-3 .799-3 3v11c0 2.201 1.794 3 3 3h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM5 5h13v2H5.012C4.55 6.988 4 6.805 4 6s.55-.988 1-1zm15 13H5.012C4.55 17.988 4 17.805 4 17V8.833c.346.115.691.167 1 .167h15v9z" />
                  </svg>
                  Buy
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15,8H8V5L4,9l4,4v-3h7c1.654,0,3,1.346,3,3s-1.346,3-3,3h-3v2h3c2.757,0,5-2.243,5-5S17.757,8,15,8z" />
                  </svg>
                  Sell
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21,3h-4V2h-2v1H9V2H7v1H3C2.447,3,2,3.447,2,4v17c0,0.553,0.447,1,1,1h18c0.553,0,1-0.447,1-1V4C22,3.447,21.553,3,21,3z M7,5v1h2V5h6v1h2V5h3v3H4V5H7z M4,20V10h16v10H4z" />
                    <path d="M11,15.586l-1.793-1.793l-1.414,1.414l2.5,2.5C10.488,17.902,10.744,18,11,18s0.512-0.098,0.707-0.293l5-5l-1.414-1.414 L11,15.586z" />
                  </svg>
                  Invoice
                </a>
              </li>
              <li>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z" />
                    <path d="M11 2h2v10h-2z" />
                  </svg>
                  Wallet
                </a>
              </li>
              <div className="switch-holder toggle">
                <div className="switch-label">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21c4.411 0 8-3.589 8-8 0-3.35-2.072-6.221-5-7.411v2.223A6 6 0 0 1 18 13c0 3.309-2.691 6-6 6s-6-2.691-6-6a5.999 5.999 0 0 1 3-5.188V5.589C6.072 6.779 4 9.65 4 13c0 4.411 3.589 8 8 8z" />
                    <path d="M11 2h2v10h-2z" />
                  </svg>
                  <span className="ps-2"></span>
                </div>
                <div className="switch-toggle">
                  <input
                    type="checkbox"
                    id="bluetooth"
                    onClick={handleToggleClick}
                  ></input>
                  <label htmlFor="bluetooth"></label>
                </div>
              </div>
            </ul>
          </section>
        </nav>
      </header>
    </div>
  );
}
