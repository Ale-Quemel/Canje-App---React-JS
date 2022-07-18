import { useState, useEffect , createContext, useContext } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [totalProductsAdded, setTotalProductsAdded] = useState(0) 
    const [totalToPay, setTotalToPay] = useState(0)

    useEffect(() => {
        updateTotalProductsAdded()
        updateTotalToPay()
    }, [cart])

    const updateTotalProductsAdded = () => {
        let count = 0
        cart.forEach(prod => {
            count += prod.quantity
        })

        setTotalProductsAdded(count)
    }

    const updateTotalToPay = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        
        setTotalToPay(total)
    }

    const addItem = (productToAdd) => {

        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        } else {
            const newCart = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const newProduct = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return newProduct
                } else {
                    return prod
                }
            })
            setCart(newCart)
        }

    }

    const getQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getProduct = (id) => {
        return cart.find(prod => prod.id === id)

    }

    const removeItem = (id) => {
        const newCart = cart.filter(prod => prod.id !== id)
        setCart(newCart)
    }

    const removeAllItem = () => {
       setCart([])
        
    }


    return(
        <CartContext.Provider value={{cart, addItem, getQuantity, getProduct, removeItem, removeAllItem, totalProductsAdded, totalToPay}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}