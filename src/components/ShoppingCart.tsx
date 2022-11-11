import React from 'react'
import styled from 'styled-components'
import { useShoppingCartContext } from '../context/ShoppingCartContext'
import CartItem from './CartItem'

interface Props {
  isCartOpen: boolean
}

const ShoppingCart = ({ isCartOpen }: Props) => {
  const { toggleCart, cartItems } = useShoppingCartContext()
  console.log({ isCartOpen })
  // console.log('Open cart, cart items', cartItems)
  // 0: {id: 1, amount: 4}

  return (
    <>
      <CartBackdrop onClick={toggleCart} isCartOpen={isCartOpen} />
      <CartWrapper isCartOpen={isCartOpen}>
        <div className='cart-top'>
          <h2>Cart</h2>
          <button onClick={toggleCart}>&times;</button>
        </div>
        <ul className='cart-list'>
          {cartItems?.map((item) => (
            <CartItem {...item} key={item.id} />
          ))}
        </ul>
      </CartWrapper>
    </>
  )
}

export default ShoppingCart

const CartWrapper = styled.div<{ isCartOpen: boolean }>`
  background-color: #252525;
  width: 22rem;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
  padding: 2rem;
  transform: ${({ isCartOpen }) => (isCartOpen ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 250ms ease-in-out;
  .cart-top {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    h2 {
      color: #9b3beb;
    }
    // TODO: make shared X(close) btn? */
    button {
      position: absolute;
      right: 0;
      padding: 0 0.5rem;
      background: transparent;
      color: #9b3beb;
      font-size: 2rem;
    }
    button:hover,
    button:focus-visible {
      color: #c78bff;
    }
    button:focus {
      outline: none;
    }
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  }
`

const CartBackdrop = styled.div<{ isCartOpen: boolean }>`
  background-color: hsla(0, 0%, 0%, 0.304);
  transition: opacity 250ms ease-in-out, visibility 250ms ease-in-out;
  visibility: ${({ isCartOpen }) => (isCartOpen ? `visible` : `hidden`)};
  opacity: ${({ isCartOpen }) => (isCartOpen ? `1` : `0`)};
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
