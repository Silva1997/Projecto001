import * as React from 'react'
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom'
import App from '../../App'
import '../Page/Estilos/Estilos.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Produto from '../Page/Produtos/Productos';
import { AcessoContexto, UserCarrinho } from './Provedoracesso';
import Badge from '@mui/material/Badge';
import CadrastarProdutos from '../Page/Cadrastos/Produtos/CadrastarProdutos';
import imagem from './icon.png';
import Modal from '../Page/Produtos/ModalItemProdutos';
import Localizar from '../Page/Publicidade/Effeito';
import Etapas from '../Page/Mercadoria/EtapasProduto';
import Vendas from '../Page/PDV/Vendas';
import Perfil from '../Page/Cadrastos/Cliente/Cliente';
import Stock from '../Page/Cadrastos/Mercadoria/CadrastarMercadoria';
import Fernecedor from '../Page/Cadrastos/Mercadoria/Fornecedor';
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
              <Route exact path='/Cliente' element={<Perfil />} />
              <Route exact path='/Mercadoria/:id' element={<Stock />} />
              <Route exact path='/Fornecedor' element={<Fernecedor />} />
              <Route exact path='Vendas' element={<Vendas/>} />
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
        
        <Navbar expand="lg" className={"navbar fixed-top"}>
          <Container fluid>
            <Navbar.Brand href="#" as={Link} to="/"> 
            <img src={imagem} alt='icon' style={{ width: "7.5vh", color: "white", background: "white" }} />
           
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/Produtos"}>Produtos</Nav.Link>
                <Nav.Link as={Link} to={"/Vendas"}>PDV</Nav.Link>
                <NavDropdown title="Cadrasta" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to={"/CadrastarProdutos/:id"}>
                    Produtos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/Cliente">
                    Cliente
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/Mercadoria/:id">
                    Mercadoria
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/Fornecedor">
                    Fornecedor
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link href="#" disabled>
                  Link
                </Nav.Link> */}
              </Nav>
              <Form className="d-flex" as={Link} to="/" style={{textDecoration:'none',gap:'1.5rem'}}>
              <Badge  className='iconCarrinho' color="error" badgeContent={itemCount}  sx={{position:'relative' ,top:'0px'}}>
                  <Modal  itemCount={itemCount} total={cart.getTotalCost().toFixed(2)} />
                </Badge>
                <Form.Control
                  type="search"
                  placeholder="Pesquisar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Pesquisar</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Outlet />
    </>
  )
}
const Produtos = () => {
  return <Produto />
}
/* {[false].map((expand) => (
  <Navbar key={expand} bg="navbar-custom" expand={expand} className={"navbar fixed-top"}>
    <Container fluid id="tel">
      <Navbar.Brand as={Link} to="/" style={{ color: "white" }}>
        <img src={imagem} alt='icon' style={{ width: "7.5vh", color: "white", background: "white" }} />
        <Badge  className='iconCarrinho' color="error" badgeContent={itemCount} style={{ position: 'fixed', top: '27px', justifyContent: "center" }}>
          <Modal  itemCount={itemCount} total={cart.getTotalCost().toFixed(2)} />
        </Badge>
        <p style={{ position: 'fixed', top: '27px', justifyContent: "center", fontSize: "12pt", left: "1040px", backgroundColor: "rgba(231, 230, 230, 0.5)", borderRadius: "10px 10px", padding: "2px 7px" }}><AddLocationAltIcon id='Aps' style={{ color: "##2d4bf0", }} />Angola,Lobito</p>
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
              title="Bolos"
              id={`offcanvasNavbarDropdown-expand-${expand}`}
            >
              <NavDropdown.Item as={Link} to={"/Produtos"}>
              Aniversario
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#">
              Chocolate
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#">
              Casamento
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#">
              Mistura
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Salgados"
              id={`offcanvasNavbarDropdown-expand-${expand}`}
            >
              <NavDropdown.Item as={Link} to={"/#"}>
              Rissois
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#">
              Pastel de massa tenra
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#">
              Canudos recheados
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Fast Food"
              id={`offcanvasNavbarDropdown-expand-${expand}`}
            >
              <NavDropdown.Item as={Link} to={"/#"}>
              Mini pizza
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#">
              Cachorros
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#">
              Hamburgueres
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#">
              Paes de queijo e chourico
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Doces"
              id={`offcanvasNavbarDropdown-expand-${expand}`}
            >
              <NavDropdown.Item as={Link} to={"/#"}>
              Argola
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#">
              Trancas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#">
              Dnotes Classicos
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Cadrastar"
              id={`offcanvasNavbarDropdown-expand-${expand}`}
            >
              <NavDropdown.Item as={Link} to={"/CadrastarProdutos/:id"}>
                Produtos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Cliente">
                Cliente
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Mercadoria/:id">
                Mercadoria
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/Fernecedor">
                Fornecedor
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
    <Button variant="outline-danger">Pesquisar</Button>
    </Form>
   </Offcanvas.Body>
  </Navbar.Offcanvas>
  </Container>
  </Navbar>
))} */