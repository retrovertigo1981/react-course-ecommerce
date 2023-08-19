import { useContext } from "react";
import { EcommerceContext } from "../../EcommerceContext/EcommerceContext";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";

const Card = (product) => {
  const context = useContext(EcommerceContext);
  
  const showProduct = (detailProduct) => {
    context.openProductDetail()
    context.setProductToShow(detailProduct);
  };

  const addProductsToCart = (productData) => {
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
  };

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product =>product.id === id).length > 0;
    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 m-2 flex cursor-pointer justify-center items-center font-bold text-sm bg-black w-6 h-6 rounded-full transition-transform transform scale-110 ">
          <CheckIcon className="w-4 h-4 text-white" />
        </div>
      );
    } else {
      return (
        <div
          onClick={() => addProductsToCart(product.data)}
          className="absolute top-0 right-0 m-2 flex cursor-pointer justify-center items-center font-bold text-sm bg-white w-6 h-6 rounded-full"
        >
          <PlusIcon className="w-4 h-4 text-black" />
        </div>
      );
    }
  };

  return (
    <div className="bg-white w-56 h-60 rounded-lg">
      <figure className="relative w-full h-4/5">
        <span className="absolute bottom-0 left-0 m-2 p-0.5 bg-white/60 text-black text-xs rounded-lg px-3 py-0.5">
          {product.data.category}
        </span>
        <img
          className="w-full h-full object-contain cursor-pointer rounded-lg"
          src={product.data.image}
          alt={product.data.title}
        />
        <div className="absolute inset-0 bg-gray-500 opacity-20 rounded-lg" onClick={() => showProduct(product.data)}></div>
        {renderIcon(product.data.id)}
      </figure>

      <p className="flex justify-between mt-2 cursor-default">
        <span className="text-sm font-light truncate">
          {product.data.title}
        </span>
        <span className="text-lg font-medium">${product.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
