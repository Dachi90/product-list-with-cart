import { Card } from './Card';
import { data } from '../data';

export const Desserts = () => {
	return (
		<div>
			<h1 className='text-4xl font-bold p-6'>Desserts</h1>
			<section className='p-6 grid grid-cols-1'>
				{data.map((dessert) => {
					return (
						<Card
							key={dessert.id}
							image={dessert.image.mobile}
							name={dessert.name}
							category={dessert.category}
							price={dessert.price}
						/>
					);
				})}
			</section>
		</div>
	);
};
