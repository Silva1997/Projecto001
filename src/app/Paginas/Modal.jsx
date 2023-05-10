import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import '../Estilos/Estilos.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function TemporaryDrawer(props) {

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
          marginRight: 4,
        }
      }}
    >

          <aside style={{
            backgroundColor:"red"
          }}>
         <img src={props.image} alt=""/>
         </aside>
       
      <div>
        <p>Quantidades:{props.itemCount}</p>
        <p>total:{props.total}</p>

        <button onClick={toggleDrawer(anchor, false)} >Finalizar</button>
      </div>
    </Box>
  );

  return (
    <div>
      {['top'].map((anchor) => (
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