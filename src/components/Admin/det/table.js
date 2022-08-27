import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell,{
    shouldForwardProp: (props) => props !== 'theme',
})(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "black",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, props) {
//   return { name, };
// }

// const rows = [
//   createData('Frozen yoghurt', 159),
//   createData('Ice cream sandwich', 23),
//   createData('Eclair', 262 ),
//   createData('Cupcake', 305),
//   createData('Gingerbread', 356),
// ];

export default function CustomizedTables(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="customized table">
     
        <TableHead>
          <TableRow>
            
            <StyledTableCell>Detail properties</StyledTableCell>
          
            <StyledTableCell align="right">Details</StyledTableCell>
           
          </TableRow>
        </TableHead>
      
        <TableBody>
        <StyledTableRow >
              <StyledTableCell>EMAIL</StyledTableCell>
              <StyledTableCell align="right">{props.mail}</StyledTableCell>
        </StyledTableRow> 
        </TableBody>
        <TableBody>
        <StyledTableRow >
          <StyledTableCell>Phone number</StyledTableCell>
          <StyledTableCell align="right">+91 {props.phno}</StyledTableCell>
          </StyledTableRow >
    </TableBody>
    <TableBody>
    <StyledTableRow >
          <StyledTableCell>Hostel fees 1st year</StyledTableCell>
          <StyledTableCell align="right">₹{props.hf1}</StyledTableCell>
          </StyledTableRow > 
    </TableBody>
    <TableBody>
    <StyledTableRow >
          <StyledTableCell>Hostel fees 2nd year</StyledTableCell>
          <StyledTableCell align="right">₹{props.hf2}</StyledTableCell>
          </StyledTableRow >  
    </TableBody>
    <TableBody>
    <StyledTableRow >
          <StyledTableCell>Hostel fees 3rd year</StyledTableCell>
          <StyledTableCell align="right">₹{props.hf3}</StyledTableCell>
          </StyledTableRow >  
    </TableBody>
    <TableBody>
    <StyledTableRow >
          <StyledTableCell>Hostel fees 4th year</StyledTableCell>
          <StyledTableCell align="right">₹{props.hf4}</StyledTableCell>
          </StyledTableRow >  
    </TableBody>
    <TableBody>
    <StyledTableRow >
          <StyledTableCell>Caution Depsoit</StyledTableCell>
          <StyledTableCell align="right">₹{props.cd}</StyledTableCell>
          </StyledTableRow >   
    </TableBody>
      </Table>
    </TableContainer>
  );
}