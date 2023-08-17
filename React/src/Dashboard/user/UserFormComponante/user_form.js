import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, PeopleAltOutlinedIcon, ChangeCircleOutlinedIcon, SaveAltOutlinedIcon, ToggleOffOutlinedIcon, AlternateEmailOutlinedIcon, WifiCalling3OutlinedIcon, VpnKeyOutlinedIcon, PermIdentityOutlinedIcon, ControlCameraIcon } from "../../../component/icon";

const UserForm = ({ formData, handleInputChange, handleStatusChange, handleFileChange, handleCheckboxChange, handleSubmit, errors, roleOptions, }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='errors'>
                {Object.entries(errors).map(([key, value]) => (
                    <div className="error" key={key}>{value[0]}</div>
                ))}
            </div>

            <div className="col-lg-12 head-form">
                <PermIdentityOutlinedIcon /><input type="text" name="first_name" value={formData.first_name} onChange={handleInputChange} placeholder="First Name" />
                <PeopleAltOutlinedIcon /><input type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} placeholder="Last Name" />
            </div>

            <div className="col-lg-12 head-form">
                <AlternateEmailOutlinedIcon /><input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
                <WifiCalling3OutlinedIcon /><input type="text" name="mobile_no" value={formData.mobile_no} onChange={handleInputChange} placeholder="Mobile Number" />
            </div>

            <div className="col-lg-12 head-form">
                <VpnKeyOutlinedIcon /><input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
                <ChangeCircleOutlinedIcon /><input type="file" name="avatar" onChange={handleFileChange} placeholder="Avatar" className="hide_file" />
            </div>

            <div className="col-lg-12 d-flex head-form">
                <div className="col-lg-6 d-flex mb-5">
                    <ToggleOffOutlinedIcon />
                    <Box sx={{ marginLeft: 2, minWidth: 120 }}>
                        <FormControl className='userDropdown'>
                            <InputLabel htmlFor="demo-simple-select-label">Status</InputLabel>
                            <Select labelId="demo-simple-select-label" id="demo-simple-select" name='status' value={formData.status} label="status" onChange={handleStatusChange} >
                                <MenuItem value={1}>Active</MenuItem>
                                <MenuItem value={0}>Inactive</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>

                <div className="col-lg-6 d-flex mb-5">
                    <ControlCameraIcon />
                    <FormControl sx={{ marginLeft: 2, minWidth: 200, backgroundColor: 'white' }}>
                        <InputLabel id="role-label">Role</InputLabel>
                        <Select as={Select} name="role_id" labelId="role-label" label="Role" value={formData.role_id} onChange={handleInputChange}>
                            <MenuItem value=""><em>None</em></MenuItem>
                            {roleOptions.map((role) => (
                                <MenuItem key={role.id} value={role.id}>
                                    {role.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
            
            <div className='col-lg-6 form-control w-75 check ms-3  mb-5'>
                <label><input className='checkbox-container form-check-input' type="checkbox" name="is_edit" checked={formData.is_edit} onChange={handleCheckboxChange} />Edit</label>
                <label><input className='checkbox-container form-check-input' type="checkbox" name="is_delete" checked={formData.is_delete} onChange={handleCheckboxChange} />Delete</label>
                <label><input className='checkbox-container form-check-input' type="checkbox" name="is_create" checked={formData.is_create} onChange={handleCheckboxChange} />Create</label>
                <label><input className='checkbox-container form-check-input' type="checkbox" name="is_view" checked={formData.is_view} onChange={handleCheckboxChange} />View</label>
            </div>
            
            <div className="col-lg-6 uploads">
                <button className='submitBtn'>Submit<SaveAltOutlinedIcon className='ms-3' /></button>
            </div>
        </form>
    );
};

export default UserForm;