import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Form,Checkbox, InputLabel, Box, MenuItem, Select, FormControl, PatternIcon, SaveAltOutlinedIcon, AlternateEmailOutlinedIcon, PeopleAltOutlinedIcon, WifiCalling3OutlinedIcon, ChangeCircleOutlinedIcon, ContactsOutlinedIcon } from '../../component/icon';
import http from "../../http";
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import { headingStyle } from '../../common/commonStyle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UserEdit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [inputs, setInputs] = useState({
    first_name: '',
    last_name: '',
    email: '',
    status: null,
    mobile_no: '',
    password: '',
    avatar: null,
    is_view: '0',
    is_delete: '0',
    is_create: '0',
    is_edit: '0',
  });


  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUser = async () => {
    try {
      const response = await http.get(`http://localhost:8000/api/users/${id}`);
      const userData = response.data;
      setInputs({
        ...userData,
        is_view: userData.is_view === 1,
        is_delete: userData.is_delete === 1,
        is_create: userData.is_create === 1,
        is_edit: userData.is_edit === 1,
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };



  const handleCheckboxChange = (event) => {
    const permissionName = event.target.name;

    // Update the local state of checkboxes
    setInputs((prevInputs) => ({
      ...prevInputs,
      [permissionName]: !prevInputs[permissionName],
    }));
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
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
    formData.append('_method', 'PATCH');
    formData.append('first_name', inputs.first_name);
    formData.append('last_name', inputs.last_name);
    formData.append('email', inputs.email);
    formData.append('mobile_no', inputs.mobile_no);
    formData.append('password', inputs.password);
    formData.append('status', inputs.status);
    formData.append('is_view', inputs.is_view ? 1 : 0);
    formData.append('is_delete', inputs.is_delete ? 1 : 0);
    formData.append('is_create', inputs.is_create ? 1 : 0);
    formData.append('is_edit', inputs.is_edit ? 1 : 0);


    if (inputs.avatar !== null) {
      formData.append('avatar', inputs.avatar);
    }

    try {
      await axios.post(`http://localhost:8000/api/users/${id}`, formData);
      toast.success('User updated successfully');
      navigate('/user/index');
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Failed to update user');
    }
  };



  return (
    <div>
      <div className='d-flex'>
        <div className='col-lg-2'>
          <Sidebar />
        </div>
        <div className='col-lg-10'>
          <Navbar />
          <div className='col-lg-12'>
            <h1 style={headingStyle}>
              <ContactsOutlinedIcon /> User
            </h1>
            <div className='container-fluid'>
              <div className='card'>
                <header className="head-forms">
                  <h2>User Edit Page</h2>
                  <hr />
                  <p>Below User Detail Form Edit!.............</p>
                </header>
                <div className='inputField'>
                  <Form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-12 head-form">
                        <PeopleAltOutlinedIcon />
                        <input
                          type="text"
                          name="first_name"
                          value={inputs.first_name}
                          onChange={handleChange}
                          placeholder="First Name"
                        />
                        <PeopleAltOutlinedIcon />
                        <input
                          type="text"
                          name="last_name"
                          value={inputs.last_name}
                          onChange={handleChange}
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="col-lg-12 head-form">
                        <AlternateEmailOutlinedIcon />
                        <input
                          type="email"
                          name="email"
                          value={inputs.email}
                          onChange={handleChange}
                          placeholder="Email"
                        />
                        <WifiCalling3OutlinedIcon />
                        <input
                          type="text"
                          name="mobile_no"
                          value={inputs.mobile_no}
                          onChange={handleChange}
                          placeholder="Mobile Number"
                        />
                      </div>
                      <div className="col-lg-12 head-form">
                        <PatternIcon />
                        <input
                          type="password"
                          name="password"
                          value={inputs.password}
                          onChange={handleChange}
                          placeholder="Password"
                        />
                        <ChangeCircleOutlinedIcon />
                        <input
                          type="file"
                          name="avatar"
                          onChange={handleAvatarChange}
                          placeholder="Avatar"
                          className="hide_file"
                        />
                      </div>
                      <div className="col-lg-6 downs mb-5">
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl className="userDropdown">
                            <InputLabel htmlFor="demo-simple-select-label">Status</InputLabel>
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
                      <div className='col-lg-6 head-form'>
                        <label>
                          <Checkbox
                            name="is_edit"
                            checked={inputs.is_edit}
                            onChange={handleCheckboxChange}
                          />
                          Edit
                        </label>
                        <br />

                        <label>
                          <Checkbox
                            name="is_delete"
                            checked={inputs.is_delete}
                            onChange={handleCheckboxChange}
                          />
                          Delete
                        </label>
                        <br />

                      </div>
                      <div className='col-lg-6 head-form'>
                        <label>
                          <Checkbox
                            name="is_create"
                            checked={inputs.is_create}
                            onChange={handleCheckboxChange}
                          />
                          Create
                        </label>
                        <br />
                        <label >
                          <Checkbox
                            name="is_view"
                            checked={inputs.is_view}
                            onChange={handleCheckboxChange}
                          />
                          View
                        </label>
                        <br />

                      </div>
                      <div className="col-lg-6 uploads">
                        <button type="submit" className='submitBtn'>
                          Update<SaveAltOutlinedIcon className='ms-3' />
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}