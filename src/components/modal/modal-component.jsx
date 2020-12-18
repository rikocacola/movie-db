import React from 'react';
import { Button, Modal, Row, Col, ListGroup } from 'react-bootstrap';

export const ModalComponent = ({ show, handleClose, detailMovie }) => {
    return (
        <div>
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{detailMovie.Title} ({detailMovie.Year})</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={4}>
                            <img src={detailMovie.Poster} alt='Poster Movie' className='img-fluid' />
                            <ListGroup style={{ marginTop: '10px' }}>
                                <ListGroup.Item>
                                    <Row><strong>{detailMovie.Rated}</strong></Row>
                                    <Row><span>{detailMovie.Genre}</span></Row>
                                    {/* {detailMovie.Ratings[0]?.Value} */}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <strong>Rating</strong>
                                    </Row>
                                    <Row>
                                        <strong>IMDB: </strong> {detailMovie.imdbRating}/10.0
                                    </Row>
                                    <Row>
                                        <strong>Metascore: </strong> {detailMovie.Metascore}/100
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <ListGroup>
                                <ListGroup.Item><strong>Director: </strong>{detailMovie.Director}</ListGroup.Item>
                                <ListGroup.Item><strong>Actors: </strong>{detailMovie.Actors}</ListGroup.Item>
                                <ListGroup.Item><strong>Writer: </strong>{detailMovie.Writer}</ListGroup.Item>
                                <ListGroup.Item><strong>Plot: </strong><br />{detailMovie.Plot}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}