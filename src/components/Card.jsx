import { useContext } from 'react';
import AddToCart from '../assets/images/icon-add-to-cart.svg';
import { cartContext } from '../context/CartProvider';

export const Card = ({ product }) => {
	const { cartState, addToCart, deleteToCart } = useContext(cartContext);

	const onAddToCart = (product) => {
		addToCart(product);
		console.log(cartState);
	};

	return (
		<article className='flex flex-col'>
			<img
				src={product.image.mobile}
				alt='Image dessert'
				className='rounded-lg hover:border-2 hover:border-[--Red]'
			/>

			<button
				className='border-solid border border-[--Rose-900] rounded-3xl p-2 px-6 self-center -mt-5 bg-white flex gap-2 items-center font-bold'
				onClick={() => {
					onAddToCart(product);
				}}
			>
				<img
					src={AddToCart}
					alt='add to cart'
				/>
				Add to card
			</button>

			<p className='text-[--Rose-400]'>{product.category}</p>
			<p className='text-[--Rose-900] font-bold'>{product.name}</p>
			<p className='text-[--Red] font-bold'>${product.price}</p>
		</article>
	);
};
