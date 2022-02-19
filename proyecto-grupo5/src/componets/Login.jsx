import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { MenuUsuarios } from '../data/MenuUsuarios';
import "./EstiloLogin.css";
import ImgLogin from './IMG/login.svg'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '', email: '', foto: '' };
    this.compruebaLogin = this.compruebaLogin.bind(this);
  }
  compruebaLogin() {
    var login = false;
    MenuUsuarios.map((item) => {
      if (
        item.nombre === this.valorUsuario.value &&
        item.password === this.valorPassword.value
      ) {
        this.setState({
          user: item.nombre,
          password: item.password,
          email: item.email,
          foto: item.foto,
        });
        localStorage.setItem('user', item.nombre);
        localStorage.setItem('password', item.password);
        localStorage.setItem('email', item.email);
        localStorage.setItem('foto', item.foto);
        login = true;
        window.location.reload()
      }
    });
    if (!login) {
      alert(
        'Ese usuario o contraseña incorrectos'
      );
    }
  }

  render() {
    if (localStorage.getItem('user') !== null
    ) {
      return (
        <div className='InicioMainSite'>
          <div className='PrincipalContent'>
            <div id="blockName">
              <h1>Hi {localStorage.getItem('user')}</h1>
            </div>
            <div className='ContentRMenss'>
              <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
            </div>
            <div className='FotoPerfil' style={{ backgroundImage: 'url('+localStorage.getItem('foto')+')'}}>

            </div>

          </div>
          <div className='rectanguloCambio'>

          </div>
          <div className='FloatLayout'>

          </div>
        </div>
      );
    } else {
      return (
        <div className="main-site" id='LoginIni'>
          <img src={ImgLogin} alt="fondo" id="FondoLogin" />
          <Container style={{ paddingTop: '2rem' }} id='formulaLogin'>

            <div className='CenterBoxs'>
              <h1>Login</h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nombre usuario</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Usuario"
                    ref={(usuario) => (this.valorUsuario = usuario)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    ref={(password) => (this.valorPassword = password)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group >
                <div className='botonCentrar'>
                  <Button variant="primary" size="lg" onClick={this.compruebaLogin}>
                    Entrar
                  </Button>
                </div>

              </Form>
            </div>

          </Container>
        </div>
      );
    }
  }
}
export default Login;