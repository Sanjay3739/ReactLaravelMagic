import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { SensorOccupiedOutlined } from '../../component/icon'; // Import necessary icons
import http from "../../http";
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import { headingStyle } from '../../common/commonStyle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoleForm from '../role/RoleFormComponante/role_form';

const RoleEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    status: "",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await http.get(`/roles/${id}`);
      const userData = response.data;
      const statusValue = userData.status ? 1 : 0;
      setFormData({
        name: userData.name,
        status: statusValue,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleStatusChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: parseInt(value) }));
  };

  const handleSubmit = async () => {
    const updatedData = {
      name: formData.name,
      status: formData.status,
    };

    try {
      await http.patch(`/roles/${id}`, updatedData);
      toast.success("Role Updated successfully");
      navigate("/role/index");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error(error);
      }
      toast.error("Role Not Updated successfully");
    }
  };

  return (
    <div>
      <div className="d-flex">
        <div className="col-lg-2"><Sidebar /></div>
        <div className="col-lg-10"><Navbar />
          <div className="col-lg-12">
            <h1 style={headingStyle}><SensorOccupiedOutlined /> Roles</h1>
            <div className="container w-50 ">
              <div className="card">
                <header className="head-forms "><h2>Role Edit Page</h2><hr /><p>Below Role Detail Form Edit!.............</p></header>
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
    </div>
  );
};

export default RoleEdit;
