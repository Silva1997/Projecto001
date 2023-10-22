// import React from 'react'
// import { TextField, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
// import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
// import EditRoundedIcon from '@mui/icons-material/EditRounded';
// import People from '../Mercadoria/OIP.jpg';
// import Footer from '../../Footer/Footer'
// import { useState, useEffect } from 'react';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../../Estilos/Estilos.css'
// import PesquisarIcon from '@mui/icons-material/Search';
// import axios from 'axios';

// const Cliente = () => {
//   // const { id } = useParams();
//   const [nome, setNome] = useState('');
//   const [email, setEmail] = useState('');
//   const [nif, setNif] = useState('');
//   const [rua, setRua] = useState('');
//   const [local, setLocal] = useState('');
//   const [observacao, setObservacao] = useState('');
//   const [municipio, setMunicipio] = useState('');
//   const [numero, setNumero] = useState(0);
//   const [pessoa,setPessoa] = useState('');
//   // 
//   function Limpar() {
//     setNome('');
//     setEmail('');
//     setNumero(0);
//     setRua('');
//     setMunicipio('');
//     setPessoa('');
//     setLocal('');
//     setObservacao('');
//     setNif('');
//   }
//   //limites carateres
//   const limitenif = 14;
//   const handleNif = (e) => {
//     const Numeronif = e.target.value;
//     if (Numeronif.length <= limitenif) {
//       setNif(Numeronif);
//     }
//   }
//   const limite = 9;
//   const handleLimite = (e) => {
//     const textoNumero = e.target.value;
//     if (textoNumero.length <= limite) {
//       setNumero(textoNumero);
//     }
//   }
//   // fim
//   const verificarCampo = async (event) => {
//     event.preventDefault();
//     // Enviar os dados ao servidor do banco
//     if (!nome) { // se nome for diferente ou null retorna preenche os campos
//       return  toast.error('Preenche os campos todos')
//     }
//      else {
//       handleInserir();
//       Limpar();
//     }
//   }

//   const handleInserir = () => {
//     toast.success("Cadrastado com sucesso");
//     axios.post('http://localhost:3001/fornecedor', {
//       Nome:nome,
//       Email: email,
//       Contacto: numero,
//       Localidade: local,
//       Cidade: rua,
//       Municipio:municipio,
//       Nif:nif,
//       Pessoa:pessoa,
//       Observacao: observacao
//     }).then((res) => {
//     console.log(res.data);
//     console.log(nome);

// }).catch((err)=>{
//   console.error('Erro de codigo no fornecedor', err);
// })
//   }


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
//         theme="colored"
//        />
//       <div style={{
//         backgroundColor: "white", margin: "30px", marginTop: "130px",
//         padding: "50px"
//       }}>
//         <h5 className="frase2" style={{ textAlign: "center", position: "relative", top: '-30px', fontSize: "20pt" }}><span style={{ color: "red" }}>C</span>adrastar Fornecedor < img src={People} width={50} alt="" className='Aps' /></h5>
//         <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', justifyContent: 'end', marginBottom: '20px' }}>
//           <TextField id="" size='small' type="search" />
//           <button style={{ textDecoration: "none", border: "none", padding: "9px 18px", borderRadius: "8px 9px", backgroundColor: "#d6e2d6" }} type="submit">
//             Pesquisar <PesquisarIcon />
//           </button>
//         </div>
//         <form onSubmit={verificarCampo} style={{
//           flexDirection: 'column', display: "flex", gap: "1.5rem"
//         }}>
//           <TextField
//             required
//             variant='outlined'
//             id="outlined-number"
//             size='small'
//             style={{ width: "16rem" }}
//             label="NIF ou Numero de Identificacao Fiscal"
//             type="text"
//             value={nif}
//             onChange={handleNif}
//           />
//           <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
//             <TextField
//               required
//               variant='outlined'
//               id="outlined-number"
//               size='small'
//               style={{ width: "16rem" }}
//               label="Nome do Fornecedor"
//               type="text"
//               value={nome}
//               onChange={(e) => { setNome(e.target.value) }}
//             />
//             <TextField
//               required
//               variant='outlined'
//               id="outlined-number"
//               size='small'
//               style={{ width: "16rem" }}
//               label="Contacto "
//               type="number"
//               placeholder='920***99'
//               value={numero}
//               onChange={handleLimite}
//             />
//             <TextField
//               required
//               variant='outlined'
//               id="outlined-number"
//               size='small'
//               style={{ width: "16rem" }}
//               label="E-mail"
//               type="email"
//               value={email}
//               placeholder='@gamil.com'
//               onChange={(e) => { setEmail(e.target.value) }}
//             />
//             <TextField
//               required
//               variant='outlined'
//               id="outlined-number"
//               size='small'
//               style={{ width: "16rem" }}
//               label="Endereço da Rua ou Cidade"
//               sx={{ width: "16rem" }}
//               type="text"
//               value={rua}
//               onChange={(e) => { setRua(e.target.value) }}
//             />
//           </div>
//           <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
//             <FormControl
//               variant='outlined'
//               fullWidth
//               sx={{ width: "16rem" }}
//               size='small'
//               required
//             >
//               <InputLabel>Municipio</InputLabel>
//               <Select
//                 value={municipio}
//                 onChange={(e) => setMunicipio(e.target.value)}
//                 label="Municipio"
//               >
//                 <MenuItem value="Lobito">Lobito</MenuItem>
//                 <MenuItem value="Benguela">Benguela</MenuItem>
//                 <MenuItem value="Catumbela">Catumbela</MenuItem>
//                 <MenuItem value="Ganda">Ganda</MenuItem>
//               </Select>
//             </FormControl>
//             <TextField
//               required
//               variant='outlined'
//               id="outlined-number"
//               size='small'
//               style={{ width: "16rem" }}
//               label="Nome da Loja ou armazem"
//               sx={{ width: "16rem" }}
//               type="text"
//               value={local}
//               onChange={(e) => { setLocal(e.target.value) }}
//             />
//             <TextField
//               sx={{ width: "16rem" }}
//               required
//               variant='outlined'
//               id="filled-number"
//               size='small'
//               style={{ width: "16rem" }}
//               label="Observação"
//               type="text"
//               value={observacao}
//               onChange={(e) => { setObservacao(e.target.value) }}
//             />

//             <FormControl
//               variant='outlined'
//               fullWidth
//               sx={{ width: "16rem" }}
//               size='small'
//               required
//             >
//               <InputLabel>Tipo de Pessoa</InputLabel>
//               <Select
//                 value={pessoa}
//                 onChange={(e) => setPessoa(e.target.value)}
//                 label="Tipo de Pessoa"
//               >
//                 <MenuItem value="Juridica">Juridica</MenuItem>
//                 <MenuItem value="Benguela">Fisica</MenuItem>
//               </Select>
//             </FormControl>
//           </div>
//         </form>
//         <div style={{ display: 'flex', flexDirection: 'row', marginTop: "30px", gap: '1.5rem', justifyContent: "center" }}>
//           <button style={{
//             textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px", width: "10rem",
//             backgroundColor: "yellow"
//           }}
//          onClick={verificarCampo}
//          >
//           Adicionar
//           </button>
//           <button style={{
//             textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
//             backgroundColor: "blue", width: "10rem"
//           }}>Actualizar
//           </button>

//           <button type="reset" style={{
//             textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
//             backgroundColor: "red", width: "10rem"
//           }}
//             onClick={Limpar}>
//             Exluir
//           </button>
//           <button type="reset" style={{
//             textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
//             backgroundColor: "#25f30a", width: "10rem"
//           }}
//             >
//             Imprimir
//           </button>
//         </div>
//       </div>
//       <div>
//         <Tabela />
//       </div>
//       <Footer />
//     </>
//   )
// }
// export default Cliente;
// const Tabela = () => {
//   const [lista , setLista] = useState([]);
//   const buscarDados = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/Lista_Fornecedor');
//       setLista(response.data);
//       console.log("Dados carregados com sucesso ", response.data);
//     } catch (error) {
//       console.error("Erro ao listar categorias", error);
//     }
//   };
//   useEffect(() => {
//     // Chame buscarDados imediatamente e, em seguida, configure um intervalo de 5 segundos.
//     buscarDados();
//     const intervalId = setInterval(() => {
//       buscarDados(); // Chame buscarDados a cada 20 segundos.
//     }, 30000);
//     // Certifique-se de limpar o intervalo quando o componente for desmontado.
//     return () => clearInterval(intervalId);
//   }, []); // O segundo argumento vazio [] garante que isso só seja executado uma vez.
//   const handleDelete = (idCliente) => {
//     try {
//       if (window.confirm("Eliminar ?")) {
//         axios.delete(`http://localhost:3001/Delete/${idCliente}`);
//         toast.error("Apagado com sucesso", idCliente)
//         setCategoria1(categoria1.filter((item) => item.idCliente !== idCliente));
//       }
//     } catch (error) {
//       console.error(" Erro ao pagar  ", error)
//     }
//   }
//   return (
//     <div className={"DivTabela"} style={{ margin: "30px" }}>
//       <table className={"TabelasListas"} >
//         <thead>
//           <tr style={{ color: "white", backgroundColor: "black", textAlign: "center", borderRadius: "15px 15px" }} >
//             <th align='center' >NIF</th>
//             <th align='center' >Nome do Fornecedor</th>
//             <th align='center' >N* Telefone</th>
//             <th align='center' >Email</th>
//             <th align='center' >Endereço-Rua</th>
//             <th align='center' >Estabelecimento</th>
//             <th align='center' >Municipio</th>
//             <th align='center' >Observacao</th>
//             <th align='center' >Pessoa</th>
//             <th align='center' >Deletar</th>
//             <th align='center' >Actualizar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             typeof lista !== undefined && lista.map((p) => (
//               <tr id="P23" key={p.idF}>
//                 <td align='center'>{p.Nif}</td>
//                 <td align='center'>{p.Nome}</td>
//                 <td align='center'>{p.Contacto}</td>
//                 <td align='center'>{p.Email}</td>
//                 <td align='center'>{p.Endereco}</td>
//                 <td align='center'>{p.Estabelecimento}</td>
//                 <td align='center'>{p.Muncipio}</td>
//                 <td align='center'>{p.Observacao}</td>
//                 <td align='center'>{p.Tipo_pessoa}</td>
//                 <td> <button style={{
//                   textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
//                   backgroundColor: "#FF1111"
//                 }}
//                   onClick={() => { handleDelete(p.idCliente) }}
//                 > Deletar
//                   <DeleteForeverRoundedIcon className='Aps' color='sucess' /></button>
//                 </td>
//                 <td align='center' style={{ textAlign: "center" }}>
//                   <button style={{
//                     textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
//                     backgroundColor: "#5e2ced"
//                   }}
//                   > Editar
//                     <EditRoundedIcon className='Aps' color='sucess' />
//                   </button>
//                 </td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';
import People from '../Mercadoria/OIP.jpg';
import '../../Estilos/Estilos.css'
import PesquisarIcon from '@mui/icons-material/Search';
// import Footer from '../../Footer/Footer'
import { toast, ToastContainer } from 'react-toastify';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import 'react-toastify/dist/ReactToastify.css';
import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';





const { Header, Content, Sider, Footer } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Menu', '1', <PieChartOutlined />),
  getItem('Cadrastar', 'sub1', <UserOutlined />, [
    getItem('Produto', '3', <Link to={'/CadrastarProdutos/:id'} />),
    getItem('Cliente', '4', <Link to={'/Cliente'} />),
    getItem('Fornecedor', '5',<Link to={'/Fornecedor'} />),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];


const CadrastarMercadoria = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [nif, setNif] = useState('');
  const [rua, setRua] = useState('');
  const [local, setLocal] = useState('');
  const [observacao, setObservacao] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [numero, setNumero] = useState(0);
  const [pessoa, setPessoa] = useState('');
  // 
  function Limpar() {
    setNome('');
    setEmail('');
    setNumero(0);
    setRua('');
    setMunicipio('');
    setPessoa('');
    setLocal('');
    setObservacao('');
    setNif('');
  }
  //limites carateres
  const limitenif = 14;
  const handleNif = (e) => {
    const Numeronif = e.target.value;
    if (Numeronif.length <= limitenif) {
      setNif(Numeronif);
    }
  }
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
    if (!nome) { // se nome for diferente ou null retorna preenche os campos
      return toast.error('Preenche os campos todos')
    }
    else {
      handleInserir();
      Limpar();
    }
  }

  const handleInserir = () => {
    toast.success("Cadrastado com sucesso");
    axios.post('http://localhost:3001/fornecedor', {
      Nome: nome,
      Email: email,
      Contacto: numero,
      Localidade: local,
      Cidade: rua,
      Municipio: municipio,
      Nif: nif,
      Pessoa: pessoa,
      Observacao: observacao
    }).then((res) => {
      console.log(res.data);
      console.log(nome);

    }).catch((err) => {
      console.error('Erro de codigo no fornecedor', err);
    })
  }
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>

      <Layout
        style={{
          minHeight: '100vh',
          marginTop: '4.4rem'
        }}
      >
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


        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <h5 className="frase2" style={{
              textAlign: "center",
              position: "relative", top: '5px', fontSize: "19pt"
            }}><span style={{ color: "red" }}>C</span>adrastar Fornecedor
              < img src={People} width={45} alt="" className='Aps' /></h5>
          </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>

            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                display: 'flex',
                justifyContent: 'center'
              }}
            >
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


              {/* <h5 className="frase2" style={{ textAlign: "center", position: "relative", top: '-30px', fontSize: "20pt" }}><span style={{ color: "red" }}>C</span>adrastar Fornecedor < img src={People} width={50} alt="" className='Aps' /></h5>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '12px', justifyContent: 'end', marginBottom: '20px' }}>
          <TextField id="" size='small' type="search" />
          <button style={{ textDecoration: "none", border: "none", padding: "9px 18px", borderRadius: "8px 9px", backgroundColor: "#d6e2d6" }} type="submit">
            Pesquisar <PesquisarIcon />
          </button>
        </div> */}
              <form onSubmit={verificarCampo} style={{
                flexDirection: 'column', display: "flex", gap: "1.5rem"
              }}>
                <TextField
                  required
                  variant='outlined'
                  id="outlined-number"
                  size='small'
                  style={{ width: "16rem" }}
                  label="NIF ou Numero de Identificacao Fiscal"
                  type="text"
                  value={nif}
                  onChange={handleNif}
                />
                <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                  <TextField
                    required
                    variant='outlined'
                    id="outlined-number"
                    size='small'
                    style={{ width: "16rem" }}
                    label="Nome do Fornecedor"
                    type="text"
                    value={nome}
                    onChange={(e) => { setNome(e.target.value) }}
                  />
                  <TextField
                    required
                    variant='outlined'
                    id="outlined-number"
                    size='small'
                    style={{ width: "16rem" }}
                    label="Contacto "
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
                    style={{ width: "16rem" }}
                    label="E-mail"
                    type="email"
                    value={email}
                    placeholder='@gamil.com'
                    onChange={(e) => { setEmail(e.target.value) }}
                  />
                  <TextField
                    required
                    variant='outlined'
                    id="outlined-number"
                    size='small'
                    style={{ width: "16rem" }}
                    label="Endereço da Rua ou Cidade"
                    sx={{ width: "16rem" }}
                    type="text"
                    value={rua}
                    onChange={(e) => { setRua(e.target.value) }}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                  <FormControl
                    variant='outlined'
                    fullWidth
                    sx={{ width: "16rem" }}
                    size='small'
                    required
                  >
                    <InputLabel>Municipio</InputLabel>
                    <Select
                      value={municipio}
                      onChange={(e) => setMunicipio(e.target.value)}
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
                    variant='outlined'
                    id="outlined-number"
                    size='small'
                    style={{ width: "16rem" }}
                    label="Nome da Loja ou armazem"
                    sx={{ width: "16rem" }}
                    type="text"
                    value={local}
                    onChange={(e) => { setLocal(e.target.value) }}
                  />
                  <TextField
                    sx={{ width: "16rem" }}
                    required
                    variant='outlined'
                    id="filled-number"
                    size='small'
                    style={{ width: "16rem" }}
                    label="Observação"
                    type="text"
                    value={observacao}
                    onChange={(e) => { setObservacao(e.target.value) }}
                  />

                  <FormControl
                    variant='outlined'
                    fullWidth
                    sx={{ width: "16rem" }}
                    size='small'
                    required
                  >
                    <InputLabel>Tipo de Pessoa</InputLabel>
                    <Select
                      value={pessoa}
                      onChange={(e) => setPessoa(e.target.value)}
                      label="Tipo de Pessoa"
                    >
                      <MenuItem value="Juridica">Juridica</MenuItem>
                      <MenuItem value="Benguela">Fisica</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', marginTop: "30px", gap: '1.5rem', justifyContent: "center" }}>
                  <button style={{
                    textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px", width: "10rem",
                    backgroundColor: "yellow"
                  }}
                    onClick={verificarCampo}
                  >
                    Adicionar
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
                    onClick={Limpar}>
                    Exluir
                  </button>
                  <button type="reset" style={{
                    textDecoration: "none", border: "none", padding: "10px 20px", borderRadius: "8px 9px",
                    backgroundColor: "#25f30a", width: "10rem"
                  }}
                  >
                    Imprimir
                  </button>
                </div>
              </form>

            </div>


          </Content>
          <Footer style={{ display:'flex', alignItems:'center',minHeight: 360 }}>
            <Tabela />
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
export default CadrastarMercadoria;
const Tabela = () => {
  const [lista, setLista] = useState([]);
  const buscarDados = async () => {
    try {
      const response = await axios.get('http://localhost:3001/Lista_Fornecedor');
      setLista(response.data);
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
  return (
    <div className={"DivTabela"} >
      <table className={"TabelasListas"} style={{width:'70rem'}} >
        <thead>
          <tr style={{ color: "white", backgroundColor: "black", textAlign: "center", borderRadius: "15px 15px" }} >
            <th align='center' >NIF</th>
            <th align='center' >Nome do Fornecedor</th>
            <th align='center' >N* Telefone</th>
            <th align='center' >Email</th>
            <th align='center' >Endereço-Rua</th>
            <th align='center' >Estabelecimento</th>
            <th align='center' >Municipio</th>
            <th align='center' >Observacao</th>
            <th align='center' >Pessoa</th>
            <th align='center' >Deletar</th>
            <th align='center' >Actualizar</th>
          </tr>
        </thead>
        <tbody>
          {
            typeof lista !== undefined && lista.map((p) => (
              <tr id="P23" key={p.idF}>
                <td align='center'>{p.Nif}</td>
                <td align='center'>{p.Nome}</td>
                <td align='center'>{p.Contacto}</td>
                <td align='center'>{p.Email}</td>
                <td align='center'>{p.Endereco}</td>
                <td align='center'>{p.Estabelecimento}</td>
                <td align='center'>{p.Muncipio}</td>
                <td align='center'>{p.Observacao}</td>
                <td align='center'>{p.Tipo_pessoa}</td>
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