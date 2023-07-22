
import { Link } from "react-router-dom";
import "./style-Card.css"



function CardProduct(props) {
  const { products } = props;

    return (
      <>
        <div className="card card-Box" >
          <img src={products.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{products.title.slice(0,10)}...</h5>
            <p className="card-text">{products.price}$</p>
            <Link to={`/products/${products.id}`} className="btn btn-outline-dark">
              Buy Now
            </Link>
          </div>
        </div>
      </>
    );
}

export default CardProduct;