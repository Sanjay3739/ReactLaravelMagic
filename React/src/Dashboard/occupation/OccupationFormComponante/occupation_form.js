import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, ToggleOffOutlinedIcon, PermIdentityOutlinedIcon, SaveAltOutlinedIcon } from "../../../component/icon";

const OccupationForm = ({ formData, handleInputChange, handleStatusChange, handleSubmit, errors }) => {

    const handelFormDataSubmit = async (event) => {
        event.preventDefault();
        handleSubmit(event); // Call the handleSubmit passed from props
    };
    return (
        <form onSubmit={handelFormDataSubmit}>
            <div className="errored">
                {errors.name && <div className="error">{errors.name[0]}</div>}
                {errors.status && <div className="error">{errors.status[0]}</div>}
            </div>
            <div className="col-lg-12 head-form">
                <PermIdentityOutlinedIcon /><input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Occupation Name" />
            </div>
            <div className="col-lg-12 d-flex down  mb-5">
                <ToggleOffOutlinedIcon />
                <Box sx={{ minWidth: 120, marginLeft: 2 }}>
                    <FormControl className="userDropdown">
                        <InputLabel htmlFor="demo-simple-select-label">Status</InputLabel>
                        <Select labelId="demo-simple-select-label" id="demo-simple-select" name="status" value={formData.status} label="status" onChange={handleStatusChange}>
                            <MenuItem value={1}>Active</MenuItem>
                            <MenuItem value={0}>Inactive</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className="col-lg-6 uploads">
                <button className="submitBtn">Submit<SaveAltOutlinedIcon className="ms-3" /></button>
            </div>
        </form>
    );
};

export default OccupationForm;