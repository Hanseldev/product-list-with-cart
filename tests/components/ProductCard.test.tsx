import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../../src/components/ProductCard";
import { type Product } from "../../src/types";

describe("ProductCard", () => {
	test("renders the Add to Cart button when item is not in cart", () => {
		const product: Product = {
			name: "Waffle",
			category: "Waffle",
			price: 6.5,
			image: { thumbnail: "", mobile: "", tablet: "", desktop: "" },
		};

		render(
			<ProductCard
				product={product}
				cartItems={[]}
				onAddToCart={() => {}}
				onIncrement={() => {}}
				onDecrement={() => {}}
			/>,
		);

		expect(
			screen.getByRole("button", { name: /add to cart/i }),
		).toBeInTheDocument();
	});

	test("renders the quantity stepper when the item is already in the cart", () => {
		const product: Product = {
			name: "Waffle",
			category: "Waffle",
			price: 6.5,
			image: { thumbnail: "", mobile: "", tablet: "", desktop: "" },
		};

		render(
			<ProductCard
				product={product}
				cartItems={[{ ...product, quantity: 2 }]}
				onAddToCart={() => {}}
				onIncrement={() => {}}
				onDecrement={() => {}}
			/>,
		);

		expect(
			screen.queryByRole("button", { name: /add to cart/i }),
		).not.toBeInTheDocument();
		expect(screen.getByText("2")).toBeInTheDocument();
	});

	test("calls onAddCart with the product when clicked", () => {
		const product: Product = {
			name: "Waffle",
			category: "Waffle",
			price: 6.5,
			image: { thumbnail: "", mobile: "", tablet: "", desktop: "" },
		};
		const handleAddCart = vi.fn();

		render(
			<ProductCard
				product={product}
				cartItems={[]}
				onAddToCart={handleAddCart}
				onIncrement={() => {}}
				onDecrement={() => {}}
			/>,
		);

		fireEvent.click(screen.getByRole("button", { name: /add to cart/i }));

		expect(handleAddCart).toHaveBeenCalledWith(product);
	});

	test("calls onIncrement with the product when clicked", () => {
		const product: Product = {
			name: "Waffle",
			category: "Waffle",
			price: 6.5,
			image: { thumbnail: "", mobile: "", tablet: "", desktop: "" },
		};
		const onIncrement = vi.fn();

		render(
			<ProductCard
				product={product}
				cartItems={[{...product, quantity:2}]}
				onAddToCart={() => {}}
				onIncrement={onIncrement}
				onDecrement={() => {}}
			/>,
		);

		fireEvent.click(screen.getByRole("button", { name: /increase quantity/i }));

		expect(onIncrement).toHaveBeenCalledWith(product.name);
	});

	test("calls onDecrement with the product when clicked", () => {
		const product: Product = {
			name: "Waffle",
			category: "Waffle",
			price: 6.5,
			image: { thumbnail: "", mobile: "", tablet: "", desktop: "" },
		};
		const onDecrement = vi.fn();

		render(
			<ProductCard
				product={product}
				cartItems={[{...product, quantity:2}]}
				onAddToCart={() => {}}
				onIncrement={() => {}}
				onDecrement={onDecrement}
			/>,
		);

		fireEvent.click(screen.getByRole("button", { name: /decrease quantity/i }));

		expect(onDecrement).toHaveBeenCalledWith(product.name);
	});

});
