import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import Cartao from './CartaoProdutos'; import { produtos } from './Produtos';

// import { UserCarrinho } from '../Routes/Provedoracesso';
export default class Produtostabela extends Component {

  render() {

    return (
      <div>
        <span className="frase2" style={{ textAlign: "start", top: "78px", position: "relative", marginLeft: "5px" }}><span style={{ color: "red" }}>O</span>fertas Bolos</span>
        <Row xs={2} md={5} className="g-0" style={{ marginTop: "75px" }}>
          {produtos.map((product, idx) => (
            <Col align="center" key={idx}>
              <Cartao product={product} />

            </Col>

          ))}
        </Row>





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
              <form action="/" method="post" class="space-y-2">
                <input type="text" name="g-name" class="g-inp" id="g-name" placeholder='Nome' />
                <input type="email" name="g-email" class="g-inp" id="g-email" placeholder='Email' />
                <textarea type="text" name="g-msg" class="g-inp h-40 resize-none" id="g-msg"
                  placeholder='Escrever aqui Mensagem...'></textarea>
                <button type="submit" className='f-btn'>Enviar</button>
              </form>
            </div>
          </div>
          <div className='cr-con'>Copyright &copy; 2023 | Made by Angola</div>
        </footer>
      </div>

      </div>
    )
  }
}
