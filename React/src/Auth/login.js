import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");

  const handleSignUp = () => {
    navigate("/");
  };

  const handleChange = () => {
    navigate("/forgotPassword");
  };

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/getRole");
      const rolesData = await response.json();
      setRoles(rolesData);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
        role: selectedRole, // Use the selectedRole state instead of role
      });

      // Store the user data in local storage, including the role
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", selectedRole);
      navigate("/dashboard");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="registration">
      <div className="set">
        <div className="forms">
          <div className="background">
            <form onSubmit={handleSubmit}>
              <div className="cover">
                <header className="head-form"><h2>Log In</h2><hr /><p>login here using your username and password</p></header>
                {error && <p className="error-message">{error}</p>}
                <div className="field-set">
                  <span className="input-item"><i className="fa fa-user-circle"></i></span>
                  <input className="form-input" id="txt-input"  type="email" value={email}  onChange={(e) => setEmail(e.target.value)} required placeholder="@Email" />
                  <br />
                  <span className="input-item"><i className="fa fa-key"></i></span>
                  <input className="form-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="pwd" name="password"  required  />
                  <span> {" "}  <i className="fa fa-eye" aria-hidden="true"  type="button" id="eye" ></i>{" "}</span>
                  <br />
                  <FormControl sx={{ mt: 2, minWidth: 180 }}>
                    <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
                    <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" className="drop" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)} label="Role" >
                      <MenuItem value="">{" "} <em>None</em>{" "}</MenuItem>
                      {roles.map((role) => (
                        <MenuItem key={role.id} value={role.id}>{" "} {role.name}{" "}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <button className="log-in">Log In</button>
              </div>
            </form>
            <div className="other">
              <button className="btn submits forgot" onClick={handleChange}>Forgot Password</button>
              <button className="btn submits sign-up" onClick={handleSignUp}>Sign Up<i className="fa fa-user-plus" aria-hidden="true" ></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
