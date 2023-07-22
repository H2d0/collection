import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllcategories } from "../rtk/Categories";
import CardProduct from "./CardProduct";


function AllProduct() {
  let [products ,setProuduct] = useState([])
  const categories = useSelector((store) => store.categorie);
    const disPatch = useDispatch();
 let url = "https://fakestoreapi.com/products"; 
  const fethCategory = (cate) => {
    fetch(`https://fakestoreapi.com/products/category/${cate}`)
      .then((res) => res.json())
      .then((data) => setProuduct(data));
   }
  const fethAllproduct = () => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((data) => setProuduct(data));
   }
    useEffect(() => {
        fethAllproduct()
      disPatch(fetchAllcategories());
    }, [])
    return (
      <>
        <div className="title" style={{ margin: "20px 0" }}>
          <h1>Latest Products</h1>
        </div>
        <hr style={{ width: "100%" }} />
        <button
          onClick={() => {
            fethAllproduct();
          }}
          className="btn btn-outline-dark d-inline me-1 mt-1 mb-1"
        >
          All
        </button>
        {categories.map((categorie) => {
          return (
            <button
              onClick={() => {
                fethCategory(categorie);
              }}
              className="btn btn-outline-dark d-inline me-1 mt-1 mb-1"
            >
              {categorie}
            </button>
          );
        })}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-md-6 col-lg-4">
                <CardProduct key={product.id} products={product} />
              </div>
            );
          })}
        </div>
      </>
    );
}

export default AllProduct;