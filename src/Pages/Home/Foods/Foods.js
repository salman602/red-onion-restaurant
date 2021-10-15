import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Lunch from '../Lunch/Lunch';
import { HashLink as Link } from 'react-router-hash-link';
import useFoods from '../../../hooks/useFoods';

const Foods = () => {
    // const [lunch, setLunch] = useState([]);
    // useEffect(() => {
    //     fetch('./foods.json')
    //         .then(res => res.json())
    //         .then(data => setLunch(data.lunch))
    // }, []);
    const [lunch] = useFoods();
    return (
        <div>
            <Container className="mt-3">
                <div className="text-center mb-4">
                    <Link className="mx-2" to="#breakfast">Breakfast</Link>
                    <Link className="mx-2" to="#lunch">Lunch</Link>
                    <Link className="mx-2" to="#dinner">Dinner</Link>
                </div>

                <Row xs={2} md={3} className="gx-5 gy-4">
                    {
                        lunch.map(singleItem => <Lunch
                            lunch={singleItem}
                        ></Lunch>)
                    }
                </Row>
                <div className="text-center">
                    <NavLink className="text-decoration-none bg-gray" to="/checkout">
                        <Button variant="danger" className="my-3">Checkout Your Food</Button>
                    </NavLink>
                </div>
            </Container>
        </div>
    );
};

export default Foods;
