import React from 'react';
import './Food.css';
import { Container, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Lunch from '../Lunch/Lunch';
import { HashLink } from 'react-router-hash-link';
import useFood from '../../../hooks/useFood';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
// import useFoods from '../../../hooks/useFoods';

const Foods = () => {
    // const [lunch, setLunch] = useState([]);
    // useEffect(() => {
    //     fetch('./foods.json')
    //         .then(res => res.json())
    //         .then(data => setLunch(data.lunch))
    // }, []);
    const [lunch, breakfast, dinner] = useFood();
    console.log(lunch)
    console.log(breakfast)
    return (
        <div>
            <Container className="mt-3">
                <div className="text-center mb-4">
                    {/* <Link className="mx-2" to="#breakfast">Breakfast</Link>
                    <Link className="mx-2" to="#lunch">Lunch</Link>
                    <Link className="mx-2" to="#dinner">Dinner</Link> */}
                    <HashLink className="mx-2 hashlink-style" to="/home#breakfast">Breakfast</HashLink>
                    <HashLink className="mx-2 hashlink-style" to="/home#lunch">Lunch</HashLink>
                    <HashLink className="mx-2 hashlink-style" to="/home#dinner">Dinner</HashLink>
                </div>

                <Row xs={2} md={3} className="gx-5 gy-4">
                    {
                        breakfast.map(singleItem => <Breakfast
                            breakfast={singleItem}
                        ></Breakfast>)
                    }
                    {
                        lunch.map(singleItem => <Lunch
                            lunch={singleItem}
                        ></Lunch>)
                    }
                    {
                        dinner.map(singleItem => <Dinner
                            dinner={singleItem}
                        ></Dinner>)
                    }

                </Row>
                <div className="text-center">
                    <NavLink className="text-decoration-none bg-gray" to="/checkout">
                        <Button variant="secondary" className="my-3">Checkout Your Food</Button>
                    </NavLink>
                </div>
            </Container>
        </div>
    );
};

export default Foods;
