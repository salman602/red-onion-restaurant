import React from 'react';
import { Card, Col } from 'react-bootstrap';
// import img1 from '../../../images/lunch/lunch1.png';
// import img2 from '../../../images/lunch/lunch2.png';
// import img3 from '../../../images/lunch/lunch3.png';
// import img4 from '../../../images/lunch/lunch4.png';
// import img5 from '../../../images/lunch/lunch5.png';
// import img6 from '../../../images/lunch/lunch6.png';

const Lunch = ({ lunch }) => {
    const { name, price, desc, img } = lunch;
    return (
        <Col>
            <Card className="h-100 shadow">
                <Card.Img width="400" height="280" variant="top" src={img} />
                <Card.Body className="text-center">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {desc}
                    </Card.Text>
                    <Card.Subtitle>${price}</Card.Subtitle>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Lunch;