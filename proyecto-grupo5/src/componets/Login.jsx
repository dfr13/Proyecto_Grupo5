import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = { user: '', password: ''};
    }
    compruebaLogin(){
        this.setState({
            user: this.valorUsuario.value,
            password: this.valorPassword.value
        })
        localStorage.setItem('user', this.state.user);
        localStorage.setItem('password', this.state.password);
    }

    render() {
        return(
            <div className="main-site">
            <h1>Bienvenido!</h1>
            <Container>
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
                >
                  Entrar
                </Button>
              </Form>
            </Container>
          </div>
        );
    }
}
export default Login;