import type { Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductListProps {
	products: Product[];
}

function ProductList({ products }: ProductListProps) {
	return (
		<>
			<section>
				<h1 className="text-3xl font-bold mb-6">Desserts</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{products.map((product) => (
						<ProductCard key={product.name} product={product} />
					))}
				</div>
			</section>
		</>
	);
}

export default ProductList;
