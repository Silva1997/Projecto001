
import { Form, Row, Col } from 'react-bootstrap';
import { Card, Button, ButtonGroup } from '@mui/material'
import CardContent from '@mui/material/CardContent';
import { Contexto } from '../Routes/Provedoracesso';
import { useContext} from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import '../Estilos/Estilos.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductCard({product}) { // props.product is the product we are selling


    const cart = useContext(Contexto);
    const productQuantity = cart.getProductQuantity(product.id)
 
    return (
<div className='div320'>


        <Card sx={{
            background: "rgba(243, 239, 239, 0.5)",
            borderRadius: "1px 10px",
            marginLeft: "5px",
            marginRight: "5px"

        }}  >
            <div as={CardMedia} style={{ display: "flex" }}>
                <img src={product.image} alt="FotoCartao" className='Cartao' />
                

            </div>


            <CardContent className='Cartao320' >
                <Typography variant='p' className='frase3' style={{ fontWeight: "500", borderRadius: "20px", padding: "0.2px 20px" }}> {product.tipo}</Typography>
                <Typography variant='h6' style={{ fontSize: "15pt", fontWeight: "bold", color: "black" }}> {product.text1}</Typography>
                <Typography variant='p'><span style={{ color: "black", fontWeight: "500", position: "relative", left: "-20px" }}>$kz:{product.preco}</span></Typography>

                {productQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">Quant: {productQuantity}</Form.Label>
                            <Col sm="6">
                                <ButtonGroup>
                                    <Button onClick={() => { cart.addOneToCart(product.id) }} >+</Button>
                                    <Button onClick={() => { cart.removeOneFromCart(product.id) }}>-</Button>
                                  
                                </ButtonGroup>
                               
                            </Col>
                        </Form>
                        < Button color="error" onClick={() => { cart.deleteFromCart(product.id) }} className="my-2" variant="contained" >Remover <ShoppingCartIcon style={{ color: "gold" }} /></Button>
                     
                    </>
                    :  <Button color='success'  variant="outlined" onClick={() => { cart.addOneToCart(product.id,product)} }>Adicionar <ShoppingCartIcon style={{ color: "gold" }} /> </Button>
                }
            </CardContent>
        
        </Card>
        
        </div>
    )
}

export default ProductCard;
