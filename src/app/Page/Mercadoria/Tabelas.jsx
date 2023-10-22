import * as React from 'react';
// import Table from 'react-bootstrap/Table';
import '../Estilos/Estilos.css'
import Axios from 'axios';
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
// icon
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
// import ModalEditar from '../Cadrastos/ModalEditar'
export default function TabelaBasica() {
  // 
  
  const [dados, setDados] = useState([]);
 

  useEffect(() => {
    BuscarDados();
  },
    //fim
    [setDados])
  const BuscarDados = async () => {
    try {
      await Axios.get('http://localhost:3001/Tabela').then((response) => 
      { console.log("Enviou com sucesso", setDados(response.data)) });
    } catch (error) {
      console.error("erro", error);
    }

  }

  const handleDetele = async (id) => {
    try {
      //await Axios.delete(`http://localhost:3001/Apagar/${id}`)
      Axios.delete(`http://localhost:3001/Apagar/${id}`);

      setDados(dados.filter((item) => item.id !== id));
    } catch (error) {
      console.error(" erro ", error)
    }
  }




  // const handleUpdate = async (p) => {
  //   try {
  //     //await Axios.delete(`http://localhost:3001/Apagar/${id}`)
  //     Axios.put(`http://localhost:3001/Actualizar/${p}` ,{
       
       
  //   });
  

  //   } catch (error) {
  //     console.error(" erro ", error)
  //   }
  // }

  return (
    
    <div className = {"DivTabela"} >
    <table  className = {"TabelasListas"} >
   
      <thead>
        <tr style={{color:"white",backgroundColor:"black" , textAlign:"center" ,borderRadius:"15px 15px"}} >
          <th align='center' >Imagem</th>
          <th align='center' >Produto</th>
          <th align='center' >Preco</th>
          <th align='center' >Categoria</th>
          <th align='center' >Quantidades</th>
          <th align='center' >disponibilidade</th>
          <th align='center' ></th>
          <th align='center' ></th>
        </tr>
      </thead>
      <tbody>
        {
          typeof dados !== "undefined" && dados.map((linha) => (
                       <tr id="P23" key={linha.id}>
              <td align='center'>
                <picture className="imagemCircular" >
                <img src={linha.Nimagem} id='imagemCir' alt="ImagemItem" /></picture>
              </td>
              <td align='center'>{linha.Nproduto}</td>
              <td align='center' >{linha.Npreco}</td>
              <td align='center'>{linha.Ncaterogia}</td>
              <td align='center'>{linha.Nquantidade}</td>
              <td align='center'>{linha.Ndisponibilidade}</td>
              <td align='center'><button id="btnTabela" style={{ textDecoration: "none", border: "none" }} 
              onClick={() => handleDetele(linha.id)}>
              <DeleteForeverRoundedIcon color='error' /></button></td>
              <td align='center'>
              <Link to={`/CadrastarProdutos/${linha.id}`} >
             Editar
              </Link>  
             {/* <ModalEditar dados={dados}/> */}
                </td>
            </tr>

          ))

        }
      </tbody>
    </table>
    
 </div>
    
  );


  


}




