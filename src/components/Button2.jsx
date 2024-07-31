import { useContext } from 'react';
import { cartContext } from '../context/CartProvider';

export const Button2 = () => {
	const { cartState } = useContext(cartContext);
	console.log(cartState);
	return (
		<button className='border-solid border border-[--Rose-900] rounded-3xl p-2 px-6 self-center -mt-5 bg-white flex gap-2 items-center font-bold'>
			button 2
		</button>
	);
};
