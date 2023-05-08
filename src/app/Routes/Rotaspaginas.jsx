import * as React from 'react'
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom'
import App from '../../App'
import '../Estilos/Estilos.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Produto from '../Paginas/Productos';
import { AcessoContexto, UserCarrinho } from './Provedoracesso';
import Badge from '@mui/material/Badge';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Pagamentos from '../Paginas/pagamentos'
import Modal from '../Paginas/Modal'
export default function Rotaspaginas() {

  return (
    <>
      <AcessoContexto>
        <BrowserRouter >
          <Routes>
            <Route element={<JanelaMenuPrincipal />}>
              <Route exact path="/*" element={<App />} />
              <Route exact path="/Produtos" element={<Produtos />} />
              <Route exact path='/Pagamentos' element={<Pagamentos />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </AcessoContexto>
    </>
  )

}
const JanelaMenuPrincipal = () => {
  const cart = UserCarrinho();
  // const [count, setCount] = React.useState(1);
  const itemCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)


  return (
    <>
      <div className='menuprincipal' >

        {[false].map((expand) => (
          <Navbar key={expand} bg="navbar-custom" expand={expand} className={"navbar fixed-top"}>
            <Container fluid id="tel">
              <Navbar.Brand as={Link} to="/" style={{ color: "white" }}>
                GestConf
                <Badge color="secondary" badgeContent={itemCount} style={{ position: 'fixed', marginLeft: '200px', top: '27px', justifyContent: "center" }}>
                  <Modal itemCount={itemCount} total={cart.getTotalCost().toFixed(2)} />


                </Badge>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"

              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    GestConf: Menu
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav>
                      <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                      <Nav.Link as={Link} to={"/Produtos"}>Produtos</Nav.Link>


                    </Nav>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown
                      title="Categoria"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      {/* <NavDropdown.Item href="#action3"> <Nav.Link as={Link} to={"/Produtostock"}>Bolos</Nav.Link></NavDropdown.Item> */}
                      <NavDropdown.Item as={Link} to={"/Pagamentos"}>
                        Pagamentos
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
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
      {/* {
                  itemCount > 0 ?
                <>     
                <p>Cartao</p>    
                    { cart.items.map( (currentProduct) => (

                    <h1>{currentProduct.id}</h1>
                  
                        
                  ))}
                  <p>Total : {cart.getTotalCost().toFixed(2)}</p>

                  </>

                  :
                  <p>not</p>
                } */}
      <Outlet />



    </>
  )
}
const Produtos = () => {
  return <Produto />
}