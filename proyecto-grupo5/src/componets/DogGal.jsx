import React from 'react';
import { DropdownButton, Dropdown, Container, Carousel } from 'react-bootstrap';
import { NameDog } from '../data/NameDog';
import './dogal.css';
import videoFondo from './video/4K_35.mp4'

class DogGal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            tableData: [],
            selectedItem: '',
            name: '',
        };
    }


    eventoName(item) {
        let urls = 'https://dog.ceo/api/breed/' + item.Nombre + '/' + item.Variante + '/images'
        let nombreCdog = item.Nombre + " " + item.Variante
        this.setState({
            url: urls,
            name: nombreCdog
        });
        console.log(this.state.url)

    }

    componentDidUpdate() {
        if (this.state.url !== '') {
            fetch(this.state.url)
                .then(response => response.json())
                .then(data => this.setState({
                    tableData: data.message.slice(0, 10)
                }))

        } else {
            console.log("No hay nada")
        }

    }



    render() {
        if (this.state.url !== '') {
            return (

                <Container fluid>
                    <video autoPlay muted loop id="video">
                        <source src={videoFondo} type="video/mp4"/>
                    </video>
                    <div className='dropdowns'>
                        <h1>Fotos de Perritos</h1>
                        <DropdownButton id="dropdown-basic-button" title="Lista de Perritos">


                            {NameDog.map((item) => {
                                return (
                                    <Dropdown.Item onClick={() => this.eventoName(item)} >{item.Nombre} {item.Variante}</Dropdown.Item>
                                );
                            })}
                        </DropdownButton>
                    </div>
                    <div className='allPhotos'>
                        <h1 id='nameDog'>{this.state.name}</h1>



                        <div className='photoCas'>

                            <Carousel>
                                {this.state.tableData.map((item) => {
                                    return (
                                        <Carousel.Item interval={5000}>
                                            <img
                                                className="d-block w-100"
                                                src={item}
                                                alt="First slide"
                                                height="800"
                                            />
                                        </Carousel.Item>
                                    );
                                })}
                            </Carousel>

                        </div>


                    </div>

                </Container >

            );


        } else {
            return (
                <Container fluid>
                    <video autoPlay muted loop id="video">
                        <source src={videoFondo} type="video/mp4"/>
                    </video>
                    <div className='dropdowns'>
                        <h1>Fotos de Perritos</h1>
                        <DropdownButton id="dropdown-basic-button" title="Lista de Perritos" >


                            {NameDog.map((item) => {
                                return (
                                    <Dropdown.Item onClick={() => this.eventoName(item)} >{item.Nombre} {item.Variante}</Dropdown.Item>
                                );
                            })}
                        </DropdownButton>
                    </div>
                </Container >
            );

        }
    }

}
export default DogGal;
