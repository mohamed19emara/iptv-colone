import React from 'react'
import {Button ,Container  ,Nav,Navbar,NavDropdown } from 'react-bootstrap';
import {useAuth} from './Auth'
const NavBar = ()=>{
  const auth = useAuth();

  return(

    <Navbar bg=""   style={{ backgroundColor:'#69AB3D', zIndex:'99',height:"100px",fontSize:"16px"}} expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"  style={{ color:'#fff' , fontWeight:'bold'}}   > AMIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="mx-5 ">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' , color:'white' }}
            navbarScroll
          >
            <Nav.Link className="nav-lin"  style={{  color:'white' }} href="/">IPTVHOME</Nav.Link>
            <Nav.Link className="nav-lin" style={{  color:'white' }} href="#action2">SUBSCRIPTION</Nav.Link>
            <Nav.Link className="nav-lin" style={{  color:'white' }} href="#action3">RESELLAR</Nav.Link>
            <Nav.Link className="nav-lin" style={{  color:'white' }} href="#action4">REFUND AND RETURN POLICY</Nav.Link>
            <Nav.Link className="nav-lin" style={{  color:'white' }} href="#action5">FAQ</Nav.Link>
            <Nav.Link className="nav-lin" style={{  color:'white' }} href="#action5">CONTACT</Nav.Link>
            <Nav.Link className="nav-lin" style={{  color:'white' }} href="/Profile">Profile</Nav.Link>

            <NavDropdown className="nav-lin" title="Link" id="navbarScrollingDropdown" style={{  color:'white' }}>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav >
          {!auth.user && (  <Button  href="/Login" variant="success">Login</Button>)}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar
