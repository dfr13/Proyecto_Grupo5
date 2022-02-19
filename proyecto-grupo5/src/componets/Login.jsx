import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { MenuUsuarios } from '../data/MenuUsuarios';
import { Redirect } from 'react-router';
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
        <div>
          <h1>hola</h1>
          <p>{localStorage.getItem('user')}</p>
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