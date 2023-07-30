import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../Estilos/Estilos.css';
import TextField from '@mui/material/TextField';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
import EditRoundedIcon from '@mui/icons-material/EditRounded';



export default function NestedModal({dados}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (

 
    <div>
      <div>
<button id="btnTabela"  onClick={() =>{handleOpen()}} style={{ textDecoration: "none", border: "none" }}>
   Editar<EditRoundedIcon color='success' /> </button>
      </div>
      <p>{dados.map(li=>(
        <p key={""}>{li.Nproduto}</p>
      ))}
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 1000 ,textAlign:"center"}}>
          <h2 id="parent-modal-title" >Nossa Historia</h2>
          <TextField
              required
              id="outlined-required"
              label="Nome do Produto"
              type='text'
             
              size='small'
            />
  <TextField
              required
              id="outlined-required"
              label="Nome do Produto"
              type='text'
             
              size='small'
            />






        </Box>
      </Modal>
    </div>
  );
}