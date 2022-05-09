import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, sorting } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import SideNav from "./SideNav";
import "../containers/ProductListing.css"

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await fetch("https://mytheresa.herokuapp.com/men")
      const d = await response.json()
    // dispatch(setProducts(response.data));
    console.log(d)
  };

  useEffect(() => {
    fetchProducts();
  });

  console.log("Products :", products);
  
  return (
    <div >
      <div style={{
        marginTop: "5%",
        padding: "10px",
        paddingLeft: "60px",
        display: "flex",
        justifyContent: "space-around",
        border: "1px solid lightgrey"
      }}>
        <p>
          Men  | Clothing
        </p>
        <p>{products.length} products</p>
        <select onChange={(e) => {
          console.log(e.target.value)
          dispatch(sorting(e.target.value))
        }}>
          <option>Sort By</option>
          {/* <option value="high">Price high-to-low</option> */}
          <option value="low">Price low-to-high</option>
        </select>
      </div>
      <div className="allProducts" style={{display:"flex"}}>

        <SideNav />
        <div className="ui grid container">
          <ProductComponent />
        </div>
      </div>
      
    </div>

  );
};

export default ProductPage;
