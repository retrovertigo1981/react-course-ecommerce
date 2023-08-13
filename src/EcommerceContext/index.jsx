import { useState } from "react";
import { EcommerceContext } from "./EcommerceContext";
import PropTypes from "prop-types";

const EcommerceProvider = ({children}) => {
    // Product Quantity

    const [count, setCount] = useState(0)

    // Open/Close Detail Product
    const [productDetailOpen, setProductDetailOpen] = useState(false)
    const openProductDetail = () => setProductDetailOpen(true)
    const closeProductDetail = () => setProductDetailOpen(false)

    // Open/Close Checkout Side Menu
    const [checkoutSideMenuOpen, setcheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setcheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setcheckoutSideMenuOpen(false)


    // Show Detail Product

    const [productToShow, setProductToShow] = useState({})

    // Add Product to Shopping Cart

    const [cartProducts, setCartProducts] = useState([])

    const removeFromCart = (title) => {
        const updatedCart = cartProducts.filter(item => item.title !== title);
        setCartProducts(updatedCart);
        setCount(count - 1);
    };

    // const deleteProduct = () => {
    //     const newCartProducts = [...cartProducts];
    //     const productIdex = newCartProducts.findIndex((product) => product.index);
    //     newCartProducts.splice(productIdex, 1);
    //     setCartProducts(newCartProducts);
    
        

    // };
    console.log(cartProducts)

    return (
        <EcommerceContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            productDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            checkoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            removeFromCart
            
        }}>
            {children}
        </EcommerceContext.Provider>
    )
}

EcommerceProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { EcommerceProvider }

