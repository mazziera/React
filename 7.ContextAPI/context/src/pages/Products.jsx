import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Products = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Products Page</h1>
      <p>O valor do contador é: {counter}</p>
    </div>
  );
};

export default Products;
