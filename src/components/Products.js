import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import { AiFillStar } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = ({ links }) => {
  const [animationProduct] = useAutoAnimate();

  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [linksos, setLinsos] = useState();

  useEffect(() => {
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // };
    // fetchProducts();
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div className="container">
      <div className="productsWrapper" ref={animationProduct}>
        {products.map(
          (product) =>
            product.category === links &&
            ((
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
            ) || (
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
            ))
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

export default Products;
