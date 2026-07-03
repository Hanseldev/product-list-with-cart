import type { CartItem } from "../types";
import { RemoveIcon } from "./Icons";

interface CartProps {
	cartItem: CartItem;
}

function CardItemCard({ cartItem }: CartProps) {
	return (
		<>
			<div className="flex items-center justify-between">
				<div>
					<p className="text-rose-900 font-bold mb-2">{cartItem.name}</p>
					<div className="flex gap-4">
						<p className="text-red font-semibold">{cartItem.quantity}x</p>
						<p className="text-rose-300">@ ${cartItem.price.toFixed(2)}</p>

						<p className="font-semibold text-rose-500">
							${(cartItem.quantity * cartItem.price).toFixed(2)}
						</p>
					</div>
				</div>
				<button className="border p-1 h-fit rounded-full border-rose-300 hover:border-rose-900 cursor-pointer">
					<RemoveIcon className=" hover:text-rose-900 text-rose-500" />
				</button>
			</div>
			<hr className="text-rose-100" />
		</>
	);
}

export default CardItemCard;
