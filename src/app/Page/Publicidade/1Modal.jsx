import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import '../../app/Page/Estilos/Estilos.css';

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




export default function NestedModal() {
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
      
      <button id="butao" style={{cursor:"pointer",padding: "6px 20px", border: "none", borderRadius: "12px" ,marginBottom:"35px"}}
       onClick={handleOpen}>Nossa Historia</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 1000 ,textAlign:"center"}}>
          <h2 id="parent-modal-title" >Nossa Historia</h2>
          <p id="parent-modal-description">

Trabalhar com vendas nem sempre é fácil. Você precisa lidar com clientes difíceis, reclamações diárias, metas de vendas não alcançadas e uma série de outros obstáculos que podem levar à falta de motivação.
Dias difíceis são inevitáveis. A única solução é levantar a cabeça e começar cada dia com uma nova perspectiva e atitude positiva


            
          </p>
      
        </Box>
      </Modal>
    </div>
  );
}