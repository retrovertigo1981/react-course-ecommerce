import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { EcommerceContext } from "../../EcommerceContext/EcommerceContext";
import { useContext } from "react";


const OrderCard = props => {
    const context = useContext(EcommerceContext)
    const {
        title,
        imageUrl,
        price
    } = props
  return (
    <div className="flex justify-between items-center my-5 mx-2">
      <div className="flex items-center gap-2">
        <figure className="w-10 h-10">
          <img className="w-full h-full rounded-lg object-contain" src={imageUrl} alt={title} />
        </figure>
        <p className=" text-xs font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className=" text-sm font-bold">${price}</p>
        <XMarkIcon className="w-6 h-6 text-black cursor-pointer" onClick={() => context.removeFromCart(title)}/>
      </div>
    </div>
  );
};


OrderCard.propTypes = {
    title: PropTypes.node.isRequired,
    imageUrl: PropTypes.node.isRequired,
    price: PropTypes.node.isRequired
}

export default OrderCard;
