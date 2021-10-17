import { faMinus, faPlus, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import useCart from "../../../hooks/useCart";
import "./FoodDetails.css";

const FoodDetails = () => {
  let { id } = useParams();
  // const history = useHistory();
  const [details, setDetails] = useState([]);
  const [count, setCount] = useState(1);
  
  const [cart, setCart] = useCart();

  // const [singleFood, setSingleFood] = useState({});
  useEffect(() => {
    fetch('/foodDetails.json')
      .then((res) => res.json())
      .then((data) => {
      const p = data.food.find(f=> f.id==id)
      // console.log(data);
      // console.log(p);
      setDetails(p);
      })
  }, [id]);
  const handleSub = () => {
    if (count > 0) setCount(count - 1);
  }
  const handleAdd = () => {
    setCount(count+1);
  }
  const handleOnChange = (e) => {
    setCount(e.target.value);
  }
  const handleAddToCart = (item) => {
    item.count = count;
    const newCart = [...cart, item];
    setCart(newCart);
}
  
  return (
    <>
      <div className="food-details-area py-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-6">
              <div className="food-details-left">
                <h2 className="mb-4 fw-medium">{details?.name}</h2>
                <p>{details?.details}</p>
                <div className="d-flex my-5 ">
                   <h3 className="fw-medium">${details?.price*count}</h3>
                   <div className="input-group ms-3 rounded-pill number-spinner">
                      <button onClick={handleSub} id="case-minus" className="btn btn-default"><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                      <input onChange={handleOnChange} id="case-number" type="number" min="0" className="form-control text-center" value={count} />
                      <button onClick={handleAdd} className="btn btn-default theme-color"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>

                    </div>
                  </div>
                  <button 
                  onClick={handleAddToCart}
                  className="btn theme-bg text-white rounded-pill px-4">
                    <FontAwesomeIcon icon={faShoppingCart} className="me-2"></FontAwesomeIcon> 
                    Add
                  </button>
                
              </div>
            </div>
            <div className="col-lg-6">
              <div className="food-details-right">
                <img className="img-fluid" src={details?.img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
