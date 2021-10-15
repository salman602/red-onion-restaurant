import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-section d-flex justify-content-center align-items-center">
            <div>
                <h1>Best Food waiting for your belly</h1>
                <InputGroup className="w-75 mx-auto">
                    <FormControl
                        className="rounded-pill"
                        placeholder="Search food items"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="danger rounded-pill" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>
        </div>
    );
};

export default Banner;