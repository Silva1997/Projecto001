import * as React from 'react'
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom'
import App from '../../App'
import '../Paginas/Estilos/Estilos.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Produto from '../Paginas/Produtos/Productos';
import { AcessoContexto, UserCarrinho } from './Provedoracesso';
import Badge from '@mui/material/Badge';
import CadrastarProdutos from '../Paginas/Cadrastos/CadrastarProdutos'
import imagem from './icon.png'
import Modal from '../Paginas/Produtos/ModalItemProdutos'
import Localizar from '../Paginas/Publicidade/Effeito'
import Etapas from '../Paginas/Mercadoria/EtapasProduto'
import Perfil from '../Paginas/Cadrastos/Perfil';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
export default function Rotaspaginas() {
  return (
    <>
      <AcessoContexto>
        <BrowserRouter >
          <Routes>
            <Route element={<JanelaMenuPrincipal />}>
              <Route exact path="/*" element={<App />} />
              <Route exact path="/Produtos" element={<Produtos />} />
              <Route exact path='/CadrastarProdutos/:id' element={<CadrastarProdutos />} />
              <Route exact path='/Localizar' element={<Localizar />} />
              <Route exact path='/Etapas' element={<Etapas />} />
              <Route exact path='/Perfil' element={<Perfil />} />
              <Route exact path='*' element={console.log("erro")} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AcessoContexto>
    </>
  )
}
const JanelaMenuPrincipal = () => {
  const cart = UserCarrinho();
  const itemCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
 
  return (
    <>
      <div className='menuprincipal' >

        {[false].map((expand) => (
          <Navbar key={expand} bg="navbar-custom" expand={expand} className={"navbar fixed-top"}>
            <Container fluid id="tel">
              <Navbar.Brand as={Link} to="/" style={{ color: "white" }}>
                <img src={imagem} alt='icon' style={{ width: "6vh", color: "white", background: "white" }} />
                <Badge  className='iconCarrinho' color="error" badgeContent={itemCount} style={{ position: 'fixed', top: '27px', justifyContent: "center" }}>
                  <Modal  itemCount={itemCount} total={cart.getTotalCost().toFixed(2)} />
                
                </Badge>
                <p style={{ position: 'fixed', top: '27px', justifyContent: "center", fontSize: "12pt", left: "1040px", backgroundColor: "rgba(231, 230, 230, 0.5)", borderRadius: "10px 10px", padding: "2px 7px" }}><AddLocationAltIcon style={{ color: "##2d4bf0", }} />Angola,Lobito</p>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"

              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Confeiteria: Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav>
                      <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                      <Nav.Link as={Link} to={"/Produtos"}>Produtos</Nav.Link>


                    </Nav>
                    <Nav.Link as={Link} to={"/Localizar"}>Localizar Mercadoria</Nav.Link>
                    <NavDropdown
                      title="Categoria"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      {/* <NavDropdown.Item href="#action3"> <Nav.Link as={Link} to={"/Produtostock"}>Bolos</Nav.Link></NavDropdown.Item> */}
                      <NavDropdown.Item as={Link} to={"/CadrastarProdutos/:id"}>
                        Cadrastar Produtos
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item as={Link} to="/Perfil">
                        Cadrastar Cliente
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Pesquisar"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-danger" >Pesquisar</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}

      </div>
      <Outlet />
    </>
  )
}
const Produtos = () => {
  return <Produto />
}