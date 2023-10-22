import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, Typography, CardContent, } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import '../Estilos/Estilos.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { UserCarrinho } from '../../Routes/Provedoracesso'
import imagem from './shopping-bag.svg'
import { CartItem } from './CartItem'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';

export default function Gravetatemporaria() {
const [pegar, SetPagar] = React.useState('');
const [nome, setNome] = React.useState("");
const [email, setEmail] = React.useState("");
const [numero, setNumero] = React.useState(0); 
// Aqui
const Meter = (event) =>{
    event.preventDefault();
  if (nome && email && numero){
  toast.success("Cadrastado com sucesso");

  }
  else{
  toast.error("Ocorreu um erro por favor preenche os campos.");
  }
  }
// 
  const handlemudanca = (e) => {
    SetPagar(e.target.value);
  }
  // Aqui
  const cart = UserCarrinho();
  const totalAmount = cart.getTotalCost();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  //aqui
  //aqui teste
const ModalCompra = ()=>{
 return toast.success("Compra feita com sucesso!");
}
  const handleConfirmacao = async () => {
    try {
      for (let i = 0; i <= 100; i++) {
        await cart.deleteFromCart(i); // Simulação da exclusão do carrinho
        localStorage.removeItem("Carrinho");
        // Adicionar um atraso de 1 segundo (1000 milissegundos)
        // await new Promise(resolve => setTimeout(resolve, 2000));
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao excluir itens do carrinho.");
    }
  };
  
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
<form action="" onSubmit={Meter}  className='FormularioDadosCliente'>
        <TextField
        required
        id="outlined-number"
        size='small'
        label="Nome completo"
        type="text"
        onChange={(e)=>{setNome(e.target.value)}}
      />
      <TextField
        required
        id="outlined-number"
        size='small'
        label="Endereco de email"
        type="email"
        placeholder='@gamil.com'
        onChange={(e)=>{setEmail(e.target.value)}}
      />
      <TextField
        required
        id="outlined-number"
        size='small'
        label="Numero"
        type="number"
        placeholder='920***99'
        onChange={(e)=>{setNumero(e.target.value)}}
      />
      <div style={{textAlign:"start"}}>
      <h5 style={{fontSize:"10pt"}}>Pais</h5>
      <h5  style={{fontSize:"10pt"}}>Angola</h5>
      </div>
      <TextField
        required
        id="outlined-number"
        size='small'
        label="Nome da Rua e numero da casa"
        type="text"
      />
        <TextField
        required
        id="outlined-number"
        size='small'
        label="Numero BI/Passaporte da"
        type="text"
      />
       <TextField
        required
        id="outlined-number"
        size='small'
        label="Local de referencia"
        type="text"
      />
      <button style={{
                textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
                backgroundColor: "yellow"
              }}  onClick={Meter}>Cadrastar</button>
      </form>
          <Card sx={{
            background: "rgba(134, 133, 133, 0.5)",
            borderRadius: "1px 10px",
            marginLeft: "5px",
            marginRight: "5px",
            marginBottom: "15px",
          }}>
            <CardContent className="Totalestilo">
              <section style={{ display: "flex",backgroundColor:"#FFF",borderRadius:"10px 10px", flexDirection: "column-reverse", alignItems: "start" }}>
                <label htmlFor="p" ><input type='Radio' name='ver' value={"Multicaixa"} checked={pegar === 'Multicaixa'} onChange={handlemudanca} />
                  Multicaixa:Pagamento por referencia
                </label>
                <label htmlFor="p"><input type='Radio' name='ver' value={"Unitel"} checked={pegar === 'Unitel'} onChange={handlemudanca} />
                  Unitel Money:Pagamento por telefone</label>
                <label htmlFor="p"><input type='Radio' name='ver' value={"Loja"} checked={pegar === 'Loja'} onChange={handlemudanca} />
                  Pagar na loja</label>
              </section>
              <h6 style={{ textAlign: "start", fontWeight: "500", color: "black" }}>
                Subtotal:{cart.getTotalCost().toFixed(3)},00Kz
              </h6>
              <Typography variant='p' style={{ textAlign: "start", fontWeight: "500", color: "black" }}>
                Total: {cart.getTotalCost().toFixed(3)},00Kz
              </Typography>
              <button style={{
                textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
                backgroundColor: "yellow"
              }}
                onClick={()=>{ModalCompra();handleConfirmacao()}}>Comprar o produto</button>
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
          <button className='Teste200' onClick={toggleDrawer(anchor, true)}>
            <ShoppingBagIcon id="Aps" style={{ color: "white" }} />
          </button>
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