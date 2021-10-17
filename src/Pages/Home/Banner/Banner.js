import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className="banner-area">
                <div className="container">
                    <div className="row justify-content-center col">
                        <div className="banner-content">
                            <div className="searchBox text-center mt-4">
                                <h1 className="">Best food waiting for your belly</h1>
                                <div className="input-group mt-4 mb-3 mx-auto">
                                    <input  type="text" className="form-control rounded-pill bg-white" placeholder="Search food items" />
                                    <button className="btn text-white px-4 rounded-pill theme-bg ">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default Banner;