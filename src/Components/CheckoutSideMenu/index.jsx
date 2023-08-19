import { useContext } from "react";
import { Link } from "react-router-dom";
import { EcommerceContext } from "../../EcommerceContext/EcommerceContext";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { totalPrice } from "../../utils/index.js";
import OrderCard from "../OrderCard";

const CheckoutSideMenu = () => {
  const context = useContext(EcommerceContext);

  return (
    <aside
      className={`${
        context.checkoutSideMenuOpen ? "flex" : "hidden"
      } w-[360px] h-[calc(100dvh-68px)] top-[68px] border border-black flex-col fixed bg-white right-0 rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div
          className="cursor-pointer"
          onClick={() => context.closeCheckoutSideMenu()}
        >
          <XCircleIcon className="w-6 h-6" />
        </div>
      </div>
      <div className="overflow-y-scroll flex-1 px-1">
        <div>
          {
              context.cartProducts.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
                removeFromCart = {context.removeFromCart}
                
              />
            ))
          }

        </div>
      </div>
      <div className=" p-5">
        <p className="flex justify-between items-center">
          <span className=" font-light ">Total:</span>
          <span className=" font-medium">
            ${totalPrice(context.cartProducts).toFixed(2)}
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center w-full p-5">
        <Link to='my-orders/last' className="w-full">
          <button
            className="w-full h-12 bg-black text-white rounded-lg"
            onClick={() => context.handleCheckout()}
          >
            Checkout
          </button>
        </Link>    
        
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
