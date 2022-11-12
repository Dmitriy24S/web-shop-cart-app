import React from 'react'
import styled from 'styled-components'
import { useShoppingCartContext } from '../context/ShoppingCartContext'
import storeItems from '../data/data.json'
import currencyFormat from '../utils/currencyFormat'

interface Props {
  id: number
  amount: number
}

const CartItem = ({ id, amount }: Props) => {
  const { removeItemFromCart } = useShoppingCartContext()
  // console.log('cart item props', id, amount)
  const item = storeItems.find((item) => item.id === id)
  // console.log('in cart, item', item)
  // {
  //     "id": 2,
  //     "name": "Computer",
  //     "price": 1199,
  //     "imgUrl": "/imgs/computer.jpg"
  // }

  if (item == null) return null // fixes undefined warning

  return (
    <CartItemWrapper>
      <img src={item.imgUrl} alt={item.name} />
      <div className='info'>
        <h3 className='title' title={item.name}>
          {item.name}
        </h3>
        <p className='amount'>Qty: {amount}</p>
        <p>{currencyFormat(item.price * amount)}</p>
      </div>
      {/* // TODO: make shared X(close) btn? */}
      <button onClick={() => removeItemFromCart(item.id)}>&times;</button>
    </CartItemWrapper>
  )
}

export default CartItem

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid var(--color-gray-light);
  background-color: var(--color-dark-purple);
  border-radius: 7px;
  margin-bottom: 1rem;
  text-align: left;
  img {
    width: 68px;
    height: 51px;
    object-fit: cover;
    border-radius: 5px;
  }
  .info {
    /* // TODO: create purple color var */
    overflow: hidden;
    /* for ellipsis? parent+child overflow hidden?*/
  }
  .title {
    /* color: #8e6fe6; */
    color: var(--color-purple);
    margin-bottom: 0.3rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    /* for ellipsis? parent+child overflow hidden?*/
  }
  .amount {
    font-size: 0.9rem;
    color: #a5a5a5;
  }
  button {
    margin-left: auto;
    padding: 0.5rem;
    width: 2.2rem;
  }
  button:hover,
  button:focus-visible {
    background-color: #303030;
  }
`
