import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Textw from "./ItemVenda";
import CardIcon from "@mui/icons-material/AddCardOutlined";
import CardIcon2 from "@mui/icons-material/AddBoxOutlined";
import CardIcon1 from "@mui/icons-material/CheckBox";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Card,Col, Row,Space,Button,Input,Carousel, Checkbox,Table, Avatar, message} from "antd";
import { Breadcrumb, Layout, Menu, theme, Form } from "antd";
import "../Estilos/Estilos.css";
import {
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

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
  { text: "Início", href: "/" },
  { text: "Produtos", href: "/produtos" },
  { text: "Detalhes do Produto" },
];

const Vendas = () => {
  const [nome, setNome] = useState("");
  const [dados, setDados] = useState([{ text1: "nome" }]);
  const [cont, setCont] = useState([]);

  // Metodos banco

  useEffect(() => {
    axios
      .get("http://localhost:3001/Tabela")
      .then((res) => {
        setDados(res.data);
      })
      .catch((err) => console.log("erro ao listar produto 204", err));
  }, []);

  function addDicionar(lista) {
    setCont([
      ...cont,
      {
        index: lista.idProdutos_Cadrastar,
        Ficheiro_Imagem: lista.Ficheiro_Imagem,
        Nome_Produto: lista.Nome_Produto,
        Valor_Produto: lista.Valor_Produto,
        Estoque_Produto: lista.Estoque_Produto,
      },
    ]);
  }
  function Eliminar (id){
    const newData = cont.filter((item) => item.id !== id);
    setCont(newData)
    console.log("Erro a eliminar")
  
  }
  const handleQuantityChange = (index, quantity) => {
    const updatedCont = [...cont];
    updatedCont[index].Estoque_Produto = quantity;
    setCont(updatedCont);
    console.log(updatedCont, "Lista");
  };

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
              <Breadcrumb.Separator item={item} />
              User
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
                {dados.map((lista) => (
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
                              height: "40vh",
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
                                flexDirection: "column",
                              }}
                            >
                              <p> {lista.Nome_Produto}</p>
                              <p>Valor : {lista.Valor_Produto}kz</p>
                              <button
                                onClick={() => {
                                  addDicionar(lista);
                                }}
                              >
                                Adicionar
                              </button>
                            </div>
                          </Card>
                        </div>
                      </div>
                    </>
                  </Space>
                ))}
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
                {/* <div style={StyleP}>
                  <Tabela />
                </div> */}
              </Col>

              <Col className="gutter-now" span={12}>
                {/* // Renderiza 'cont' apenas uma vez */}
                <div id="container" className="listContainer">
               <Textw
                    // key={index}
                    cont={cont}
                    Eliminar={Eliminar}
                    // index={index}
                    // product={product}
                    handleQuantityChange={handleQuantityChange}
                    // getTotal={getTotal}
                  />
                </div>
              </Col>
            </Row>
          </Footer>
        </Layout>
      </Layout>
     
    </>
  );
};
export default Vendas;
// Aqui
// function App() {
//   const data = [
//     ["Year", "Sales", "Expenses"],
//     ["2013", 1000, 400],
//     ["2014", 1170, 460],
//     ["2015", 660, 1120],
//     ["2016", 1030, 540],
//   ];

//   const options = {
//     title: "Company Performance",
//     hAxis: {
//       title: "Year",
//       titleTextStyle: {
//         color: "#333",
//       },
//     },
//     vAxis: {
//       minValue: 0,
//     },
//     chartArea: {
//       width: "50%",
//       height: "70%",
//     },
//   };

//   return (
//     <Chart
//       chartType="AreaChart"
//       width="100%"
//       height="400px"
//       data={data}
//       options={options}
//     />
//   );
// }
