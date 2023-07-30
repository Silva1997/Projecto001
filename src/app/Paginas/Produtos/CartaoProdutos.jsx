import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { Card, Button, ButtonGroup } from '@mui/material'
import CardContent from '@mui/material/CardContent';
//
import { Contexto } from '../../Routes/Provedoracesso';
import { useContext } from 'react';
//
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import '../Estilos/Estilos.css';
//
function ProductCard({ product }) { 
 
    const cart = useContext(Contexto);
    const productQuantity = cart.getProductQuantity(product.id)

    return (
        <>

            <div className='div320'>

                <Card sx={{
                    background: "rgba(112, 39, 39, 0.5)",
                    borderRadius: "1px 10px",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginBottom: "15px"

                }}  >
                   
                    <CardMedia title="Foto"  sx={{display:"flex"}}
                    image={product.image} className='Cartao'  />

                    <CardContent className='Cartao320' style={{backgroundColor:"white"}} >
                        <Typography variant='p' className='frase3' style={{ fontWeight: "500", borderRadius: "20px", padding: "0.2px 20px" }}> {product.tipo}</Typography>
                        <Typography variant='h6' style={{ fontSize: "15pt", fontWeight: "bold", color: "black" }}> {product.text1}</Typography>
                        <Typography variant='p'><span style={{ color: "black", fontWeight: "500", position: "relative", left: "-20px" }}>$kz:{product.preco}</span></Typography>

                        {productQuantity > 0 ?
                            <>
                                <Row  style={{backgroundColor:"white"}}>
                                    <Form.Label column="true" sm="6">Quant: {productQuantity}</Form.Label>
                                    <Col sm="6">
                                        <ButtonGroup>
                                            <Button onClick={() => { cart.addOneToCart(product.id) }} >+</Button>
                                            <Button onClick={() => { cart.removeOneFromCart(product.id) }}>-</Button>

                                        </ButtonGroup>

                                    </Col>
                                </Row>
                                < button style={{ backgroundColor:"white",textDecoration: "none", border: "none", padding: "2px 4px", borderRadius: "2px 3px" }} onClick={() => { cart.deleteFromCart(product.id) }}  ><RemoveCircleIcon style={{ color: "red" }} /></button>

                            </>
                            : <button style={{ backgroundColor:"white",textDecoration: "none", border: "none", padding: "2px 4px", borderRadius: "2px 3px", marginLeft: "105px" }} onClick={() => { cart.addOneToCart(product.id, product) }}><AddCircleIcon style={{ color: "red" }} /> </button>
                        }
                    </CardContent>

                </Card>

            </div>





        </>
    )
}

export default ProductCard;
