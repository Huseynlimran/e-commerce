import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { AiFillStar } from "react-icons/ai";

const Defaultproducts = () => {

  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product);
  //   const [category, setCategory] = useState();



  const handleAdd = (product) => {
    dispatch(add(product));
  };

  

  return (
    <>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <span className="rating">
            {product.rating.rate}
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
      ))}
    </>
  );
};

export default Defaultproducts;
