import type { Product } from "../types";
import { resolveImage } from "../utils/images";
import addToCartIcon from "../assets/images/icon-add-to-cart.svg";

interface ProductCardProps {
	product: Product;
}

function ProductCard({ product }: ProductCardProps) {
	return (
		<div className="relative flex flex-col">
			<div className="relative w-fit mb-8">
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
				<button className="absolute -translate-1/2 left-1/2 py-2 px-8 border border-rose-300 text-rose-900 font-semibold bg-white rounded-full cursor-pointer flex gap-x-2 whitespace-nowrap">
					<img src={addToCartIcon} alt="" />
					Add to Cart
				</button>
			</div>

			<p className="font-light text-rose-500">{product.category}</p>
			<p className="font-semibold text-rose-900">{product.name}</p>
			<p className="text-red font-semibold">${product.price.toFixed(2)}</p>
		</div>
	);
}

export default ProductCard;
