import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import http from "../../http";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";

const headingStyle = {
  color: "red",
  fontSize: "24px",
  background: "black",
  padding: "20px",
};

const OccupationCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    status: "1",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("status", formData.status);

      await http.post("/occupation", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Occupation created successfully");
      navigate("/occupation/index");
      console.log("Occupation created successfully");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error(error);
      }
      toast.error("Occupation Not created successfully");
    }
  };

  const handleStatusChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({ ...prevData, status: parseInt(value) }));
  };

  return (
    <div>
      <div className="d-flex">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10">
          <Navbar />
          <div className="col-lg-12">
            <h1 style={headingStyle}>
              <HandshakeRoundedIcon /> Occupation
            </h1>
            <div className="container w-50">
              <div className="card">
                <header className="head-forms mt-3">
                  <h2>Occupation Create Page</h2>
                  <hr />
                  <p>Below Occupation Detail Form Fill!.............</p>
                </header>
                <div className="inputField">
                  <form onSubmit={handleSubmit}>
                    <div className="errored">
                      {errors.name && (
                        <div className="error">{errors.name[0]}</div>
                      )}
                      {errors.status && (
                        <div className="error">{errors.status[0]}</div>
                      )}
                    </div>
                    <div className="col-lg-12 head-form">
                      <PermIdentityOutlinedIcon />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Occupation Name"
                      />
                    </div>
                    <div className="col-lg-12 d-flex down mb-5">
                      <ToggleOffOutlinedIcon />
                      <Box sx={{ minWidth: 120, marginLeft: 2 }}>
                        <FormControl className="userDropdown">
                          <InputLabel htmlFor="demo-simple-select-label">
                            Status
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="status"
                            value={formData.status}
                            label="status"
                            onChange={handleStatusChange}
                          >
                            <MenuItem value={1}>Active</MenuItem>
                            <MenuItem value={0}>Inactive</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>
                    <div className="col-lg-6 uploads">
                      <button className="submitBtn">
                        Submit
                        <SaveAltOutlinedIcon className="ms-3" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccupationCreate;
