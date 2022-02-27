import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { MenuUsuarios } from '../data/MenuUsuarios';
import "./EstiloLogin.css";
import ImgLogin from './IMG/login.svg'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
      email: '',
      foto: '',
      info: '',
      tableData: []
    };
    this.compruebaLogin = this.compruebaLogin.bind(this);
  }

  async componentDidMount() {
    fetch('https://cat-fact.herokuapp.com/facts/random?animal_type=cat,horse,dog&amount=5')
      .then(response => response.json())
      .then(data => this.setState({
        tableData: data
      }));

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
          info: item.info,
        });
        localStorage.setItem('user', item.nombre);
        localStorage.setItem('password', item.password);
        localStorage.setItem('email', item.email);
        localStorage.setItem('foto', item.foto);
        localStorage.setItem('info', item.info);
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
              <h1>¡Hola {localStorage.getItem('user')}!</h1>
            </div>
            <div className='ContentRMenss'>
              <p>{localStorage.getItem('info')}</p>
            </div>
            <div className='FotoPerfil' style={{ backgroundImage: 'url(' + localStorage.getItem('foto') + ')' }}>

            </div>

          </div>
          <div className='FloatLayout'>
            {this.state.tableData.map((item) => {
              return (
                <Card style={{ width: '18rem' }} className="Cartas">
                  <Card.Title>{item.type} facts </Card.Title>
                  <Card.Body>
                    <Card.Text>
                      {item.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}


          </div>
          <iframe id='StiloFrame' src='https://my.spline.design/bandingcopy-59b335ada7bf8f22a4c0dee2f03358db/' style={{ borderWidth: '0px' }}></iframe>
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