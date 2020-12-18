import React from 'react';
import axios from 'axios';

import { Button, Card } from 'react-bootstrap';

import { ModalComponent } from '../modal/modal-component';

class Cards extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            setShow: false,
            detailMovie: []
        }
    }

    handleShow = (imdbid) => {
        axios.get(`http://www.omdbapi.com/?apikey=bd9f9eb5&i=${imdbid}`)
            .then(response => this.setState({ detailMovie: response.data }, () => console.log(response.data.Ratings)));
        this.setState({ setShow: true, show: true })
    }

    handleClose = () => {
        this.setState({ setShow: false, show: false })
    }

    render() {
        const { movie } = this.props;
        const { detailMovie } = this.state;
        return (
            <div>
                <Card style={{ width: '21rem' }}>
                    <Card.Img variant="top" src={movie.Poster} />
                    <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{movie.Year}</Card.Subtitle>
                        <Button variant="primary" onClick={() => this.handleShow(movie.imdbID)}>Show Detail</Button>
                    </Card.Body>
                </Card>


                <ModalComponent show={this.state.show} handleClose={this.handleClose} detailMovie={detailMovie} />
            </div>
        )
    }
}

export default Cards;
