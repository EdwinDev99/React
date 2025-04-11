import { useState } from "react";
import ProductDaschboard from "./assets/components/ProductDaschboard";
import ProductList from "./assets/components/ProductList";
import Button from "./assets/components/Button";

function App() {
  const [products, setProducts] = useState([
    {
      id: Math.random().toString(),
      name: "iphone",
    },
  ]);
  const comienzo = () => {
    const newProduct = { id: Math.random().toString(), name: "Android" };

    setProducts([newProduct, ...products]);
  };

  const final = () => {
    const newProduct = { id: Math.random().toString(), name: "Android" };

    setProducts([...products, newProduct]);
  };

  const eliminar = () => {
    const deleteLastItem = [...products.slice(0, -1)];

    setProducts(deleteLastItem);
  };

  const limpiar = () => {
    setProducts([]);
  };

  return (
    <div>
      <ProductDaschboard amount={products.length} />
      <ProductList products={products} />
      <Button onClick={comienzo}>Comienzo</Button>
      <Button onClick={final}>Final</Button>
      <Button onClick={eliminar}>Eliminar ultimo elemento</Button>
      <Button onClick={limpiar}>Limpiar</Button>
    </div>
  );
}
export default App;
