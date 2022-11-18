import React, { useEffect, useState } from 'react'

// const useLocalStorage = <T,>(key: string, initialValue: T | (() => T)) => {
const useLocalStorage = <T,>(key: string, initialValue: T) => {
    const [value, setValue] = useState<T>(() => {
        const localStorageValue = localStorage.getItem(key)
        // if have value in local storage -> return it
        if (localStorageValue !== null) return JSON.parse(localStorageValue)

        // if (typeof initialValue === 'function) {
        // return (initialValue as () => T)() // ! ?!???
        // } else {
        return initialValue
    })

    // if there are changes/updates to value -> store new values in local storage
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    // return [value, setValue] // = const setCartItems: CartItemType[] | React.Dispatch<React.SetStateAction<CartItemType[]>>
    return [value, setValue] as [typeof value, typeof setValue] // = const setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>
}

export default useLocalStorage