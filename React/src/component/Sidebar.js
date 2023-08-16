
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ContactPageOutlinedIcon, LogoutOutlinedIcon, PersonAddAltOutlinedIcon, DashboardIcon, UserIcon, RoleIcon, OccupationIcon, BluetoothIcon, CountryIcon, BellIcon, SearchIcon } from "../component/icon"


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
      <header className="menu-wrap" style={{ background: backgroundColor, minHeight: "100vh" }} >
        <figure className="user" ref={dropdownRef}>
          <div className="user-avatar" onClick={handleDropdownToggle}>
            <img src={require('../images/user.png')} alt="User" />
          </div>
          <figcaption> {userName} </figcaption>
        </figure>
        <div className="userdropdown">
          {isDropdownOpen && (
            <ul>
              <li onClick={() => userProfile(user.id)}><ContactPageOutlinedIcon /> My Profile </li>
              <li onClick={() => userProfileEdit(user.id)}><PersonAddAltOutlinedIcon /> Edit Profile </li>
              <li onClick={handleLogout}><LogoutOutlinedIcon />  Logout </li>
            </ul>
          )}
        </div>
        <nav>
          <section className="discover">
            <h3>Discover</h3>
            <ul>
              <li><a href="#" onClick={handleDashboard}><DashboardIcon /> Dashboard </a> </li>
              <li><a href="#" onClick={handleUser}><UserIcon /> Users </a> </li>
              <li><a href="#" onClick={handleRole}><RoleIcon /> Role </a> </li>
              <li><a href="#" onClick={handleOccupation}><OccupationIcon /> Occupations </a> </li>
            </ul>
          </section>
          <section className="discover">
            <h3>Finance</h3>
            <ul>
              <div className="switch-holder box">
                <div className="switch-label"> <BluetoothIcon /> <span className="ps-2"></span> </div>
                <div className="switch-toggle">
                  <input type="checkbox" id="bluetooth" onClick={handleToggleClick} ></input>
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
