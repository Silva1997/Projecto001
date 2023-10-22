
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
import Footer from '../Footer/Footer'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '../Estilos/Estilos.css'
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('#009', "pendente", '20/02/2023', 24000),
]

export default function BasicTable() {
  return (
    <>
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



<Footer/>

    
    </>
  );
}

