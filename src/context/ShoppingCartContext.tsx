import React, { createContext, ReactNode, useContext, useState } from 'react'
import ShoppingCart from '../components/ShoppingCart'

interface CartItemType {
  id: number
  amount: number
}
interface ShoppingCartContextType {
  cartItems: CartItemType[] | undefined
  getCartAmount: number
  getItemAmount: (id: number) => number
  increaseCartAmount: (id: number) => void
  decreaseCartAmount: (id: number) => void
  toggleCart: () => void
  removeItemFromCart: (id: number) => void
}

interface Props {
  children: ReactNode
}

// Context
const ShoppintCartContext = createContext({} as ShoppingCartContextType)
export const useShoppingCartContext = () => useContext(ShoppintCartContext)

// Provider
export const ShoppingCartContextProvider = ({ children }: Props) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  // const [isCartOpen, setIsCartOpen] = useState(true)
  // const [cartItems, setCartItems] = useState<CartItemType[]>([])
  const [cartItems, setCartItems] = useState<CartItemType[]>([{ id: 2, amount: 2 }])

  const toggleCart = () => {
    console.log(isCartOpen, 'toggle')
    setIsCartOpen((prev) => !prev)
  }

  const getCartAmount = cartItems.reduce(
    (amountTotal, item) => amountTotal + item.amount,
    0
  )

  const getItemAmount = (id: number) => {
    return cartItems.find((item) => item.id === id)?.amount || 0
  }

  const removeItemFromCart = (id: number) => {
    setCartItems((currentCartItems) => currentCartItems.filter((item) => item.id !== id))
  }

  const increaseCartAmount = (id: number) => {
    console.log('context = increase item by id', id)
    setCartItems((currentCartItems) => {
      console.log('current cart items', currentCartItems)
      // if item not in cart (new item)
      if (currentCartItems?.find((item) => item.id === id) == null) {
        console.log('not in cart item, add to cart 1')
        return [...currentCartItems, { id, amount: 1 }]
      } else {
        // else find item and increase amount
        return currentCartItems?.map((item) => {
          if (item.id === id) {
            console.log('found in cart items -> increase amount')
            return { ...item, amount: item.amount + 1 }
          } else {
            // if not the selected item = no change
            return item
          }
        })
      }
    })
  }

  const decreaseCartAmount = (id: number) => {
    console.log('context = decrease item by id', id)
    setCartItems((currentCartItems) => {
      console.log('current cart items', currentCartItems)
      // if its last 1 item -> remove item completely from cart
      if (currentCartItems.find((item) => item.id === id)?.amount == 1) {
        return currentCartItems.filter((item) => item.id !== id)
      } else {
        // if more than 1 item amount -> decrease by 1
        return currentCartItems.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount - 1 }
          } else {
            // if not the selected item = no change
            return item
          }
        })
      }
    })
  }

  return (
    <ShoppintCartContext.Provider
      value={{
        toggleCart,
        cartItems,
        increaseCartAmount,
        decreaseCartAmount,
        getCartAmount,
        getItemAmount,
        removeItemFromCart
      }}
    >
      {children}
      <ShoppingCart isCartOpen={isCartOpen} />
    </ShoppintCartContext.Provider>
  )
}
