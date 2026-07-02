import productData from "./data/data.json";
import ProductList from "./components/ProductList";
import type { Product } from "./types";

const products = productData as Product[]

function App() {
	return (
		<main className="bg-rose-50 p-4 grid lg:grid-cols-2 gap-4">
			<ProductList products={products} />
      <div>Hey</div>
		</main>
	);
}

export default App;
