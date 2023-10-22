import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Contexto } from "../../Routes/Provedoracesso";
import { useContext } from "react";
import { produtos } from "../Produtos/Produtos";
import CardIcon from "@mui/icons-material/AddCardOutlined";
import CardIcon2 from "@mui/icons-material/AddBoxOutlined";
import CardIcon1 from "@mui/icons-material/CheckBox";
import { toast, ToastContainer } from "react-toastify";
import { Typography, CardContent } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { Card, Col, Row, Space, Button, Input, Carousel, Checkbox } from "antd";
import Tabela from './TabelaVendas'
import "../Estilos/Estilos.css";
import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme, Form } from "antd";

//
const { Header, Content, Sider, Footer } = Layout;
//
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Menu", "1", <PieChartOutlined />),
  getItem("Cadrastar", "sub1", <UserOutlined />, [
    getItem("Produto", "3", <Link to={"/CadrastarProdutos/:id"} />),
    getItem("Cliente", "4", <Link to={"/Cliente"} />),
    getItem("Fornecedor", "5", <Link to={"/Fornecedor"} />),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const item = [
    { text: 'Início', href: '/' },
    { text: 'Produtos', href: '/produtos' },
    { text: 'Detalhes do Produto' },
  ];

const Vendas = () => {
  const cart = useContext(Contexto);
  const [nome, setNome] = useState("");
  const [dados, setDados] = useState([{text1:'nome'}]);
  const [clicado, setClicado] = useState(false);
  const [cont, setCont] = useState([]);
  const [preco, setPreco] = useState(0);

 
  
// Metodos banco

useEffect(() => {

axios.get('http://localhost:3001/Tabela').then((res) => {
   setDados(res.data);
   
}).catch((err)=>console.log("erro ao listar produto 204",err))


},[])

function addDicionar (lista){
    setCont([...cont,{Nome:lista.Nome_Produto, Valor:lista.Valor_Produto}])
}
function Trocar(valor) {
    // Remova espaços em branco e substitua a vírgula pelo ponto
    const valorFormatado = valor.replace(/\s+/g, '').replace(",", ".");
    // Certifique-se de que o valor seja uma string representando um número válido, caso contrário, retorne 0.
    const valorNumerico = parseFloat(valorFormatado) || 0;
    return valorNumerico;
}

const total = cont.reduce((acumulador, p) => {
    const valorNumerico = Trocar(p.Valor);
    return acumulador + valorNumerico;
}, 0);


let p = 1200;
  function Valorapgar(p) {
    if (p && p.Valor) {
        const res = preco - Trocar(p.Valor);
        setPreco(res);
    }
    // let res = preco - Trocar(p.Valor);
    // setPreco(res);
  }








//
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const contentStyle = {
    marginLeft: 20,
    marginRight: 10,
    height: "350px",
    color: "#fff",
    lineHeight: "100px",
    textAlign: "center",

    // background: '#364d79',
    background: "#CCC",
  };
  const StyleP = {
    //    padding: '38px 0',
    width: "auto",
    color: "#252525",
    lineHeight: "10px",
    textAlign: "center",
    background: "#ffffff",
    height: "70vh",
    borderRadius: "0px 10px",
    
  };

  const li = {
    display: "flex",
    boxSizing: "border-box",
    maxWidth: "100%",
    webkitboxAlign: "center",
    alignItems: "center",
    minWidth: "0px",
    minHeight: "0px",
    height: "50px",
    flexDirection: "row",
    margin: "40px 0",
    paddingLeft: "24px",
    paddingRight: "24px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "rgb(218, 218, 218)",
    borderImage: "initial",
    borderRadius: "24px",
  };

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
          marginTop: "4.4rem",
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

        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <h5
              className="frase2"
              style={{
                textAlign: "center",
                position: "relative",
                top: "5px",
                fontSize: "19pt",
              }}
            >
              <span
                style={{
                  color: "red",
                }}
              >
                Ponto de{" "}
              </span>{" "}
              Vendas
            </h5>
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
               <Breadcrumb.Separator item={item} />User
              {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>

            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                // display: 'flex',
                // justifyContent: 'center'
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

              <Space
                direction="horizontal"
                className="Cards"
                align="center"
                style={{
                  gap: "1.5rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card
                  title="Dinheiro"
                  style={{
                    width: "50vh",
                    boxShadow: " rgba(0, 0, 0, 0.1) 0px 10px 15px",
                  }}
                  bordered={false}
                  // cover={<img alt="example" src={imagem} />}
                >
                  <CardIcon1
                    color="success"
                    style={{
                      position: "relative",
                      top: -63,
                      left: 250,
                      borderRadius: "100%",
                      background: "#9be79bcc",
                      padding: "2px 2px",
                    }}
                  />
                  <div
                    style={{
                      textAlign: "start",
                    }}
                  ></div>
                  <div
                    style={{
                      textAlign: "end",
                    }}
                  >
                    <h5>kz : 0,00</h5>
                  </div>
                </Card>
                <Card
                  title={"Caixa "}
                  style={{
                    boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 12px",
                  }}
                  bordered={false}
                  className="Cards1"
                  // cover={<img alt="example" src={imagem} />}
                >
                  <CardIcon2 color="success" className="Icons" />
                  <div
                    style={{
                      textAlign: "start",
                    }}
                  ></div>
                  <div
                    style={{
                      textAlign: "end",
                    }}
                  >
                    <h5>kz : 0,00</h5>
                  </div>
                </Card>
                <Card
                  title="Cartao"
                  style={{
                    width: "50vh",
                    boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 12px",
                  }}
                  bordered={false}

                  // cover={<img alt="example" src={imagem} />}
                >
                  <CardIcon
                    color="success"
                    style={{
                      position: "relative",
                      top: -63,
                      left: 250,
                      borderRadius: "100%",
                      background: "#9be79bcc",
                      padding: "2px 2px",
                    }}
                  />
                  <div
                    style={{
                      textAlign: "start",
                    }}
                  ></div>
                  <div
                    style={{
                      textAlign: "end",
                    }}
                  >
                    <h5>kz : 0,00</h5>
                  </div>
                </Card>
              </Space>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                <Input
                  type="search"
                  size="small"
                  required
                  style={li}
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Pesquisar Produtos"
                />
                <Button
                  style={{
                    marginTop: "44px",
                  }}
                  size="large"
                  color="primary"
                  onClick={() => {
                    console.log("Nome", nome);
                  }}
                >
                  Enviar
                </Button>
              </div>
            </div>

            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                // display: 'flex',
                // justifyContent: 'center'
              }}
            >
              <Carousel afterChange={onChange} effect="fade">
{
    dados.map((lista)=>(

<Space direction="horizontal">
<>
                      <div style={contentStyle}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Card
                            key={lista.id}
                            title={lista.tipo}
                            style={{
                              width: "30vh",
                              padding: "20px",
                              marginTop: "10px ",
                              height:'40vh'
                            }}
                            cover={
                              <img
                                src={`http://localhost:3001/uploads/${lista.Ficheiro_Imagem}`}
                                style={{
                                  height: "20vh",
                                }}
                                alt="Bolo"
                              />
                            }
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                flexDirection:'column'
                              }}
                            >
                              <p> {lista.Nome_Produto}</p>
                              <p>Valor : {lista.Valor_Produto}kz</p>
                              <button onClick={()=>{addDicionar(lista)}}>Adicionar</button>
                            </div>
                          
                          </Card>
                
                        </div>
                        
                      </div>

                      {/*  */}
                      
                      </> 
</Space>




    ))
}

              </Carousel>
            </div>
          </Content>

          <Footer>
            <Row
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              <Col className="gutter-now" span={12}>
                <div style={StyleP}>
                  <Tabela />
                </div>
              </Col>
              {/* Segunda */}
              <Col className="gutter-now" span={12}>
              <div style={StyleP}>
               
               <p
                 style={{
                   textAlign: "start",
                   position: "relative",
                   top: "30px",
                   left: "60px",
                   fontSize:'13pt'
                 }}
               >
                 Codigo do produto
               </p>

               <p
                 style={{
                   textAlign: "center",
                   position: "relative",
                   top: "5px",
                   left: "68px",
                   fontSize:'13pt'
                 }}
               >
                 Quantidade
               </p>
            <div style={{
                           display: "flex",
                           flexDirection: "row",
                           gap: "0.2rem",
                           justifyContent:'space-evenly',
                           margin:'10px'
                         }}>
            <Input
                 type="text"
                 size="small"
                 title="Codigo do produto"
                 required
                 style={{
                   width: "35%",
                   textDecoration: "none",
                   padding: "10px 20px",
                   borderRadius: "8px 9px",
                 }}
                 placeholder="Codigo do produto"
               />
               <Input
                 type="number"
                 size="small"
                 title="Codigo do produto"
                 required
                 style={{
                   width: "35%",
                   textDecoration: "none",

                   padding: "10px 20px",
                   borderRadius: "8px 9px",
                 }}
                 placeholder="Quantidade Produtos"
               />
            </div>
               <Card
                 style={{
                   background: "rgba(134, 133, 133, 0.5)",
                   borderRadius: "0px 10px",
                   marginLeft: "5px",
                   marginRight: "5px",
                   marginBottom: "15px",
                 }}
               >
                 <CardContent className="Totalestilo">
                   <section
                     style={{
                       display: "flex",
                       backgroundColor: "#FFF",
                       borderRadius: "10px 10px",
                       flexDirection: "column-reverse",
                       alignItems: "start",
                       padding: "20px",
                     }}
                   >
                     <Checkbox
                       checked={clicado}
                       onChange={(e) => setClicado(e.target.checked)}
                     >
                       Pagamento por transferencia
                     </Checkbox>
                     <Checkbox
                       checked={clicado}
                       onChange={(e) => setClicado(e.target.checked)}
                     >
                       Cartao
                     </Checkbox>
                    
                     {clicado ? (
                       <Form
                         style={{
                           display: "flex",
                           flexDirection: "row",
                           gap: "0.2rem",
                         }}
                       >
                         <Input
                           type="number"
                           style={{
                             textDecoration: "none",

                             padding: "10px 20px",
                             borderRadius: "8px 9px",
                           }}
                           onChange={(e) => setPreco(e.target.value)}
                           placeholder=" Valor  Entregue"
                         />
                         <Input
                           type="number"
                           style={{
                             textDecoration: "none",

                             padding: "10px 20px",
                             borderRadius: "8px 9px",
                           }}
                           value={preco}
                           placeholder=" Troco"
                         />
                         <button
                           onClick={Valorapgar}
                           type="reset"
                           style={{
                             textDecoration: "none",
                             border: "none",
                             padding: "10px 20px",
                             borderRadius: "8px 9px",
                             backgroundColor: "yellow",
                           }}
                         >
                           Pagar
                         </button>
                       </Form>
                     ) : (
                       <Checkbox
                         checked={clicado}
                         onChange={(e) => setClicado(e.target.checked)}
                       >
                         Dinheiro
                       </Checkbox>
                     )}
                   </section>
                   <p>O checkbox está {clicado ? "marcado" : "desmarcado"}</p>

                 <div style={{display:'flex',justifyContent:'center'}}>
                 <Card
               title="Cartao"
               style={{
                 width: "70vh",
                
                 boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 12px",
               }}
               bordered={false}

               // cover={<img alt="example" src={imagem} />}
             >

{
    cont.map((p)=>(
        <>
        <h6 key={p.id}>{p.Nome}</h6>
        <h6>{p.Valor}</h6>

        <p>Total: {Trocar(p.Valor)}</p>
        </>
        
    ))
 
}
<p>Total: {total}</p>
             </Card>
                 </div>

                   <h6
                     style={{
                       textAlign: "start",
                       fontWeight: "500",
                       color: "black",
                     }}
                   >
                     Subtotal:
                     {cart.getTotalCost().toFixed(3)}
                     ,00Kz
                   </h6>
                   <Typography
                     variant="p"
                     style={{
                       textAlign: "start",
                       fontWeight: "500",
                       color: "black",
                     }}
                   >
                     Total: {cart.getTotalCost().toFixed(3)}
                     ,00Kz
                   </Typography>
                   <button
                     style={{
                       textDecoration: "none",
                       border: "none",
                       padding: "10px 20px",
                       borderRadius: "8px 9px",
                       backgroundColor: "yellow",
                     }}
                     onClick={() => {
                       ModalCompra();
                       handleConfirmacao();
                     }}
                   >
                     Comprar o produto
                   </button>
                 </CardContent>
               </Card>
             </div>
              </Col>
            </Row>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}; export default Vendas;
// Aqui

// const Tabela = () => {

//     const columns = [
//         {
//           title: 'Name',
//           dataIndex: 'name',
//           render: (text) => <a>{text}</a>,
//         },
//         {
//           title: 'Age',
//           dataIndex: 'age',
//         },
//         {
//           title: 'Address',
//           dataIndex: 'address',
//         },
//       ];
//       const data = [
//         {
//           key: '1',
//           name: 'John Brown',
//           age: 32,
//           address: 'New York No. 1 Lake Park',
//         },
//         {
//           key: '2',
//           name: 'Jim Green',
//           age: 42,
//           address: 'London No. 1 Lake Park',
//         },
//         {
//           key: '3',
//           name: 'Joe Black',
//           age: 32,
//           address: 'Sydney No. 1 Lake Park',
//         },
//         {
//           key: '4',
//           name: 'Disabled User',
//           age: 99,
//           address: 'Sydney No. 1 Lake Park',
//         },
//       ];
      
//       // rowSelection object indicates the need for row selection
//       const rowSelection = {
//         onChange: (selectedRowKeys, selectedRows) => {
//           console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//         },
//         getCheckboxProps: (record) => ({
//           disabled: record.name === 'Disabled User',
//           // Column configuration not to be checked
//           name: record.name,
//         }),
//       };
//   const [selectionType, setSelectionType] = useState('checkbox');
//   return (
//     <div>
//       <Radio.Group
//         onChange={({ target: { value } }) => {
//           setSelectionType(value);
//         }}
//         value={selectionType}
//       >
//         <Radio value="checkbox">Checkbox</Radio>
//         <Radio value="radio">radio</Radio>
//       </Radio.Group>

//       <Divider />

//       <Table
//         rowSelection={{
//           type: selectionType,
//           ...rowSelection,
//         }}
//         columns={columns}
//         dataSource={data}
//       />
//     </div>
//   );
// };
// export default Tabela;

function App() {
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];

  const options = {
    title: "Company Performance",
    hAxis: {
      title: "Year",
      titleTextStyle: {
        color: "#333",
      },
    },
    vAxis: {
      minValue: 0,
    },
    chartArea: {
      width: "50%",
      height: "70%",
    },
  };

  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

