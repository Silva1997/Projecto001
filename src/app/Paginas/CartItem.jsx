import React from "react";
import { Row, Col } from 'react-bootstrap';
import { Card, Typography, CardContent, CardMedia } from '@mui/material'
// import Pagamentos from './pagamentos'
import { UserCarrinho } from '../Routes/Provedoracesso'
// import Button from '@mui/material/Button';
import { EditarItem } from "../localarmazenamento/Localstore";
import { useNavigate } from "react-router-dom";
import  DeleteOutlineIcon  from "@mui/icons-material/DeleteOutline";

// 
// 
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

export const CartItem = () => {
  const navigate = useNavigate();
  const carrinhoData = localStorage.getItem('Carrinho');
  const carrinhoArray = JSON.parse(carrinhoData);
  const [open, setOpen] = React.useState(false);
  const [cards, setCards] = React.useState(carrinhoArray);
  
  // Filtrar os itens com base em uma propriedade específica
  // Critério de filtro, nesse caso, estamos filtrando por 'tipo'
  const cart = UserCarrinho();
  if (!carrinhoArray) {
    return null
  }
  const removeCard = (id) => {
    const  remover=cards.filter((card) => card.id !== id)
    setCards(remover);
    // localStorage.setItem('Carrinho',JSON.parse(remover));
    EditarItem("Carrinho",remover);
  };





  // Mapeia apenas o product e o índice


  return (
    <>
      <Row xs={1} md={1} className="g-3">
        {cards.map((item) => (
          <Col align="center" key={item.id}>
            <Card sx={{
              marginTop: "7px",
              borderRadius: "1px 10px",
              width: "40vh", 
              
            }}

              key={""}>
              <div as={CardMedia} style={{ display: "flex",flexDirection:"row" }}>
                <img src={item.image} alt="FotoCartao" className='Cartao1' />
              </div>
              <CardContent>
                <Typography variant='p' className='frase3' style={{ fontWeight: "500", borderRadius: "20px", padding: "0.2px 20px" }}> {item.tipo}</Typography>
                <Typography variant='h6' style={{ fontSize: "15pt", fontWeight: "bold", color: "black" }}> {item.text1}</Typography>
                <Typography variant='p'><span style={{ color: "black", fontWeight: "600", position: "relative", textAlign:"center" }}>$kz:{item.preco}</span></Typography>
                <button style={{textDecoration:"none", border:"none" , padding:"2px 4px" ,borderRadius:"2px 3px",marginLeft:"105px"}} onClick={()=>{removeCard(item.id) ; navigate("/"); setOpen(true); cart.deleteFromCart(item.id)}}><DeleteOutlineIcon style={{color:"red"}}/></button>
              </CardContent>
             
            </Card>
          </Col>
        ))
        }
      </Row>
<div style={{ marginTop:"50px"}}>
{/* <Pagamentos/> */}

</div>
  
<Box sx={{ width: '50%', position:"absolute" , alignContent:"center" , left:"100px",m:"20px" }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, backgroundColor:"#ff7d7d",color:"white"}}
        >
          Eliminado o item!
        </Alert>
      </Collapse>
    </Box>
    </>
  );



};




// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Button,
//   CardFooter
// } from "@material-tailwind/react";
 
// export const CartItem = () => {
//   return (
//     <Card className="w-96">
//       <CardHeader shadow={false} floated={false} className="h-96">
//         <img 
//           src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" 
//           className="w-full h-full object-cover"
//           alt=""
//         />
//       </CardHeader>
//       <CardBody>
//         <div className="flex items-center justify-between mb-2">
//           <Typography color="blue-gray" className="font-medium">
//             Apple AirPods
//           </Typography>
//           <Typography color="blue-gray" className="font-medium">
//             $95.00
//           </Typography>
//         </div>
//         <Typography variant="small" color="gray" className="font-normal opacity-75">
//           With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
//         </Typography>
//       </CardBody>
//       <CardFooter className="pt-0">
//         <Button
//           ripple={false}
//           fullWidth={true}
//           className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
//         >
//           Add to Cart
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// }