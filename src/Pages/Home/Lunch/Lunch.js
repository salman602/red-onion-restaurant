import React from 'react';
import { Card, Col } from 'react-bootstrap';
// import img1 from '../../../images/lunch/lunch1.png';
// import img2 from '../../../images/lunch/lunch2.png';
// import img3 from '../../../images/lunch/lunch3.png';
// import img4 from '../../../images/lunch/lunch4.png';
// import img5 from '../../../images/lunch/lunch5.png';
// import img6 from '../../../images/lunch/lunch6.png';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Lunch = ({ lunch }) => {
    const { title, price, description, image } = lunch;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <Col id="lunch">
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
    );
};

export default Lunch;