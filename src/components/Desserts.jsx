import { Card } from './Card';
import { data } from '../data';

export const Desserts = () => {
	return (
		<div>
			<h1 className='text-5xl font-bold p-4'>Desserts</h1>
			<section className='p-4 grid grid-cols-1 gap-3'>
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
