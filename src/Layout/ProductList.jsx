import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addProductToCart, removeProductFromCart } from "../Reducers/cartSlice.js";

const ProductList = ({ products = [] }) => {
  const dispatch = useDispatch();

  const { productsCart } = useSelector(state => state.cart)

  const addProductHandler = (id) => {
    const productFinded = products.find(oneProduct => oneProduct.id === id);

    if( productsCart.find(prod => prod.id === productFinded.id)){
      console.log("El producto ya esta en el carrito")
      dispatch(removeProductFromCart(id))
      return;
    }

    dispatch(addProductToCart(productFinded))
  }

  return (
    <>
      {products.map((product) => {
        return (
          <>
            <div key={product.id} className="card" style={{ width: "20rem" }}>
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">Modelo: {product.title}</h5>
                <h6 className="card-title">Precio: {product.price}</h6>
                <Link
                  to={`/productos/${product.id}`}
                  className="btn btn-primary"
                >
                  Ver
                </Link>
                <button
                  className={`btn ${productsCart.find((item) => item.id === product.id) ? "btn-danger" : "btn-success"}`}
                  onClick={() => addProductHandler(product.id)}
                >
                  {productsCart.find((item) => item.id === product.id)
                    ? "Remover"
                    : "Añadir"}
                </button>
              </div>
              <div className="card-footer">
                <small className="text-muted">Puntaje: {product.rating}</small>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default ProductList