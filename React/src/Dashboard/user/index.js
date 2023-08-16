
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesome, PensileIcon, DeleteIcon, EyeIcon, ContactsOutlinedIcon, PersonAddAltTwoToneIcon, ToggleOffOutlinedIcon, MarkEmailReadOutlinedIcon, ThumbUpAltOutlinedIcon, BadgeOutlinedIcon, PhoneCallbackOutlinedIcon, CropOriginalOutlinedIcon } from '../../component/icon';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper, Stack, Button, FormControl, InputLabel, MenuItem, Select, } from '@mui/material';
import http from '../../http';
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import { headingStyle, avatarStyle, StyledTableCell, StyledTableRow } from '../../common/commonStyle';
import 'react-toastify/dist/ReactToastify.css';

const UserIndex = () => {
    const navigate = useNavigate();
    const userRole = localStorage.getItem('role');
    console.log('User Role:', userRole);
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    const loggedInUserId = loggedInUser.id;
    const [loggedInUserPermissions, setLoggedInUserPermissions] = useState([]);
    console.log('login user id :', loggedInUserId);
    console.log('login permission :', loggedInUserPermissions);
    const [data, setData] = useState([]);
    const [, setRole] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [sortField, setSortField] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [, setShowSuccessAlert] = useState(false);
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');


    useEffect(() => {
        const delaySearch = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 300);
        return () => {
            clearTimeout(delaySearch);
        };
    }, [searchQuery]);


    useEffect(() => {

        console.log('login user id :', loggedInUserId);
        // console.log('login permission :', loggedInUserPermissions);
        fetchLoggedInUserPermissions(loggedInUserId);
        fetchRole();
        fetchData();
    }, [currentPage, rowsPerPage, sortField, sortOrder, debouncedSearchQuery]);


    const fetchLoggedInUserPermissions = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8000/api/getPermission/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch permissions');
            }
            const permissionData = await response.json();
            setLoggedInUserPermissions(permissionData);
            return permissionData;
        } catch (error) {
            console.error('Error fetching logged-in user permissions:', error);
            return [];
        }
    };

    const fetchData = async () => {
        try {
            const response = await http.get(
                `/users?page=${currentPage}&query=${debouncedSearchQuery}&rowsPerPage=${rowsPerPage}&sortField=${sortField}&sortOrder=${sortOrder}`
            );
            console.log("Fetched User Data:", response.data.data);
            setData(response.data.data);
            setTotalPages(response.data.last_page);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };


    const fetchRole = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/getRole');
            const data = await response.json();
            const rolesMap = data.reduce((acc, role) => {
                acc[role.id] = role;
                return acc;
            }, {});

            // Add permissions data to roles
            const rolesWithPermissions = data.reduce((acc, role) => {
                acc[role.id] = role;
                acc[role.id].name = role.name;
                // Assuming the role object has a 'permissions' property
                return acc;
            }, {});
            console.log('role Name: ', rolesWithPermissions);
            setRole(rolesWithPermissions);
        } catch (error) {
            console.error('Error fetching Role:', error);
        }
    };

    // Handle search input change
    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    // Handle sorting change
    const handleSortChange = (field) => {
        if (field === sortField) {
            // Toggle sort order if the same field is clicked again
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            // Set the new sort field and default sort order to asc
            setSortField(field);
            setSortOrder("desc");
        }
    };


    // Handle delete user
    const handleDelete = async (id) => {
        try {
            await http.delete(`/users/${id}`);
            setData((prevData) => prevData.filter((user) => user.id !== id));
            setShowSuccessAlert(true);
            toast.success('User Deleted successfully');
        } catch (error) {
            console.error(error);
            toast.error('User Not deleted successfully');
        }
    };


    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Handle rows per page change
    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(event.target.value);
    };

    // Navigate to create user page
    const Create = () => {
        navigate('/user/create');
        toast.success('User created successfully');
    };

    // Navigate to edit user page
    const Edit = (id) => {
        navigate(`/user/edit/${id}`);
    };

    // Navigate to show user page
    const Show = (id) => {
        navigate(`/user/show/${id}`);
    };

    return (
        <div>
            <div className='d-flex' style={{ backgroundColor: '#d1dad3' }}>
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
                            <div className='d-flex mt-3 justify-content-between' >
                                <div className='search'>
                                    <input
                                        type='text'
                                        className='searching m-3'
                                        value={searchQuery}
                                        onChange={handleSearch}
                                        placeholder='Search by name or email...'
                                    />
                                </div>
                                <div className='heads'>
                                    <header className="head-form">
                                        <h2> Index Page </h2>
                                        <hr />
                                        <p> All User Listing Bellow to....</p>
                                    </header>
                                </div>

                                {userRole === "1" ? (
                                    <Stack spacing={2} direction='row' className='m-3'>
                                        <Button variant='contained' onClick={Create}>
                                            Create <PersonAddAltTwoToneIcon className='ps-2' />
                                        </Button>
                                    </Stack>
                                ) : (
                                    <>
                                        {loggedInUserPermissions.find((perm) => parseInt(perm.is_create) === 1) ? (
                                            <Stack spacing={2} direction='row' className='m-3'>
                                                <Button variant='contained' onClick={Create}>
                                                    Create <PersonAddAltTwoToneIcon className='ps-2' />
                                                </Button>
                                            </Stack>
                                        ) : (
                                            <div className='no-permission-message'></div>
                                        )}
                                    </>
                                )}

                            </div>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 600 }} aria-label='customized table'>
                                    <TableHead className='tableheader'>
                                        <TableRow>
                                            <StyledTableCell color='white'>
                                                Avatar <CropOriginalOutlinedIcon />
                                            </StyledTableCell>
                                            <StyledTableCell
                                                align="center"
                                                onClick={() => handleSortChange("first_name")}
                                                style={{ cursor: "pointer" }}
                                            >
                                                First Name <BadgeOutlinedIcon />
                                                {sortField === "first_name" && (
                                                    <span className="sort-icon">
                                                        {sortOrder === "asc" ? "↑" : "↓"}
                                                    </span>
                                                )}
                                            </StyledTableCell>
                                            <StyledTableCell align='center'>
                                                last Name  <BadgeOutlinedIcon />
                                            </StyledTableCell>
                                            <StyledTableCell
                                                align="center"
                                                className="sg"
                                                onClick={() => handleSortChange("email")}
                                                style={{ cursor: "pointer" }}
                                            >
                                                Email<MarkEmailReadOutlinedIcon />
                                                {sortField === "email" && (
                                                    <span className="sort-icon">
                                                        {sortOrder === "asc" ? "↑" : "↓"}
                                                    </span>
                                                )}
                                            </StyledTableCell>
                                            <StyledTableCell align='center'>
                                                Mobile Number <PhoneCallbackOutlinedIcon />
                                            </StyledTableCell>
                                            <StyledTableCell align='center'>
                                                Status <ToggleOffOutlinedIcon />
                                            </StyledTableCell>
                                            <StyledTableCell align='center'>
                                                Action <ThumbUpAltOutlinedIcon />
                                            </StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {Array.isArray(data) && data.length > 0 ? (
                                            data.map((user) => (
                                                <StyledTableRow key={user.id}>
                                                    <StyledTableCell component='th' scope='row'>
                                                        {user.avatar ? (
                                                            <img
                                                                src={`http://127.0.0.1:8000/storage/${user.avatar}`}
                                                                alt="Avatar"
                                                                style={avatarStyle}
                                                            />
                                                        ) : (
                                                            <img
                                                                src="/noimage.jpg" // Update this path to the correct path of your static image
                                                                alt="No Avatar"
                                                                style={avatarStyle}
                                                            />
                                                        )}
                                                    </StyledTableCell>
                                                    <StyledTableCell align='center'>
                                                        {user.first_name || '-'}
                                                    </StyledTableCell>
                                                    <StyledTableCell align='center'>
                                                        {user.last_name || '-'}
                                                    </StyledTableCell>
                                                    <StyledTableCell align='center'>
                                                        {user.email || '-'}
                                                    </StyledTableCell>
                                                    <StyledTableCell align='center'>
                                                        {user.mobile_no || '-'}
                                                    </StyledTableCell>
                                                    <StyledTableCell align='center'>
                                                        <span style={{ color: user.status === 1 ? 'LimeGreen' : 'red' }}>
                                                            {user.status === 1 ? 'Active' : 'Inactive'}
                                                        </span>
                                                    </StyledTableCell>

                                                    <StyledTableCell align='right' className='d-flex'>
                                                        {userRole === "1" ? (
                                                            // Admin user can perform all actions
                                                            <>
                                                                <a className='delete' onClick={() => handleDelete(user.id)}>
                                                                    <FontAwesome icon={DeleteIcon} />
                                                                </a>
                                                                <a className='edit' onClick={() => Edit(user.id)}>
                                                                    <FontAwesome icon={PensileIcon} />
                                                                </a>
                                                                <a className='show' onClick={() => Show(user.id)}>
                                                                    <FontAwesome icon={EyeIcon} />
                                                                </a>
                                                            </>
                                                        ) : (
                                                            // Non-admin users have permission checks
                                                            <>
                                                                {loggedInUserPermissions.find((perm) => parseInt(perm.is_delete) === 1) ? (
                                                                    <a className='delete' onClick={() => handleDelete(user.id)}>
                                                                        <FontAwesome icon={DeleteIcon} />
                                                                    </a>
                                                                ) : null}

                                                                {loggedInUserPermissions.find((perm) => parseInt(perm.is_edit) === 1) ? (
                                                                    <a className='edit' onClick={() => Edit(user.id)}>
                                                                        <FontAwesome icon={PensileIcon} />
                                                                    </a>
                                                                ) : null}

                                                                {loggedInUserPermissions.find((perm) => parseInt(perm.is_view) === 1) ? (
                                                                    <a className='show' onClick={() => Show(user.id)}>
                                                                        <FontAwesome icon={EyeIcon} />
                                                                    </a>
                                                                ) : null}

                                                                {/* Add more conditions for other actions */}

                                                                {loggedInUserPermissions.every((perm) => parseInt(perm.is_create) !== 1) &&
                                                                    !loggedInUserPermissions.some((perm) => parseInt(perm.is_edit) === 1) &&
                                                                    !loggedInUserPermissions.some((perm) => parseInt(perm.is_delete) === 1) &&
                                                                    !loggedInUserPermissions.some((perm) => parseInt(perm.is_view) === 1) ? (
                                                                    <span style={{ color: 'red' }}>No permission allow for all actions</span>
                                                                ) : null}
                                                            </>
                                                        )}
                                                    </StyledTableCell>


                                                </StyledTableRow>
                                            ))
                                        ) : (
                                            <StyledTableRow>
                                                <StyledTableCell colSpan={6} align="center">
                                                    No data available.
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <div className=" d-flex footer">
                                <div className="col-lg-2  m-4 dropdown">
                                    <FormControl sx={{ minWidth: 120 }} size="small">
                                        <InputLabel id="demo-select-small-label">Rows</InputLabel>
                                        <Select
                                            labelId="demo-select-small-label"
                                            id="demo-select-small"
                                            value={rowsPerPage}
                                            label="Rows"
                                            onChange={handleRowsPerPageChange}
                                        >
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
                                        <button onClick={() => handlePageChange(currentPage - 1)}>
                                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path id="next" d="m12.017 1.995c5.517 0 9.997 4.48 9.997 9.998s-4.48 9.998-9.997 9.998c-5.518 0-9.998-4.48-9.998-9.998s4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.498 8.498 8.498 8.497-3.808 8.497-8.498-3.807-8.498-8.497-8.498zm-1.528 4.715s-1.502 1.505-3.255 3.259c-.147.147-.22.339-.22.531s.073.383.22.53c1.753 1.754 3.254 3.258 3.254 3.258.145.145.335.217.526.217.192-.001.384-.074.531-.221.292-.293.294-.766.003-1.057l-1.977-1.977h6.693c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-6.693l1.978-1.979c.29-.289.287-.762-.006-1.054-.147-.147-.339-.221-.53-.222-.19 0-.38.071-.524.215z" fillRule="nonzero" /></svg>
                                        </button>
                                    )}
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            className={currentPage === page ? "active" : ""}
                                            onClick={() => handlePageChange(page)}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    {currentPage < totalPages && (
                                        <button onClick={() => handlePageChange(currentPage + 1)}>

                                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path id="next" d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" fillRule="nonzero" /></svg>
                                        </button>
                                    )}
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={3000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable
                                        pauseOnHover
                                        theme="colored"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}


export default UserIndex;




