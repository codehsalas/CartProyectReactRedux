import React from 'react'
import { useSelector, useDispatch} from 'react-redux'

import { removeProductFromCart } from '../Reducers/cartSlice';

const Carrito = () => {
  const dispatch = useDispatch();
  const { productsCart } = useSelector(state => state.cart);

  const removeProductHandler = (id) => dispatch(removeProductFromCart(id))

  return (
    <>
      <h4>Contenido del carrito</h4>
      { productsCart.map((prod) => {
        return(
          <div key={prod.id}>
              <h4>{prod.title}</h4>
              <img src={prod.thumbnail} alt={prod.title} style={{width: "200px"}}/>
              <button
                className='btn btn-info'
                onClick={() => removeProductHandler(prod.id)}
                >Remover del carrito</button>
              <hr/>
          </div>
        )
        })
      }
    </>
  )
}

export default Carrito