// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
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


// function createData(name, calories, fat, carbs, protein ,p) {
//   return { name, calories, fat, carbs, protein,p};
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0,0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3,0),
//   createData('Eclair', 262, 16.0, 24, 6.0,0),
//   createData('Cupcake', 305, 3.7, 67, 4.3,0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9,0),
// ];

export default function BasicTable({carrinhoArray}) {
  if (!carrinhoArray) {
    return null
  }


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">imagem</TableCell>
            <TableCell align="right">Produto</TableCell>
            <TableCell align="right">Tipo</TableCell>
            <TableCell align="right">Preco kz</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Descricao</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {carrinhoArray.map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}
              <TableCell align="right"><img src={row.imagem} alt=""/></TableCell>
              <TableCell align="right">{row.produto}</TableCell>
              <TableCell align="right">{row.valor}</TableCell>
              <TableCell align="right">{row.descricao}</TableCell>
              <TableCell align="right">{row.disponibilidade}</TableCell>
            </TableRow>
          ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}