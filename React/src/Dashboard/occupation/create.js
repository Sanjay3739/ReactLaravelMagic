import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HandshakeRoundedIcon } from '../../component/icon';
import http from "../../http";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import { headingStyle } from '../../common/commonStyle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OccupationForm from '../occupation/OccupationFormComponante/occupation_form';


const OccupationCreate = () => {
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
    const { value } = event.target;
    setFormData((prevData) => ({ ...prevData, status: parseInt(value) }));
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
    } catch (error) {
      if (error.response?.data?.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error(error);
      }
      toast.error("Occupation not created successfully");
    }
  };

  return (
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

  );
};

export default OccupationCreate;

