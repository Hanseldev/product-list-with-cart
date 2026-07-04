import type { CartItem } from "../types";
import emptyCartImage from "../assets/images/illustration-empty-cart.svg";
import treeIcon from "../assets/images/icon-carbon-neutral.svg";
import CartItemCard from "./CartItemCard";
import OrderSummary from "./OrderSummary";
import { useState } from "react";

interface CartProps {
	cartItems: CartItem[];
	onRemoveFromCart: (productName: string) => void;
	onClearCart: () => void;
}

function Cart({ cartItems, onRemoveFromCart, onClearCart }: CartProps) {
	let totalPrice = 0;
	cartItems.map((cartItem) => {
		totalPrice += cartItem.price * cartItem.quantity;
	});

	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className="flex flex-col bg-white w-full h-fit p-4 rounded-2xl">
			<p className="text-red font-bold text-lg">
				Your Cart: ({cartItems.length})
			</p>
			{cartItems.length === 0 ? (
				<div className="flex flex-col justify-center items-center gap-y-4 my-4">
					<img src={emptyCartImage} />
					<p className="text-rose-500 stext-sm font-semibold">
						Your added cart items will appear here
					</p>
				</div>
			) : (
				<div>
					<div className="flex flex-col gap-y-4 my-4">
						{cartItems.map((cartItem) => (
							<CartItemCard
								onRemoveFromCart={onRemoveFromCart}
								key={cartItem.name}
								cartItem={cartItem}
							/>
						))}
					</div>

					<div className="flex items-center justify-between mb-8">
						<span className="text-rose-500 text-lg">Order Total</span>
						<span className="text-3xl font-bold text-rose-900">
							${totalPrice.toFixed(2)}
						</span>
					</div>

					<div className="bg-rose-100 p-4 rounded-2xl flex items-center justify-center text-rose-900 mb-4">
						<img src={treeIcon} className="mr-2" />
						This is a <strong>&nbsp;carbon-neutral&nbsp;</strong> delivery
					</div>

					<button
						onClick={() => setIsModalOpen(true)}
						className="bg-red hover:bg-[color-mix(in_srgb,var(--color-red)_90%,black)] cursor-pointer w-full rounded-full p-4 text-white font-semibold text-xl"
					>
						Confirm Order
					</button>
				</div>
			)}
			{isModalOpen && (
				<OrderSummary
					cartItems={cartItems}
					onClose={() => {
						setIsModalOpen(false);
						onClearCart();
					}}
				/>
			)}
		</div>
	);
}

export default Cart;
