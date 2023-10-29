import React, { useEffect, useState } from 'react';
import '../Estilos/Estilos.css'
import { Card, Switch,Button ,Avatar, message ,InputNumber} from 'antd';
//
const { Meta } = Card;
const AppItemVendas = ({handleQuantityChange,cont , Eliminar}) => {



  const StyleP = {
       padding: '1px 0',
    width: "auto",
    color: "#252525",
    lineHeight: "10px",
    textAlign: "center",
    background: "#ffffff",
    height: "80vh",
    borderRadius: "0px 0px",
    
    
  };
  const Trocar = (valor) => {
    // Remova espaços em branco e substitua a vírgula pelo ponto
    const valorFormatado = valor.toString().replace(/\s+/g, "").replace(",", ".");
    // Certifique-se de que o valor seja uma string representando um número válido, caso contrário, retorne 0.
    const valorNumerico = parseFloat(valorFormatado) || 0;
    return valorNumerico;
  }
  const getTotal = () => {
    console.log("Cont:", cont); // Verifique os valores em cont
    return cont.reduce((total, product) => {
      console.log("Valor Produto:", product.Valor_Produto); // Verifique os valores dos produtos
      console.log("Estoque Produto:", product.Estoque_Produto);
      const valorProduto = Trocar(product.Valor_Produto);
      const estoqueProduto = Trocar(product.Estoque_Produto);
      return total + (valorProduto * estoqueProduto);
    }, 0);
  };
  const [loading, setLoading] = useState(true);
  const [load, setLoadi] = useState([]);

  const onChange = (checked) => {
    setLoading(!checked);
  };






  return (
    <div  style={StyleP} >
<Switch checked={!loading} onChange={onChange} />
<div className="scroll-container">
        <ul>
          {
          cont.map((product,index)=>(
            <li>
              <ul key={index}>
              <Card
        key={product.index}
        style={{
          width: 300,
          marginTop: 16,
        }}
        loading={loading}
      >
        <Meta
        avatar={<> <Avatar src={`http://localhost:3001/uploads/${product.Ficheiro_Imagem}`} /> </>}
        title="Item para pagar"
        description= { <>
        <p>{product.Nome_Produto}</p>
        <p>Preço: R$ {product.Valor_Produto}</p>
        <p>Quantidade: {product.Estoque_Produto}</p>
        <InputNumber
         min={0}
         defaultValue={product.Estoque_Produto}
         onChange={(quantity) => handleQuantityChange(index, quantity)}
       />
        <p>Total: R$ {Trocar(product.Estoque_Produto) * Trocar(product.Valor_Produto)}</p>
        <button onClick={()=>Eliminar(product.index)}>OPP</button>
        </> }
        >
        </Meta>
      </Card>
              </ul>
            </li>
          ))  
          }
          <h5>Valor Total:{getTotal()}</h5>
           <div style={{display:'flex', justifyContent:'center'}}>
           <Button style={{width:'40vh', margin:'4px',left:'18px'}} type="dashed" block>   Compra
          </Button>
           </div>
        </ul>
    </div>
    </div>
  );
};
export default AppItemVendas;
