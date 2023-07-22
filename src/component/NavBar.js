import { Link } from "react-router-dom";

import { useSelector } from "react-redux/es/hooks/useSelector";

function NavBar() {
     let addPro = useSelector((state) => state.cartpro);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand uppercase" to="/">
            LA COLLECTION
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/product"}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
            <button className="btn btn-outline-secondary me-1">
              <i className="fa-solid fa-right-to-bracket me-1 text-center"></i>
              Login
            </button>
            <button className="btn btn-outline-primary me-1">
              <i className="fa-solid fa-user-plus  me-1 text-center"></i>
              Register
            </button>
            <Link to={"/cart"} className="btn btn-outline-info">
              <i className="fa-solid fa-cart-shopping me-1 text-center"></i>
              Cart({addPro.length})
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
