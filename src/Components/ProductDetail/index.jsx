import { useContext } from 'react';
import { EcommerceContext } from '../../EcommerceContext/EcommerceContext';
import { XCircleIcon } from '@heroicons/react/24/outline'


const ProductDetail = () => {
    const context = useContext(EcommerceContext);
    return ( 
        <aside className={`${context.productDetailOpen ? 'flex' : 'hidden'} w-[360px] h-[calc(100dvh-68px)] top-[68px] border border-black flex-col fixed bg-white right-0 rounded-lg`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div className='cursor-pointer'  
                onClick={() => context.closeProductDetail()}>
                    <XCircleIcon className='w-6 h-6'/>
                </div>                
            </div>
            <figure className='w-auto h-2/5 shadow-sm rounded-lg mx-4'>
                    <img className=' w-full h-full object-contain rounded-xl' src={context.productToShow.image} alt={context.productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-lg mb-2'>${context.productToShow.price}</span>
                <span className='text-md py-2 font-bold'>{context.productToShow.title}</span>
                <span className=' font-light text-xs'>{context.productToShow.description}</span>
            </p>     
        </aside>
     );
}

export default ProductDetail
 
 