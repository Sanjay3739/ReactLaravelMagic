import {  TableCell, tableCellClasses, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';

const headingStyle = {
  color: 'red',
  fontSize: '24px',
  background: 'black',
  padding: '20px',
};

export { headingStyle };

const avatarStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  boxShadow: ' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'

};
export { avatarStyle };

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));
export { StyledTableCell };

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
export { StyledTableRow };