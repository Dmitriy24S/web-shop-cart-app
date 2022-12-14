import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useShoppingCartContext } from '../context/ShoppingCartContext'
// import {ReactComponent as CartSVG} from '../assets/cart.svg'

const Header = () => {
  const { toggleCart, getCartAmount } = useShoppingCartContext()

  return (
    <HeaderWrapper>
      <Navbar>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='store'>Store</Link>
          </li>
          <li>
            <Link to='about'>About</Link>
          </li>
        </ul>
        <Cart onClick={toggleCart} title='Cart'>
          <svg
            version='1.1'
            id='Capa_1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            width='902.86px'
            height='902.86px'
            viewBox='0 0 902.86 902.86'
            // color='currentColor'
            // fill='currentColor'
          >
            <g>
              <g>
                <path
                  d='M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z
			 M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z'
                />
                <path
                  d='M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717
			c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744
			c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742
			C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744
			c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z
			 M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742
			S619.162,694.432,619.162,716.897z'
                />
              </g>
            </g>
          </svg>
          {getCartAmount > 0 && <CartNotification>{getCartAmount}</CartNotification>}
        </Cart>
      </Navbar>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  /* height: 5rem; */
  /* border-bottom: 2px solid #7e63e0; */
  border-bottom: 2px solid var(--color-purple);
  box-shadow: 0px 1px 5px #181818;
  /* background-color: var(--color-bg-dark); */
  /* opacity: 0.9;*/
  /*backdrop-filter: blur(1px); */
  /* position: relative; */
  background-color: rgba(var(--color-bg-dark), 89%);
  backdrop-filter: blur(5px);
  ::after {
    /* content: ''; */
    /* position: absolute; */
    width: 100%;
    height: 100%;
    top: 0;
    /* background-color: var(--color-bg-dark); */
    background-color: rgba(var(--color-bg-dark), 89%);
    backdrop-filter: blur(5px);
    z-index: 1;
    /* opacity: 0.9; */
    /* backdrop-filter: blur(1px); */
  }
`
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 1.3rem;
  padding: 0.5rem 1rem;
  max-width: 1900px;
  margin: 0 auto;
  /* transparent parent ::after */
  position: relative;
  z-index: 10;
  @media (min-width: 500px) {
    flex-direction: row;
  }

  ul {
    display: flex;
    /* font-size: 1.3rem; */
    @media (min-width: 600px) {
      gap: 2rem;
    }
    a {
      padding: 0.5rem;
      border-radius: 7px;
      transition: background-color 150ms ease-in-out, color 150ms ease-in-out;
    }
    a:hover {
      /* background-color: #f7f7f73b; */
      background-color: var(--color-gray-hover);
      color: white;
    }
  }
`

const Cart = styled.button`
  /* border-radius: 5px; */
  border-radius: 50%;
  /* background-color: #7e63e0; */
  background-color: var(--color-purple);
  /* padding: 0.7rem; */
  padding: 0.5rem;
  width: 36px;
  height: 36px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 150ms ease-out;
  outline: none;

  &:hover {
    /* background-color: #957dec; */
    background-color: var(--color-purple-light);
  }
  /* click focus - off? */
  &:focus {
    outline: none;
  }
  /* tab focus style */
  &:focus-visible {
    /* outline: 0.25rem solid #957dec; */
    outline: 0.25rem solid var(--color-purple-light);
    /* background-color: #957dec; */
    background-color: var(--color-purple-light);
    outline-offset: 3px;
    /* box-shadow: 0 0 0 4px rgba(21, 156, 228, 0.4); */
    /* box-shadow: 0 0 6px 6px rgb(255 27 27 / 64%); */
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`
const CartNotification = styled.div`
  position: absolute;
  bottom: -7px;
  right: -5px;
  background-color: red;
  color: white;
  border-radius: 50%;
  /* height: 24px; */
  /* width: 24px; */
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 700;
`
