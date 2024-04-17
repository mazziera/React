//style components files
import "./App.css";

//components
import Car from "./components/Car";

function App() {
  const cars = [
    { id: 1, brand: "Bmw", model: "M3 GTR", year: 2001 },
    { id: 2, brand: "Volvo", model: "S60", year: 2021 },
    { id: 3, brand: "Maserati", model: "Ghibli", year: 2014 },
    { id: 4, brand: "Lamborghini", model: "Aventador", year: 2008 },
  ];

  return (
    <>
      <h1>Showroom Carros</h1>

      <div>
        {/* renderizando carro por carro, utilizando o componente Car */}
        {cars.map((car) => (
          <Car key={car.id} car={car} />
        ))}
      </div>
    </>
  );
}

export default App;
