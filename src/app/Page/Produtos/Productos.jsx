import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap';
import Cartao from './CartaoProdutos'; 
import Footer from '../Footer/Footer'
import { produtos } from './Produtos';

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
        <Footer/>
      </div>
      </div>
    )
  }
}
