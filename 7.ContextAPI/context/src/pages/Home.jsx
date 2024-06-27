import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

//component
import ChangeCounter from "../components/ChangeCounter";

const Home = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>Home Page</h1>
      <p>O valor do contador é: {counter}</p>

      {/* 3 - alterando contexto */}
      <ChangeCounter />
    </div>
  );
};

export default Home;
