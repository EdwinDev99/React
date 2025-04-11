import { useState } from "react";
import ProductDaschboard from "./assets/components/ProductDaschboard";
import ProductList from "./assets/components/ProductList";
import Button from "./assets/components/Button";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iphone",
    },
  ]);
  const handleClick = () => {
    const newProduct = { id: 2, name: "Android" };

    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <ProductDaschboard amount={products.length} />
      <ProductList products={products} />
      <Button onClick={handleClick}>enviar</Button>
    </div>
  );
}
export default App;
