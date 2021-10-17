import React from 'react';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import Foods from '../Foods/Foods';

const Home = () => {
    return (
        <div id="#home">
            <Banner />
            <Foods />
            <Choose />
        </div>
    );
};

export default Home;