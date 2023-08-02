const Card = () => {
    return ( 
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative w-full h-4/5'>
                <span className='absolute bottom-0 left-0 m-2 p-0.5 bg-white/60 text-black text-xs rounded-lg px-3 py-0.5'>Electronics</span>
                <img className='w-full h-full object-cover rounded-lg' src="https://images.pexels.com/photos/3756912/pexels-photo-3756912.jpeg?auto=compress&cs=tinysrgb&w=600" alt="headphones"/>
                <div className='absolute top-0 right-0 m-2 flex justify-center font-bold text-sm bg-white w-6 h-6 rounded-full'>+</div>
            </figure>
            <p className='flex justify-between mt-2'>
                <span className='text-sm font-light'>Headphones</span>
                <span className='text-lg font-medium'>$300</span>
            </p>
        </div>
     );
}
 
export default Card;