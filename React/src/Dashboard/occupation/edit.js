import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import http from "../../http";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import HandshakeRoundedIcon from "@mui/icons-material/SensorOccupiedOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";

const headingStyle = {
  color: "red",
  fontSize: "24px",
  background: "black",
  padding: "20px",
};

const OccupationEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputs, setInputs] = useState({
    name: "",
    status: null,
  });

  useEffect(() => {
    fetchOccupation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchOccupation = async () => {
    try {
      const response = await http.get(
        `http://localhost:8000/api/occupation/${id}`
      );
      const occupationData = response.data;
      setInputs({
        ...occupationData,
      });
    } catch (error) {
      console.error("Error fetching occupation data:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("name", inputs.name);
    formData.append("status", inputs.status);

    try {
      await http.post(`http://localhost:8000/api/occupation/${id}`, formData);
      navigate("/occupation/index");
    } catch (error) {
      console.error("Error updating occupation:", error);
    }
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
            <div className="container w-50 mt-5">
              <div className="card">
                <header className="head-forms mt-3">
                  <h2>Occupation Edit Page</h2>
                  <hr />
                  <p>Below Occupation Detail Form Edit!.............</p>
                </header>
                <div className="inputField">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12 head-form">
                        <PeopleAltOutlinedIcon />
                        <input
                          type="text"
                          name="name"
                          value={inputs.name}
                          onChange={handleChange}
                          placeholder="Role Name"
                        />
                      </div>
                      <div className="col-lg-12 d-flex  downs mt-4 mb-5">
                        <ToggleOffOutlinedIcon />
                        <Box sx={{ minWidth: 120, marginLeft: 2 }}>
                          <FormControl className="userDropdown">
                            <InputLabel htmlFor="demo-simple-select-label">
                              Status
                            </InputLabel>
                            {inputs.status !== null ? (
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                name="status"
                                value={inputs.status}
                                onChange={handleChange}
                                label="Status"
                              >
                                <MenuItem value={1}>Active</MenuItem>
                                <MenuItem value={0}>Inactive</MenuItem>
                              </Select>
                            ) : (
                              <div>Loading...</div>
                            )}
                          </FormControl>
                        </Box>
                      </div>
                    </div>
                    <div className="col-lg-6 uploads">
                      <button type="submit" className="submitBtn">
                        Update
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

export default OccupationEdit;
