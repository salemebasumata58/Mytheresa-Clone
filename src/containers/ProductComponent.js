import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { _id, name, images, price, brandName } = product;
    return (
      <div className="four wide column" key={_id}>
        <Link to={`/product/${_id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={images.img1} alt={"title"} />
              </div>
              <div className="contents">
                <div className="header"><p>{brandName}</p></div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{name}</div>
              </div>
              <div className="newArrival">New Arrival <img className="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828970.png" alt="" /></div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
