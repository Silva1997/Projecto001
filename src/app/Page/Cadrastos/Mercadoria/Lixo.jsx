import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import 'react-toastify/dist/ReactToastify.css';


const CadrastarMercadoria = () => {
  const [dadosforncedor, setDadosforcenedor] = useState([]);
  const [dados, setDados] = useState('');
  const [dado, setDado] = useState('');
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [preco, setPreco] = useState(0);
  const [quant, setQuant] = useState(0);
  const [numerodeunidade, setNumerounidade] = useState('');
  const [unidadesi, setUnidadesi] = useState('');
  const { id } = useParams();
  const [lista, setListar] = useState([]);


  //select from  fornecedor
  useEffect(() => {
    axios.get('http://localhost:3001/Lista_Fornecedor').then((res) =>
      setDadosforcenedor(res.data)
    ).catch((error) => {
      console.error("Erro em listar fornecedor", error)
    })
    //

  }, []);
  // select from Mercadoria

  useEffect(() => {
    axios.get('http://localhost:3001/Listar_Mercadoria').then((res) => {
      console.log(res.data);
      setListar(res.data);
      // setListar(lista.filter((item) => item.id !== item.id))
    }).catch((err) => {
      console.error('Erro em Listar a tabela mercadoria', err);
    })

    const intervalId = setInterval(() => {
      axios.get('http://localhost:3001/Listar_Mercadoria').then((res) => {
        console.log(res.data);
        setListar(res.data);
        // setListar(lista.filter((item) => item.id !== item.id))
      }).catch((err) => {
        console.error('Erro em Listar a tabela mercadoria', err);
      })
      // Chame buscarDados a cada 20 segundos.
    }, 50000);
    // Certifique-se de limpar o intervalo quando o componente for desmontado.
    return () => clearInterval(intervalId);
  }, [])
  // select id
  useEffect(() => {
    axios.get(`http://localhost:3001/Pegar/${id}`).then((response) => { ///Fornecedor/
      console.log("Dados", response.data);
      console.log("Id:", response.data[0].idF);
      setDado(response.data[0].idF);
    }).catch((err) => {
      console.error("id : Fornecedor", err);
    })
  }, [id]);


  const handleLimpeza = () => {
    setDados('');
    setDado('');
    setNome('');
    setMarca('');
    setPreco(0);
    setQuant(0);
    setNumerounidade('');
    setUnidadesi('');
  }

  const handleinserirDados = () => {
    axios.post('http://localhost:3001/Cadrastar_Mercadoria', {
      Marca: marca,
      Nome: nome,
      Medida: unidadesi,
      idF: dado,
      Preco: preco,
      Quantidade: quant,
      Numeroun: numerodeunidade
    }).then(res => { console.log(res.data); toast.success('Cadrastado com sucesso') }
    ).catch(err => { console.error("Erro de linha para cadrastar mercadoria", err) });
  }

  const handleDeletar = (idMer) => {
    try {
      if (window.confirm("Eliminar ?")) {
        axios.delete(`http://localhost:3001/deletar/${idMer}`);
        toast.error("Apagado com sucesso", idMer);
        setListar(lista.filter((item) => item.idMer !== idMer));
      }
    } catch (error) {
      console.error(" Erro ao pagar  ", error)
    }
    // const confirmar =  window.confirm('Deseja mesmo apagar?');
    // if(confirmar){
    //   axios.delete(`http://localhost:3001/deletar/${id}`).then((res)=>{
    //   setListar(lista.filter((item) => item.idMer !== item.idMer));
    //   console.log(res.data);
    // }).catch((err)=>{
    //   console.error('Erro em Listar a tabela mercadoria',err);
    // })
    // }
    //fim
  }

  function submeterDados(e) {
    e.preventDefault();
    console.log("Submetido com sucesso");
    handleinserirDados();
    // handleDeletar(id);

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
        theme="colored"

      />
      <div style={{ backgroundColor: "white", margin: "30px", marginTop: "120px", padding: "50px" }}>
        <form onSubmit={submeterDados} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* <p>Id: {dado} </p> */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
            <TextField sx={{ width: "15rem" }} label="Nome do Material" variant='outlined' size='small' fullWidth required value={nome} onChange={(e) => setNome(e.target.value)} />
            <TextField sx={{ width: "15rem" }} label="Marca do Material" variant='outlined' size='small' fullWidth required value={marca} onChange={(e) => setMarca(e.target.value)} />
            <FormControl
              size='small'
              variant='outlined'
              fullWidth
              sx={{ width: "15rem" }}
            >
              <InputLabel>Fornecedor</InputLabel>
              <Select
                label='Fornecedor'
                value={dados}
                onChange={(e) => setDados(e.target.value)}

              >
                {
                  dadosforncedor.map((lista) => (
                    < MenuItem key={lista.idF} as={Link} to={`/Mercadoria/${lista.idF}`} value={lista.Nome}>{lista.Nome}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>

            <FormControl variant='outlined' sx={{ width: "18rem" }} fullWidth size='small'>
              <InputLabel>Categoria do Material</InputLabel>
              <Select sx={{ width: "18rem" }}
                // value={unidadesi}
                // onChange={(e) => setUnidadesi(e.target.value)}
                label="Categoria do Material">
                <MenuItem value="Cerais">Cerias</MenuItem>
                <MenuItem value="Doces">Doces</MenuItem>
                <MenuItem value="Utensilios">Utensilios</MenuItem>
                {/* <MenuItem value="mg">mg</MenuItem>
                <MenuItem value="g">g</MenuItem> */}
              </Select>
            </FormControl>
          </div>
          {/* 2 */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
            <TextField sx={{ width: "18rem" }} label="Preço de Compra (kz)" variant='outlined' fullWidth size='small' type="number" required value={preco} onChange={(e) => setPreco(e.target.value)} />
            <TextField sx={{ width: "18rem" }} label="Quantidade" size='small' variant='outlined' fullWidth type="number" required value={quant} onChange={(e) => setQuant(e.target.value)} />
            <TextField sx={{ width: "18rem" }} label="Número de unidades" variant='outlined' fullWidth size='small' type="number" required value={numerodeunidade} onChange={(e) => setNumerounidade(e.target.value)} />
            <FormControl variant='outlined' sx={{ width: "18rem" }} fullWidth size='small'>
              <InputLabel>Unidade</InputLabel>
              <Select sx={{ width: "18rem" }}
                value={unidadesi}
                onChange={(e) => setUnidadesi(e.target.value)}
                label="Unidade">
                <MenuItem value="Kg">Kg</MenuItem>
                <MenuItem value="mg">mg</MenuItem>
                <MenuItem value="g">g</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', marginTop: "20px", gap: '1.5rem', justifyContent: "center" }}>
            <button style={{
              textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px", width: "10rem",
              backgroundColor: "yellow"
            }}>Adicionar
            </button>
            <button style={{
              textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
              backgroundColor: "blue", width: "10rem"
            }}>Actualizar
            </button>
            <button type="reset" style={{
              textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
              backgroundColor: "red", width: "10rem"
            }}
              onClick={handleLimpeza}
            >
              Limpar
            </button>
            <button type="reset" style={{
              textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
              backgroundColor: "#25f30a", width: "10rem"
            }}>
              Imprimir
            </button>
          </div>
        </form >
      </div>
      <div classNameName={"DivTabela"} style={{ margin: "30px" }}>

        <table classNameName={"TabelasListas"} >
          <thead>
            <tr style={{ color: "white", backgroundColor: "black", textAlign: "center", borderRadius: "15px 15px" }} >
              <th align='center' >Marca</th>
              <th align='center' >Nome</th>
              <th align='center' >Preco</th>
              <th align='center' >Quantidade</th>
              <th align='center' >Numero</th>
              <th align='center' >Unidade</th>
              <th align='center' >Fornecedor</th>
              <th align='center' >Eliminar</th>
              <th align='center' >Actualizar</th>
            </tr>
          </thead>
          <tbody>
            {/* {  typeof lista !== undefined && */}
            {
              lista?.map((p) => (
                <tr id="P23" key={p.idMer}>
                  <td align='center'>{p.Marca}</td>
                  <td align='center'>{p.Nomes}</td>
                  <td align='center'>{p.valor}</td>
                  <td align='center'>{p.Quantidades}</td>
                  <td align='center'>{p.Numero_de_unidades}</td>
                  <td align='center'>{p.Unidades}</td>
                  <td align='center'>{p.Nome}</td>
                  <td> <button style={{
                    textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
                    backgroundColor: "#FF1111"
                  }}
                    onClick={() => { handleDeletar(p.idMer) }}
                  > Deletar
                    <DeleteForeverRoundedIcon classNameName='Aps' color='sucess' /></button>
                  </td>
                  <td align='center' style={{ textAlign: "center" }}>
                    <button style={{
                      textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
                      backgroundColor: "#5e2ced"
                    }}
                    > Editar
                      <EditRoundedIcon classNameName='Aps' color='sucess' />
                    </button>
                  </td>
                </tr>
              ))
            }

          </tbody>
        </table>


      </div>

    </>
  );
}
export default CadrastarMercadoria;
