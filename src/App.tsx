import productData from "./data/data.json";
import ProductList from "./components/ProductList";
import { type CartItem, type Product } from "./types";
import { useState } from "react";
import Cart from "./components/Cart";

const products = productData as Product[];

function App() {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	function addToCart(product: Product) {
		setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
	}

	function incrementItem(productName: string) {
		setCartItems((prev) =>
			prev.map((item) =>
				item.name === productName
					? { ...item, quantity: item.quantity + 1 }
					: item,
			),
		);
	}

	function decrementItem(productName: string) {
		setCartItems((prev) =>
			prev
				.map((item) =>
					item.name === productName
						? { ...item, quantity: item.quantity - 1 }
						: item,
				)
				.filter((item) => item.quantity > 0),
		);
	}

	function removeFromCart(productName: string) {
		setCartItems((prev) => prev.filter((item) => item.name !== productName))
	}

	return (
		<main className="bg-rose-100 p-8 grid lg:grid-cols-[7fr_3fr] gap-4">
			<ProductList
				products={products}
				cartItems={cartItems}
				onAddToCart={addToCart}
				onIncrement={incrementItem}
				onDecrement={decrementItem}
			/>
			<Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
		</main>
	);
}

export default App;
