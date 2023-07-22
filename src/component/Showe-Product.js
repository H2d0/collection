
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './prodect.css'
import { Link } from "react-router-dom";
 import { useDispatch, useSelector } from "react-redux";
 import { addProduct } from "../rtk/Cart-Slice";

 
function ShoweProduct() {
  let addPro = useSelector((state) => state.cartpro);
  let disPatch = useDispatch();
  let [productid,setProductid]=useState([])
  let parms = useParams();
  let api = "https://fakestoreapi.com/products";

// console.log(productid);
  useEffect(() => {
  fetch(`${api}/${parms.prodectId}`)
    .then((res) => res.json())
    .then((data) => setProductid(data));
})

    return (
      <>
        <div className="box d-flex">
          <div className="imga">
            <img src={productid.image} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <h4 className="card-title">{productid.category}</h4>
            <h5 className="card-title">{productid.title}</h5>
            <h6 className="card-title">
              Rating {productid.rating && productid.rating.rate}
              <i className="fa-solid fa-star"></i>
            </h6>
            <h6 className="card-text">${productid.price}</h6>
            <p className="card-text">{productid.description}</p>

            <Link
              to={`/cart/${productid.id}`}
              className="btn btn-dark me-1"
              onClick={() => {
                 disPatch(addProduct(productid));
              }}
            >
              ADD To Cart
            </Link>
            <Link to={"/cart"} className="btn btn-dark">
              Go To Cart
            </Link>
          </div>
        </div>
      </>
    );
}

export default ShoweProduct;