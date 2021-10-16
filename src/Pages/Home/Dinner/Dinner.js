import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dinner = ({ dinner }) => {
    const { title, price, description, image } = dinner;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div id="dinner">
            <Col>
                <Card className="h-100 p-1 border-0 card-item">
                    <Card.Img width="200" height="200" variant="top" src={image} />
                    <Card.Body className="text-center p-2">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 25)}
                        </Card.Text>
                        <Card.Subtitle>${price}</Card.Subtitle>
                    </Card.Body>
                    <button className="btn-danger rounded border-0 w-50 mb-3 mx-auto">{cartIcon} Add to Cart</button>
                </Card>
            </Col>
        </div>
    );
};

export default Dinner;