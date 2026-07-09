import type { CartItem, Product } from "../types";
import { resolveImage } from "../utils/images";
import addToCartIcon from "../assets/images/icon-add-to-cart.svg";
import { DecrementIcon, IncrementIcon } from "./Icons";

interface ProductCardProps {
	product: Product;
	cartItems: CartItem[];
	onAddToCart: (product: Product) => void;
	onIncrement: (productName: string) => void;
	onDecrement: (productName: string) => void;
}

function ProductCard({
	product,
	cartItems,
	onAddToCart,
	onIncrement,
	onDecrement,
}: ProductCardProps) {
	const cartItem = cartItems.find((item) => item.name === product.name);
	const isInCart = cartItem !== undefined;
	return (
		<div className="relative flex flex-col">
			<div
				className={`relative w-fit mb-8 ${isInCart ? "outline-2 outline-red rounded-xl" : ""}`}
			>
				<picture>
					<source
						media="(min-width: 1024px)"
						srcSet={resolveImage(product.image.desktop)}
					/>

					<source
						media="(min-width: 768px)"
						srcSet={resolveImage(product.image.tablet)}
					/>

					<img
						src={resolveImage(product.image.mobile)}
						alt={product.name}
						className="rounded-xl"
					/>
				</picture>

				{isInCart ? (
					<div className="absolute -translate-1/2 left-1/2 flex items-center justify-center gap-x-4 py-2 px-4 bg-red rounded-full">
						<button
							aria-label="Decrease quantity"
							className=""
							onClick={() => onDecrement(product.name)}
						>
							<DecrementIcon className="border-2 rounded-full h-6 w-6 p-2 inset-2 cursor-pointer stroke-white border-white stroke-[1.5px] text-white hover:bg-white hover:text-red hover:stroke-red" />
						</button>
						<span className="text-white">{cartItem.quantity}</span>
						<button
							aria-label="Increase quantity"
							onClick={() => onIncrement(product.name)}
						>
							<IncrementIcon className="border-2 rounded-full h-6 w-6 p-2 inset-2 cursor-pointer stroke-white border-white stroke-[1.5px] text-white hover:bg-white hover:text-red hover:stroke-red" />
						</button>
					</div>
				) : (
					<button
						onClick={() => onAddToCart(product)}
						className="absolute -translate-1/2 left-1/2 py-2 px-8 border border-red text-rose-900 font-semibold bg-white rounded-full cursor-pointer flex items-center justify-center gap-x-2 whitespace-nowrap hover:text-red"
					>
						<img src={addToCartIcon} alt="" />
						Add to Cart
					</button>
				)}
			</div>

			<p className="font-light text-rose-500">{product.category}</p>
			<p className="font-semibold text-rose-900">{product.name}</p>
			<p className="text-red font-semibold">${product.price.toFixed(2)}</p>
		</div>
	);
}

export default ProductCard;
