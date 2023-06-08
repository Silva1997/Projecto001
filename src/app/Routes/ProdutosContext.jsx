
import React, { useState,createContext  } from 'react';
 
export const ProdutosContext  = createContext({
  getImgem:()=>{},
    capturarProduto: ()=>{} ,
    capturarDescricao: ()=>{} ,
    capturarValor: ()=>{} ,
    capturarDisponibilidade: ()=>{} ,
});




export  const ProdutosProvider = ({ children }) => {
  
    const [produto, setProduto] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState(0);
    const [disponibilidade, setDisponibilidade] = useState('Sim');
    const [imagem, setImagem] = useState('');
  
  
  
    const capturarProduto = (event) => {
      setProduto(event.target.value);
     };
     function getImgem(event){
    setImagem(event.target.value)
     }
   
     const capturarDescricao = (event) => {
       setDescricao(event.target.value);
     };
   
     const capturarValor = (event) => {
       setValor(event.target.value);
     };
   
     const capturarDisponibilidade = (event) => {
       setDisponibilidade(event.target.value);
     };
  
     const capturarDadosLs = () => {
       const produtos = JSON.parse(localStorage.getItem('Produtos'))
       return produtos;
     };
  
    const contextValue = {
      produto,
      getImgem,
      capturarProduto,
      descricao,
      capturarDescricao,
      valor,
      capturarValor,
      disponibilidade,
      imagem,
      capturarDisponibilidade,
      capturarDadosLs,
    };
    
    return (
      <ProdutosContext.Provider value={contextValue}>
        { children }
      </ProdutosContext.Provider>
    )
  }