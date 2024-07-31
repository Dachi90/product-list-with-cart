import { useContext } from 'react';
import { cartContext } from '../context/CartProvider';
import { Button } from './Button';
import { Button2 } from './Button2';

export const Card = ({ product }) => {
	const { cartState } = useContext(cartContext);
	return (
		<article className='flex flex-col'>
			<img
				src={product.image.mobile}
				alt='Image dessert'
				className='rounded-lg hover:border-2 hover:border-[--Red]'
			/>
			{cartState.length === 0 ? <Button product={product} /> : <Button2 />}

			<p className='text-[--Rose-400]'>{product.category}</p>
			<p className='text-[--Rose-900] font-bold'>{product.name}</p>
			<p className='text-[--Red] font-bold'>${product.price}</p>
		</article>
	);
};
