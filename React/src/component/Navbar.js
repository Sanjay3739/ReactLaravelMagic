import React from "react";
import { useNavigate } from "react-router-dom";
import { BluetoothIcon, BellIcon, SearchIcon } from "../component/icon"

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <aside className="search-wrap">
      <div className="search">
        <label htmlFor="search">
          <SearchIcon />
          <input type="text" id="search" />
        </label>
      </div>

      <div className="user-actions">
        <button>
          <BellIcon />
        </button>
        <button onClick={handleLogout}>
          <BluetoothIcon />
        </button>
      </div>
    </aside>
  );
}
export default Navbar;
