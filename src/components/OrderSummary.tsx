import type { CartItem } from "../types";
import OrderSummaryCartItem from "./OrderSummaryCartItem";
import confirmedOrderIcon from "../assets/images/icon-order-confirmed.svg";

interface OrderSummaryProps {
	cartItems: CartItem[];
	onClose: () => void;
}
function OrderSummary({ cartItems, onClose }: OrderSummaryProps) {
	let totalPrice = 0;
	cartItems.map((cartItem) => {
		totalPrice += cartItem.price * cartItem.quantity;
	});

	return (
		<div
			className="fixed inset-0 flex items-end justify-center lg:items-center bg-black/50"
			onClick={onClose}
		>
			<div
				className="bg-white rounded-t-2xl lg:rounded-2xl w-full lg:w-md max-h-[90vh] lg:max-h-140 overflow-y-auto p-6 scrollbar-none"
				onClick={(e) => e.stopPropagation()}
			>
				<img src={confirmedOrderIcon} alt="" className="mb-8" />
				<h2 className="text-3xl font-black mb-2">Order Confirmed</h2>
				<p className="text-sm text-rose-500 mb-8">
					We hope you enjoy your food!
				</p>

				<div className="bg-rose-50 p-8 rounded-lg">
					{cartItems.map((cartItem) => (
						<OrderSummaryCartItem key={cartItem.name} cartItem={cartItem} />
					))}

					<div className="flex items-center justify-between">
						<span className="text-rose-900 text-lg">Order Total</span>
						<span className="text-3xl font-bold text-rose-900">
							${totalPrice.toFixed(2)}
						</span>
					</div>
				</div>
				<button
					onClick={onClose}
					className="bg-red hover:bg-[color-mix(in_srgb,var(--color-red)_90%,black)] cursor-pointer w-full rounded-full p-4 text-white font-semibold text-xl"
				>
					Start New Order
				</button>
			</div>
		</div>
	);
}

export default OrderSummary;
