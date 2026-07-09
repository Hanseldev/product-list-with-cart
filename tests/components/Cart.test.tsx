import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "../../src/components/Cart";
import type { Product } from "../../src/types";

describe("Cart", () => {
	test("shows empty state message when cart has no items", () => {
		render(
			<Cart
				cartItems={[]}
				onRemoveFromCart={() => {}}
				onClearCart={() => {}}
				onGetTotal={() => 0}
			/>,
		);

		expect(
			screen.getByText(/your added cart items will appear here/i),
		).toBeInTheDocument();
	});

	test("renders cart items when items are present", () => {
		const product: Product = {
			name: "Waffle",
			category: "Waffle",
			price: 6.5,
			image: { thumbnail: "", mobile: "", tablet: "", desktop: "" },
		};

		render(
			<Cart
				cartItems={[{ ...product, quantity: 2 }]}
				onRemoveFromCart={() => {}}
				onClearCart={() => {}}
				onGetTotal={(cart) =>
					cart.reduce((t, i) => t + i.price * i.quantity, 0)
				}
			/>,
		);

		expect(screen.getByText("Waffle")).toBeInTheDocument();
		expect(
			screen.queryByText(/your added cart items will appear here/i),
		).not.toBeInTheDocument();
	});

	test("clicking Confirm Order opens the order summary modal", () => {
		const product: Product = {
			name: "Waffle",
			category: "Waffle",
			price: 6.5,
			image: { thumbnail: "", mobile: "", tablet: "", desktop: "" },
		};

		render(
			<Cart
				cartItems={[{ ...product, quantity: 1 }]}
				onRemoveFromCart={() => {}}
				onClearCart={() => {}}
				onGetTotal={() => 6.5}
			/>,
		);

		fireEvent.click(screen.getByRole("button", { name: /confirm order/i }));

		expect(screen.getByText(/order confirmed/i)).toBeInTheDocument();
	});
});
