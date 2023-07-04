import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, Typography, CardContent, } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import '../Estilos/Estilos.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { UserCarrinho } from '../../Routes/Provedoracesso'
import imagem from './shopping-bag.svg'
import { CartItem } from './CartItem'
export default function TemporaryDrawer({ product }) {
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

        <CartItem />

      </div>

      {totalAmount > 0 ? (
        <Card sx={{
          background: "rgba(243, 239, 239, 0.5)",
          display:"flex"
          ,
          justifyContent:"center",
          textAlign:"center",
          m:12,
     
        }}>
          <CardContent className="Cartao320">
            <Typography variant='h6' style={{ fontWeight: "500", borderRadius: "20px", padding: "0.2px 20px",color:"black" }}>
              Total:
              {cart.getTotalCost().toFixed(3)}Kz
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>
         
         <img src={imagem} alt='' style={{width:"10vh"}} />
         
          <p>Seu Saco de compras está vazia. Comece a comprar  </p>
        </div>

      )}

    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button id="iconButao" onClick={toggleDrawer(anchor, true)}><ShoppingCartIcon style={{ color: "#2331fdeb" }} /></Button>
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