import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/productSlice";
import Products from "./Products";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const SideNav = () => {
  const [category, setCategory] = useState([]);
  const [title, setTitle] = useState("");

  const [active, setActive] = useState(null);

  const dispatch = useDispatch();

  // const [data, setData] = useState("");
  // const { data: products } = useSelector((state) => state.product);

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products/categories')
  //           .then(res=>res.json())
  //           .then(data=>{
  //               setData(data)
  //           })
  // },[]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((item) => {
        setCategory(item);
      });

    dispatch(fetchProducts());

    // products.map((getcate) => setData(getcate));
  }, [dispatch]);

  const categoryTo = (item) => {
    // e.preventDefault();
    setTitle(item);
    setActive(item);

    // if(data.category === item) {
    //   return <div>Salam</div>
    // }
  };
  const [animationParent] = useAutoAnimate();

  return (
    <section className="sidenav" ref={animationParent}>
      <div className="side">
        <ul>
          {category.map((item) => (
            <Link
              
              className={`${active === item && "active"}`}
              key={Math.random()}
              onClick={() => categoryTo(item)}
            >
              {item}
            </Link>
          ))}
        </ul>
      </div>

      <div className="heading">
        <h1 className="title">Welcome To the WebStore</h1>

        <h3>Products</h3>
      </div>

      <Products links={title} />
    </section>
  );
};

export default SideNav;
