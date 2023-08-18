
import React from 'react';
import { BadgeOutlined, ToggleOffOutlined, ThumbUpAltOutlined, FontAwesome, PensileIcon, DeleteIcon } from '../../../component/icon';
import { StyledTableCell, StyledTableRow } from '../../../common/commonStyle';
import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const RoleTableBody = ({ data, handleDelete, Edit }) => {

    return (
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
    );
};

export default RoleTableBody;