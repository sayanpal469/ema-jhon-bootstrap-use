import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed='top'>      
              <Container>
                <Navbar.Brand href="#home">
                  <img src={logo} alt="" />
                </Navbar.Brand>
                <Nav className="ms-auto">
                <Nav.Link href="#order">Order</Nav.Link>
                <Nav.Link href="#order-review">Order Review</Nav.Link>
                <Nav.Link href="#manage-inventory">Manage Inventory</Nav.Link>
              </Nav>
              </Container>
            </Navbar>
        </div>
    );
};

export default Header;