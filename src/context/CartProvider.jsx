import { useState, createContext } from 'react';

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartState, setCartState] = useState([]);

	const addToCart = (product) => {
		setCartState((currItems) => {
			const isItemsFound = currItems.find((item) => item.id === product.id);
			if (isItemsFound) {
				return currItems.map((item) => {
					if (item.id === product.id) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			} else {
				return [...currItems, { ...product, quantity: 1 }];
			}
		});
	};

	const deleteToCart = (product) => {
		setCartState((prevState) => {
			if (prevState.find((item) => item.id === product.id)?.quantity === 1) {
				return prevState.filter((item) => item.id !== product.id);
			} else {
				return prevState.map((item) => {
					if (item.id === product.id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	return <cartContext.Provider value={{ cartState, addToCart, deleteToCart }}>{children}</cartContext.Provider>;
};
