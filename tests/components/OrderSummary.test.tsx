import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import OrderSummary from "../../src/components/OrderSummary";
import type { Product } from "../../src/types";

describe("OrderSummary", () => {
	const product: Product = {
		name: "Waffle",
		category: "Waffle",
		price: 6.5,
		image: { thumbnail: "", mobile: "", tablet: "", desktop: "" },
	};

	test("clicking the backdrop calls onClose", () => {
		const handleClose = vi.fn();

		const { container } = render(
			<OrderSummary
				cartItems={[{ ...product, quantity: 1 }]}
				onClose={handleClose}
				onGetTotal={() => 6.5}
			/>,
		);

		// the backdrop is the outermost div — grab it directly via container
		const backdrop = container.firstChild as HTMLElement;
		fireEvent.click(backdrop);

		expect(handleClose).toHaveBeenCalled();
	});

	test("clicking inside the modal card does not call onClose", () => {
		const handleClose = vi.fn();

		render(
			<OrderSummary
				cartItems={[{ ...product, quantity: 1 }]}
				onClose={handleClose}
				onGetTotal={() => 6.5}
			/>,
		);

		fireEvent.click(screen.getByText("Waffle"));

		expect(handleClose).not.toHaveBeenCalled();
	});
});
