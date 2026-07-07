import type { CartItem, Product } from "../types";

export function addItem(cart: CartItem[], product: Product): CartItem[] {
	const existing = cart.find((item) => item.name === product.name);
	if (existing) {
		return incrementItem(cart, product.name)
	}
	return [...cart, { ...product, quantity: 1 }];
}

export function incrementItem(
	cart: CartItem[],
	productName: string,
): CartItem[] {
	return cart.map((item) =>
		item.name === productName ? { ...item, quantity: item.quantity + 1 } : item,
	);
}

export function decrementItem(
	cart: CartItem[],
	productName: string,
): CartItem[] {
	return cart
		.map((item) =>
			item.name === productName
				? { ...item, quantity: item.quantity - 1 }
				: item,
		)
		.filter((item) => item.quantity > 0);
}

export function removeItem(cart: CartItem[], productName: string): CartItem[] {
	return cart.filter((item) => item.name !== productName);
}

export function getCartTotal(cart: CartItem[]): number {
	return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
