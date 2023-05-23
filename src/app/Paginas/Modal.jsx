import * as React from 'react';
import Box  from '@mui/material/Box';
import { Card, Typography, CardContent, CardMedia } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import '../Estilos/Estilos.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { UserCarrinho } from '../Routes/Provedoracesso'
// import CartaoProdutos from './CartaoProdutos'
// import { useState } from 'react';
// import { PegarItem } from '../localarmazenamento/Localstore';
import { CartItem } from '../Paginas/CartItem'
export default function TemporaryDrawer(props) {
  // const [data ,setData] = useState(PegarItem('carrinho'));

  const cart = UserCarrinho();
  const totalAmount = cart.getTotalCost();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450,
        flexDirection: 'row',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 2,
        }
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "50vh", marginLeft: "50px", justifyItems: "center" }}>

        {/* {
        produtos.map((product) =>{
          if (cart.items[product.id] !== 0) {
            return <CartItem product={product}/>

              
          
            // return  <CartaoProdutos product={product}></CartaoProdutos>;
      
          
        } })
      
      } */}
        <CartItem />

      </div>

      {totalAmount > 0 ? (
        // <div className="checkout">
        //   <div className="subtotal">

        //   <h5>Total: ${cart.getTotalCost().toFixed(3)}</h5>
        //   </div>
        //   <div className="buttons">

        //   </div>
        // </div>
        <Card sx={{
          background: "rgba(243, 239, 239, 0.5)",
        }}>
<CardContent className="Cartao320">
                <Typography variant='h6' style={{ fontWeight: "500", borderRadius: "20px", padding: "0.2px 20px" }}> 
                Total:
                {cart.getTotalCost().toFixed(3)}Kz
                </Typography>

              </CardContent>
        </Card>

      ) : (
        <p>O seu Carrinho esta sem item adicione </p>
      )}

    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button id="iconButao" onClick={toggleDrawer(anchor, true)}><ShoppingCartIcon style={{ color: "black" }} /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}