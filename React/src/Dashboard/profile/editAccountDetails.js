import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import http from "../../http";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileForm from '../profile/ProfileFormComponante/profile_form';


export default function AccountDetails() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [occupations, setOccupations] = useState([]);
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    status: "",
    mobile_no: "",
    avatar: null,
    occupation: "",
    address: "",
    location: "",
    password: "",
    gender: "",
    birthday: "",
    what_you_like: [],
  });

  useEffect(() => {
    fetchUser();
    fetchCountries();
    fetchOccupations();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await http.get("/country");
      const data = response.data;
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchOccupations = async () => {
    try {
      const response = await http.get("/occupation");
      const data = response.data;
      setOccupations(data);
    } catch (error) {
      console.error("Error fetching occupation:", error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await http.get(`http://localhost:8000/api/users/${id}`);
      const userData = response.data;
      setInputs({
        ...userData,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, options } = event.target;
    if (type === "select-multiple") {
      const selectedOptions = options
        ? Array.from(options)
          .filter((option) => option.selected)
          .map((option) => option.value)
        : [];
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: selectedOptions,
      }));
    } else {
      setInputs((prevInputs) => ({
        ...prevInputs,
        [name]: value,
      }));
    }
  };

  const handleAvatarChange = (event) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      avatar: event.target.files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("_method", "PATCH");
    formData.append("first_name", inputs.first_name);
    formData.append("last_name", inputs.last_name);
    formData.append("email", inputs.email);
    formData.append("password", inputs.password);
    formData.append("mobile_no", inputs.mobile_no);
    formData.append("status", inputs.status);
    formData.append("occupation", inputs.occupation);
    formData.append("address", inputs.address);
    formData.append("location", inputs.location);
    formData.append("what_you_like", inputs.what_you_like);
    formData.append("gender", inputs.gender);
    formData.append("birthday", inputs.birthday);

    if (inputs.avatar !== null) {
      formData.append("avatar", inputs.avatar);
    }

    try {
      await axios.post(`http://localhost:8000/api/users/${id}`, formData);
      toast.success("Profile Updated Successfully");
      navigate("/user/index");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error(error);
      }
      toast.error("Profile Not Updated successfully");
    }
  };

  return (
    <div className="container-xl px-4 mt-4">

      <div className="row">
        <div className="col-xl-4">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              {inputs.avatar ? (
                <img className="img-account-profile" src={`http://127.0.0.1:8000/storage/${inputs.avatar}`} alt="Avatar" />
              ) : (
                <img className="img-account-profile " src="/noimage.jpg" />  // Update this path to the correct path of your static image alt="No Avatar"
              )}
              <div className="small font-italic text-muted mb-4">
                JPG or PNG no larger than 5 MB
              </div>
              <div className="col-lg-12 head-form">
                <input type="file" name="avatar" onChange={handleAvatarChange} placeholder="Avatar" className="hide_file" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card mb-4">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              <ProfileForm inputs={inputs} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} occupations={occupations} countries={countries} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
