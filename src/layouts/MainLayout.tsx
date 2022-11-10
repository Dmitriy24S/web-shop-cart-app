import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from '../components/Header'

const MainWrapper = styled.section`
  padding: 2rem;
`

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </>
  )
}

export default MainLayout
