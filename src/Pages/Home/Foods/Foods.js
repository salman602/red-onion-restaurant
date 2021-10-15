import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Lunch from '../Lunch/Lunch';

const Foods = () => {
    const [lunch, setLunch] = useState([]);
    useEffect(() => {
        fetch('./foods.json')
            .then(res => res.json())
            .then(data => setLunch(data.lunch))
    }, []);
    return (
        <div>
            <Container className="mt-3">
                <Row xs={1} md={2} className="g-4">
                    {
                        lunch.map(singleItem => <Lunch
                            lunch={singleItem}
                        ></Lunch>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Foods;
