import React, { useState } from 'react'
import styled from 'styled-components'
import currencyFormat from '../utils/currencyFormat'

interface Props {
  name: string
  price: number
  imgUrl: string
}

const StoreItem = ({ name, price, imgUrl }: Props) => {
  const [amount, setAmount] = useState(0)

  const incrementAmount = () => {
    setAmount((prev) => prev + 1)
  }

  const decrementAmount = () => {
    if (amount > 0) {
      setAmount((prev) => prev - 1)
    }
  }

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
                <button onClick={decrementAmount}>-</button>
                <span>{amount}</span>
                <button onClick={incrementAmount}>+</button>
              </>
            ) : (
              <button
                onClick={(e) => {
                  const button = e.target as HTMLButtonElement
                  button.blur() // remove outline on '-' btn after click add to cart?
                  incrementAmount()
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
  border: 1px solid gray;
  /* padding: 1rem; */
  border-radius: 7px;
  width: 100%;
  h3 {
    margin-bottom: 0.5rem;
    color: #8e6fe6;
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
    color: #8e6fe6;
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
    color: #9873ff;
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
    outline: 2px solid #8e6fe6;
  }
`
