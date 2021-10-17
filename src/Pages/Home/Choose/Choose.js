import React from 'react';
import './Choose.css';
import choose1 from '../../../images/Image/choose1.png';
import choose2 from '../../../images/Image/choose2.png';
import choose3 from '../../../images/Image/choose3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTruck } from '@fortawesome/free-solid-svg-icons';


const chooses = [
    {
        img: choose1,
        title: 'Fast Delivery',
        icon: 'fa-bus',
        description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy'
    },
    {
        img: choose2,
        title: 'A good Auto Responser',
        icon: 'bell',
        description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy'
    },
    {
        img: choose3,
        title: 'Home Delivery',
        icon: 'truck',
        description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy'
    }
]

const Choose = () => {
    return (
        <>
            <div className="choose-area py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-title">
                                <h2>Why you choose us</h2>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                    {chooses.map((choose) => (
                        <div className="col-lg-4">
                            <div className="mb-3">
                                <img className="img-fluid" src={choose.img} alt="" />
                            </div>
                            <div className="single-choose-bottom p-3 d-flex">
                                <div className="single-choose-left theme-bg">
                                    <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>
                                </div>
                                <div className="single-choose-right">
                                    <h4>{choose.title}</h4>
                                    <p>{choose.description}</p>
                                    <button className="">See More <FontAwesomeIcon icon={faArrowRight} className="icon-see"></FontAwesomeIcon></button>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Choose;