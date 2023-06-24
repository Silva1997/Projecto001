import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Estilos/Estilos.css'

// icon
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

// 

export default function BasicTable({ carrinhoArray }, { producto }) {
  if (!carrinhoArray) {
    return null
  }


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#080505", }}>
          <TableRow >
            <TableCell sx={{ color: "#fff8f8" }} align="center">Imagem</TableCell>
            <TableCell sx={{ color: "#fff8f8" }} align="center">Produto</TableCell>
            <TableCell sx={{ color: "#fff8f8" }} align="center">Preço</TableCell>
            <TableCell sx={{ color: "#fff8f8" }} align="center">Descrição</TableCell>
            <TableCell sx={{ color: "#fff8f8" }} align="center">Estado</TableCell>
            <TableCell sx={{ color: "#fff8f8" }} align="center">Editar</TableCell>
            <TableCell sx={{ color: "#fff8f8" }} align="center">Eliminar</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {carrinhoArray.map((row, id) => (
            <TableRow
              hover
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center"><picture className="imagemCircular" ><img src={row.imagem} id='imagemCir' alt="ImagemItem" /></picture></TableCell>
              <TableCell align="center">{row.produto}</TableCell>
              <TableCell align="center">{row.valor} kz</TableCell>
              <TableCell align="center">{row.descricao}</TableCell>
              <TableCell align="center">{row.disponibilidade}</TableCell>
              <TableCell align="center"><button id="btnTabela" style={{textDecoration:"none" , border:"none"}}> <EditRoundedIcon color='success'/> </button></TableCell>
              <TableCell align="center"><button id="btnTabela" style={{textDecoration:"none" , border:"none"}}> <DeleteForeverRoundedIcon color='error'/> </button></TableCell>
             
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

