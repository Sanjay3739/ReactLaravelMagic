/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesome, PensileIcon, DeleteIcon, BadgeOutlined, ToggleOffOutlined, ThumbUpAltOutlined, PersonAddAltTwoTone, SensorOccupiedOutlined, PreviousIcon, NextIcon, } from '../../component/icon';
import { Box, Table, TableBody, TableContainer, TableHead, TableRow, Paper, Stack, Button, FormControl, InputLabel, MenuItem, Select, } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import http from '../../http';
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import { headingStyle, StyledTableCell, StyledTableRow } from '../../common/commonStyle';

function UserIndex() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [, setShowSuccessAlert] = useState(false);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  useEffect(() => {
    setDebouncedSearchQuery(searchQuery);
  }, [searchQuery]);

  const fetchData = async () => {
    try {
      const response = await http.get(
        `/roles?page=${currentPage}&query=${debouncedSearchQuery}&rowsPerPage=${rowsPerPage}`
      );
      setData(response.data.data);
      setTotalPages(response.data.last_page);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      fetchData();
    }, 300);

    return () => {
      clearTimeout(delaySearch);
    };
  }, [currentPage, rowsPerPage, debouncedSearchQuery]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = async (id) => {
    try {
      await http.delete(`/roles/${id}`);
      setData((prevData) => prevData.filter((user) => user.id !== id));
      setShowSuccessAlert(true);
      toast.success("Role Deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Role Not deleted successfully");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };

  const Create = () => {
    navigate("/role/create");
    toast.success("Role created successfully");
  };

  const Edit = (id) => {
    navigate(`/role/edit/${id}`);
  };

  return (
    <div>
      <div className="d-flex" style={{ backgroundColor: "#d1dad3" }}>
        <div className="col-lg-2"> <Sidebar /></div>
        <div className="col-lg-10"> <Navbar />
          <div className="col-lg-12">
            <h1 style={headingStyle}> <SensorOccupiedOutlined /> Roles </h1>
            <div className="container-fluid">
              <div className="d-flex mt-3 justify-content-between">
                <div className="search">
                  <input type="text" className="searching" value={searchQuery} onChange={handleSearch} placeholder=" Search by name......" />
                </div>
                <div className="heads">
                  <header className="head-form">  <h2> Index Page </h2>  <hr />  <p> All Role Listing Bellow to....</p> </header>
                </div>
                <Stack spacing={2} direction="row" className="mb-4"><Button variant="contained" onClick={Create}>Create <PersonAddAltTwoTone className="ps-2" /></Button> </Stack>
              </div>
              <Box sx={{ width: "100%" }}>
                <TableContainer component={Paper} style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset", }} >
                  <Table sx={{ minWidth: 600 }} aria-label="customized table " >
                    <TableHead className="tableheader">
                      <TableRow>
                        <StyledTableCell align="left">Role Name <BadgeOutlined /></StyledTableCell>
                        <StyledTableCell align="left">Status <ToggleOffOutlined /> </StyledTableCell>
                        <StyledTableCell align="left">Action <ThumbUpAltOutlined /></StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Array.isArray(data) && data.length > 0 ? (
                        data.map((user) => (
                          <StyledTableRow key={user.id}>
                            <StyledTableCell align="left">{user.name}</StyledTableCell>
                            <StyledTableCell align="left"> <span style={{ color: user.status === 1 ? "LimeGreen" : "red", }} >{user.status === 1 ? "Active" : "Inactive"} </span>  </StyledTableCell>
                            <StyledTableCell align="left" className="d-flex">
                              <a className="edit" onClick={() => Edit(user.id)}> <FontAwesome icon={PensileIcon} /> </a>
                              <a className="delete" onClick={() => handleDelete(user.id)} > <FontAwesome icon={DeleteIcon} /> </a>
                            </StyledTableCell>
                          </StyledTableRow>
                        ))
                      ) : (
                        <StyledTableRow><StyledTableCell colSpan={6} align="center"> No data available. </StyledTableCell></StyledTableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <div className=" d-flex footer" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset", }}>
                <div className="col-lg-2 mt-4 ms-2 dropdown">
                  <FormControl sx={{ minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Rows</InputLabel>
                    <Select labelId="demo-select-small-label" id="demo-select-small" value={rowsPerPage} label="Rows" onChange={handleRowsPerPageChange} >
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={50}>50</MenuItem>
                      <MenuItem value={100}>100</MenuItem>
                      <MenuItem value={200}>200</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="pagination col-lg-10 mb-2">
                  {currentPage > 1 && (
                    <button onClick={() => handlePageChange(currentPage - 1)}><PreviousIcon /> </button>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button key={page} className={currentPage === page ? "active" : ""} onClick={() => handlePageChange(page)}>  {page} </button>
                    )
                  )}
                  {currentPage < totalPages && (
                    <button onClick={() => handlePageChange(currentPage + 1)}><NextIcon /> </button>
                  )}
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
export default UserIndex;
