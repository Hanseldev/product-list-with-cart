import { type CartItem } from "../types";
import { resolveImage } from "../utils/images";

interface OrderSummaryCartItemProps {
	cartItem: CartItem;
}

function OrderSummaryCartItem({ cartItem }: OrderSummaryCartItemProps) {
	return (
		<>
			<div className="flex items-center justify-between gap-3">
				<div className="flex items-center gap-3">
					<img
						src={resolveImage(cartItem.image.thumbnail)}
						className="w-10 h-10 rounded"
						alt=""
					/>
					<div className="min-w-0 flex-1">
						<p className="text-rose-900 font-semibold truncate w-full">
							{cartItem.name}
						</p>
						<div className="flex gap-2">
							<span className="text-red font-semibold">
								{cartItem.quantity}x
							</span>
							<span className="text-rose-300">
								@ ${cartItem.price.toFixed(2)}
							</span>
						</div>
					</div>
				</div>
				<span className="font-semibold text-rose-900 text-xl">
					${(cartItem.quantity * cartItem.price).toFixed(2)}
				</span>
			</div>
			<hr className="text-rose-100 my-4" />
		</>
	);
}

export default OrderSummaryCartItem;
