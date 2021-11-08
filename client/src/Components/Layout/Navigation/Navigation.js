import React from 'react'
import './Navigation.css'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default function Navigation() {

    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='logo' href="/home">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                        <NavDropdown title="Projects" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Video game</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Boiler Room</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Tricycle</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
