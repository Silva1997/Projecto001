import React from "react";
import { Row, Col } from 'react-bootstrap';
import { Card, Typography, CardContent, CardMedia } from '@mui/material'
import Pagamentos from './pagamentos'

export const CartItem = (props) => {
  const carrinhoData = localStorage.getItem('Carrinho');
  const carrinhoArray = JSON.parse(carrinhoData);
  // Filtrar os itens com base em uma propriedade específica
  // Critério de filtro, nesse caso, estamos filtrando por 'tipo'

  if (!carrinhoArray) {
    return null
  }





  // Mapeia apenas o product e o índice


  return (
    <>
      <Row xs={1} md={1} className="g-3">
        {carrinhoArray.map((item) => (
          <Col align="center">
            <Card sx={{
              marginTop: "10px",
              borderRadius: "1px 20px",
              width: "40vh", height: "50vh"
            }}

              key={""}>
              <div as={CardMedia} style={{ display: "flex" }}>
                <img src={item.image} alt="FotoCartao" className='Cartao1' />
              </div>
              <CardContent className="Cartao320">
                <Typography variant='p' className='frase3' style={{ fontWeight: "500", borderRadius: "20px", padding: "0.2px 20px" }}> {item.tipo}</Typography>
                <Typography variant='h6' style={{ fontSize: "15pt", fontWeight: "bold", color: "black" }}> {item.text1}</Typography>
                <Typography variant='p'><span style={{ color: "black", fontWeight: "500", position: "relative", textAlign:"center" }}>$kz:{item.preco}</span></Typography>
              </CardContent>

            </Card>
          </Col>
        ))
        }
      </Row>
<div style={{ marginTop:"50px"}}>
<Pagamentos/>
</div>
  
    </>
  );



};