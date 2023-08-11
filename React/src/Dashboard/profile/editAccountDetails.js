import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import http from "../../http";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AccountDetails() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [occupations, setOccupations] = useState([]);
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

  const avatarStyle = {
    height: "  15rem",
    width: " 15rem",
    borderRadius: '50%',
    boxShadow: ' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'

  }

  useEffect(() => {
    fetchUser();
    fetchCountries();
    fetchOccupations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/country");
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const fetchOccupations = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/occupation");
      const data = await response.json();
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
      console.error("Error updating user:", error);
      toast.error("Profile Not Updated successfully");
    }
  };

  return (
    <div className="container-xl px-4 mt-4">
      <hr className="mt-0 mb-4" />
      <div className="row">
        <div className="col-xl-4">
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">

              {inputs.avatar ? (
                <img
                  className="img-account-profile"
                  src={`http://127.0.0.1:8000/storage/${inputs.avatar}`}
                  alt="Avatar"
                />
              ) : (
                <img
                  className="img-account-profile "
                  src="/noimage.jpg" // Update this path to the correct path of your static image
                  alt="No Avatar"
                />
              )}


              <div className="small font-italic text-muted mb-4">
                JPG or PNG no larger than 5 MB
              </div>
              <div className="col-lg-12 head-form">
                <input
                  type="file"
                  name="avatar"
                  onChange={handleAvatarChange}
                  placeholder="Avatar"
                  className="hide_file"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="card mb-4">
            <div className="card-header">Account Details</div>
            <div className="card-body">
              <Form onSubmit={handleSubmit}>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="label mb-1" htmlFor="inputFirstName">
                      First name
                    </label>
                    <input
                      className="form-control"
                      id="inputFirstName"
                      type="text"
                      name="first_name"
                      value={inputs.first_name}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="label mb-1" htmlFor="inputLastName">
                      Last name
                    </label>
                    <input
                      className="form-control"
                      id="inputLastName"
                      type="text"
                      name="last_name"
                      value={inputs.last_name}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="label mb-1" htmlFor="inputPhone">
                      Phone number
                    </label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      pattern="[0-9]*"
                      type="tel"
                      maxLength="10"
                      name="mobile_no"
                      value={inputs.mobile_no}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="label mb-1" htmlFor="inputPassword">
                      Password
                    </label>
                    <input
                      className="form-control"
                      id="inputPassword"
                      name="password"
                      value={inputs.password}
                      onChange={handleChange}
                      type="password"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="label mb-1" htmlFor="inputEmailAddress">
                    Email address
                  </label>
                  <input
                    className="form-control"
                    id="inputEmailAddress"
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="label mb-1" htmlFor="inputBirthday">
                      Birthday
                    </label>
                    <input
                      className="form-control"
                      id="inputBirthday"
                      name="birthday"
                      value={inputs.birthday}
                      onChange={handleChange}
                      type="date"
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      className="label mb-1"
                      htmlFor="demo-select-gender-label"
                    >
                      Gender
                    </label>
                    <select
                      className="form-control"
                      id="demo-select-gender-label"
                      name="gender"
                      value={inputs.gender}
                      onChange={handleChange}
                    >
                      <option value="">Select Your Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                      <option>Not Specified</option>
                    </select>
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label
                      className="label mb-1"
                      htmlFor="demo-select-occupation-label"
                    >
                      Occupation
                    </label>
                    <select
                      className="form-control"
                      id="demo-select-occupation-label"
                      name="occupation"
                      value={inputs.occupation}
                      onChange={handleChange}
                    >
                      <option value="">Select an occupation</option>
                      {occupations.data &&
                        Array.isArray(occupations.data) &&
                        occupations.data.map((occupation) => (
                          <option key={occupation.id} value={occupation.name}>
                            {occupation.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label
                      className="label mb-1"
                      htmlFor="demo-select-status-label"
                    >
                      Status
                    </label>
                    <select
                      className="form-control"
                      id="demo-select-status-label"
                      name="status"
                      value={inputs.status}
                      onChange={handleChange}
                    >
                      <option value={1}>Active</option>
                      <option value={0}>Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="label mb-1" htmlFor="inputLocation">
                      Location
                    </label>
                    <select
                      className="form-control"
                      id="inputLocation"
                      name="location"
                      value={inputs.location}
                      onChange={handleChange}
                      placeholder="Enter your location"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country.id} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-12">
                    <label className="label mb-1" htmlFor="inputAddress">
                      Address
                    </label>
                    <textarea
                      className="form-control"
                      id="inputAddress"
                      name="address"
                      value={inputs.address}
                      onChange={handleChange}
                      placeholder="Enter your address"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="label mb-1" htmlFor="inputLike">
                    What You like?
                  </label>
                  <select
                    className="form-control dp"
                    id="inputLike"
                    name="what_you_like"
                    multiple
                    value={inputs.what_you_like}
                    onChange={handleChange}
                  >
                    <option disabled className="item-center">Select Your Hobbies </option>
                    <option className="dropdown_option_white">Coding</option>
                    <option className="dropdown_option_black">Reading</option>
                    <option className="dropdown_option_white">Writing</option>
                    <option className="dropdown_option_black">Cricket</option>
                    <option className="dropdown_option_white">Dance</option>
                    <option className="dropdown_option_black">Camping</option>
                    <option className="dropdown_option_white">Origami</option>
                    <option className="dropdown_option_black">Running</option>
                    <option className="dropdown_option_white">Cooking</option>
                    <option className="dropdown_option_black">Shopping</option>
                  </select>
                </div>
                <button className="btn btn-primary" type="submit">
                  Save changes
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
