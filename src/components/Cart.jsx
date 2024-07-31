import EmptyCartImg from '../assets/images/illustration-empty-cart.svg';

export const EmptyCart = () => {
	return (
		<article className='bg-white m-4 mb-9 rounded-md'>
			<h2 className='p-3 text-3xl font-bold text-[--Red]'>Your Cart (0)</h2>
			<img
				className='mx-auto'
				src={EmptyCartImg}
				alt='empty cart'
			/>
			<p className='text-center text-[--Rose-400] font-bold text-lg'>You added items will appear here</p>
		</article>
	);
};
