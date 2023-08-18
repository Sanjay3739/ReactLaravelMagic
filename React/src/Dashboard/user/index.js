
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { ContactsOutlinedIcon } from '../../component/icon';
import http from '../../http';
import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import UserPagination from "../user/UserFormComponante/pagination";
import RowPagination from "../user/UserFormComponante/row_pagination";
import CreateButton from "../user/UserFormComponante/create_btn";
import UserTableBody from "../user/UserFormComponante/table_body";
import { headingStyle } from '../../common/commonStyle';
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
    const [rowsPerPage, setRowsPerPage] = useState(7);
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
        fetchLoggedInUserPermissions(loggedInUserId);
        fetchRole();
        fetchData();
    }, [currentPage, rowsPerPage, sortField, sortOrder, debouncedSearchQuery]);

    const fetchLoggedInUserPermissions = async (userId) => {
        try {
            const response = await http.get(`/getPermission/${userId}`);
            const permissionData = response.data;
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
            const response = await http.get('/getRole');
            const data = response.data;
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
                <div className='col-lg-2'><Sidebar /></div>
                <div className='col-lg-10'><Navbar />
                    <div className='col-lg-12'>
                        <h1 style={headingStyle}> <ContactsOutlinedIcon /> User </h1>
                        <div className='container-fluid'>
                            <div className='d-flex mt-3 justify-content-between' >
                                <div className='search'>
                                    <input type='text' className='searching m-3' value={searchQuery} onChange={handleSearch} placeholder='Search by name or email...' />
                                </div>
                                <div className='heads'>
                                    <header className="head-form"><h2>Index Page</h2><hr /><p> All User Listing Bellow to....</p></header>
                                </div>
                                <CreateButton
                                    userRole={userRole}
                                    loggedInUserPermissions={loggedInUserPermissions}
                                    onClick={Create}
                                />
                            </div>
                            <UserTableBody
                                userRole={userRole}
                                loggedInUserPermissions={loggedInUserPermissions}
                                data={data}
                                handleSortChange={handleSortChange}
                                handleDelete={handleDelete}
                                Edit={Edit}
                                Show={Show}
                                sortField={sortField}
                                sortOrder={sortOrder}
                            />
                            <div className=" d-flex footer">
                                <div className="col-lg-2  m-4 dropdown">
                                    <RowPagination
                                        rowsPerPage={rowsPerPage}
                                        handleRowsPerPageChange={handleRowsPerPageChange}
                                    />
                                </div>
                                <div className="pagination col-lg-10 mb-2">
                                    <UserPagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                    <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
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




