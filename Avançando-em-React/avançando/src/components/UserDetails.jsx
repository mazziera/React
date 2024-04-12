const UserDetails = ({ name, age, job }) => {
    return (
      <>
        <h1>O usuário poderá tirar a CNH?</h1>
  
        <h3>{name}</h3>
        <p>idade: {age}</p>
        <p>profissão: {job}</p>
        {age >= 18 ? <p>Pode tirar a cnh</p> : <p>Menor de idade</p>}
      </>
    );
  };
  
  export default UserDetails; {/*renderizar este componente dentro do componente pai = ArrayTarefa4 */}
  