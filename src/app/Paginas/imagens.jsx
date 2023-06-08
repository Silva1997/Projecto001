import React, { useContext, useState } from 'react';
import { ProdutosContext } from '../Routes/ProdutosContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';
// import Tabela from './Tabelas'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function FormCadastro() {

  const [produto, setProduto] = useState('');
  const [imagem, setImagem] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState();
  const cart = useContext(ProdutosContext);
  const [disponibilidade, setDisponibilidade] = useState("");
  const [categoria, setCategoria] = useState("");





  const ImagePreview = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div>
        <input type="file" onChange={handleImageChange} />
        {selectedImage && (
          <img src={selectedImage} alt="Preview" style={{ width: '200px' }} />
        )}
      </div>
    );
  };
  

  const Lista = [{
    produto,
    imagem,
    descricao,
    valor,
    disponibilidade,
    categoria
  }]

  function Limpar() {
    setProduto("")
  }

  const salvarProduto = () => {

    const novoProduto = [];
    let todosProdutos;

    const produtoObj = {
      produto,
      descricao,
      valor,
      disponibilidade,
      imagem
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
  // const carrinhoData = localStorage.Produtos;

  // const carrinhoArray = localStorage.Produtos ? JSON.parse(carrinhoData) : null;


  const Ver = (event) => {
    alert("adicionado com sucesso o item")
    event.preventDefault();
    return (salvarProduto(),
      Limpar())

  }

  return (
    <>
      <section style={{ marginTop: "100px" }}>
     


        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="on"
          style={{ display: "flex", flexDirection: "row", gap: "10px" }}
          onSubmit={Ver}
          target='_blank'
        >


          <div>
            {
               ImagePreview()
            }
            {/* Imagem */}
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
                value={imagem} name="produto" onChange={(e) => {
                  cart.getImgem(setImagem(e.target.value))

                }}
              />
            </Button>

            {/* Imagem */}

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
            <TextField
              required
              id="outlined-number"
              size='small'
              label="Descricao"
              type="text"
              value={descricao} onChange={(e) => { cart.capturarDescricao(setDescricao(e.target.value)) }}
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

            <Button variant='contained' color='error' type='submit' style={{ bottom: "-10px", left: "10px" }}>Salvar</Button>


          </div>



        </Box>

      </section>


      {/* <Tabela carrinhoArray={carrinhoArray}  producto={produto}/> */}

      <div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">imagem</TableCell>
                <TableCell align="right">Produto</TableCell>
                <TableCell align="right">Preco kz</TableCell>
                <TableCell align="right">Categoria</TableCell>
                <TableCell align="right">Descricao</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {Lista.map((row) => (
                <TableRow
                  key={row}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  {/* <TableCell component="th" scope="row">
                {row.name}
              </TableCell> */}

                  <TableCell align="right"><img src={row.imagem} alt="" /></TableCell>
                  <TableCell align="right">{row.produto}</TableCell>
                  <TableCell align="right">{row.valor}</TableCell>
                  <TableCell align="right">{row.categoria}</TableCell>
                  <TableCell align="right">{row.descricao}</TableCell>
                  <TableCell align="right">{row.disponibilidade}</TableCell>
                </TableRow>
              ))
              }
            </TableBody>
          </Table>
        </TableContainer>


      </div>







    </>
  )
}