// import React, { useContext, useState, useEffect } from 'react';
// import { ProdutosContext } from '../../Routes/ProdutosContext';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import { InputLabel } from '@mui/material';
// import '../Estilos/Estilos.css'
// import Footer from '../Footer/Footer'
// // icon
// import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
// import EditRoundedIcon from '@mui/icons-material/EditRounded';
// import People from '../Cadrastos/PP1.png'; // icon ou imagem
// //
// import { Link, useParams } from 'react-router-dom'
// import Axios from 'axios'
// // Alerta
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// //
// export default function FormulariodeCadastro() {
//   const { id } = useParams();
//   // const [produto, setProduto] = useState();
//   // const [imagem, setImagem] = useState();
//   // const [descricao, setDescricao] = useState("");
//   // const [valor, setValor] = useState(0);
//   // const [estoque, setEstoque] = useState(0);
//   // const cart = useContext(ProdutosContext);
//   // const [disponibilidade, setDisponibilidade] = useState("");
//   // const [categoria, setCategoria] = useState("");
//   // const [dados, setDados] = useState([]);
//   const [produto, setProduto] = useState();
//   const [imagem, setImagem] = useState();
//   const [descricao, setDescricao] = useState("");
//   const [valor, setValor] = useState(0);
//   const [estoque, setEstoque] = useState(0);
//   const cart = useContext(ProdutosContext);
//   const [disponibilidade, setDisponibilidade] = useState("");
//   const [categoria, setCategoria] = useState("");
//   const [dados, setDados] = useState([]);
//   const [Ids, setIds] = useState([]);
//   const [categoria1, setCategoria1] = useState([]);

//   // limites de numeros
//   // const limite = 6;
//   // const handleLimiteValor = (e) => {
//   //   const textoNumero = e.target.value;
//   //   if (textoNumero.length <= limite) {
//   //     setValor(textoNumero);
//   //   }
//   // }
//   // const limite1 = 5;
//   // const handleLimiteEstoque = (e) => {
//   //   const textoNumero = e.target.value;
//   //   if (textoNumero.length <= limite1) {
//   //     setEstoque(textoNumero);
//   //   }
//   // }
//   const limiteValor = 6;
//   const handleLimiteValor = (e) => {
//     const textoNumero = e.target.value;
//     if (textoNumero.length <= limiteValor) setValor(textoNumero);
//   };

//   const limiteEstoque = 5;
//   const handleLimiteEstoque = (e) => {
//     const textoNumero = e.target.value;
//     if (textoNumero.length <= limiteEstoque) setEstoque(textoNumero);
//   };
//   //


//   const buscarDados = async () => {
//     try {
//       const response = await Axios.get('http://localhost:3001/Categoria');
//       setCategoria1(response.data);
//       console.log("Dados carregados com sucesso ", response.data);
//     } catch (error) {
//       console.error("Erro ao listar categorias", error);
//     }
//   };
//   // Use o hook useEffect para chamar BuscarDados quando o componente for montado
//   useEffect(() => {
//     buscarDados;
//   }, [categoria1]);

//   // const [categoria1, setCategoria1] = useState([]);
//   // const BuscarDados = async () => {
//   //   try {
//   //     const response = await Axios.get('http://localhost:3001/Categoria');
//   //     setCategoria1(response.data);
//   //     console.log("Dados carregados com sucesso ", response.data);
//   //   } catch (error) {
//   //     console.error("Erro ao listar categorias", error);
//   //   }
//   // };


//   useEffect(() => {
//     Axios.get(`http://localhost:3001/Categoriaq/${id}`)
//       .then((response) => {
//         setIds(response.data);
//         console.log("Enviou com Tabela", response.data);
//         console.log('O seu ID Categoria é:', response.data);
//       })
//       .catch((err) => {
//         console.error("Erro ao Pesquisar o atributo", err);
//       });
//   }, [id]);
//   // const [Ids, setIds] = useState([]);
//   // //
//   // // const { id } = useParams();
//   // useEffect(() => {
//   //   Axios.get(`http://localhost:3001/Categoriaq/${id}`).then((response) => {
//   //     console.log("Enviou com Tabela", setIds(response.data))
//   //     setIds(id);
//   //     console.log('O seu  ID Categoria e:',Ids)
//   //   }).catch((err) => {
//   //     console.error("Erro ao  Pesquisar o atributo", err);
//   //   })

//   // }, [id])

//   //


//   // aqui 
//   //

//   useEffect(() => {
//     Axios.get(`http://localhost:3001/Tabela1/${id}`).then((response) => {
//       console.log("Enviou com Tabela", setDados(response.data))
//       // console.log(response.data[0].Nproduto);
//       setProduto(response.data[0].Nome_Produto);
//       setValor(response.data[0].Valor_Produto);
//       setDescricao(response.data[0].Descricao_Produto);
//       setEstoque(response.data[0].Estoque_Produto);
//       setDisponibilidade(response.data[0].Disponibilidade_Produto);
//       // setCategoria(response.data[0].Ncaterogia)
//       console.log(dados)
//     }).catch((err) => {
//       console.error("Erro ao  Pesquisar o atributo", err);
//     })

//   }, [id])

//   //
//   const notify = () => toast.error("Preencha todos os campos por favor!");
//   const ImagePreview = () => {
//     return (
//       <div>
//         <Button
//           variant="outlined"
//           component="label"
//           color='info'
//           size='medium'
//           style={{ bottom: "0px", textDecoration: "none", textTransform: "none", textAlign: "center" }}
//         >
//           Carregar Imagem
//           <TextField
//             type="file"
//             hidden
//             name="file"
//             onChange={(e) => { setImagem(e.target.files[0]) }}
//           />
//         </Button>
//       </div>
//     );
//   };




//   //
//   // const ImagePreview = () => {

//   //   const [imagem, setImagem] = useState(null);
//   //   const handleImageChange = (e) => {
//   //     const file = e.target.files[0];


//   //     if (file) {
//   //       const reader = new FileReader();
//   //       reader.onloadend = () => {
//   //         setImagem(reader.result);
//   //       };
//   //       reader.readAsDataURL(file);
//   //     }
//   //   };

//   //   return (
//   //     <div>
//   //       <Button
//   //         variant="outlined"
//   //         component="label"
//   //         color='info'
//   //         size='medium'
//   //         style={{ bottom: "0px", textDecoration: "none", textTransform: "none", textAlign: "center" }}
//   //       >
//   //         Carregar Imagem
//   //         <TextField
//   //           type="file"
//   //           hidden
//   //           name="file" onChange={(e) => { setImagem(e.target.files[0]) }}
//   //         />
//   //       </Button>
//   //     </div>
//   //   );
//   // };
//   function Limpar() {
//     setImagem(null);
//     setProduto("");
//     setCategoria("");
//     setDescricao("");
//     setEstoque("");
//     setValor("");
//     setDisponibilidade("");

//   }
//   const Ver = async (event) => {
//     event.preventDefault();
//     // salvarProduto();
//     // mandar os dados pelo post na url com axios
//     if (!produto || !valor || !disponibilidade || !descricao || !imagem || !estoque || !descricao) {
//       notify();
//     }
//     if (!id) {
//       console.log("Erro! A");
//       // try {
//       //   const formData = new FormData();
//       //   // formData.append('file', imagem);
//       //   // formData.append('produto', produto);
//       //   // formData.append('valor', valor);
//       //   // formData.append('categoria', categoria);
//       //   // formData.append('descricao', descricao);
//       //   // formData.append('estoque', estoque);
//       //   // formData.append('disponibilidade', disponibilidade);
//       //   const response = await Axios.post('http://localhost:3001/image', formData);
//       //   console.log(" Sucesso " + response.data);
//       //   Limpar();
//       // } catch (error) {
//       //   console.log(error + "Erro ao enviar ao arquivo!")
//       // }
//     }
//     else {
//       console.log("Enviar os dados :");
//       try {
//         const formData = new FormData();
//         formData.append('file', imagem);
//         formData.append('produto', produto);
//         formData.append('valor', valor);
//         formData.append('Ids', Ids);
//         formData.append('descricao', descricao);
//         formData.append('estoque', estoque);
//         formData.append('disponibilidade', disponibilidade);
//         const response = await Axios.post('http://localhost:3001/image', formData);
//         console.log(" Sucesso " + response.data);
//         toast.success("Cadrastado com sucesso ");
//         // setDados([{ ...dados , 
//         //   Ficheiro_Imagem: imagem,
//         //   Nome_Produto: produto,
//         //   Valor_Produto: valor,
//         //   Nome_Categoria: categoria,
//         //   Descricao_Produto: descricao,
//         //   Estoque_Produto:estoque,
//         //   Disponibilidade_Produto:disponibilidade
//         //    }]);
//         //  const n = [{...dados, Ficheiro_Imagem: imagem,
//         //   Nome_Produto: produto,
//         //   Valor_Produto: valor,
//         //   Nome_Categoria: categoria,
//         //   Descricao_Produto: descricao,
//         //   Estoque_Produto:estoque,
//         //   Disponibilidade_Produto:disponibilidade}];

//          n.push([...dados]);
//          setDados(n);
//         const novoDado = {
//           Ficheiro_Imagem: imagem,
//           Nome_Produto: produto,
//           Valor_Produto: valor,
//           Nome_Categoria: categoria,
//           Descricao_Produto: descricao,
//           Estoque_Produto: estoque,
//           Disponibilidade_Produto: disponibilidade
//         };

//         // Clonar o array de dados
//         const novoArrayDados = [...dados];

//         // Adicionar o novo dado ao array clonado
//         novoArrayDados.push(novoDado);

//         // Atualizar o estado com o novo array
//         setDados(novoArrayDados);
//         console.log('Dados sao :', dados);
//         // Limpar();
//       } catch (error) {
//         console.log(error + "Erro ao enviar ao arquivo!");
//         toast.error(error + "Erro ao enviar ao arquivo!");
//       }
//     }
//   }
//   // const Ver = async (event) => {
//   //   event.preventDefault(); // Evita o comportamento padrão do formulário ao pressionar Enter
  
//   //   // Verifica se algum campo obrigatório está vazio e notifica
//   //   if (!produto || !valor || !disponibilidade || !descricao || !imagem || !estoque || !descricao) {
//   //     notify();
//   //     return; // Evita a execução do restante da função se algum campo estiver vazio
//   //   }
  
//   //   // Se não houver um ID, significa que é uma operação de criação
//   //   if (!id) {
//   //     console.log("Erro! ID não encontrado");
//   //     // Lógica para tratar a criação de dados quando o ID não está presente
//   //     return; // Evita a execução do restante da função quando não há um ID
//   //   }
  
//   //   console.log("Enviar os dados :");
  
//   //   try {
//   //     // Cria um objeto FormData para enviar dados binários, como imagens
//   //     const formData = new FormData();
//   //     formData.append('file', imagem);
//   //     formData.append('produto', produto);
//   //     formData.append('valor', valor);
//   //     formData.append('Ids', Ids);
//   //     formData.append('descricao', descricao);
//   //     formData.append('estoque', estoque);
//   //     formData.append('disponibilidade', disponibilidade);
  
//   //     // Envia a requisição POST para a API com os dados do formulário
//   //     const response = await Axios.post('http://localhost:3001/image', formData);
      
//   //     console.log("Sucesso: ", response.data);
//   //     toast.success("Cadastrado com sucesso");
  
//   //     // Adiciona o novo dado ao array existente
//   //     const novoDado = {
//   //       Ficheiro_Imagem: imagem,
//   //       Nome_Produto: produto,
//   //       Valor_Produto: valor,
//   //       Nome_Categoria: categoria,
//   //       Descricao_Produto: descricao,
//   //       Estoque_Produto: estoque,
//   //       Disponibilidade_Produto: disponibilidade
//   //     };
    
//   //     setDados([...dados, novoDado]); // Atualiza o estado com o novo array de dados
//   //     console.log('Dados atualizados:', dados);
//   //     // Limpar(); // Função que provavelmente limpa os campos do formulário
//   //   } catch (error) {
//   //     console.error("Erro ao enviar ao arquivo:", error);
//   //     toast.error("Erro ao enviar ao arquivo");
//   //   }
//   // };
  
//   return (
//     <>
//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored" />
//       <section style={{ margin: "20px", marginTop: "150px", backgroundColor: "white", padding: "40px" }}>
//         <h5 className="frase2" style={{ textAlign: "center", position: "relative", top: '-10px', fontSize: "20pt" }}><span style={{ color: "red" }}>C</span>adrastar Produtos < img src={People} width={50} className='Aps' /></h5>
//         <Box
//           component="form"
//           sx={{
//             '& .MuiTextField-root': { m: 1, width: '25ch' },
//           }}
//           noValidate
//           autoComplete="on"
//           className='CampoCadrastos'
//           onSubmit={Ver}
//           target='_blank'
//         >

//           <div >
//             <div style={{ marginLeft: "8px" }}>
//               {/* 1 campo */}
//               {
//                 ImagePreview()
//               }
//             </div>
//             {/* 2 campo */}
//             <TextField
//               required
//               id="outlined-required"
//               label="Nome do Produto"
//               type='text'
//               value={produto || ""}
//               onChange={(e) => {
//                 cart.capturarProduto(setProduto(e.target.value))
//               }}
//               size='small'
//             />
//             <TextField
//               required
//               id="outlined-number"
//               size='small'
//               label="Preço do produto"
//               type="number"
//               value={valor || 0}
//               onChange={(e) => { handleLimiteValor(e) }}
//             />
//             <FormControl
//               size='small'
//               sx={{ width: '155px' }}
//               className='FormularioCampo'
//             >
//               <InputLabel id="">Categoria</InputLabel>
//               <Select
//                 label="Categoria"
//                 defaultValue='Categoria'
//                 value={categoria}
//                 onChange={(e) => { cart.capturarDisponibilidade(setCategoria(e.target.value)) }}

//               >

//                 {

//                   typeof categoria1 !== "undefined" && categoria1.map((p) => (

//                     <MenuItem as={Link} to={`/CadrastarProdutos/${p.idCategoria_Produto}`}

//                       value={p.Nome_Categoria}>{p.Nome_Categoria}</MenuItem>

//                   ))
//                 }
//               </Select>
//             </FormControl>

//             <TextField
//               required
//               id="outlined-number"
//               size='small'
//               label="Descrição"
//               type="text"
//               value={descricao || " "} onChange={(e) => { cart.capturarDescricao(setDescricao(e.target.value)) }}
//             />
//             <TextField
//               required
//               id="outlined-number"
//               size='small'
//               label="Estoque"
//               type="number"
//               value={estoque || 0}
//               onChange={(e) => { handleLimiteEstoque(e) }}
//             />
//             {/*Lista de opcao*/}
//             <FormControl
//               size='small'
//               className='FormularioCampo'
//               sx={{ width: '155px', left: "7.5px" }}
//             >
//               <InputLabel id="">Disponibilidade</InputLabel>
//               <Select
//                 label="disponibilidade"
//                 defaultValue='Disponibilidade'
//                 value={disponibilidade || " "}
//                 onChange={(e) => { cart.capturarDisponibilidade(setDisponibilidade(e.target.value)) }}>
//                 {/*  */}
//                 <MenuItem value="Sim">Sim</MenuItem>
//                 <MenuItem value="Nao">Nao</MenuItem>
//               </Select>
//             </FormControl>
//             {/*  */}
//             <FormControl
//               size='small'
//               className='FormularioCampo'
//               sx={{ width: '100px', left: "20.5px" }}
//             >
//               <InputLabel id="">Tamanho</InputLabel>
//               <Select
//                 label="Tamanho"
//                 defaultValue='Tamanho'
//                 value={disponibilidade || " "}
//                 onChange={(e) => { cart.capturarDisponibilidade(setDisponibilidade(e.target.value)) }}>
//                 <MenuItem value="Pequeno">Pequeno</MenuItem>
//                 <MenuItem value="Medio">Medio</MenuItem>
//                 <MenuItem value="Grande">Grande</MenuItem>
//               </Select>
//             </FormControl>
//             {/* Butao */}
//             <div style={{ display: "flex", flexDirection: "row" }}>
//               <button type='submit' id='butaoCadrastar' style={{
//                 textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
//                 backgroundColor: "yellow"
//               }}>Cadrastar</button>
//               <div>


//                 <button
//                   type='submit'
//                   id='butaoCadrastar'
//                   style={{
//                     textDecoration: "none",
//                     border: "none",
//                     padding: "10px 20px",
//                     borderRadius: "8px 9px",
//                     backgroundColor: "#5e2ced"
//                   }}
//                   onClick={() => {
//                     console.log(id ? "Update" : "Salvar");
//                   }}
//                 >
//                   <span>{id ? "Actualizar" : "Salvar"}</span>
//                 </button>
//                 {/* <button type='submit' id='butaoCadrastar' style={{
//                   textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
//                   backgroundColor: "#5e2ced"
//                 }} onClick={() => { id ? "Update" : "Salvar" }}> <span>Actualizar</span></button> */}
//               </div>
//             </div>
//           </div>
//         </Box>
//       </section>
//       <div>

//         {/* <TabelaBasica dados={dados} /> */}
//       </div>
//       <div className='#' style={{ marginTop: "100px" }}>
//         <Footer />
//       </div>
//     </>
//   )
// }
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { getTodos, postTodo } from '../my-api'

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  )
}

function Todos() {
  // Access the client
  const queryClient = useQueryClient()

  // Queries
  const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  // Mutations
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    },
  })

  return (
    <div>
      <ul>
        {query.data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: 'Do Laundry',
          })
        }}
      >
        Add Todo
      </button>
    </div>
  )
}

render(<App />, document.getElementById('root'))


import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const YourComponent = () => {
  const queryClient = useQueryClient();

  // Your update function
  const updateCliente = async (idCliente, newData) => {
    try {
      const response = await axios.put(`http://localhost:3001/Update/${idCliente}`, newData);
      return response.data; // Assuming the API returns data after a successful update
    } catch (error) {
      throw error;
    }
  };

  // Define the mutation using useMutation
  const { mutate } = useMutation(updateCliente, {
    onSuccess: (data) => {
      // Invalidate and refetch the data after a successful update
      queryClient.invalidateQueries('ListaP');
      console.log('Novo estado dados:', data);
      toast.success('Cliente atualizado com sucesso');
    },
    onError: (error) => {
      console.error('Erro ao atualizar cliente', error);
      // Handle error as needed
    },
  });

  // Function to handle the update operation
  const handleUpdate = async (idCliente, newData) => {
    try {
      await mutate([idCliente, newData]); // Pass the parameters to the mutate function
    } catch (error) {
      console.error('Erro ao atualizar cliente', error);
    }
  };

  // ... rest of your component

  return (
    <div>
      {/* ... */}
      <button onClick={() => handleUpdate(idCliente, updatedData)}>Update</button>
    </div>
  );
};

export default YourComponent;
