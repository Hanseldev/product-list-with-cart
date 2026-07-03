import type { CartItem, Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductListProps {
	products: Product[];
	cartItems: CartItem[];
	onAddToCart: (product: Product) => void;
	onIncrement: (productName: string) => void;
	onDecrement: (productName: string) => void;
}

function ProductList({
	products,
	cartItems,
	onAddToCart,
	onIncrement,
	onDecrement,
}: ProductListProps) {
	return (
		<>
			<section>
				<h1 className="text-3xl font-bold mb-6">Desserts</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{products.map((product) => (
						<ProductCard
							key={product.name}
							product={product}
							cartItems={cartItems}
							onAddToCart={onAddToCart}
							onIncrement={onIncrement}
							onDecrement={onDecrement}
						/>
					))}
				</div>
			</section>
		</>
	);
}

export default ProductList;
