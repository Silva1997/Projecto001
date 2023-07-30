import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, Typography, CardContent, } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import '../Estilos/Estilos.css';
// import {Link} from 'react-router-dom'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { UserCarrinho } from '../../Routes/Provedoracesso'
import imagem from './shopping-bag.svg'
import { CartItem } from './CartItem'
import Pagementos from '../pagamentos'


export default function Gravetatemporaria() {

  const [pegar, SetPagar] = React.useState('');
  
  const handlemudanca = (e) => {
    SetPagar(e.target.value);
  }
  //
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
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 330,
        flexDirection: 'row',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 2,
        }
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "40vh", justifyItems: "center", marginLeft: "40px" }}>

        <CartItem />

        <div style={{ marginTop: "20px", margin: "30px" }}>

        </div>

      </div>

      {totalAmount > 0 ? (
        <>
          <Pagementos />
          <Card sx={{
            background: "rgba(243, 239, 239, 0.5)",
            borderRadius: "1px 10px",
            marginLeft: "5px",
            marginRight: "5px",
            marginBottom: "15px",
          }}>
            <CardContent className="Totalestilo">
              <h6 style={{ textAlign: "start" }}>Seu Pedido</h6>
              <hr />
              <h6 style={{ textAlign: "start" }}>Produto</h6>
              <hr />
              <section style={{display:"flex" ,flexDirection:"column-reverse" , alignItems:"start"}}>
                <label htmlFor="p" ><input type='Radio'  name='ver' value={"Multicaixa"} checked={pegar === 'Multicaixa'} onChange={handlemudanca} />
                Multicaixa:Pagamento por referencia
      
                </label>
                <label htmlFor="p"><input type='Radio' name='ver' value={"Unitel"} checked={pegar === 'Unitel'} onChange={handlemudanca} /> 
                Unitel Money:Pagamento por telefone</label>
                <label htmlFor="p"><input type='Radio' name='ver' value={"Loja"} checked={pegar === 'Loja'} onChange={handlemudanca} /> 
                Pagar na loja</label>
              </section>
              <p>{pegar}</p>

              <h6 style={{ textAlign: "start", fontWeight: "500", color: "black" }}>
                Subtotal:{cart.getTotalCost().toFixed(3)},00Kz
              </h6>
              <Typography variant='p' style={{ textAlign: "start", fontWeight: "500", color: "black" }}>
                Total:        {cart.getTotalCost().toFixed(3)},00Kz
              </Typography>
              < button style={{ textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px", backgroundColor: "yellow" }}>Confirmar pediddo</button>
            </CardContent>
          </Card>
        </>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}>

          <img src={imagem} alt='' style={{ width: "10vh" }} />

          <p>Seu Saco de compras está vazia. Comece a comprar  </p>
        </div>

      )}

    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
  <Button id="iconButao" onClick={toggleDrawer(anchor, true)}><ShoppingBagIcon style={{ color: "white" }} /></Button>
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