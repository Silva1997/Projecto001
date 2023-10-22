import React from 'react'
import { TextField, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import People from '../Cliente/Cliente.png';
import Footer from '../../Footer/Footer'
import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../Estilos/Estilos.css'
import PesquisarIcon from '@mui/icons-material/Search';
import axios from 'axios';
// import {
//   useQuery,
//   useMutation,
//   useQueryClient


// } from '@tanstack/react-query'
// import { useParams } from 'react-router-dom'
const Cliente = () => {
  // const { id } = useParams();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [rua, setRua] = useState('');
  const [nascimento, setNascimento] = useState();
  const [local, setLocal] = useState('');
  const [observacao, setObservacao] = useState('');
  const [unidade, setUnidade] = useState('');
  const [numero, setNumero] = useState(0);
  // 
  function Limpar() {
    setNome('');
    setEmail('');
    setNumero(0);
    setRua('');
    setNascimento('');
    setLocal('');
    setObservacao('');
  }
  // funcao para lidar com o tamanho dos carateres do number de telefone
  const formatarData = (data) => {
    const dataObj = new Date(data);
    const ano = dataObj.getFullYear()
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
    const dia = String(dataObj.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`
  }
  const dataFormatada = formatarData(nascimento);
  const limite = 9;
  const handleLimite = (e) => {
    const textoNumero = e.target.value;
    if (textoNumero.length <= limite) {
      setNumero(textoNumero);
    }
  }
  // fim
  const verificarCampo = async (event) => {
    event.preventDefault();
    // Enviar os dados ao servidor do banco
    Inserir();
    Limpar();
  }
  const Inserir = async () => {
    toast.success("Cadrastado com  sucesso novo usuario");
    try {
      //(Nome,DataAniversario,Contacto,Localidade,Cidade,Observacao,Email)
      const response = await axios.post('http://localhost:3001/CadrastarP', {
        Nome: nome,
        DataAniversario: dataFormatada,
        Contacto: numero,
        Localidade: local,
        Cidade: rua,
        Observacao: observacao,
        Email: email
      }
      );
      console.log("Cadrastado com  sucesso novo usuario", response.data);
    }
    catch (error) {
      toast.error("Erro na Codigo Cadrasto", error);
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
        theme="colored" />
      <div style={{
        backgroundColor: "white", margin: "30px", marginTop: "130px",
        padding: "50px"
      }}>
        <h5 className="frase2" style={{ textAlign: "center", position: "relative", top: '-30px', fontSize: "20pt" }}><span style={{ color: "red" }}>C</span>adrastar Cliente < img src={People} width={50} alt="" className='Aps' /></h5>
         <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', justifyContent: 'end', marginBottom: '20px' }}>
          <TextField id="" size='small' type="search" />
          <button style={{ textDecoration: "none", border: "none", padding: "9px 18px", borderRadius: "8px 9px", backgroundColor: "#d6e2d6" }} type="submit">
            Pesquisar <PesquisarIcon />
          </button>
          </div>
        <form onSubmit={verificarCampo} style={{
          flexDirection: 'column', display: "flex", gap: "1.5rem"
        }}>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
            <TextField
              required
              variant='outlined'
              id="outlined-number"
              size='small'
              style={{ width: "20rem" }}
              label="Nome completo"
              type="text"
              value={nome}
              onChange={(e) => { setNome(e.target.value) }}
            />
            <TextField
              required
              variant='outlined'
              id="outlined-number"

              size='small'
              style={{ width: "20rem" }}
              label="Contacto"
              type="number"
              placeholder='920***99'
              value={numero}
              onChange={handleLimite}
            />
            <TextField
              required
              variant='outlined'
              id="outlined-number"
              size='small'
              style={{ width: "20rem" }}
              label="E-mail"
              type="email"
              value={email}
              placeholder='@gamil.com'
              onChange={(e) => { setEmail(e.target.value) }}
            />
            {/* (e)=>{setNumero(e.target.value)} */}
            <TextField
              required
              variant='outlined'
              id="outlined-number"
              size='small'
              style={{ width: "20rem" }}
              label="Endereço da Rua"
              sx={{ width: "20rem" }}
              type="text"
              value={rua}
              onChange={(e) => { setRua(e.target.value) }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
            <FormControl

              variant='outlined'
              fullWidth
              sx={{ width: "20rem" }}
              size='small'
              required
            >
              <InputLabel>Municipio</InputLabel>
              <Select
                value={unidade}
                onChange={(e) => setUnidade(e.target.value)}
              
                label="Municipio"
              >
                <MenuItem value="Lobito">Lobito</MenuItem>
                <MenuItem value="Benguela">Benguela</MenuItem>
                <MenuItem value="Catumbela">Catumbela</MenuItem>
                <MenuItem value="Ganda">Ganda</MenuItem>

              </Select>
            </FormControl>
            <TextField
              required
              color='success'
              variant='outlined'
              id="outlined-number"
              size='small'
              style={{ width: "20rem" }}
              label="Data de Aniversário"
              sx={{ width: "20rem" }}
              type="date"
              value={nascimento}
              onChange={(e) => { setNascimento(e.target.value) }}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              required
              variant='outlined'
              id="outlined-number"
              size='small'
              style={{ width: "20rem" }}
              label="Local de referência"
              sx={{ width: "20rem" }}
              type="text"
              value={local}
              onChange={(e) => { setLocal(e.target.value) }}
            />

            <TextField
              sx={{ width: "20rem" }}
              required
              variant='outlined'
              id="filled-number"
              size='small'
              style={{ width: "20rem" }}
              label="Observação"
              type="text"
              value={observacao}
              onChange={(e) => { setObservacao(e.target.value) }}
            />
          </div>

        </form>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: "30px", gap: '1.5rem' , justifyContent:"center"}}>
          <button style={{
            textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px", width: "10rem" ,
            backgroundColor: "yellow"
          }}>Adicionar
          </button>
          <button style={{
            textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
            backgroundColor: "blue",width: "10rem" 
          }}>Actualizar
          </button>

          <button type="reset" style={{
            textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
            backgroundColor: "red" ,width: "10rem" 
          }}
            onClick={Limpar}>
            Exluir
          </button>
          <button type="reset" style={{
            textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
            backgroundColor: "#25f30a" ,width: "10rem" 
          }}
            onClick={Limpar}>
            Imprimir
          </button>
        </div>
      </div>
      <div>
        <Tabela />
      </div>
      <Footer />
    </>
  )
}
export default Cliente;
const Tabela = () => {
  const [categoria1, setCategoria1] = useState([]);
  const buscarDados = async () => {
    try {
      const response = await axios.get('http://localhost:3001/Lista');
      setCategoria1(response.data);
      console.log("Dados carregados com sucesso ", response.data);
    } catch (error) {
      console.error("Erro ao listar categorias", error);
    }
  };

  useEffect(() => {
    // Chame buscarDados imediatamente e, em seguida, configure um intervalo de 5 segundos.
    buscarDados();

    const intervalId = setInterval(() => {
      buscarDados(); // Chame buscarDados a cada 20 segundos.
    }, 30000);

    // Certifique-se de limpar o intervalo quando o componente for desmontado.
    return () => clearInterval(intervalId);
  }, []); // O segundo argumento vazio [] garante que isso só seja executado uma vez.

  //   const getP = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:3001/Lista');
  //       console.log('API Response:', res.data); // Log the response data
  //       return res.data;
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       throw error; // Rethrow the error to let React Query handle it
  //     }
  //   };
  // const [dados, setDados] = useState([]);
  // const { data, isLoading, error } = useQuery(['ListaP'], getP,{
  //   retry:2,
  //   refetchOnWindowFocus:true,
  //   refetchInterval:5000
  // });



  // // 
  // if (isLoading) {
  //   console.log('Loading', isLoading);
  //   // You can optionally return a loading indicator here
  //   return <p>Loading...</p>;

  // }

  // if (error) {
  //   console.error('Error:', error);
  //   // You can optionally return an error message here
  //   return <p>Error loading data</p>;
  // }
  // // 

  //   const queryClient = useQueryClient();
  //   const deleteCliente = async (idCliente) => {
  //     try {
  //       const response = await axios.delete(`http://localhost:3001/Delete/${idCliente}`);
  //       return response.data; // Assuming the API returns data after a successful delete
  //     } catch (error) {
  //       throw error;
  //     }
  //   };
  //   const { mutate } = useMutation(deleteCliente, {
  //     onSuccess: (data) => {
  //       // Invalidate and refetch the data after successful deletion
  //       queryClient.invalidateQueries('ListaP');
  //       console.log('Novo estado dados:', data);
  //       toast.error('Ficheiro deletado com sucesso');
  //     },
  //     onError: (error) => {
  //       console.error('Erro ao deletar', error);
  //       // Handle error as needed
  //     },
  //   });

  const handleDelete = (idCliente) => {
    try {
      if (window.confirm("Eliminar ?")) {
        axios.delete(`http://localhost:3001/Delete/${idCliente}`);
        toast.error("Apagado com sucesso", idCliente)
        setCategoria1(categoria1.filter((item) => item.idCliente !== idCliente));
      }
    } catch (error) {
      console.error(" Erro ao pagar  ", error)
    }
  }

  // useEffect(()=>{

  // //  / axios.get('http://localhost:3001/Lista').then((res)=>{
  // //     console.log(res.data);
  // //   }).catch((err)=>{
  // //     console.log("Erro",err);
  // //   })

  // console.log('Data:', data); 
  // console.log("$4")
  // },[])





  // const DeleteCliente = async (idCliente) => {
  //   const response = await axios.delete(`http://localhost:3001/Delete/${idCliente}`);
  //   return response.data; // Supondo que o servidor retorna dados úteis após a exclusão.
  // };


  // const queryClient = useQueryClient();

  // const { mutate } = useMutation(DeleteCliente, {
  //   onSuccess: (data) => {
  //     // Atualizar a lista de dados após a exclusão bem-sucedida.
  //     queryClient.invalidateQueries('Delete'); // Substitua 'suaQueryKey' pela chave da sua query
  //     toast.error("Ficheiro deletado com sucesso");
  //   },
  //   onError: (error) => {
  //     console.error("Erro ao deletar", error);
  //   },
  // });

  // const handleDetele = async (idCliente) => {
  //   try {
  //     if (window.confirm("Eliminar ?")) {
  //     axios.delete(`http://localhost:3001/Delete/${idCliente}`);
  //     setDados(dados.filter( (item) => item.idCliente !== idCliente) );
  //     console.log("Novo estado dados:", dados);
  //     toast.error(" Ficheiro deletado com sucesso ");
  //     }
  //   } catch (error) {
  //     console.error(" Erro ao pagar  ", error)
  //   }
  // }
  // funcao para lidar com o manuseio para pagar

  return (


    <div className={"DivTabela"} style={{ margin: "30px" }}>

      <table className={"TabelasListas"} >
        <thead>
          <tr style={{ color: "white", backgroundColor: "black", textAlign: "center", borderRadius: "15px 15px" }} >
            <th align='center' >Nome Completo</th>
            <th align='center' >Aniversário</th>
            <th align='center' >N* Telefone</th>
            <th align='center' >Local de Referência</th>
            <th align='center' >Endereço-Rua</th>
            <th align='center' >Observacao</th>
            <th align='center' >E-mail</th>
            <th align='center' >Eliminar</th>
            <th align='center' >Actualizar</th>
          </tr>
        </thead>
        <tbody>
          {
            typeof categoria1 !== undefined && categoria1.map((p) => (
              <tr id="P23" key={p.idCliente}>
                <td align='center'>{p.Nome}</td>
                <td align='center'>{p.DataAniversario}</td>
                <td align='center'>{p.Contacto}</td>
                <td align='center'>{p.Localidade}</td>
                <td align='center'>{p.Cidade}</td>
                <td align='center'>{p.Observacao}</td>
                <td align='center'>{p.Email}</td>
                <td> <button style={{
                  textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
                  backgroundColor: "#FF1111"
                }}
                  onClick={() => { handleDelete(p.idCliente) }}
                > Deletar
                  <DeleteForeverRoundedIcon className='Aps' color='sucess' /></button>
                </td>
                <td align='center' style={{ textAlign: "center" }}>
                  <button style={{
                    textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
                    backgroundColor: "#5e2ced"
                  }}
                  > Editar
                    <EditRoundedIcon className='Aps' color='sucess' />
                  </button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>


    </div>
  )
}