import React from "react";
import { Row, Col } from 'react-bootstrap';
import { Card, Typography, CardContent, CardMedia } from '@mui/material'
import Pagamentos from './pagamentos'
import { UserCarrinho } from '../Routes/Provedoracesso'
import Button from '@mui/material/Button';
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
    setCards(cards.filter((card) => card.id !== id));
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
                <Button  disabled={open} variant="contained"  style={{width:"10%", background:"#6754e2" , left:"20px"}} onClick={()=>{removeCard(item.id) ; navigate("/"); setOpen(true); cart.deleteFromCart(item.id)}}><DeleteOutlineIcon style={{color:"#fdfdff"}}/></Button>
              </CardContent>
             
            </Card>
          </Col>
        ))
        }
      </Row>
<div style={{ marginTop:"50px"}}>
<Pagamentos/>

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
          sx={{ mb: 2 }}
        >
          Eliminado!
        </Alert>
      </Collapse>
    </Box>
    </>
  );



};