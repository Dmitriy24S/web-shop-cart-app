import React from 'react'
import styled from 'styled-components'
import StoreItem from '../components/StoreItem'

const StoreWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  justify-items: center;
  gap: 1rem;
`

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <StoreWrapper>
        {[...Array(10)].map((item, index) => (
          <StoreItem key={index} />
        ))}
      </StoreWrapper>
    </>
  )
}

export default Store
