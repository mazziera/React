import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const About = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div>
      <h1>About Page</h1>
      <p>O valor do contador é: {counter}</p>
    </div>
  );
};

export default About;
