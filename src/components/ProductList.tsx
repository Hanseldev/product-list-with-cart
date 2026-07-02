import type { Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductListProps {
	products: Product[];
}

function ProductList({ products }: ProductListProps) {
	return (
		<div>
			{products.map((product) => (
				<ProductCard key={product.name} product={product} />
			))}
		</div>
	);
}

export default ProductList;
