import styles from "./Car.module.css";

// Definindo o componente Car que recebe um carro como propriedade desestruturada
const Car = ({ car }) => {
  return (
    <>
      {/* Renderizando as propriedades do carro */}
      <div className={styles.carContainer}>
        <h3> {car.brand}</h3>
        <p>Modelo:{car.model}</p>
        <p>Ano:{car.year}</p>
      </div>
    </>
  );
};

// Exportando o componente Car
export default Car;
