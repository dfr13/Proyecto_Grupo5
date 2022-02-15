import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { MenuItems } from '../data/MenuItems';
import { Link } from 'react-router-dom';

class HeaderPagina extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navbar collapseOnSelect bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        😶‍🌫️
                        <i className='fas fa-user-graduate'></i>
                    </Navbar.Brand>
                    <Navbar.Toggle arial-controls="responsive-navbar-nav" />
                    <Navbar.Collapse
                        id="responsive-navbar-nav"
                        
                    >
                        <Nav className="me-auto"  >
                            {MenuItems.map((item) => {
                                return (
                                    <Nav.Link as={Link} to={item.path}>
                                        {item.title}
                                    </Nav.Link>
                                );
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
export default HeaderPagina;
