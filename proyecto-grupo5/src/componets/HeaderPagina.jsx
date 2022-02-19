import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { MenuItems } from '../data/MenuItems';
import { Link } from 'react-router-dom';

class HeaderPagina extends React.Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        😶‍🌫️ Grupo 5
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        {MenuItems.map((item) => {
                            return (
                                <Nav.Link as={Link} to={item.path}>
                                    {item.title}
                                </Nav.Link>
                            );
                        })}
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Logueado como : <a href="/perfil">{localStorage.getItem('user')}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
export default HeaderPagina;
