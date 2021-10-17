import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Food from '../Food/Food';
// import { Link } from 'react-router-dom';
import './Foods.css';


const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('/foods.json')
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])

    return (
        <>
            <div className="food-area py-5">
                <div className="container">
                    <div className="row">
                        <div className="food-tab-header">
                            <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Breakfast</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Launch</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link text-dark" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Dinner</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* tab content */}
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="row">
                                {
                                foods.map((food) => (<Food
                                key={food.id}
                                food={food}
                                ></Food>
                                    
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Foods;