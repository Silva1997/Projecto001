import React from 'react';
import './app/Paginas/Estilos/Estilos.css' // css global
// import Modal from './app/Paginas/1Modal' // Modal de apresentacao 
// import Icon from '../../Cliente/src/app/Routes/icon.png' // imagem
import CakeIcon from '../src/app/Paginas/Publicidade/Img/icon.png' // imagem
import CakeIco from '../src/app/Paginas/Publicidade/Img/icon1.png' // imagem
import { Link } from 'react-router-dom' // importacao do routeamento
import whatsapp from './W.svg'
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'; // iconCarrinho
// import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'; // Icon Local
// import WatchLaterIcon from '@mui/icons-material/WatchLater';
// import Inventory2Icon from '@mui/icons-material/Inventory2';
import Sliderprodutos from "./app/Paginas/Publicidade/SliderProdutos" // Slider ou  Carousell
import Footer from './app/Paginas/Footer/Footer'
import Teste2 from './app/Paginas/Publicidade/Effeito'
function App() {
  return (
    <>

    <div>
      <Teste2/>
    </div>
      {/* <div className='Fundocima'   >
        <div className='grid1' >
          <h5 id='h5p' >Encontre o  Bolo <br /> perfeito para qualquer <br />hora do dia</h5>
          <p id='frasesPrincipal' >Com o Gestconf você recebe sua encomenda onde estiver, a qualquer hora</p>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", }}>
            <ShoppingCartOutlinedIcon className='f_social_icon' /><p id='frasesPrincipal'  >Compra simples e segura</p>
            <LocalShippingOutlinedIcon className='f_social_icon' /><p id='frasesPrincipal' >Entrega rápida e rastreada</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", }}>
            <Inventory2Icon className='f_social_icon' /><p id='frasesPrincipal'>Embalagem mantém o <br />bolo intacto</p>
            <WatchLaterIcon id="especial" className='f_social_icon' /><p id='frasesPrincipal'>Feito na hora</p>
          </div>
        </div>
        <div className='grid2' >
          <img src={Icon} alt="Foto2" id='Foto3' style={{ padding: "2px 5px", borderRadius: "2px 30px" }} />
        </div>

      
      </div >  */}


      <h2 className='incio'>Bem <span className='Sp'>-</span>Vindo</h2>

      {/* <div className='menu1'>
        <Modal />
      </div> */}
        <div className='Centro'>
                <div id='Divisor' > 
                 <img src={CakeIco} alt="#" className='img2'  /><br />
                 <div className='DivCard'>
                 <button className='id' style={{padding: "6px 20px", border: "none", borderRadius: "12px",}}>
                  Saber Mais</button>
                  <h2 className='frase' ><span className='Sp' style={{ color: "red" }}>
                    F</span>ormações</h2>
                 </div>
                 </div>   
                <div id='Divisor' >
                 <img src={CakeIcon} alt="#" className='img3'  /><br />
                 <div className='DivCard'>
                 <button className='#' style={{padding: "6px 20px", border: "none", borderRadius: "12px",}}>
                  Saber Mais</button>
                  <h2 className='frase' > <span className='Sp' style={{ color: "red" }}>C</span>onfeiteria</h2>
                  </div>
                 </div>   
                 <div id='Divisor' >
                 <img src={CakeIcon} alt="#" className='img3'  /><br />
                 <div className='DivCard'>
                 <button className='Btn001' style={{padding: "6px 20px", border: "none", borderRadius: "12px",}}>
                  Saber Mais</button>
                  <h2 className='frase' ><span className='Sp' style={{ color: "red" }}>
                    P</span>astelaria</h2>
                 </div>
                 </div>                      
        </div>
       
   
              

      <div className="Descricaodanossahistoria">
        <div className="P1">
          <div className='PP1'>

          </div>
        </div>

        <div className="P2">
          <h3 className='frase2'><span className='Sp'>P</span>astelaria</h3>

          <p className='PL'>Descubra o gosto do saber fazer de uma das mais populares pastelarias em todo o mundo, são diversos os tipos de pasteis em diversos tipos de massas, é so experimentar! </p>

        </div>

        <div className="P3">
          <h3 className='frase2'><span className='Sp'>S</span>algados</h3>

          <p className='PL'>Descubra o gosto do saber fazer de uma das mais populares pastelarias em todo o mundo, são diversos os tipos de pasteis em diversos tipos de massas, é so experimentar! </p>

        </div>
        <div className="P4">
          <div className='PP1'>
          </div>
        </div>
      </div>
      {/* Slider Produtos */}
      <div>
        <Sliderprodutos />
      </div>
      <div className='Whatsapp'>
        <Link href="http://wa.me/+244958045687" to="http://wa.me/+244958045687" target='_blank'>
          <img src={whatsapp} className='whatsappImagem' alt="whatsapp" />
        </Link>
      </div>
      {/*  */}
      <div>
        <Footer />
      </div>
    </>
  );
}
export default App;