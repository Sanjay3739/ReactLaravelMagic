/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ReplyAllOutlinedIcon, ContactsOutlinedIcon } from '../../component/icon';
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import { headingStyle } from '../../common/commonStyle';

function UserShow() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/users/${id}`);
        console.log('User Details Response:', response.data); // Log the entire response
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, [id]);

  const handleBack = () => {
    navigate('/user/index');
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='d-flex'>
      <div className='col-lg-2'> <Sidebar /></div>
      <div className='col-lg-10'> <Navbar />
        <div className='col-lg-12'>  <h1 style={headingStyle}>  <ContactsOutlinedIcon /> User</h1>
          <div className='container-fluid'>
            <div className='card'>
              <header className="head-forms">
                <h2>User Detail Page</h2>
                <hr />
                <p>Bellow User Detail check!.............</p>
              </header>
              <div className='details text-center'>
                <div className='row'>
                  <div className="card-body text-center ">
                    {user.avatar && <img className="img-account-profiles mb-3" src={`http://127.0.0.1:8000/storage/${user.avatar}`} alt="Avatar" style={{ height: "350px", width: "350px", borderRadius: "50%" }} />}
                  </div>

                  <div className='col-lg-12'>
                    <div className='mx-auto role_box'>
                      <span className="role">ROLE:</span> &nbsp;
                      <span className='role_value'>{user.role ? user.role.name : 'N/A'}</span>
                    </div>
                  </div>

                  <div className='col-lg-12 ' >
                    <div className='row'>
                      <div className="card-body text-start col-lg-6">

                        <div className='heading'>  <span className="role">Full Name:</span> &nbsp;  <span className='role_value' >{user.first_name} {user.last_name}</span>  </div>

                        <div className='heading'>  <span className="role">Mobile Number:</span>  &nbsp; <span className='role_value' >{user.mobile_no}</span>  </div>

                        <div className='heading'>  <span className="role">Birthday:</span> &nbsp; <span className='role_value' > {user.birthday}</span> </div>

                        <div className='heading'>  <span className="role">Occupation:</span> &nbsp;  <span className='role_value' >{user.occupation}</span> </div>

                        <div className='heading'>  <span className="role">What You Like:</span>  &nbsp;  <span className='role_value' >{user.what_you_like}</span> </div>

                      </div>

                      <div className="card-body text-start col-lg-6">

                        <div className='heading'>  <span className="role">Email:</span> &nbsp;  <span className='role_value' >{user.email}</span> </div>

                        <div className='heading'>  <span className="role">Status:</span> &nbsp; <span className='role_value' style={{ color: user.status === 1 ? 'DarkGreen' : 'red' }}> {user.status === 1 ? 'Active' : 'Inactive'} </span></div>

                        <div className='heading'>  <span className="role">Gender:</span> &nbsp;  <span className='role_value' >{user.gender}</span> </div>

                        <div className='heading'>  <span className="role">Location:</span> &nbsp;  <span className='role_value' >{user.location}</span> </div>

                        <div className='heading'>  <span className="role">Address:</span> &nbsp; <span className='role_value' > {user.address}</span> </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-12 ms-3'> <a className='back' onClick={handleBack}> <ReplyAllOutlinedIcon /> </a> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserShow;
