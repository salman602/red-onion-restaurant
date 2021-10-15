import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Foods></Foods>
            <Footer></Footer>
        </div>
    );
};

export default Home;