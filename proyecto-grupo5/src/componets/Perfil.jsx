import React from 'react';
import {
  Button,
} from 'react-bootstrap';
import './EstiloPerfil.css';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '', foto: '', email: '', info: '', raza: '' };
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
      raza: localStorage.getItem('nombreRaza'),
    });
  }

  render() {
    if (localStorage.getItem('user') !== null) {
      return (
        <div className='InicioMainSite'>
          <div className='PerfilData'>
            <div id="blockName">
              <h1>Perfil de {localStorage.getItem('user')}</h1>
            </div>
            <div className='ContentRMenss'>
              <p>{localStorage.getItem('info')}</p>
              <p>Email: {localStorage.getItem('email')}</p>
              <p>Raza favorita:  {this.state.raza}</p>
              <Button variant="primary" onClick={this.cerrarSesion}>
                <a id="botonAlLogin" href='/grupo5-react/'>Cerrar Sesion</a>
              </Button>
            </div>
            <div className='FotoPerfil' style={{ backgroundImage: 'url(' + localStorage.getItem('foto') + ')' }}>

            </div>
          </div>
          <iframe id='StiloFrame' src='https://my.spline.design/bandingcopy-59b335ada7bf8f22a4c0dee2f03358db/' style={{ borderWidth: '0px' }}></iframe>
        </div>
      );
    } else {
      return (
        <div id="iniciaSesion">
          <h1>Debes iniciar sesión primero.</h1>
          <Button variant="primary" onClick={this.cerrarSesion}>
            <a id="botonAlLogin" href='/grupo5-react/'>Ir al login</a>
          </Button>
        </div>
      );
    }

  }
}

export default Perfil;