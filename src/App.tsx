import productData from "./data/data.json";
import ProductList from "./components/ProductList";
import type { Product } from "./types";

const products = productData as Product[]

function App() {
	return (
		<>
			<ProductList products={products} />
		</>
	);
}

export default App;
