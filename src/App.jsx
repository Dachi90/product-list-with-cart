import { EmptyCart } from './components/Cart';
import { Desserts } from './components/Desserts';
import { CartProvider } from './context/CartProvider';

function App() {
	return (
		<CartProvider>
			<main className='bg-[--Rose-100]'>
				<Desserts />
				<EmptyCart />
			</main>
		</CartProvider>
	);
}

export default App;
