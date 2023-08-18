import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from "../../../component/icon";
const RowPagination = ({ handleRowsPerPageChange, rowsPerPage }) => {

    return (
        <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Rows</InputLabel>
            <Select labelId="demo-select-small-label" id="demo-select-small" value={rowsPerPage} label="Rows" onChange={handleRowsPerPageChange}  >
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={200}>200</MenuItem>
            </Select>
        </FormControl>
    );
};

export default RowPagination;



{/* <FormControl sx={{ minWidth: 120 }} size="small">
                                        <InputLabel id="demo-select-small-label">Rows</InputLabel>
                                        <Select labelId="demo-select-small-label" id="demo-select-small" value={rowsPerPage} label="Rows" onChange={handleRowsPerPageChange}  >
                                            <MenuItem value={2}>2</MenuItem>
                                            <MenuItem value={5}>5</MenuItem>
                                            <MenuItem value={10}>10</MenuItem>
                                            <MenuItem value={50}>50</MenuItem>
                                            <MenuItem value={100}>100</MenuItem>
                                            <MenuItem value={200}>200</MenuItem>
                                        </Select>
                                    </FormControl> */}