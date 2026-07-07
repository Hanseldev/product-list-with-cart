import productData from "./data/data.json";
import ProductList from "./components/ProductList";
import { type CartItem, type Product } from "./types";
import {
	addItem,
	incrementItem as incrementInCart,
	decrementItem as decrementInCart,
	removeItem as removeItemInCart,
	getCartTotal,
} from "./logic/cartLogic";
import { useState } from "react";
import Cart from "./components/Cart";

const products = productData as Product[];

function App() {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	function addToCart(product: Product) {
		setCartItems((prev) => addItem(prev, product));
	}

	function clearCart() {
		setCartItems([]);
	}

	function incrementItem(productName: string) {
		setCartItems((prev) => incrementInCart(prev, productName));
	}

	function decrementItem(productName: string) {
		setCartItems((prev) => decrementInCart(prev, productName));
	}

	function removeFromCart(productName: string) {
		setCartItems((prev) => removeItemInCart(prev, productName));
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
			<Cart
				cartItems={cartItems}
				onRemoveFromCart={removeFromCart}
				onClearCart={clearCart}
				onGetTotal={getCartTotal}
			/>
		</main>
	);
}

export default App;
