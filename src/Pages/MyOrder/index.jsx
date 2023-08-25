import { useContext } from "react"
import { EcommerceContext } from "../../EcommerceContext/EcommerceContext"
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"
import { Link } from "react-router-dom"
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

function MyOrder() {
  const context = useContext(EcommerceContext)
  const currentPath = window.location.pathname
  let indexOrder = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  
  if (indexOrder === 'last') indexOrder = context.order?.length - 1
  

    return (
      
      <Layout>  
        <div className="flex justify-center items-center relative w-full">
          <Link  className= 'absolute left-0' to={'/my-orders'}>
           <ChevronLeftIcon className="w-6 h-6 text-black cursor-pointer"/>
          </Link>
          <h1>My Order</h1>
        </div>

        <div className="flex flex-col">
        <div>
          {
            context.order?.[indexOrder]?.products.map( product => (
              <OrderCard
                key={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
              />
            ))
          }
        </div>
      </div>
      </Layout>
    )
  }
  
  export default MyOrder