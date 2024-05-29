const UserDetails = ({ name, age, job }) => {
  //componente que irá renderizar os elementos iterados pelo map, do componente Tarefa-4
    return (
      <>
      
        <h2>{name}</h2>
        <p>idade: {age}</p>
        <p>profissão: {job}</p>

        {age >= 18 ? <p>Esta pessoa pode tirar a cnh</p> : <p>Menor de idade!</p>}
      </>
    );
  };
  
  export default UserDetails; {/*renderizar este componente dentro do componente pai = ArrayTarefa4 */}
  