import React, { useContext, useState, useEffect } from 'react'; // metodo do react ou hooks
import { ProdutosContext } from '../../../Routes/ProdutosContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel } from '@mui/material';
import '../../Estilos/Estilos.css' // css ou estilos global
import Footer from '../../Footer/Footer'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import People from './PP1.png';
import { Link, useParams } from 'react-router-dom'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tabela2 from '../../PDV/TabelaVendas'
// importacao
export default function FormularioCadastro() {
  const { id } = useParams(); // lidar com os parametros da url metodo Post 
  const idInt = parseInt(id); // conversao de string para inteiro 
  const [produto, setProduto] = useState(''); // lidar com o estado get e set
  const [imagem, setImagem] = useState(null); // lidar com o estado get e set
  const [descricao, setDescricao] = useState(''); // lidar com o estado get e set
  const [valor, setValor] = useState(''); // lidar com o estado get e set
  const [estoque, setEstoque] = useState(0);// lidar com o estado get e set
  const { capturarProduto, capturarDescricao, capturarDisponibilidade } = useContext(ProdutosContext); // estado global lidar em qualquer pagina 
  const [disponibilidade, setDisponibilidade] = useState(''); // lidar com o estado get e set
  const [categoria, setCategoria] = useState('');// lidar com o estado get e set
  const [dados, setDados] = useState([]); // lidar com o estado get e set
  const [categoria1, setCategoria1] = useState([]); // lidar com o estado get e set
  const [Ids, setIds] = useState([]);// lidar com o estado get e set
  const [tamanho, setTamanho] = useState(''); // O estado para controlar o valor selecionado
  const formData = new FormData(); // lidar com tipos dados pdf , jpg ,png 

  const limiteValor = 6; // para os limites de entrada dos dados inteiros ou float 
  const handleLimiteValor = (e) => {
    const textoNumero = e.target.value.replace(/[^\d]/g, '');
    const formValor = new Intl.NumberFormat('pt-AO', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(textoNumero) / 100)
    setValor(formValor);
    // const p =parseInt(formValor)
    // setValor(p);

    // if (textoNumero.length <= limiteValor) setValor(textoNumero);
  };
  const limiteEstoque = 5;
  const handleLimiteEstoque = (e) => {
    const textoNumero = e.target.value;
    if (textoNumero.length <= limiteEstoque) setEstoque(textoNumero);
  };
  // fim
  // listar categoria
  useEffect(() => {
    const buscarDados = async () => {
      try {
        const response = await Axios.get('http://localhost:3001/Categoria');
        setCategoria1(response.data);
        console.log("Dados carregados com sucesso ", response.data);
      } catch (error) {
        console.error("Erro ao listar categorias", error);
      }
    };
    buscarDados();
  }, []);
  // Listar Categoria  e  pegar o id para o inner join 
  useEffect(() => {
    Axios.get(`http://localhost:3001/Categoriaq/${id}`)
      .then((response) => {
        setIds(response.data[0].idCategoria_Produto);
        console.log("Enviou com Tabela", response.data);
        console.log('O seu ID Categoria é:', response.data);
      })
      .catch((err) => {
        console.error("Erro ao Pesquisar o atributo", err);
      });
  }, [id]);
  // listar os dados da tabela para fazer o update pelo id. 
  useEffect(() => {
    if (id) {
      async function fetchProduto() {
        try {
          const response = await Axios.get(`http://localhost:3001/Tabela1/${id}`);
          setDados(response.data);
          console.log("Dados carregados com sucesso ", response.data);
          setProduto(response.data[0].Nome_Produto);
          setValor(response.data[0].Valor_Produto);
          setDescricao(response.data[0].Descricao_Produto);
          setEstoque(response.data[0].Estoque_Produto);
          setCategoria(response.data[0].Nome_Categoria);
          setDisponibilidade(response.data[0].Disponibilidade_Produto);
        } catch (error) {
          console.error("Erro ao obter dados do produto", error);
        }
      }

      fetchProduto();
    }
  }, [id]);
  // alerta para notificacao , erros e  cadrastos com sucessoa
  const notify = () => toast.error("Preencha todos os campos por favor!");
  // metodo para fazer  o  carregamento de imagens pelo file ou arquivo ou ficheiro
  const ImagePreview = () => (
    <div style={{ marginTop: '6px' }}>
      <Button
        variant="outlined"
        component="label"
        color='info'
        size='large'
        style={{ textDecoration: "none", textTransform: "none", textAlign: "center", width: "20rem" }}
      >
        Carregar Imagem
        <TextField
          type="file"
          hidden
          name="file"
          onChange={(e) => setImagem(e.target.files[0])}
        />
      </Button>
    </div>
  );
  // funcao limpar o estado quando cadrastamentos com sucesso
  const Limpar = () => {
    setImagem(null);
    setProduto('');
    setCategoria('');
    setDescricao('');
    setEstoque('');
    setValor('');
    setDisponibilidade('');
    setTamanho('');
  };
  // funcao assicrona para lidar com o nosso estado com onSubmit ou seja para submeter os dados do nosso formulario
  const handleSubmicaoEntrada = async (event) => {
    event.preventDefault();
    if (!produto || !valor || !disponibilidade || !descricao || !imagem || !estoque || !descricao) {
      notify();
      return;
    }
    if (!id) {
      console.log("Erro! ID não encontrado");
      return;
    }

    try {
      console.log("Enviar os dados :");
      // salavar os dados
      formData.append('file', imagem);
      formData.append('produto', produto);
      formData.append('valor', valor);
      formData.append('Ids', Ids);
      formData.append('descricao', descricao);
      formData.append('estoque', estoque);
      formData.append('disponibilidade', disponibilidade);
      const response = await Axios.post('http://localhost:3001/image', formData);
      console.log("Sucesso: ", response.data);
      toast.success("Cadastrado com sucesso");
      Limpar();
      const novoDado = {
        Ficheiro_Imagem: imagem,
        Nome_Produto: produto,
        Valor_Produto: valor,
        Nome_Categoria: categoria,
        Descricao_Produto: descricao,
        Estoque_Produto: estoque,
        Disponibilidade_Produto: disponibilidade
      };
      setDados([...dados, novoDado]);
      console.log('Dados atualizados:', dados);
    } catch (error) {
      console.error("Erro ao enviar ao arquivo:", error);
      toast.error("Erro ao enviar ao arquivo");
    }
  }
  // tamanho do input
  const handleChange = (event) => {
    setTamanho(event.target.value);
  };
  // Atualiza metodo ou funcao para actualizar os meus dados 
  const handleUpdate = async () => {
    formData.append('file', imagem);
    formData.append('produto', produto);
    formData.append('valor', valor);
    formData.append('Ids', Ids);
    formData.append('descricao', descricao);
    formData.append('estoque', estoque);
    formData.append('disponibilidade', disponibilidade);

    if (!isNaN(idInt)) {
      console.log('Valor de id antes da atualização:', id);
      Axios.put(`http://localhost:3001/Actualizar/${id}`, formData)
        .then(response => {
          toast.success("Produto atualizado com sucesso");
          console.log('Produto atualizado com sucesso:', response.data);
          Limpar();
        })
        .catch(error => {

          console.error('Erro ao atualizar produto:', error);
        });
    }

    else {
      console.error(" Sem ID para atualizar");
    }




  }
  // retorno
  return (
    <>
      {/* modal para alert com o framework Toast */}
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
        theme="colored"
      />
      <section style={{ margin: "20px", marginTop: "150px", backgroundColor: "white", padding: "50px" }}>
        <h5 className="frase2" style={{ textAlign: "center", position: "relative", top: '-10px', fontSize: "20pt" }}>
          <span style={{ color: "red" }}>C</span>adastrar Produtos <img src={People} width={50} className='Aps' />
        </h5>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' }, gap: "20px"
          }}
          noValidate
          autoComplete="on"
          className='CampoCadrastos'
          onSubmit={handleSubmicaoEntrada}
          target='_blank'
        >
          <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }} >
            <TextField
              required
              id="outlined-required"
              label="Nome do Produto"
              type='text'
              value={produto || " "}
              sx={{ width: "20rem" }}
              onChange={(e) => capturarProduto(setProduto(e.target.value))}
              size='small'
            />
            <TextField
              required
              sx={{ width: "20rem" }}
              id="outlined-number"
              size='small'
              label="Preço do produto"
              type="text"
              value={valor || 0}
              onChange={(e) => handleLimiteValor(e)}
            />
            <FormControl
              size='small'
              sx={{ width: "20rem" }}
              className='FormularioCampo'
            >
              <InputLabel id="">Categoria</InputLabel>
              <Select
                label="Categoria"
                value={categoria || ""}
                onChange={(e) => capturarDisponibilidade(setCategoria(e.target.value))}
              >
                {categoria1.map((p) => (
                  <MenuItem
                    key={p.idCategoria_Produto}
                    as={Link}
                    to={`/CadrastarProdutos/${p.idCategoria_Produto}`}
                    value={p.Nome_Categoria}
                  >
                    {p.Nome_Categoria}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {ImagePreview()}
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
            <TextField
              required
              sx={{ width: "20rem" }}
              id="outlined-number"
              size='small'
              label="Descrição"
              type="text"
              value={descricao || " "}
              onChange={(e) => capturarDescricao(setDescricao(e.target.value))}
            />
            <TextField
              required
              id="outlined-number"
              size='small'
              label="Estoque"
              type="number"
              sx={{ width: "20rem" }}
              value={estoque || 0}
              onChange={(e) => handleLimiteEstoque(e)}
            />
            <FormControl
              size='small'
              className='FormularioCampo'
              sx={{ width: "20rem" }}
            >
              <InputLabel id="">Disponibilidade</InputLabel>
              <Select
                label="Disponibilidade"
                value={disponibilidade || ""}
                onChange={(e) => capturarDisponibilidade(setDisponibilidade(e.target.value))}
              >
                <MenuItem value="Sim">Sim</MenuItem>
                <MenuItem value="Nao">Nao</MenuItem>
              </Select>
            </FormControl>
            <FormControl size='small' className='FormularioCampo' sx={{ width: '20rem' }}>
              <InputLabel id="">Tamanho do Produto</InputLabel>
              <Select
                label="Tamanho do Produto"
                value={tamanho} // O valor atual é controlado pelo estado
                onChange={handleChange} // Função para atualizar o estado quando o valor muda
              >
                <MenuItem value="Pequeno">12cm</MenuItem>
                <MenuItem value="Medio">20cm</MenuItem>
                <MenuItem value="Grande">25cm</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: "20px", gap: '1.5rem', justifyContent: "center" }}>
            <button
              type='submit'
              id='butaoCadastrar'
              style={{
                textDecoration: "none",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px 9px",
                backgroundColor: "yellow",
                width: "10rem"
              }}
            >
              Adicionar
            </button>
            <button
              type='submit'
              id='butaoCadastrar'
              style={{
                textDecoration: "none",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px 9px",
                backgroundColor: "#5e2ced",
                width: "10rem"
              }}
              onClick={() => { handleUpdate() }}
            >
              <span>{id ? " Actualizar" : " salvar"}</span>
            </button>
            <button
              type='submit'
              id='butaoCadastrar'
              style={{
                textDecoration: "none",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px 9px",
                backgroundColor: "#f30a0a",
                width: "10rem"
              }}
              onClick={() => { Limpar() }}
            >
              Excluir
            </button>
            <button
              type='submit'
              id='butaoCadastrar'
              style={{
                textDecoration: "none",
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px 9px",
                backgroundColor: "#25f30a",
                width: "10rem"
              }}
              onClick={() => { Limpar() }}
            >
              Imprimir
            </button>
          </div>
        </Box>
      </section>

      <div>
        <TabelaBasica dados={dados} />
      </div>
      <div className='#' style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </>
  );
}
function TabelaBasica({ dados }) {
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
      await Axios.get('http://localhost:3001/Tabela').then((response) => {
        console.log("Enviou com sucesso", setDado(response.data))
      });
    } catch (error) {
      console.error("Erro ao Listar", error);
    }
  }




  // fim 
  // funcao para lidar com o manuseio para pagar
  const handleDetele = async (idProdutos_Cadrastar) => {

    try {
      if (window.confirm("Eliminar ?")) {
        Axios.delete(`http://localhost:3001/Apagar/${idProdutos_Cadrastar}`);
        toast.error("Apagado com sucesso", idProdutos_Cadrastar)
        setDado(dado.filter((item) => item.idProdutos_Cadrastar !== idProdutos_Cadrastar));
      }

    } catch (error) {
      console.error(" Erro ao pagar  ", error)
    }
  }
  //
  return (

    <div className={"DivTabela"} style={{ margin: "30px" }} >
      <table className={"TabelasListas"} >
        <thead>
          <tr style={{ color: "white", backgroundColor: "black", textAlign: "center", borderRadius: "15px 15px" }} >
            <th align='center' >Imagem-Produto</th>
            <th align='center' >Nome-Produto</th>
            <th align='center' >Preço-Produto</th>
            <th align='center' >Categoria-Produto</th>
            <th align='center' >Descrição-Produto</th>
            <th align='center' >Quantidade</th>
            <th align='center' >disponibilidade</th>
            <th align='center' >Eliminar</th>
            <th align='center' >Actualizar</th>
          </tr>
        </thead>
        <tbody>
          {
            typeof dados !== "undefined" && dados.map((linha) => (
              <tr key={linha.idProdutos_Cadrastar} id="P23">
                <td align='center'>
                  <picture className="imagemCircular" >
                    <img src={`http://localhost:3001/uploads/${linha.Ficheiro_Imagem}`} id='imagemCir' alt="ImagemItem" /></picture>
                </td>
                <td align='center'>{linha.Nome_Produto || dados.Nome_Produto}</td>
                <td align='center' >{linha.Valor_Produto}</td>
                <td align='center'>{linha.Nome_Categoria}</td>
                <td align='center'>{linha.Descricao_Produto}</td>
                <td align='center'>{linha.Estoque_Produto}</td>
                <td align='center'>{linha.Disponibilidade_Produto}</td>
                <td align='center'>
                  <button id="btnTabela" style={{
                    textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
                    backgroundColor: "#FF1111"
                  }}
                    onClick={() => handleDetele(linha.idProdutos_Cadrastar)}> Eliminar
                    <DeleteForeverRoundedIcon />
                  </button>
                </td>
                <td align='center'>
                  <button id="btnTabela" style={{
                    textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
                    backgroundColor: "#5e2ced"
                  }} as={Link} to={`/CadrastarProdutos/${linha.idProdutos_Cadrastar}`}>
                    Editar
                    <EditRoundedIcon />
                  </button>
                </td>

              </tr>
            ))
          }
          {
            typeof dado !== "undefined" && dado.map((linha) => (
             
              <tr id="P23" key={linha.idProdutos_Cadrastar}>
                <td align='center'>
                  <picture className="imagemCircular" >
                    <img src={`http://localhost:3001/uploads/${linha.Ficheiro_Imagem}`} id='imagemCir' alt="ImagemItem" /></picture>
                </td>
                <td align='center'>{linha.Nome_Produto || dados.Nome_Produto}</td>
                <td align='center' >{linha.Valor_Produto}</td>
                <td align='center'>{linha.Nome_Categoria}</td>
                <td align='center'>{linha.Descricao_Produto}</td>
                <td align='center'>{linha.Estoque_Produto}</td>
                <td align='center'>{linha.Disponibilidade_Produto}</td>
                <td align='center'>
                  <button id="btnTabela" style={{
                    textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
                    backgroundColor: "#FF1111"
                  }}
                    onClick={() => handleDetele(linha.idProdutos_Cadrastar)}> Deletar
                    <DeleteForeverRoundedIcon /></button></td>
                <td align='center'>
                  <Link style={{
                    textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
                    backgroundColor: "#5e2ced", color: "white"
                  }} to={`/CadrastarProdutos/${linha.idProdutos_Cadrastar}`} >
                    Editar
                    <EditRoundedIcon color='sucess' />
                  </Link>
                </td>
              </tr>
            ))

          }


        </tbody>
      </table>
{/* {
  dado?.map((li)=>(
    <>
    
    </>
  
  ))

  
} */}
      <Tabela2 />
    </div>
  );

}
