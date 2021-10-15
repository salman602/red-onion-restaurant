import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Lunch = ({ lunch }) => {
    const { name, price, desc, img } = lunch;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Subtitle>Price: {price}</Card.Subtitle>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        // <div>
        //     <img src={img} alt="" width="500" height="400" />
        //     <h4>Name: {name}</h4>
        //     <h5>Price: {price}</h5>
        //     <p>Description: {desc}</p>
        // </div>
    );
};

export default Lunch;