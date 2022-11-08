import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const { productID } = useParams();

  const [producto, setProducto] = useState(null)

  useEffect(() => {
     (async () => {
       const API_URL = `https://dummyjson.com/products/${productID}`;
        const productsResponse = await fetch(API_URL)
        .then( response => response.json());
           setProducto(productsResponse)
     })();
   }, [productID]);

   console.log(producto)
  return (
    <>
      <h2>Detalle del producto</h2>
      {producto && (
        <div>
          <hr/>
          <h3>Modelo: </h3>
          <h4>Marca: {producto.brand}</h4>
          <p>Calificación: {producto.rating}</p>
          <img src={producto.thumbnail} alt={producto.title} />
          <h2>Precio: {producto.price} USD</h2>
          <p>Descripción: </p>
          <Link
          to="/productos"
          className='btn btn-warning'
          >
            Volver
          </Link>
          <br/>
          <hr/>
        </div>
      )}
    </>
  );
}

export default ProductDetail