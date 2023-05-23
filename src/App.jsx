
import React from 'react';
import '../src/app/Estilos/Estilos.css';
import Icon from './app/Img/Principal.png'
import CakeIcon from './app/Img/icon.png'
import CakeIco from './app/Img/icon1.png'

import { Row, Col } from 'react-bootstrap';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Link } from 'react-router-dom';


import Sliderprodutos from "../src/app/Paginas/SliderProdutos"
<head title='Home'></head>

function App() {


  return (
    <>


      <div className='Fundocima'  >

        <div className='grid1' >
          <h5 >Encontre o  Bolo <br /> perfeito para qualquer <br />hora do dia</h5>
          <p>Com o Gestconf você recebe sua encomenda onde estiver, <br />a qualquer hora</p>
          <ShoppingCartOutlinedIcon className='f_social_icon' /><p>Compra simples e segura</p>
          <LocalShippingOutlinedIcon className='f_social_icon' /><p>Entrega rápida e rastreada</p>
        </div>

        <div className='grid2' >
          <img src={Icon} alt="Foto2" id='Foto3' />
        </div>

        {/*  */}

      </div >
      
      <h2 className='incio'>Bem <span className='Sp'>-</span>Vindo</h2>

      <div className='menu1'>

        <button id='butao1'>Nossa Historia</button>
      </div>


      <div>
        <Row xs={1} md={1} className="g-3">

          <Col >

            <div style={{ display:"flex" ,justifyContent:"center",margin: "40px" }}>
              <div className='V'>
              <div id="Cartao001" style={{ display: "inline-block", background:"white", border: "2px", width: "35vh", borderRadius: "5px 50px", margin: "12px" }}>
                
                  <img src={CakeIco} alt="#" className='img2' /><br />
                  <button id='but' style={{ padding: "6px 20px", border: "none", borderRadius: "12px", position: "relative", top: "-80px", left: "73px" }}>
                  Saber Mais</button>
                  <h2 className='frase' style={{ background: "white", position: "relative", top: "-150px" }} ><span className='Sp' style={{ color: "red" }}>
                  F</span>ormações</h2>
                  

                </div>
                
                <div id="Cartao001"  style={{ display: "inline-block", border: "2px", background: "white", width: "35vh", borderRadius: "5px 50px", margin: "12px" }}>
                  <img src={CakeIcon} alt="#" className='img1' /><br />
                  <button id='but' style={{ padding: "6px 20px", border: "none", borderRadius: "12px", position: "relative", top: "-80px", left: "73px" }}>Saber Mais</button>
                  <h2 className='frase' style={{ background: "white", position: "relative", top: "-150px" }} ><span className='Sp' style={{ color: "red" }}>C</span>onfeiteria</h2>
                </div>
                <div id="Cartao001"   style={{ display: "inline-block", border: "2px", background: "white", width: "35vh", borderRadius: "5px 50px", margin: "12px" }}>
                  <img src={CakeIcon} alt="#" className='img1' /><br />
                  <button id='but' style={{ padding: "6px 20px", border: "none", borderRadius: "12px", position: "relative", top: "-80px", left: "73px" }}>Saber Mais</button>
                  <h2 className='frase' style={{ background: "white", position: "relative", top: "-150px" }} ><span className='Sp' style={{ color: "red" }}>C</span>onfeiteria</h2>
                </div>

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
        <footer className="new_footer_area bg_color">
          <div className="new_footer_top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget company_widget wow fadeInLeft">
                    <h3 className="f-title f_600 t_color f_size_18">Sujeitões</h3>
                    <form action="#" className="f_subscribe_two mailchimp" >
                      <input type="text" name="EMAIL" className="form-control memail" /><br />
                      <button className="btn_get_two" type="submit">Subescrever</button>

                    </form>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget about-widget pl_70 wow fadeInLeft"  >
                    <h3 className="f-title f_600 t_color f_size_18">Sobre</h3>
                    <ul className="list-unstyled f_list">
                      <Link to={"#"} style={{ textDecoration: "none" }}>Nossa historia</Link><br />
                      <Link to={"#"} style={{ textDecoration: "none" }}>Feeback</Link><br />
                      <Link to={"#"} style={{ textDecoration: "none" }} >Opiniões</Link>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget about-widget pl_70 wow fadeInLeft" >
                    <h3 className="f-title f_600 t_color f_size_18">Ajuda</h3>
                    <ul className="list-unstyled f_list">
                      <Link to={"#"} style={{ textDecoration: "none" }}>Contacto</Link><br />
                      <Link to={"#"} style={{ textDecoration: "none" }}>Email</Link><br />
                      <Link to={"#"} style={{ textDecoration: "none" }} >Localização</Link>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="f_widget social-widget pl_70 wow fadeInLeft" >
                    <h3 className="f-title f_600 t_color f_size_18">Equipa de Solução</h3>
                    <div className="">
                      <ul className="list-unstyled f_list">
                        <Link to={"#"} style={{ textDecoration: "none" }}>Reclamações</Link><br />
                        <Link to={"#"} style={{ textDecoration: "none" }}>Atrazo</Link><br />

                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_bg">
              <div className="footer_bg_one"></div>
              <div className="footer_bg_two"></div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-7">
                  <p className="mb-0 f_400">© sofware.. 2023 Todos direitos reservados.</p>
                </div>
                <div className="col-lg-6 col-sm-5 text-right">
                  <p>Made in  <i className="icon_heart"></i> Angola </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </>
  );
}

export default App;
