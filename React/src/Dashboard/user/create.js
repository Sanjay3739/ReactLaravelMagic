import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SaveAltOutlinedIcon,ControlCameraIcon, ContactsOutlinedIcon, Box, InputLabel, MenuItem, FormControl, Select, ToggleOffOutlinedIcon, WifiCalling3OutlinedIcon, AlternateEmailOutlinedIcon, PeopleAltOutlinedIcon, VpnKeyOutlinedIcon, PermIdentityOutlinedIcon, ChangeCircleOutlinedIcon } from '../../component/icon';
import http from "../../http";
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import { headingStyle } from '../../common/commonStyle';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserCreate = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState([]);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    status: '',
    avatar: null,
    mobile_no: '',
    role_id: '',
    is_view: 0,
    is_delete: 0,
    is_create: 0,
    is_edit: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (event) => {
    setFormData((prevData) => ({ ...prevData, avatar: event.target.files[0] }));
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const form = new FormData();
      form.append('first_name', formData.first_name);
      form.append('last_name', formData.last_name);
      form.append('email', formData.email);
      form.append('password', formData.password);
      form.append('status', formData.status);
      form.append('avatar', formData.avatar);
      form.append('mobile_no', formData.mobile_no);
      form.append('role_id', formData.role_id);
      form.append('is_view', formData.is_view);
      form.append('is_delete', formData.is_delete);
      form.append('is_create', formData.is_create);
      form.append('is_edit', formData.is_edit);


      await http.post('/users', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('User created successfully');
      navigate('/user/index');

      console.log('User created successfully');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error(error);
      }
      toast.error('User Not created successfully');
    }
  };

  useEffect(() => {
    fetchRole();
  }, []);

  const handleStatusChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({ ...prevData, status: parseInt(value) }));
  };

  const fetchRole = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/getRole');
      const roles = await response.json();
      setRole(roles);
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };

  const handleCheckboxChange = (event) => {
    const permissionName = event.target.name;
    const isChecked = event.target.checked;
    const newValue = isChecked ? 1 : 0;

    setFormData((prevData) => ({
      ...prevData,
      [permissionName]: newValue,
    }));
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
                <header className='head-forms'>
                  <h2>User Detail Create Page</h2>
                  <hr />
                  <p>Below User Detail Form Fill!.............</p>
                </header>
                <div className='inputField'>
                  <div className="row">
                    <form onSubmit={handleSubmit}>
                      <div className='errors'>
                        {Object.entries(errors).map(([key, value]) => (
                          <div className="error" key={key}>{value[0]}</div>
                        ))}
                      </div>
                      <div className="col-lg-12 head-form">
                        <PermIdentityOutlinedIcon />
                        <input
                          type="text"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleInputChange}
                          placeholder="First Name"
                        />
                        <PeopleAltOutlinedIcon />
                        <input
                          type="text"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleInputChange}
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="col-lg-12 head-form">
                        <AlternateEmailOutlinedIcon />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email"
                        />
                        <WifiCalling3OutlinedIcon />
                        <input
                          type="text"
                          name="mobile_no"
                          value={formData.mobile_no}
                          onChange={handleInputChange}
                          placeholder="Mobile Number"
                        />
                      </div>
                      <div className="col-lg-12 head-form">
                        <VpnKeyOutlinedIcon />
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Password"
                        />
                        <ChangeCircleOutlinedIcon />
                        <input
                          type="file"
                          name="avatar"
                          onChange={handleFileChange}
                          placeholder="Avatar"
                          className="hide_file"
                        />

                      </div>
                      <div className="col-lg-12 head-form">
                        <div className="row" align='start'>
                          <div className="col-lg-6 d-flex  mb-5">
                            <ToggleOffOutlinedIcon />
                            <Box sx={{ marginLeft: 2, minWidth: 120 }}>
                              <FormControl className='userDropdown'>
                                <InputLabel htmlFor="demo-simple-select-label">Status</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  name='status'
                                  value={formData.status}
                                  label="status"
                                  onChange={handleStatusChange} a
                                >
                                  <MenuItem value={1}>Active</MenuItem>
                                  <MenuItem value={0}>Inactive</MenuItem>
                                </Select>
                              </FormControl>
                            </Box>
                          </div>

                          <div className="col-lg-6 d-flex mb-5">
                            <ControlCameraIcon />
                            <FormControl sx={{ marginLeft: 2, minWidth: 200, maxHeight: '50px', backgroundColor: 'white' }}>
                              <InputLabel id="role-label">Role</InputLabel>
                              <Select as={Select} name="role_id" labelId="role-label" label="Role" value={formData.role_id} onChange={handleInputChange}>
                                <MenuItem value=""><em>None</em></MenuItem>
                                {role.map((role) => (
                                  <MenuItem key={role.id} value={role.id}>
                                    {role.name}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>

                          <div className='col-lg-6 '>
                            <label>
                              <input className='checkbox-container'
                                type="checkbox"
                                name="is_edit"
                                checked={formData.is_edit}
                                onChange={handleCheckboxChange}
                              />
                              Edit
                            </label>
                            <br />

                            <label>
                              <input className='checkbox-container'
                                type="checkbox"
                                name="is_delete"
                                checked={formData.is_delete}
                                onChange={handleCheckboxChange}
                              />
                              Delete
                            </label>
                            <br />

                          </div>
                          <div className='col-lg-6'>
                            <label>
                              <input className='checkbox-container'
                                type="checkbox"
                                name="is_create"
                                checked={formData.is_create}
                                onChange={handleCheckboxChange}
                                style={{
                                  color: formData.is_create ? 'green' : 'red',
                                }}
                              />
                              Create
                            </label>
                            <br />

                            <label >
                              <input className='checkbox-container'
                                type="checkbox"
                                name="is_view"
                                checked={formData.is_view}
                                onChange={handleCheckboxChange}
                              />
                              View
                            </label>
                            <br />

                          </div>

                        </div>
                      </div>

                      <div className="col-lg-6 uploads">
                        <button className='submitBtn'>
                          Submit<SaveAltOutlinedIcon className='ms-3' />
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
    </div>
  );
};

export default UserCreate;
