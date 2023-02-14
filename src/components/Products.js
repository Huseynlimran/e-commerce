import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Category from "./Category";
import Defaultproducts from "./Defaultproducts";





const Products = ({links}) => {
  const [animationProduct] = useAutoAnimate();


  //const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [categoryItem, setCategoryItem] = useState();
/*
  useEffect(() => {
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // };
    // fetchProducts();

   
 
  
   
    
  }, [dispatch]);*/

  // products.map((itemslarbrat) => (
  //   datalar.push(itemslarbrat)
  // ))

  // console.log(datalar)



  

  // const handleAdd = (product) => {
  //   dispatch(add(product));
  // };

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div className="container">
      <div className="productsWrapper" ref={animationProduct}>
        {
          products.map((categoryler) => (
            categoryler === links ?  <Category /> : Defaultproducts
          ))
        }
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
