import React from 'react';
import './app/Paginas/Estilos/Estilos.css' // css global
import Modal from './app/Paginas/1Modal' // Modal de apresentacao 
import Icon from '../../Cliente/src/app/Routes/icon.png' // imagem
import CakeIcon from '../src/app/Paginas/Publicidade/Img/icon.png' // imagem
import CakeIco from '../src/app/Paginas/Publicidade/Img/icon1.png' // imagem
import { Row, Col } from 'react-bootstrap'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'; // iconCarrinho
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'; // Icon Local
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import Sliderprodutos from "./app/Paginas/Publicidade/SliderProdutos" // Slider ou  Carousell

function App() {
  return (
    <>
      <div className='Fundocima'   >
        <div className='grid1' >
          <h5 id='h5p' >Encontre o  Bolo <br /> perfeito para qualquer <br />hora do dia</h5>
          <p id='frasesPrincipal' >Com o Gestconf você recebe sua encomenda onde estiver, a qualquer hora</p>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", }}>
            <ShoppingCartOutlinedIcon className='f_social_icon' /><p id='frasesPrincipal'  >Compra simples e segura</p>
            <LocalShippingOutlinedIcon className='f_social_icon' /><p id='frasesPrincipal' >Entrega rápida e rastreada</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", }}>
            <Inventory2Icon className='f_social_icon'  /><p id='frasesPrincipal'>Embalagem mantém o <br/>bolo intacto</p>
            <WatchLaterIcon  id="especial" className='f_social_icon' /><p id='frasesPrincipal'>O Bolo chega quentinho até <br/>você</p>
          </div>
        </div>
        <div className='grid2' >
          <img src={Icon} alt="Foto2" id='Foto3' style={{ padding: "2px 5px", borderRadius: "2px 30px" }} />
        </div>

        {/* Termina aqui o 1* campo */}
      </div >

      <h2 className='incio'>Bem <span className='Sp'>-</span>Vindo</h2>

      <div className='menu1'>
        <Modal />
      </div>


      <div>
        <Row xs={1} md={1} className="g-3">
          <Col >
            <div className='V'>
                <div id="Cartao001" style={{ display: "inline-block", background: "white", border: "2px", width: "35vh", borderRadius: "5px 50px", margin: "12px" }}>
                  <img src={CakeIco} alt="#" className='img2' /><br />
                  <button id='but' style={{padding: "6px 20px", border: "none", borderRadius: "12px", position: "relative", top: "-80px"}}>
                    Saber Mais</button>
                  <h2 className='frase' style={{ background: "white", position: "relative", top: "-150px" }} ><span className='Sp' style={{ color: "red" }}>
                    F</span>ormações</h2>
                </div>
                <div id="Cartao001" style={{ display: "inline-block", border: "2px", background: "white", width: "35vh", borderRadius: "5px 50px", margin: "12px" }}>
                  <img src={CakeIcon} alt="#" className='img1' /><br />
                  <button id='but' style={{ padding: "6px 20px", border: "none", borderRadius: "12px", position: "relative", top: "-80px"}}>Saber Mais</button>
                  <h2 className='frase' style={{ background: "white", position: "relative", top: "-150px" }} ><span className='Sp' style={{ color: "red" }}>C</span>onfeiteria</h2>
                </div>
                <div id="Cartao001" style={{ display: "inline-block", border: "2px", background: "white", width: "35vh", borderRadius: "5px 50px", margin: "12px" }}>
                  <img src={CakeIcon} alt="#" className='img1' /><br />
                  <button id='but' style={{ padding: "6px 20px", border: "none", borderRadius: "12px", position: "relative", top: "-80px" }}>Saber Mais</button>
                  <h2 className='frase' style={{ background: "white", position: "relative", top: "-150px" }} ><span className='Sp' style={{ color: "red" }}>C</span>onfeiteria</h2>
                </div>
            </div>
          </Col>
        </Row>
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

      <div>
        <footer>
          <div className="f-item-con">
            <div className="app-info">
              <span className='app-name'>
                <span className='app-initial'>C</span>onfeiteria
              </span>
              {/* <p>We provides you with <strong>Well organised</strong> and <strong>SEO friendly</strong> Website Designs.</p> */}
            </div>
            <div className="useful-links">
              <div className="footer-title">Nossos Links</div>
              <ul>
                <li>Cursos</li>
                <li>Sobre Nos</li>

              </ul>
            </div>
            <div className="help-sec">
              <div className="footer-title">Ajuda</div>
              <ul>
                <li>Ajuda me</li>
                <li>Feedback</li>
                <li>Reportar erros / Bug</li>
              </ul>
            </div>
            <div className="g-i-t">
              <div className="footer-title">Sugestoes</div>
              <form action="/" method="post"className="space-y-2">
                <input type="text" name="g-name"className="g-inp" id="g-name" placeholder='Nome' />
                <input type="email" name="g-email" className="g-inp" id="g-email" placeholder='Email' />
                <textarea type="text" name="g-msg" className="g-inp h-40 resize-none" id="g-msg"
                  placeholder='Escrever aqui Mensagem...'></textarea>
                <button type="submit" className='f-btn'>Enviar</button>
              </form>
            </div>
          </div>
          <div className='cr-con'>Copyright &copy; 2023 | Made by Angola</div>
        </footer>
      </div>
    </>
  );
}

export default App;
