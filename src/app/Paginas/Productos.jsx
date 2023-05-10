import React, { Component } from 'react'
import {Row,Col} from 'react-bootstrap';
import Cartao from './CartaoProdutos';
import { produtos } from './Produtos';

// import { UserCarrinho } from '../Routes/Provedoracesso';
export default class Produtostabela extends Component {
    
  render() {
    
    return (
      <div>
        
<Row xs={2} md={5} className="g-1">
{produtos.map((product,idx)=>(
<Col align="center" key={idx}>
<Cartao product={product}/>

</Col>

))}
</Row>


      </div>
    )
  }
}
