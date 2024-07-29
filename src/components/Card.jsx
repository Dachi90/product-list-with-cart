import AddToCart from '../assets/images/icon-add-to-cart.svg';

export const Card = ({ image, name, category, price }) => {
	return (
		<article className='flex flex-col'>
			<img
				src={image}
				alt='Image dessert'
				className='rounded-md'
			/>
			<button className='border-solid border border-[--Rose-900] rounded-3xl p-2 px-6 self-center -mt-5 bg-white flex gap-2 items-center font-bold'>
				<img
					src={AddToCart}
					alt='add to cart'
				/>
				Add to card
			</button>
			<p className='text-[--Rose-400]'>{category}</p>
			<p className='text-[--Rose-900] font-bold'>{name}</p>
			<p className='text-[--Red] font-bold'>${price}</p>
		</article>
	);
};
