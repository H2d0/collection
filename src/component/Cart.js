
import { useSelector,useDispatch } from "react-redux";
// import { RemoveOne, addOne } from "../rtk/Cart-Slice-Add";
import "./cart.css"
  import { addProduct, removeProduct, removePage } from "../rtk/Cart-Slice";


function CartProduct() {
  let addPro = useSelector((state) => state.cartpro);
  // let cartAdd = useSelector((state) => state.addRemove);
   let disPatch = useDispatch();
  console.log(addPro);
  if (addPro.length === 0) {
    return <h1 className="text-start fs-2 mt-4 ">Your Cart Empty</h1>;
  }

    const addOne = (products) => {
      const updatedProduct = { ...products };
       disPatch(addProduct(updatedProduct));
  };
  
  const removeOne = (products) => {
    const updatedProduct = { ...products };

disPatch(removeProduct(updatedProduct));

  };

  return (
    <>
      {addPro.map((product) => { 
        
          return (
            <div className="cart">
              <div className="Box d-flex">
                <div className="imga">
                  <img src={product.image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <h6 className="card-text">
                    {product.quantity} X {product.price}= $
                    {(product.quantity * product.price).toFixed(0)}
                  </h6>
                  <button
                    onClick={() => {
                      removeOne(product);
                      if (product.price === 0) {
                        disPatch(removePage(product));
                      }
                    }}
                    className="btn btn-outline-dark me-1 subtract"
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      addOne(product);
                    }}
                    className="btn btn-outline-dark me-1 collecting"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
      })}
      {}
    </>
  );
}

export default CartProduct;
