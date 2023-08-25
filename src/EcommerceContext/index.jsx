import { useState } from "react";
import { useEffect } from "react";
import { EcommerceContext } from "./EcommerceContext";
import { totalPrice } from "../utils/index.js";
import PropTypes from "prop-types";

const EcommerceProvider = ({ children }) => {
  // Product Quantity

  const [count, setCount] = useState(0);

  // Open/Close Detail Product
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  const openProductDetail = () => setProductDetailOpen(true);
  const closeProductDetail = () => setProductDetailOpen(false);

  // Open/Close Checkout Side Menu
  const [checkoutSideMenuOpen, setcheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setcheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setcheckoutSideMenuOpen(false);

  // Show Detail Product

  const [productToShow, setProductToShow] = useState({});

  // Add Product to Shopping Cart

  const [cartProducts, setCartProducts] = useState([]);

  // Deleting products from cart

  const removeFromCart = (id) => {
    const updatedCart = cartProducts.filter((item) => item.id !== id);
    setCartProducts(updatedCart);
    setCount(count - 1);
  };

  // Shopping Cart - Order

  const [order, setOrder] = useState([]);

  const handleCheckout = () => {
    if (cartProducts.length === 0) {
      alert(
        "El carrito de productos está vacío. Agrega productos antes de realizar el pedido."
      );
      
      window.location.reload()
       return;// Detener la función si el carrito está vacío
    }
    if (cartProducts.length > 0) {
      const currentDate = new Date();
      const formattedDate = `${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${currentDate.getFullYear()}`;

      const orderToAdd = {
      date: formattedDate,
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts).toFixed(2),
    };
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setCount(0);
    closeCheckoutSideMenu();
    }
    
  };

  // Get Products

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    if (items.length === 0) {
      fetchItems();
    }
  }, [items]);

  // Get Products by title

  const [searchByTitle, setSearchByTitle] = useState("");
  const [filteredItems, setFilteredItems] = useState(null);
  const [filteredItemsByCategory, setFilteredItemsByCategory] = useState(null);
  const [searchItemsByCategory, setSearchItemsByCategory] = useState("");

  const handleSearchByTitle = (event) => {
    setSearchByTitle(event.target.value);
  };

  const filteredItemsbyTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };


  const filteredItemsCategory = (items, searchItemsByCategory) => {
    return items?.filter((item) => item.category === searchItemsByCategory);
  };

  useEffect(() => {
    if (searchByTitle)
      setFilteredItems(filteredItemsbyTitle(items, searchByTitle));
    if (searchItemsByCategory) {
      setFilteredItemsByCategory(filteredItemsCategory(items, searchItemsByCategory));
      setFilteredItems(null)
      setSearchByTitle("")
      
    }
    
  }, [items, searchByTitle, searchItemsByCategory, ]);
  
  
  // console.log(filteredItemsByCategory);
  // console.log(filteredItems.length);
  // console.log(filteredItems);
  // console.log(searchByTitle)
 

  return (
    <EcommerceContext.Provider
      value={{
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
        removeFromCart,
        handleCheckout,
        order,
        items,
        setItems,
        handleSearchByTitle,
        filteredItems,
        setFilteredItems,
        searchByTitle,
        searchItemsByCategory,
        setSearchItemsByCategory,
        setFilteredItemsByCategory,
        filteredItemsByCategory
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};

EcommerceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { EcommerceProvider };
