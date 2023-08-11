import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DisplaySettingsOutlinedIcon from "@mui/icons-material/DisplaySettingsOutlined";
import ReplyAllOutlinedIcon from "@mui/icons-material/ReplyAllOutlined";

// CSS styles
const headingStyle = {
  color: "red",
  fontSize: "24px",
  background: "black",
  padding: "20px",
};

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/showUserData/${id}`
        );
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
    navigate("/user/index");
  };

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="d-flex">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10">
          <Navbar />
          <div className="col-lg-12">
            <h1 style={headingStyle}>
              <DisplaySettingsOutlinedIcon /> Details Page
            </h1>
            <div className="container">
              <div className="card">
                <header className="head-forms">
                  <h2>User Details</h2>
                  <hr />
                  <p>Bellow User Detail check !.............</p>
                </header>
                <div className="details">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="col-lg-6">
                        <div className="heading">Full Name:</div>
                        <div className="data">
                          {user.first_name} {user.last_name}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="heading">Mobile Number:</div>
                        <div className="data">{user.mobile_no}</div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="col-lg-6">
                        <div className="heading">Email:</div>
                        <div className="data">{user.email}</div>
                      </div>
                      <div className="col-lg-6">
                        <div className="heading">Status:</div>
                        <div className="data">
                          <span
                            style={{
                              color: user.status === 1 ? "LimeGreen" : "red",
                            }}
                          >
                            {user.status === 1 ? "Active" : "Inactive"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <a className="back" onClick={handleBack}>
                        <ReplyAllOutlinedIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
