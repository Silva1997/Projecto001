import React, { Component } from 'react'
import Imag from './morada.png'
import Imag1 from './contactos.png'
import Imag2 from './horario.png'
import './Footer.css'
export default class ModalEditar extends Component {
  render() {
    return (
      <>
         
<div className=''>
  
<div className='Rodape'>
  <section>
   <img src={Imag} alt="P" width={30} style={{marginLeft:"10px"}} />
  <p style={{textAlign:"start"}}>Morada</p>
  </section>
  <section>
  <img src={Imag1} alt="P" width={30} style={{marginLeft:"15px"}} /> 
  <p>Contacto</p> 
  </section>
  <section>
  <img src={Imag2} alt="P" width={30}  style={{marginLeft:"25px"}} /> 
  <p>Localizado</p> 
  </section>
            
  </div>

<div className='Rodagride'>
<div id='A1'>
      <span style={{color:"#2d4bf0"}}>C</span>onfeiteria              
</div>

<div id='A2'>
               <div className="#">Nossos Links</div>
                <ul>
                  <li>Cursos</li>
                  <li>Sobre Nos</li>
                </ul>
              
              <div className="#">
                <div className="#">Ajuda</div>
                <ul>
                  <li>Ajuda me</li>
                  <li>Feedback</li>
                  <li>Reportar erros / Bug</li>
                </ul>
              </div>

</div>
<div id='A3'>

                
                <div >
                 <p style={{textAlign:"start"}}>Sugestões</p> 
                <form action="/" method="post" className="Formulario">
                  <input type="text" name="g-name" className="inputEntrada" id="#" placeholder='Nome' />
                  <input type="email" name="g-email" className="inputEntrada" id="#" placeholder='Email' />
                  <textarea type="text" name="g-msg" className="inputEntrada" id="#"
                    placeholder='Escrever aqui Mensagem...'></textarea>
                  <button type="submit" className='buttnFormulario'>Enviar</button>
                </form>
                </div>
             

          

</div>









</div>
<div className='footerFim'> <p>Copyright © 2023 | Made by Angola</p></div>
</div>
      </>
    )
  }
}
