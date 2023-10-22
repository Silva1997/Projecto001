import React from 'react';
import './app/Page/Estilos/Estilos.css'
import CakeIcon from '../src/app/Page/Publicidade/Img/icon.png' // imagem
import CakeIco from '../src/app/Page/Publicidade/Img/icon1.png' // imagem
import { Link } from 'react-router-dom' // importacao do routeamento
import whatsapp from './W.svg'
import Sliderprodutos from "./app/Page/Publicidade/SliderProdutos" // Slider ou  Carousell
import Footer from './app/Page/Footer/Footer'
import Teste2 from './app/Page/Publicidade/Effeito'
function App() {
  return (
    <>
    <div>
      <Teste2/>
    </div>
      <h2 className='incio'>Bem <span className='Sp'>-</span>Vindo</h2>
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