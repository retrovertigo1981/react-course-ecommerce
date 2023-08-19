import PropTypes from "prop-types";
// import { XMarkIcon } from '@heroicons/react/24/outline'

const OrdersCard = (props) => {
    const {totalPrice, totalProducts, date} = props
  
    return (
        <div className="flex justify-between items-center my-5 mx-2 border-black">
        <p>
            
            <span>Date:{date}</span>
            <span>Total Price:{totalPrice}</span>
            <span>Total Products:{totalProducts}</span>
        </p>
        </div>
  );
};

OrdersCard.propTypes = {
    totalPrice: PropTypes.node.isRequired,
    totalProducts: PropTypes.node.isRequired,
    date: PropTypes.node.isRequired,
    
};

export default OrdersCard;
