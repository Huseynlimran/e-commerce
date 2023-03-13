import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { popupOpen } from "../store/popupSlice";
import { AiFillStar } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Category = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popup = useSelector((state) => state.popup);
  console.log(popup);

  const handleClose = () => {
    setIsOpen(false);
  };

  // const handleOpen = (productId) => {
  //   setIsOpen(true);
  //   setID(productId);
  // };
  const [animationProduct] = useAutoAnimate();

  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product);
  //   const [category, setCategory] = useState();

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  const handleOpen = (productId) => {
    dispatch(popupOpen(productId));
    setIsOpen(true);
    console.log(productId)
  };

  return (
    <div className="container">
      <div className="productsWrapper" ref={animationProduct}>
        {products.map(
          (product) =>
            (!links || product.category === links) && (
              <div className="card" key={product.id}>
                <span className="rating">
                  {product.rating.rate}
                  <AiFillStar />
                </span>
                <img src={product.image} alt="img" />
                <h4>{product.title}</h4>
                <h3>
                  {product.price} <span> $</span>
                </h3>
                <button className="btn" onClick={() => handleAdd(product)}>
                  Add To Cart
                </button>
                <button onClick={() => handleOpen(product)}>See More</button>
              </div>
            )
        )}
        {isOpen && (
        <div className="modal"  ref={animationProduct}>
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            {popup.map((popUpItems) => (
              <div className="card" key={popUpItems.id}>
                <span className="rating">
                  {popUpItems.rating.rate}
                  <AiFillStar />
                </span>
                <img src={popUpItems.image} alt="img" />
                <h4>{popUpItems.title}</h4>
                <h3>
                  {popUpItems.price} <span> $</span>{" "}
                </h3>
                <p>{popUpItems.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
        {/* {products.map((product) => (
          <div className="card" key={product.id}>
            <span className="rating">{product.rating.rate}
            <AiFillStar />
            </span>
            <img src={product.image} alt="img" />
            <h4>{product.title}</h4>
            <h3>
              {product.price} <span> $</span>{" "}
            </h3>
            <button className="btn" onClick={() => handleAdd(product)}>
              Add To Cart
            </button>
          </div>
        ))} */}
      </div>
      
    </div>
  );
};

export default Category;
