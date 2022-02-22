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
    this.state = { user: '', password: '', foto: '', emial: '', info: '' };
  }

  cerrarSesion() {
    localStorage.clear();
  }
  componentDidMount() {
    this.setState({
      user: localStorage.getItem('user'),
      password: localStorage.getItem('password'),
      foto: localStorage.getItem('foto'),
      email: localStorage.getItem('email'),
      info: localStorage.getItem('info'),
    });
  }
  
  render() {
    if (localStorage.getItem('user') !== null){
        return (
          <div>
<Card style={{ width: '18rem' }}>     
         <Card.Img variant="top" src={this.state.foto} />
         <Card.Body>
           <Card.Title>
           <InputGroup.Text id="basic-addon3">Nombre: {this.state.user} </InputGroup.Text> 
           </Card.Title>
           <Card.Title>
           <InputGroup.Text id="basic-addon3">e-mail: {this.state.email} </InputGroup.Text>
           </Card.Title>
           <Card.Title>
           <InputGroup.Text id="basic-addon3">Informacion: {this.state.info} </InputGroup.Text>
           </Card.Title>
         </Card.Body>
         <Button variant="primary" onClick={this.cerrarSesion}>SALIR</Button>
       </Card>
       </div>
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
