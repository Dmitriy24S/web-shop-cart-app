import React from 'react'
import styled from 'styled-components'
import { useShoppingCartContext } from '../context/ShoppingCartContext'

interface Props {
  isCartOpen: boolean
}

const ShoppingCart = ({ isCartOpen }: Props) => {
  const { toggleCart } = useShoppingCartContext()
  console.log({ isCartOpen })

  return (
    <>
      <CartBackdrop onClick={toggleCart} isCartOpen={isCartOpen} />
      <CartWrapper isCartOpen={isCartOpen}>ShoppingCart</CartWrapper>
    </>
  )
}

export default ShoppingCart

const CartWrapper = styled.div<{ isCartOpen: boolean }>`
  background-color: #64258d;
  width: 22rem;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
  transform: ${({ isCartOpen }) => (isCartOpen ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 250ms ease-in-out;
`

const CartBackdrop = styled.div<{ isCartOpen: boolean }>`
  background-color: hsla(0, 0%, 0%, 0.304);
  transition: opacity 250ms ease-in-out, visibility 250ms ease-in-out;
  visibility: ${({ isCartOpen }) => (isCartOpen ? `visible` : `hidden`)};
  opacity: ${({ isCartOpen }) => (isCartOpen ? `1` : `0`)};
  width: 100%;
  height: 100%;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1;
`
