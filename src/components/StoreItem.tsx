import React, { useState } from 'react'
import styled from 'styled-components'

const StoreItem = () => {
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
      <h3>Title</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, earum?</p>

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
    </ItemCardWrapper>
  )
}

export default StoreItem

const ItemCardWrapper = styled.div`
  border: 1px solid gray;
  padding: 1rem;
  border-radius: 7px;
  width: 100%;
  h3 {
    margin-bottom: 0.5rem;
    color: #8e6fe6;
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
