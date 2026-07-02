import type { Product } from "../types";
import { resolveImage } from "../utils/images";

interface ProductCardProps {
	product: Product;
}

function ProductCard({ product }: ProductCardProps) {
	return (
		<div>
			<img src={resolveImage(product.image.desktop)} alt={product.name} />
			<p>{product.category}</p>
			<p>{product.name}</p>
			<p>${product.price.toFixed(2)}</p>
		</div>
        
	);
}

export default ProductCard;
