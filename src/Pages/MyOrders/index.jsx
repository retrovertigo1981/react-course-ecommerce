import { useContext } from "react"
import { Link } from "react-router-dom"
import { EcommerceContext } from "../../EcommerceContext/EcommerceContext"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ChevronLeftIcon } from '@heroicons/react/24/outline'


function MyOrders() {
   const context = useContext(EcommerceContext)
  

    return (
      <Layout>
         <div className="flex justify-center items-center relative w-80">
          <h1 className="text-lg font-bold mb-6">My Orders</h1>
        </div>
        {
          context.order.map((order, index) => (
            // Usaremos index Solo como ejemplo didácto, React no recomieda el uso de index
            // porque puede impactar en el rendimiento y en el estado del componente.
            <Link key={index} to={`/my-orders/${index}`} className="border border-gray-500">
                <OrdersCard
                  totalPrice = {order.totalPrice}
                  totalProducts = {order.totalProducts}
                  date = {order.date}
              />
            </Link> 
            
          ))
          
        }
      </Layout>
    )
  }
  
  export default MyOrders