import React from "react";
import { Row, Col } from 'react-bootstrap';
import { Card, Typography, CardContent, CardMedia } from '@mui/material'
//
import { UserCarrinho } from '../../Routes/Provedoracesso'
//
import { EditarItem } from "../../localarmazenamento/Localstore";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//
export const CartItem = () => {
  //
  const navigate = useNavigate();
  const carrinhoData = localStorage.getItem('Carrinho');
  const carrinhoArray = JSON.parse(carrinhoData);
  const [cards, setCards] = React.useState(carrinhoArray);
//
  // Filtrar os itens com base em uma propriedade específica
  // Critério de filtro, nesse caso, estamos filtrando por 'tipo'
  
  const cart = UserCarrinho();
  if (!carrinhoArray) {
    return null
  }
  const removeCard = (id) => {
    const remover = cards.filter((card) => card.id !== id)
    setCards(remover);
    // localStorage.setItem('Carrinho',JSON.parse(remover));
    EditarItem("Carrinho", remover);
  };

 
//
  const notificacao = () => toast.error("Eliminado com sucesso!");
// Mapeia apenas o product e o índice
  return (
    <>
<ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"/>
      <Row xs={1} md={1} className="g-3">
        {cards.map((item) => (
          <Col align="center" key={item.id}>
            <Card sx={{
              marginTop: "7px",
              borderRadius: "1px 10px",
              width: "40vh",
            }}
              >
              <CardMedia sx={{display:"flex",flexDirection:'row'}} title="Foto" image={item.image}  className='Cartao1' />
              <CardContent>
                <Typography variant='p' className='frase3' style={{ fontWeight: "500", borderRadius: "20px", padding: "0.2px 20px" }}> {item.tipo}</Typography>
                <Typography variant='h6' style={{ fontSize: "15pt", fontWeight: "bold", color: "black" }}> {item.text1}</Typography>
                <Typography variant='p'><span style={{ color: "black", fontWeight: "600", position: "relative", textAlign: "center" }}>$kz:{item.preco}</span></Typography>
                <button style={{ textDecoration: "none", border: "none", padding: "2px 4px", borderRadius: "2px 3px", marginLeft: "105px" }} onClick={() => { removeCard(item.id); navigate("/"); notificacao(); cart.deleteFromCart(item.id) }}><DeleteOutlineIcon style={{ color: "red" }} /></button>
              </CardContent>
             
            </Card>
          </Col>
          
        ))
        
        }
      </Row>
{/*  */}

    </>
  );
};

