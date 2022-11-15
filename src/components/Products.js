import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { FETCH, fetchProducts } from "../store/productSlice";

const Products = () => {



  const dispatch = useDispatch();

  const {data: products ,status} = useSelector(state => state.product)

  // const [products, setProducts] = useState([]);

  useEffect(() => {

    dispatch(fetchProducts())


    // const fetchProducts = () => {
    //   fetch("https://fakestoreapi.com/products")
    //     .then((res) => res.json())
    //     .then((data) => setProducts(data));
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product))
  }

  if(status === FETCH.LOADING){

    return <h2>Loading...</h2>
    }

  return (
    <div className="container">
      <div className="productsWrapper">
        {products.map((product) => (
          <div className="card" key={product.id}>
              <img src={product.image} alt="img" />
            <h4>{product.title}</h4>
            <h3>{product.price}  <span> $</span> </h3>
            <button className="btn" onClick={() => handleAdd(product)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
