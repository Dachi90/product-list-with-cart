import { useContext } from 'react';
import AddToCart from '../assets/images/icon-add-to-cart.svg';
import { cartContext } from '../context/CartProvider';

export const Button = (product) => {
	const { cartState, addToCart, deleteToCart } = useContext(cartContext);
	const onAddToCart = (product) => {
		addToCart(product);
	};
	return (
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
	);
};
