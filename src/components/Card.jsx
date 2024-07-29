export const Card = ({ image, name, category, price }) => {
	return (
		<article className='flex flex-col'>
			<img
				src={image}
				alt='Image dessert'
			/>
			<button className='border-solid border border-rose-900 rounded-2xl p-2 px-6 self-center -mt-5 bg-white'>
				Add to card
			</button>
			<p>{category}</p>
			<p>{name}</p>
			<p>{price}</p>
		</article>
	);
};
