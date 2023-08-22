import PropTypes from "prop-types";
import {
  ChevronDoubleRightIcon,
  CalendarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts, date } = props;

  return (
    <div className="flex justify-between items-center mb-4 border border-black rounded-lg p-4 w-80 ">
      <div className="flex justify-between items-center w-full ">
        <p className="flex flex-col">
          <div className="flex items-center">
            <CalendarIcon className="w-4 h-4 text-black mr-2" />
            <span className=" font-light">{date}</span>
          </div>
          <div className="flex items-center">
            <ShoppingBagIcon className="w-4 h-4 text-black mr-2" />
            <span className=" font-light">Products: {totalProducts}</span>
          </div>          
        </p>
        <p className="flex items-center">
          <span className=" font-bold text-xl ">$ {totalPrice}</span>
          <ChevronDoubleRightIcon className="w-6 h-6 text-black cursor-pointer ml-4" />
        </p>
      </div>
    </div>
  );
};

OrdersCard.propTypes = {
  totalPrice: PropTypes.node.isRequired,
  totalProducts: PropTypes.node.isRequired,
  date: PropTypes.node.isRequired,
};

export default OrdersCard;
