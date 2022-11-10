import React, { createContext, ReactNode, useContext, useState } from 'react'
import ShoppingCart from '../components/ShoppingCart'

interface ShoppingCartContextType {
  toggleCart: () => void
}

interface Props {
  children: ReactNode
}

// Context
const ShoppintCartContext = createContext({} as ShoppingCartContextType)
export const useShoppingCartContext = () => useContext(ShoppintCartContext)

// Provider
export const ShoppingCartContextProvider = ({ children }: Props) => {
  const [isCartOpen, setIsCartOpen] = useState(true)

  const toggleCart = () => {
    console.log(isCartOpen, 'toggle')
    setIsCartOpen((prev) => !prev)
  }

  return (
    <ShoppintCartContext.Provider value={{ toggleCart }}>
      {children}
      <ShoppingCart isCartOpen={isCartOpen} />
    </ShoppintCartContext.Provider>
  )
}
