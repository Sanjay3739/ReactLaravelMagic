import React from 'react';
import { StyledTableCell, avatarStyle, StyledTableRow, } from "../../../common/commonStyle";
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { ToggleOffOutlinedIcon, MarkEmailReadOutlinedIcon, ThumbUpAltOutlinedIcon, BadgeOutlinedIcon, PhoneCallbackOutlinedIcon, CropOriginalOutlinedIcon } from '../../../component/icon';
import UserActionButtons from "../../../Dashboard/user/UserFormComponante/action_btn";
const UserTableBody = ({ userRole, loggedInUserPermissions, handleSortChange, data, handleDelete, Edit, Show, sortField, sortOrder }) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 600 }} aria-label='customized table'>
                <TableHead className='tableheader'>
                    <TableRow>
                        <StyledTableCell color='white'> Avatar <CropOriginalOutlinedIcon /></StyledTableCell>
                        <StyledTableCell align="center" onClick={() => handleSortChange("first_name")} style={{ cursor: "pointer" }}>First Name <BadgeOutlinedIcon /> {sortField === "first_name" && (<span className="sort-icon">{sortOrder === "asc" ? "↑" : "↓"}</span>)}  </StyledTableCell>
                        <StyledTableCell align='center'> last Name<BadgeOutlinedIcon /></StyledTableCell>
                        <StyledTableCell align="center" onClick={() => handleSortChange("email")} style={{ cursor: "pointer" }}>Email<MarkEmailReadOutlinedIcon />{sortField === "email" && (<span className="sort-icon">  {sortOrder === "asc" ? "↑" : "↓"} </span>)} </StyledTableCell>
                        <StyledTableCell align='center'> Mobile Number <PhoneCallbackOutlinedIcon /></StyledTableCell>
                        <StyledTableCell align='center'> Status <ToggleOffOutlinedIcon /> </StyledTableCell>
                        <StyledTableCell align='center'> Action <ThumbUpAltOutlinedIcon /> </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.isArray(data) && data.length > 0 ? (
                        data.map((user) => (
                            <StyledTableRow key={user.id}>
                                <StyledTableCell component='th' scope='row'>
                                    {user.avatar ? (
                                        <img src={`http://127.0.0.1:8000/storage/${user.avatar}`} alt="Avatar" style={avatarStyle} />
                                    ) : (
                                        <img src="/noimage.jpg" alt="No Avatar" style={avatarStyle} />
                                    )}
                                </StyledTableCell>
                                <StyledTableCell align='center'>{user.first_name || '-'}</StyledTableCell>
                                <StyledTableCell align='center'>{user.last_name || '-'}</StyledTableCell>
                                <StyledTableCell align='center'>{user.email || '-'} </StyledTableCell>
                                <StyledTableCell align='center'>{user.mobile_no || '-'}</StyledTableCell>
                                <StyledTableCell align='center'><span style={{ color: user.status === 1 ? 'LimeGreen' : 'red' }}> {user.status === 1 ? 'Active' : 'Inactive'}</span> </StyledTableCell>
                                <StyledTableCell align='right' className='d-flex'>
                                    <UserActionButtons
                                        userRole={userRole}
                                        loggedInUserPermissions={loggedInUserPermissions}
                                        user={user}
                                        handleDelete={handleDelete}
                                        Edit={Edit}
                                        Show={Show}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))
                    ) : (
                        <StyledTableRow><StyledTableCell colSpan={6} align="center"> No data available. </StyledTableCell> </StyledTableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default UserTableBody;
