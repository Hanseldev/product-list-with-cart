import { describe, test, expect } from "vitest";
import {
	addItem,
	decrementItem,
	getCartTotal,
	incrementItem,
	removeItem,
} from "../../src/logic/cartLogic";
import { CartItem, Product } from "../../src/types";

describe("addItem", () => {
	test("adds a new product to an empty cart", () => {
		const product: Product = {
			name: "Product1",
			category: "fashion",
			price: 6.99,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};
		const cart: CartItem[] = [];
		const result = addItem(cart, product);

		expect(result.length).toBe(1);
		expect(result[0].quantity).toBe(1);
	});

	test("increments quantity when adding a product already in the cart", () => {
		const product: Product = {
			name: "Product1",
			category: "fashion",
			price: 6.99,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};

		const cart: CartItem[] = [{ ...product, quantity: 1 }];
		const result = addItem(cart, product);

		expect(result.length).toBe(1);
		expect(result[0].quantity).toBe(2);
	});

	test("does not mutate the original cart array", () => {
		const product: Product = {
			name: "Product1",
			category: "fashion",
			price: 6.99,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};

		const cart: CartItem[] = [];
		const result = addItem(cart, product);

		expect(cart).not.toBe(result);
		expect(cart.length).toBe(0);
	});
});

describe("decrementItem", () => {
	test("decreases the product's quantity by 1", () => {
		const product: Product = {
			name: "Product1",
			category: "fashion",
			price: 6.99,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};
		const cart: CartItem[] = [{ ...product, quantity: 2 }];
		const result = decrementItem(cart, product.name);

		expect(result.length).toBe(1);
		expect(result[0].quantity).toBe(1);
	});

	test("removes the item when the quantity drops to 0", () => {
		const product: Product = {
			name: "Product1",
			category: "fashion",
			price: 6.99,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};
		const cart: CartItem[] = [{ ...product, quantity: 1 }];
		const result = decrementItem(cart, product.name);

		expect(result.length).toBe(0);
	});

	test("removes only the targeted item when its quantity drops to 0, leaving others untouched", () => {
		const product1: Product = {
			name: "Product1",
			category: "fashion",
			price: 6.99,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};
		const product2: Product = {
			name: "Product2",
			category: "fashion",
			price: 6.99,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};
		const cart: CartItem[] = [
			{ ...product1, quantity: 1 },
			{ ...product2, quantity: 4 },
		];
		const result = decrementItem(cart, product1.name);

		expect(result.length).toBe(1);
		expect(result[0].name).toBe("Product2");
		expect(result[0].quantity).toBe(4);
	});

	test("returns cart unchanged when decreasing a nonexistent product's value", () => {
		const product1: Product = {
			name: "Product1",
			category: "fashion",
			price: 6.99,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};
		const product2: Product = {
			name: "Product2",
			category: "fashion",
			price: 6.99,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};

		const cart: CartItem[] = [{ ...product1, quantity: 1 }];
		const result = decrementItem(cart, product2.name);

		expect(result.length).toBe(1);
		expect(result[0].quantity).toBe(1);
	});
});

describe("removeItem", () => {
	test("removes targeted product from cart", () => {
		const product: Product = {
			name: "Product1",
			category: "fashion",
			price: 6.99,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};

		const cart: CartItem[] = [{ ...product, quantity: 1 }];
		const result = removeItem(cart, product.name);

		expect(result.length).toBe(0);
	});

	test("returns cart unchanged when removing a nonexistent product", () => {
		const product1: Product = {
			name: "Product1",
			category: "fashion",
			price: 6.99,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};
		const product2: Product = {
			name: "Product2",
			category: "fashion",
			price: 6.99,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};

		const cart: CartItem[] = [{ ...product1, quantity: 1 }];
		const result = removeItem(cart, product2.name);

		expect(result.length).toBe(1);
		expect(result[0].quantity).toBe(1);
	});
});

describe("incrementItem", () => {
	test("increases the product's quantity by 1", () => {
		const product: Product = {
			name: "Product1",
			category: "fashion",
			price: 6.99,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};
		const cart: CartItem[] = [{ ...product, quantity: 2 }];
		const result = incrementItem(cart, product.name);

		expect(result.length).toBe(1);
		expect(result[0].quantity).toBe(3);
	});

	test("returns cart unchanged when increasing a nonexistent product's value", () => {
		const product1: Product = {
			name: "Product1",
			category: "fashion",
			price: 6.99,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};
		const product2: Product = {
			name: "Product2",
			category: "fashion",
			price: 6.99,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};

		const cart: CartItem[] = [{ ...product1, quantity: 1 }];
		const result = incrementItem(cart, product2.name);

		expect(result.length).toBe(1);
		expect(result[0].quantity).toBe(1);
	});
});

describe("getCartTotal", () => {
	test("gets the total price for all cart items", () => {
		const product1: Product = {
			name: "Product1",
			category: "fashion",
			price: 2,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};
		const product2: Product = {
			name: "Product2",
			category: "fashion",
			price: 3,
			image: {
				thumbnail: "",
				mobile: "",
				desktop: "",
				tablet: "",
			},
		};
		const cart: CartItem[] = [
			{ ...product1, quantity: 1 },
			{ ...product2, quantity: 4 },
		];
		const result = getCartTotal(cart);

		expect(result).toBe(14);
	});

	test("returns 0 when the cart is empty", () => {
		const cart: CartItem[] = [];
		const result = getCartTotal(cart);

		expect(result).toBe(0);
	});
});
