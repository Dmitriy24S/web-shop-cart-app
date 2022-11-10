import React from 'react'
import styled from 'styled-components'
import StoreItem from '../components/StoreItem'
import storeItems from '../data/data.json'

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
        {/* {[...Array(10)].map((item, index) => ( */}
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </StoreWrapper>
    </>
  )
}

export default Store
