import { useContext } from "react";
import { EcommerceContext } from "../../EcommerceContext/EcommerceContext";
import { XCircleIcon } from "@heroicons/react/24/outline";
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
      <div className=" overflow-y-scroll">
      {
      context.cartProducts.map((product) => (
        <OrderCard
          key={product.id}
          title={product.title}
          imageUrl={product.image}
          price={product.price}
        />
      ))}
      </div>
     
    </aside>
  );
};

export default CheckoutSideMenu;
