import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import http from "../../http";
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import { headingStyle } from '../../common/commonStyle';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import UserForm from "../user/UserFormComponante/user_form";

const UserCreate = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState([]);
  const [errors, setErrors] = useState({});
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
      const response = await http.get(`/getRole`);
      const roles =  response.data;
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
                  <div className='row'>
                    <UserForm
                      formData={formData}
                      handleInputChange={handleInputChange}
                      handleStatusChange={handleStatusChange}
                      handleFileChange={handleFileChange}
                      handleCheckboxChange={handleCheckboxChange}
                      handleSubmit={handleSubmit}
                      errors={errors}
                      roleOptions={role}
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

export default UserCreate;

