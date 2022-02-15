import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { MenuUsuarios } from '../data/MenuUsuarios';
import "./EstiloLogin.css";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = { user: '', password: '', email:'', foto:''};
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
        }
      });
      if (!login) {
        alert(
          'Ese usuario o contraseña incorrectos'
        );
      }
    }

    render() {
      if (
        this.state != null &&
        this.state.user != null &&
        this.state.user != ''
      ) {
        return (
          <div className="main-site">
            <h1 id="bienvenido">Bienvenido {this.state.user}!</h1>
          </div>
        );
      } else {
        return (
          <div className="main-site">
            
            <Container style={{paddingTop: '2rem'}}>
              <h1>Bienvenido!</h1>
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
                </Form.Group>
                <Button
                  variant="primary"
                  type="button"
                  onClick={this.compruebaLogin}
                >
                  Entrar
                </Button>
              </Form>
            </Container>
          </div>
        );
      }
    }
}
export default Login;