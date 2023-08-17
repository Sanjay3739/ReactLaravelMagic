import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SensorOccupiedOutlined from "@mui/icons-material/SensorOccupiedOutlined";
import http from "../../http";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import { headingStyle } from '../../common/commonStyle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoleForm from '../role/RoleFormComponante/role_form';

const RoleCreate = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    status: "1",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleStatusChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("handleSubmit called");
    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("status", formData.status);

      await http.post("/roles", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Role created successfully");
      navigate("/role/index"); // Navigates to the Role/Index page
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error(error);
      }

      toast.error("Role not created successfully");
    }
  };
  
  return (
    <div className="d-flex">
      <div className="col-lg-2"><Sidebar /></div>
      <div className="col-lg-10"><Navbar />
        <div className="col-lg-12">
          <h1 style={headingStyle}><SensorOccupiedOutlined /> Roles </h1>
          <div className="container w-50">
            <div className="card">
              <header className="head-forms"> <h2>Roles Create Page</h2> <hr /><p>Below Roles Detail Form Fill!.............</p></header>
              <div className="inputField">
                <div className="row">
                  <RoleForm
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleStatusChange={handleStatusChange}
                    handleSubmit={handleSubmit}
                    errors={errors}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleCreate;
