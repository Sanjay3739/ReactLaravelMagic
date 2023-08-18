import React from "react";
import Form from "react-bootstrap/Form";
import { Select, MenuItem, FormControl, InputLabel, Chip } from "@mui/material";

const ProfileForm = ({ inputs, handleChange, handleSubmit, errors, occupations, countries }) => {
    const handelFormDataSubmit = async (event) => {
        event.preventDefault();
        const formattedBirthday = inputs.birthday ? new Date(inputs.birthday).toISOString().split('T')[0] : null;
        const formData = {
            ...inputs,
            birthday: formattedBirthday,
        };
        handleSubmit(event, formData);
    };
    return (
        <Form onSubmit={handelFormDataSubmit}>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="label mb-1" htmlFor="inputFirstName">  First name </label>
                    <input className="form-control" id="inputFirstName" type="text" name="first_name" value={inputs.first_name} onChange={handleChange} placeholder="Enter your first name" />
                    {errors.first_name && <div className="text-danger">{errors.first_name[0]}</div>}
                </div>
                <div className="col-md-6">
                    <label className="label mb-1" htmlFor="inputLastName">    Last name</label>
                    <input className="form-control" id="inputLastName" type="text" name="last_name" value={inputs.last_name} onChange={handleChange} placeholder="Enter your last name" />
                    {errors.last_name && <div className="text-danger">{errors.last_name[0]}</div>}
                </div>
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="label mb-1" htmlFor="inputPhone">  Phone number    </label>
                    <input className="form-control" id="inputPhone" pattern="[0-9]*" type="tel" maxLength="10" name="mobile_no" value={inputs.mobile_no} onChange={handleChange} placeholder="Enter your phone number" />
                    {errors.mobile_no && <div className="text-danger">{errors.mobile_no[0]}</div>}
                </div>
                <div className="col-md-6">
                    <label className="label mb-1" htmlFor="inputPassword">   Password   </label>
                    <input className="form-control" id="inputPassword" name="password" value={inputs.password} onChange={handleChange} type="password" placeholder="Enter your password" />
                </div>
            </div>
            <div className="mb-3">
                <label className="label mb-1" htmlFor="inputEmailAddress">   Email address </label>
                <input className="form-control" id="inputEmailAddress" type="email" name="email" value={inputs.email} onChange={handleChange} placeholder="Enter your email address" />
                {errors.email && <div className="text-danger">{errors.email[0]}</div>}

            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="label mb-1" htmlFor="inputBirthday"> Birthday </label>
                    <input className="form-control" id="inputBirthday" name="birthday" value={inputs.birthday} onChange={handleChange} type="date" />
                    {errors.birthday && <div className="text-danger">{errors.birthday[0]}</div>}
                </div>
                <div className="col-md-6">
                    <label className="label mb-1" htmlFor="demo-select-gender-label" > Gender </label>
                    <select className="form-control" id="demo-select-gender-label" name="gender" value={inputs.gender} onChange={handleChange} >
                        <option value="">Select Your Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                        <option>Not Specified</option>
                    </select>
                    {errors.gender && <div className="text-danger">{errors.gender[0]}</div>}
                </div>
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="label mb-1" htmlFor="demo-select-occupation-label">Occupation </label>
                    <select className="form-control" id="demo-select-occupation-label" name="occupation" value={inputs.occupation} onChange={handleChange}  >
                        <option value="">Select an occupation</option>
                        {occupations.data && Array.isArray(occupations.data) && occupations.data.map((occupation) => (
                            <option key={occupation.id} value={occupation.name}>
                                {occupation.name}
                            </option>
                        ))}
                    </select>
                    {errors.occupation && <div className="text-danger">{errors.occupation[0]}</div>}
                </div>
                <div className="col-md-6">
                    <label className="label mb-1" htmlFor="demo-select-status-label" >  Status </label>
                    <select className="form-control" id="demo-select-status-label" name="status" value={inputs.status} onChange={handleChange}  >
                        <option value={1}>Active</option>
                        <option value={0}>Inactive</option>
                    </select>
                    {errors.status && <div className="text-danger">{errors.status[0]}</div>}
                </div>
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-6">
                    <label className="label mb-1" htmlFor="inputLocation">Location </label>
                    <select className="form-control" id="inputLocation" name="location" value={inputs.location} onChange={handleChange} placeholder="Enter your location"  >
                        <option value="">Select a country</option>
                        {countries.map((country) => (
                            <option key={country.id} value={country.name}>
                                {country.name}
                            </option>
                        ))}
                        {errors.location && <div className="text-danger">{errors.location[0]}</div>}
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="label mb-1" htmlFor="inputLocation">What You Like..? </label>
                    <FormControl variant="outlined" className="drops" fullWidth>
                        <InputLabel id="inputLike-label">What You like?</InputLabel>
                        <Select
                            labelId="inputLike-label"
                            id="inputLike"
                            name="what_you_like"
                            multiple
                            value={Array.isArray(inputs.what_you_like) ? inputs.what_you_like : []}
                            onChange={handleChange}
                            label="What You like?"
                            renderValue={(selected) => (
                                <div>
                                    {Array.isArray(selected) && selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </div>
                            )}
                        >
                            <MenuItem value="Coding">1. Coding</MenuItem>
                            <MenuItem value="Reading">2. Reading</MenuItem>
                            <MenuItem value="Writing">3. Writing</MenuItem>
                            <MenuItem value="Cricket">4. Cricket</MenuItem>
                            <MenuItem value="Dance">5. Dance</MenuItem>
                            <MenuItem value="Camping">6. Camping</MenuItem>
                            <MenuItem value="Origami">7. Origami</MenuItem>
                            <MenuItem value="Running">8. Running</MenuItem>
                            <MenuItem value="Cooking">9. Cooking</MenuItem>
                            <MenuItem value="Shopping">10. Shopping</MenuItem>
                        </Select>
                    </FormControl>
                    {errors.what_you_like && <div className="text-danger">{errors.what_you_like[0]}</div>}
                </div>
            </div>
            <div className="row gx-3 mb-3">
                <div className="col-md-12">
                    <label className="label mb-1" htmlFor="inputAddress"> Address</label>
                    <textarea className="form-control" id="inputAddress" name="address" value={inputs.address} onChange={handleChange} placeholder="Enter your address" />
                    {errors.address && <div className="text-danger">{errors.address[0]}</div>}
                </div>
            </div>

            <button className="btn btn-primary" type="submit">  Save changes </button>
        </Form>
    );
};

export default ProfileForm;