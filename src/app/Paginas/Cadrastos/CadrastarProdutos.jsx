import React, { useContext, useState,useEffect } from 'react';
import { ProdutosContext } from '../../Routes/ProdutosContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';
import '../Estilos/Estilos.css'
// icon
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
//
import {Link,useParams} from 'react-router-dom'
import Axios from 'axios'
// Alerta
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//
export default function FormulariodeCadastro() {
  const [produto, setProduto] = useState();
  const [imagem, setImagem] = useState();
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);
  const [estoque, setEstoque] = useState(0);
  const cart = useContext(ProdutosContext);
  const [disponibilidade, setDisponibilidade] = useState("");
  const [categoria, setCategoria] = useState("");
  // aqui 
  const [dados, setDados] = React.useState([]);
  //
 const {id}= useParams();
useEffect(()=>{  
  Axios.get(`http://localhost:3001/Tabela1/${id}`).then((response) => 
    { console.log("Enviou com Tabela", setDados(response.data))
  console.log(response.data[0].Nproduto);
  setProduto(response.data[0].Nproduto);
  setValor(response.data[0].Npreco);
  console.log(dados)
  }).catch((err)=>{
      console.error("erro n200",err);
    })
 
},[id])

//
const notify = () => toast.error("Preencha todos os campos por favor!");

//
  const ImagePreview = () => {
    // const [imagem, setImagem] = useState(null);
    // const handleImageChange = (e) => {
    //   const file = e.target.files[0];
   

    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //       setImagem(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // };

    return (
      <div>
        <Button
          variant="outlined"
          component="label"
          color='info'
          size='medium'
          style={{ bottom: "0px", textDecoration: "none", textTransform: "none", textAlign: "center" }}
        >
          Carregar Imagem
          <TextField
            type="file"
            hidden
            name="file" onChange={(e)=>{setImagem(e.target.files[0])}}
          />
        </Button>    
      </div>
    );
  };
  function Limpar() {
    setImagem(null);
    setProduto("")
    setCategoria("")
    setDescricao("")
    setEstoque("")
    setValor("")
    setDisponibilidade("")

  }

  // const salvarProduto = () => {

  //   const novoProduto = [];
  //   let todosProdutos;

  //   const produtoObj = {
  //     produto,
  //     descricao,
  //     valor,
  //     disponibilidade,
  //     imagem,
  //     estoque
  //   };

  //   const getProdutoLs = JSON.parse(localStorage.getItem('Produtos'));
  //   novoProduto.push(produtoObj);

  //   if (getProdutoLs === null) {
  //     return localStorage.setItem('Produtos', JSON.stringify(novoProduto));
  //   }

  //   todosProdutos = novoProduto.concat(getProdutoLs);

  //   localStorage.setItem('Produtos', JSON.stringify(todosProdutos));
  //   console.log(todosProdutos);


  // }

  // const carrinhoData = localStorage.Produtos;

  // const carrinhoArray = localStorage.Produtos ? JSON.parse(carrinhoData) : null;

  const Ver = async (event) => {

    event.preventDefault();
   
      // salvarProduto();
     
      
      // mandar os dados pelo post na url com axios
      if ( !produto ) {
        console.log("errro");
         notify();
        // setOpen(true);
      } 
      else {
       
       
        try {
          const formData = new FormData();
          formData.append('file',imagem);
                  const response = await Axios.post('http://localhost:3001/image',formData ,{
                    produto: produto,
                    valor: valor,
                    categoria:categoria,
                    descricao:descricao,
                    estoque:estoque,
                    disponibilidade:disponibilidade
                  }) 
                  console.log( " Sucesso " +response.data);
                   Limpar();
                  

                } catch (error) {
                  console.log(error + " erros")
                }

      }
      
  }

  return (
    <>
<ToastContainer
 position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"/>
      <section style={{ margin: "30px", marginTop: "120px", backgroundColor: "white" }}>

        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="on"
          className='CampoCadrastos'
          onSubmit={Ver}
          target='_blank'
        >
          <div >
            <div style={{ marginLeft: "8px" }}>
              {/* 1 campo */}
              {

                ImagePreview()


              }
              <Button variant='contained' color='error' type='submit' style={{ marginTop: "10px" }} >Salvar</Button>

            </div>
            {/* 2 campo */}
            <TextField
              required
              id="outlined-required"
              label="Nome do Produto"
              type='text'
              value={produto  || ""}
              onChange={(e) => {
                cart.capturarProduto(setProduto(e.target.value))
              }}
              size='small'
            />
{/* <p>Id : {id}</p> */}
            <TextField
              required
              id="outlined-number"
              size='small'
              label="Preço do produto"
              type="number"
              value={valor || 0}
              onChange={(e) => { cart.capturarValor(setValor(e.target.value)) }}
            />
            <FormControl
              size='small'
              sx={{ width: '155px' }}
              className='FormularioCampo'
            >
              <InputLabel id="">Categoria</InputLabel>
              <Select
                label="Categoria"
                value={categoria}
                onChange={(e) => { cart.capturarDisponibilidade(setCategoria(e.target.value)) }}>
                <MenuItem value="Bolo">Bolo</MenuItem>
                <MenuItem value="Salgado">Salgado</MenuItem>
                <MenuItem value="Doces">Doces</MenuItem>
              </Select>

            </FormControl>
            {/* 3 campo */}
            <TextField
              required
              id="outlined-number"
              size='small'
              label="Descrição"
              type="text"
              value={descricao} onChange={(e) => { cart.capturarDescricao(setDescricao(e.target.value)) }}
            />
            <TextField
              required
              id="outlined-number"
              size='small'
              label="Estoque"
              type="number"
              value={estoque || ""}
              onChange={(e) => { cart.capturarValor(setEstoque(e.target.value)) }}
            />
            {/*Lista de opcao*/}
            <FormControl
              size='small'
              className='FormularioCampo'
              sx={{ width: '155px' }}
            >
              <InputLabel id="">Disponibilidade</InputLabel>
              <Select
                label="disponibilidade"
                value={disponibilidade || ""}
                onChange={(e) => { cart.capturarDisponibilidade(setDisponibilidade(e.target.value)) }}>
                <MenuItem value="Sim">Sim</MenuItem>
                <MenuItem value="Nao">Nao</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Box>
      </section>

{/* Alert  */}
     <div>
        <TabelaBasica/>
      </div>


      <div className='chao' style={{marginTop:"200px"}}>
        <footer>
          <div className="f-item-con">
            <div className="app-info">
              <span className='app-name'>
                <span className='app-initial'>C</span>onfeiteria
              </span>
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
              <form action="/" method="post" className="space-y-2">
                <input type="text" name="g-name" className="g-inp" id="g-name" placeholder='Nome' />
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
  )
}

 function TabelaBasica() {
  const [dado, setDado] = useState([]);
  // para lidar com requisicoes da pagina
  useEffect(() => {
    BuscarDados();
  },
    //fim
    [setDado]);
 //   funcao para buscar os dados da tabelo pelo metodo get 
  const BuscarDados = async () => {
    try {
      await Axios.get('http://localhost:3001/Tabela').then((response) => 
      { console.log("Enviou com sucesso", setDado(response.data)) });
    } catch (error) {
      console.error("erro", error);
    }
  }
 // fim 
// funcao para lidar com o manuseio para pagar
  const handleDetele = async (id) => {

  try {  
   Axios.delete(`http://localhost:3001/Apagar/${id}`);
      setDado(dado.filter((item) => item.id !== id));
    } catch (error) {
      console.error(" erro ", error)
    }
  }
//
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
          typeof dado !== "undefined" && dado.map((linha) => (
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
              onClick={() => handleDetele(linha.id)}> Apagar
              <DeleteForeverRoundedIcon color='error' /></button></td>
              <td align='center'>
              <Link to={`/CadrastarProdutos/${linha.id}`} >
                Editar
              <EditRoundedIcon color='sucess'/>  
            
              </Link>  
             </td>
            </tr>
          ))
        }
      </tbody>
    </table>
 </div>
  );
     
}
