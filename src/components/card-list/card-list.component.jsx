import { Col, Row } from 'react-bootstrap';

import Cards from '../cards/cards.component';

export const CardList = ({ movies }) => (
    <div>
        <Row>
            {movies === undefined
                ? ''
                :
                movies.map(movie => <Col md={4} key={movie.imdbID}><Cards movie={movie} /></Col>)
            }

        </Row>
    </div>
)
