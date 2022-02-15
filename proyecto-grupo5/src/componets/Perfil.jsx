import React from 'react';
import {
  InputGroup,
  FormControl,
  Container,
  Card,
  Col,
  Row,
  Button,
} from 'react-bootstrap';
import './EstiloPerfil.css';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
  }

  cerrarSesion() {
    localStorage.clear();
  }
  
  render() {
    if (localStorage.getItem('user') !== null){
        return (
            <Container className="justify-content-md-center">
              <br />
              <Row className="justify-content-md-center">
                <Col lg={3}>
                  <Card style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={localStorage.getItem('foto')} />
                  </Card>
                </Col>
                <Col lg={6}>

                <InputGroup className="mb-3">
                    <InputGroup.Text>Correo </InputGroup.Text>
                    <FormControl
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      placeholder={localStorage.getItem('email')}
                    />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>Nombre</InputGroup.Text>
                    <FormControl
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      placeholder={localStorage.getItem('user')}
                    />
                  </InputGroup>
      
                  
                </Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col md={{ span: 3, offset: 3 }}>
                  <Button variant="primary" onClick={this.cerrarSesion}>
                    <a id="botonAlLogin" href='/'>Cerrar sesión</a>
                  </Button>
                </Col>
              </Row>
            </Container>
          );
    }else {
        return (
            <div id="iniciaSesion">
                <h1>Debes iniciar sesión primero.</h1>
                <Button variant="primary" onClick={this.cerrarSesion}>
                    <a id="botonAlLogin" href='/'>Ir al login</a>
                </Button>
            </div>
        );
    }
    
  }
}

export default Perfil;
