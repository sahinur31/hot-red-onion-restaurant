import React from "react";
import { Link } from "react-router-dom";

const Food = ({food}) => {
  const { img, description, price, id, name  } = food;
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-3 single-food text-center p-3 border-0">
            <img src={img} alt="" />
            <h6 className="my-3">{name}</h6>
            <p>{description}</p>
            <h4>{price}</h4>
            <Link to={`/details/${id}`}>
                <button className="btn btn-warning">Food Details</button>
            </Link> 
            </div>
      </div>
    </>
  );
};

export default Food;
