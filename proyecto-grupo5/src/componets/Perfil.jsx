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
    if (localStorage.getItem('user') !== null) {
      return (
        <div className='InicioMainSite'>
          <div className='PerfilData'>
            <div id="blockName">
              <h1>Perfil de {localStorage.getItem('user')}!</h1>
            </div>
            <div className='ContentRMenss'>
              <p>{localStorage.getItem('info')}</p>
              <Button variant="primary" onClick={this.cerrarSesion}>
                <a id="botonAlLogin" href='/'>Cerrar Sesion</a>
              </Button>
            </div>
            <div className='FotoPerfil' style={{ backgroundImage: 'url(' + localStorage.getItem('foto') + ')' }}>

            </div>
          </div>
        </div>
      );
    } else {
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
