/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Formik as Formic, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { validationSchema } from "../common/constants";

const Registration = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState([]);
  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    mobile_no: "",
    role_id: "1",
  };

  useEffect(() => {
    fetchRole();
  }, []);

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        values
      );
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      setErrors({ serverError: "Registration failed" });
    } finally {
      setSubmitting(false);
    }
  };

  const fetchRole = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/getRole");
      const roles = await response.json();
      setRole(roles);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  return (
    <div className="registration">
      <div className="set">
        <div className="forms">
          <div className="heads">
            <header className="head-form">
              <h2>Sign Up</h2>
              <hr />
              <p>Sign up here using your Email, Password and Etx.</p>
            </header>
          </div>
          <Formic
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="d-flex flex-column">
                  <Field
                    className="form-inputs"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                  />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="d-flex flex-column">
                  <Field
                    className="form-inputs"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                  />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="d-flex flex-column">
                  <Field
                    className="form-inputs"
                    type="text"
                    name="mobile_no"
                    placeholder="Phone Number"
                  />
                  <ErrorMessage
                    name="mobile_no"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="d-flex flex-column">
                  <Field
                    className="form-inputs"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="d-flex flex-column">
                  <Field
                    className="form-inputs"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className=" drp">
                  <FormControl
                    sx={{
                      mt: 2,
                      minWidth: 200,
                      maxHeight: "50px",
                      backgroundColor: "white",
                    }}
                  >
                    <InputLabel id="role-label">Role</InputLabel>
                    <Field
                      as={Select}
                      name="role_id"
                      labelId="role-label"
                      label="Role"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {role.map((role) => (
                        <MenuItem key={role.id} value={role.id}>
                          {role.name}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                  <ErrorMessage
                    name="role_id"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div>
                  <button className="log-in" disabled={isSubmitting}>
                    Sign Up{" "}
                    <i className="fa fa-user-plus" aria-hidden="true"></i>{" "}
                  </button>
                  <ErrorMessage
                    name="serverError"
                    component="div"
                    className="error-message"
                  />
                </div>
              </Form>
            )}
          </Formic>
        </div>
      </div>
    </div>
  );
};

export default Registration;
