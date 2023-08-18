import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, HandshakeRoundedIcon, PersonAddAltTwoToneIcon } from '../../component/icon';
import { Stack, Button } from '@mui/material';
import { headingStyle } from '../../common/commonStyle';
import { ToastContainer, toast } from "react-toastify";
import http from "../../http";
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import OccupationPagination from "../occupation/OccupationFormComponante/pagination";
import OccupationTableBody from "../occupation/OccupationFormComponante/table_body";
import OccupationRowPagination from "../occupation/OccupationFormComponante/row_pagination";
import 'react-toastify/dist/ReactToastify.css';


function OccupationIndex() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  useEffect(() => {
    setDebouncedSearchQuery(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await http.get(
          `/occupation?page=${currentPage}&query=${debouncedSearchQuery}&rowsPerPage=${rowsPerPage}`
        );
        setData(response.data.data);
        setTotalPages(response.data.last_page);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    const delaySearch = setTimeout(fetchData);
    return () => clearTimeout(delaySearch);
  }, [currentPage, rowsPerPage, debouncedSearchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const handleDelete = async (id) => {
    try {
      await http.delete(`/occupation/${id}`);
      setData((prevData) => prevData.filter((user) => user.id !== id));
      setShowSuccessAlert(true);
      toast.success("Occupation Deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Occupation Not Deleted successfully");
    }
  };

  const Create = () => {
    navigate("/occupation/create");
    toast.success("Occupation created successfully");
  };

  const Edit = (id) => {
    navigate(`/occupation/edit/${id}`);
  };

  return (
    <div>
      <div className="d-flex" style={{ backgroundColor: "#d1dad3" }}>
        <div className="col-lg-2"><Sidebar /></div>
        <div className="col-lg-10"><Navbar />
          <div className="col-lg-12"> <h1 style={headingStyle}><HandshakeRoundedIcon />Occupation </h1>
            <div className="container-fluid">
              <div className="d-flex mt-3 justify-content-between">
                <div className="search">
                  <input type="text" className="searching" value={searchQuery} onChange={handleSearch} placeholder="Search by name......" />
                </div>

                <div className="heads"> <header className="head-form"> <h2> Index Page </h2> <hr /><p> All Occupation Listing Bellow to....</p> </header></div>
                <Stack spacing={2} direction="row" className="mb-4"><Button variant="contained" onClick={Create}> Create <PersonAddAltTwoToneIcon className="ps-2" /></Button></Stack>
              </div>

              <Box sx={{ width: "100%" }}><OccupationTableBody data={data} handleDelete={handleDelete} Edit={Edit} setData={setData} setShowSuccessAlert={setShowSuccessAlert} /></Box>

              <div className=" d-flex footer" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset", }} >
                <div className="col-lg-2 mt-4 ms-2 dropdown">
                  <OccupationRowPagination handleRowsPerPageChange={handleRowsPerPageChange} rowsPerPage={rowsPerPage} />
                </div>

                <div className="pagination col-lg-10 mb-2">
                  <OccupationPagination currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />
                  <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OccupationIndex;
