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
                        😶‍🌫️
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
                </Container>
            </Navbar>
        );
    }
}
export default HeaderPagina;
