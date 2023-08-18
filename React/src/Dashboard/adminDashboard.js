import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ContactPageOutlinedIcon, LogoutOutlinedIcon, PersonAddAltOutlinedIcon, DashboardIcon, UserIcon, RoleIcon, OccupationIcon, BluetoothIcon, CountryIcon, BellIcon, SearchIcon } from "../component/icon"
import http from '../http';
import SampleChartComponent from '../component/ChartComponent';
import DoughnutChartComponent from '../component/DoughnutChartComponent';


const Dashboard = () => {
  const navigate = useNavigate();
  const [, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [, setRole] = useState([]);
  const [roleCount, setRoleCount] = useState(0);
  const [, setOccupation] = useState([]);
  const [occupationCount, setOccupationCount] = useState(0);
  const [, setCountry] = useState([]);
  const [countryCount, setCountryCount] = useState(0);
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

  const fetchData = async () => {
    try {
      const response = await http.get(`/getUser`);
      const data = response.data; // Use response.data directly
      setUsers(data);
      setUserCount(data.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchRoles = async () => {
    try {
      const response = await http.get(`/getRole`);
      const role = await response.data;
      setRole(role);
      setRoleCount(role.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchOccupation = async () => {
    try {
      const response = await http.get(`/getOccupation`);
      const occupation = response.data;
      setOccupation(occupation);
      setOccupationCount(occupation.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCountry = async () => {
    try {
      const response = await http.get(`/country`);
      const country = response.data;
      setCountry(country);
      setCountryCount(country.length);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchRoles();
    fetchOccupation();
    fetchCountry();
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user ? `${user.first_name} ${user.last_name}` : "Jone Doe";

  return (
    <div className="dashboard">
      <div className="main">
        <aside className="search-wrap" style={{ background: backgroundColor }} >
          <div className="search">
            <label htmlFor="search"><SearchIcon /><input type="text" id="search" style={{ background: backgroundColor }} /></label>
          </div>
          <div className="user-actions">
            <button><BellIcon /></button>
            <button onClick={handleLogout}><BluetoothIcon /></button>
          </div>
        </aside>
        {/* Toggle Button */}
        <header className="menu-wrap" style={{ background: backgroundColor, minHeight: "100vh" }} >
          <figure className="user" ref={dropdownRef}>
            <div className="user-avatar" onClick={handleDropdownToggle}>
              <img src={require('../images/user.png')} alt="User" />
            </div>
            <figcaption>{userName}</figcaption>
          </figure>
          {/* User Dropdown */}
          <div className="userdropdown">
            {isDropdownOpen && (
              <ul>
                <li onClick={() => userProfile(user.id)}><ContactPageOutlinedIcon />My Profile</li>
                <li onClick={() => userProfileEdit(user.id)}><PersonAddAltOutlinedIcon />Edit Profile</li>
                <li onClick={handleLogout}><LogoutOutlinedIcon />Logout</li>
              </ul>
            )}
          </div>
          <nav>
            <section className="discover"><h3>Discover</h3>
              <ul>
                <li><a href="#" onClick={handleDashboard}><DashboardIcon />Dashboard</a></li>
                <li><a href="#" onClick={handleUser}><UserIcon /> Users</a></li>
                <li><a href="#" onClick={handleRole}><RoleIcon />Role</a></li>
                <li><a href="#" onClick={handleOccupation}><OccupationIcon />Occupations</a></li>
              </ul>
            </section>
            <section className="discover"><h3>Theme</h3>
              <ul>
                <div className="box">
                  <div className="switch-holder toggle">
                    <div className="switch-label"><BluetoothIcon /><span className="ps-2"></span></div>
                    <div className="switch-toggle">
                      <input type="checkbox" id="bluetooth" onClick={handleToggleClick} />
                      <label htmlFor="bluetooth"></label>
                    </div>
                  </div>
                </div>
              </ul>
            </section>
          </nav>
        </header>
        <main className="content-wrap">
          {/* Navbar */}
          <header className="content-head">
            <figcaption>{user ? `Welcome, ${user.first_name} ${user.last_name}!` : "Welcome!"}</figcaption><h1>Societe Generale</h1>
            <div className="action"><button>Save search</button></div>
          </header>
          <div className="content">
            {/* Contents */}
            <section className="info-boxes">
              <div className="info-box " style={{ background: backgroundColor }} >
                <div className="box-icon" ><UserIcon /></div>
                <div className="box-content"><span className="big">{userCount}</span>Total User</div>
              </div>
              <div className="info-box " style={{ background: backgroundColor }} >
                <div className="box-icon" > <RoleIcon /></div>
                <div className="box-content"><span className="big">{roleCount}</span>Total Roles</div>
              </div>
              <div className="info-box " style={{ background: backgroundColor }} >
                <div className="box-icon" ><OccupationIcon /></div>
                <div className="box-content"><span className="big">{occupationCount}</span>Total Occupation</div>
              </div>
              <div className="info-box" style={{ background: backgroundColor }} >
                <div className="box-icon" ><CountryIcon /></div>
                <div className="box-content"><span className="big">{countryCount}</span>Total Country</div>
              </div>
            </section>
          </div>

          <div className="content">
            <section className="info-boxes d-flex charts  ">
              <div className="info-box-chart" style={{ background: backgroundColor }} >
                <SampleChartComponent />
              </div>

              <div className="info-box-chart " style={{ background: backgroundColor }} >
                <DoughnutChartComponent />
              </div>
            </section>
          </div>
        </main>

      </div>
    </div>
  );
};

export default Dashboard;
