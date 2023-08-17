import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { ToggleOffOutlined, HandshakeRoundedIcon, InputLabel, Box, MenuItem, Select, FormControl, SaveAltOutlinedIcon, PeopleAltOutlinedIcon } from '../../component/icon';
import http from "../../http";
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import { headingStyle } from '../../common/commonStyle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OccupationForm from './OccupationFormComponante/occupation_form';

const OccupationEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    status: "",
  });

  useEffect(() => {
    fetchOccupation();
  }, []);

  const fetchOccupation = async () => {
    try {
      const response = await http.get(`/occupation/${id}`);
      const occupationData = response.data;
      const statusValue = occupationData.status ? 1 : 0;
      setFormData({
        name: occupationData.name,
        status: statusValue,
      });
    } catch (error) {
      console.error("Error fetching occupation data:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleStatusChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: parseInt(value) }));
  };

  const handleSubmit = async () => { // Move the try-catch block inside this function
    const updatedData = {
      name: formData.name,
      status: formData.status, // Make sure it's a boolean value
    };

    try {
      await http.patch(`/occupation/${id}`, updatedData);
      toast.success("Occupation Updated successfully");
      navigate("/occupation/index");
    } catch (error) {
      console.error("Error updating Occupation:", error);
    }
  };

  return (
    <div>
      <div className="d-flex">
        <div className="col-lg-2"><Sidebar /> </div>
        <div className="col-lg-10"><Navbar />
          <div className="col-lg-12"><h1 style={headingStyle}><HandshakeRoundedIcon />Occupation </h1>
            <div className="container w-50 mt-5">
              <div className="card">
                <header className="head-forms mt-3"><h2>Occupation Edit Page</h2><hr /><p>Below Occupation Detail Form Edit!.............</p></header>
                <div className="inputField">
                  <div className="row">
                    <OccupationForm
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

export default OccupationEdit;
