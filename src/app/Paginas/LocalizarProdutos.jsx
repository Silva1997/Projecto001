// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import  Button  from '@mui/material/Button';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import { Link } from 'react-router-dom';


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(name, calories, fat, carbs) {
//   return { name, calories, fat, carbs};
// }

// const rows = [
//   createData('#009', "pendente", '20/02/2023', 24000),
// ]

// export default function CustomizedTables() {
//   return (
//     <div style={{ margin: "90px" }}>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 600  }} aria-label="customized table">
//           <TableHead>
//             <TableRow sx={{textAlign:"center"}} >
//               <StyledTableCell  >
//                 Ordem#</StyledTableCell>
//               <StyledTableCell align="center">
//                 Estado</StyledTableCell>
//               <StyledTableCell align="center">
//                 Data da compra
//               </StyledTableCell>
//               <StyledTableCell align="center">
//               Total</StyledTableCell>
//               <StyledTableCell align="center">
//               </StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody  sx={{textAlign:"center"}} >
//             {rows.map((row) => (
//               <StyledTableRow key={row.name} hover >
//                 <StyledTableCell component="th" scope="row">
//                   {row.name}
//                 </StyledTableCell>
//                 <StyledTableCell align="center" ><span style={{cursor:"pointer",padding:"4px 15px",borderRadius:"10px 10px", background:"#908"}}>{row.calories}</span></StyledTableCell>
//                 <StyledTableCell align="center">{row.fat}</StyledTableCell>
//                 <StyledTableCell align="center">{row.carbs}</StyledTableCell>
//                 <StyledTableCell align="center"><Button as={Link} to={'/Etapas'} style={{cursor:"pointer"}}><NavigateNextIcon/></Button></StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import  Button  from '@mui/material/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('#009', "pendente", '20/02/2023', 24000),
]

export default function BasicTable() {
  return (
    <div style={{marginTop:"100px"}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{background:"black" , color:"white"}}>
          <TableRow>
          <TableCell sx={{ color:"white"}}>Ordem#</TableCell>
            <TableCell sx={{ color:"white"}} align="right">Status</TableCell>
            <TableCell sx={{ color:"white"}} align="right">Data de Compra</TableCell>
            <TableCell sx={{ color:"white"}} align="right">Total</TableCell>
            <TableCell sx={{ color:"white"}} align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"><span style={{cursor:"pointer",padding:"4px 15px",borderRadius:"10px 10px", background:"#908"}}>{row.calories}</span></TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right"><Link to={'/Etapas'}><Button style={{cursor:"pointer"}}><NavigateNextIcon/></Button></Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

