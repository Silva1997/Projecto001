import React, { useContext, useState} from 'react';
import { ProdutosContext } from '../../Routes/ProdutosContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';
import Tabela from '../Mercadoria/Tabelas'

export default function FormCadastro() {

  const [produto, setProduto] = useState('');
  const [imagem, setImagem] = useState(null);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState(0);
  const [estoque, setEstoque] = useState(0);
  const cart = useContext(ProdutosContext);
  const [disponibilidade, setDisponibilidade] = useState("");
  const [categoria, setCategoria] = useState("");
// aqui 


  const ImagePreview = () => {
    // const [imagem, setImagem] = useState(null);
    const handleImageChange = (e) => {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagem(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <div>

        <Button
          variant="outlined"
          component="label"
          color='info'
          size='medium'
          style={{ bottom: "-8px" }}
        >
          Carregar Imagem
          <TextField

            type="file"
            hidden
            name="produto" onChange={handleImageChange}
          />
        </Button>

        {/* <input type="file" onChange={handleImageChange} /> */}
        {/* {imagem && (
          <img src={imagem} alt="Preview" style={{ width: '200px' }} />
        )} */}
      </div>
    );
  };


 

  function Limpar() {
    setProduto("")
    setCategoria("")
    setDescricao("")
    setEstoque("")
    setValor("")
    setDisponibilidade("")
    
  }

  const salvarProduto = () => {

    const novoProduto = [];
    let todosProdutos;

    const produtoObj = {
      produto,
      descricao,
      valor,
      disponibilidade,
      imagem,
      estoque
    };

    const getProdutoLs = JSON.parse(localStorage.getItem('Produtos'));
    novoProduto.push(produtoObj);

    if (getProdutoLs === null) {
      return localStorage.setItem('Produtos', JSON.stringify(novoProduto));
    }

    todosProdutos = novoProduto.concat(getProdutoLs);

    localStorage.setItem('Produtos', JSON.stringify(todosProdutos));
    console.log(todosProdutos);


  }
  const carrinhoData = localStorage.Produtos;

  const carrinhoArray = localStorage.Produtos ? JSON.parse(carrinhoData) : null;


  const Ver = (event) => {
    alert("adicionado com sucesso o item")
    event.preventDefault();
    return (salvarProduto(),
      Limpar())

  }

  return (
    <>

      <section style={{margin:"30px",marginTop:"120px" }}>



        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="on"
          style={{ padding:"8px",backgroundColor:"white",display: "grid", gridTemplateColumns:"1fr 1fr 1fr",gridTemplateRows:"10vh 10vh 10vh", gap: "0.5px" }}
          onSubmit={Ver}
          target='_blank'
        >


<div style={{marginLeft:"8px"}}>
{
              ImagePreview()
            }


<Button variant='contained' color='error' type='submit' style={{ bottom: "-22px", left: "10px" }}>Salvar</Button>

</div>
          <div>
           


            <TextField
              required
              id="outlined-required"
              label="Nome do Produto"
              type='text'
              value={produto}
              onChange={(e) => {
                cart.capturarProduto(setProduto(e.target.value))
              }}
              size='small'
            />



            <TextField
              required
              id="outlined-number"
              size='small'
              label="Preco do produto"
              type="number"
              value={valor}
              onChange={(e) => { cart.capturarValor(setValor(e.target.value)) }}
            />

<FormControl sx={{ width: 155, bottom: "-10px", left: "10px" }}
              size='small'>
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

          </div>
          <div>

            <TextField
              required
              id="outlined-number"
              size='small'
              label="Descricao"
              type="text"
              value={descricao} onChange={(e) => { cart.capturarDescricao(setDescricao(e.target.value)) }}
            />

<TextField
              required
              id="outlined-number"
              size='small'
              label="Estoque"
              type="number"
              value={estoque}
              onChange={(e) => { cart.capturarValor(setEstoque(e.target.value)) }}
            />


            {/*  */}
            <FormControl sx={{ width: 155, bottom: "-10px" }}
              size='small'>
              <InputLabel id="">Disponibilidade</InputLabel>
              <Select
                label="disponibilidade"
                value={disponibilidade}
                onChange={(e) => { cart.capturarDisponibilidade(setDisponibilidade(e.target.value)) }}>
                <MenuItem value="Sim">Sim</MenuItem>
                <MenuItem value="Nao">Nao</MenuItem>
              </Select>

            </FormControl>
            {/* Categoria */}





          </div>
       

         



        </Box>

      </section>
  

      {/* <Tabela carrinhoArray={carrinhoArray}  producto={produto}/> */}

      <div style={{marginTop:"20px", margin:"30px"}}>
      <Tabela carrinhoArray={carrinhoArray} /> 
       </div>


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

    </>
  )
}