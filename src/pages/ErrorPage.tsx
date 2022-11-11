import React from 'react'
import styled from 'styled-components'

const ErrorPage = () => {
  return (
    <ErrorWrapper>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </ErrorWrapper>
  )
}

export default ErrorPage

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
