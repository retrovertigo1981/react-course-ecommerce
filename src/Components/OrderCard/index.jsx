import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

const OrderCard = (props) => {
  const { title, imageUrl, price, removeFromCart, id } = props;

  return (
    <div className="flex justify-between items-center my-5 mx-2">
      <div className="flex items-center gap-2">
        <figure className="w-10 h-10">
          <img
            className="w-full h-full rounded-lg object-contain"
            src={imageUrl}
            alt={title}
          />
        </figure>
        <p className=" text-xs font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className=" text-sm font-bold">${price}</p>
        {removeFromCart && (
          <XMarkIcon
            className="w-6 h-6 text-black cursor-pointer"
            onClick={() => removeFromCart(id)}
          />
        )}
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func, // Cambiado a PropTypes.func
  id: PropTypes.node.isRequired
};

export default OrderCard;
