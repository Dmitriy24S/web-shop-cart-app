import React from 'react'
import styled from 'styled-components'
import { useShoppingCartContext } from '../context/ShoppingCartContext'
import currencyFormat from '../utils/currencyFormat'

interface Props {
  id: number
  name: string
  price: number
  imgUrl: string
}

const StoreItem = ({ id, name, price, imgUrl }: Props) => {
  const { getItemAmount, increaseCartAmount, decreaseCartAmount } =
    useShoppingCartContext()
  const amount = getItemAmount(id)

  // let amount = 0
  // if (getItemAmount) amount = getItemAmount(id)
  // ! Uncaught TypeError: increaseCartAmount is not a function -> after code save?

  return (
    <ItemCardWrapper>
      <img src={imgUrl} alt={name} />
      <div className='info'>
        <h3>{name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, earum?
        </p>
        <div className='actions'>
          <Amount>
            {amount > 0 ? (
              <>
                <button onClick={() => decreaseCartAmount(id)}>-</button>
                <span>{amount}</span>
                <button onClick={() => increaseCartAmount(id)}>+</button>
              </>
            ) : (
              <button
                onClick={(e) => {
                  const button = e.target as HTMLButtonElement
                  button.blur() // remove outline on '-' btn after click add to cart?
                  increaseCartAmount(id)
                }}
              >
                Add to Cart
              </button>
            )}
          </Amount>
          <div className='price'>{currencyFormat(price)}</div>
        </div>
      </div>
    </ItemCardWrapper>
  )
}

export default StoreItem

const ItemCardWrapper = styled.div`
  /* border: 1px solid gray; */
  border: 1px solid var(--color-gray-light);
  background-color: var(--color-dark-purple);
  /* padding: 1rem; */
  border-radius: 7px;
  width: 100%;
  overflow: hidden;
  h3 {
    margin-bottom: 0.5rem;
    /* color: #8e6fe6; */
    color: var(--color-purple);
  }
  img {
    object-fit: cover;
    /* width: 270px; */
    width: 100%;
    height: 200px;
  }
  .info {
    padding: 1rem;
  }
  .price {
    /* color: #8e6fe6; */
    color: var(--color-purple);
    font-weight: 600;
    letter-spacing: 0.6px;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Amount = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
  margin-top: 1rem;

  span {
    min-width: 2ch;
    text-align: center;
    font-weight: 600;
    /* color: #9873ff; */
    color: var(--color-purple);
  }

  button {
    transition: background-color 250ms ease-in-out;
    font-size: 1rem;
  }
  button:hover {
    background-color: hsl(0, 0%, 19.215686274509807%);
  }
  button:focus,
  button:focus-visible {
    /* outline: 2px solid #8e6fe6; */
    outline: 2px solid var(--color-purple);
  }
`
