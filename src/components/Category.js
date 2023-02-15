import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { AiFillStar } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Category = ({ links }) => {
  const [animationProduct] = useAutoAnimate();

  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.product);
//   const [category, setCategory] = useState();




  const handleAdd = (product) => {
    dispatch(add(product));
  };


  return (
    <div className="container">
      <div className="productsWrapper" ref={animationProduct}>
        {products.map((product)=> (!links || product.category === links) && (
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
        ))}
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
