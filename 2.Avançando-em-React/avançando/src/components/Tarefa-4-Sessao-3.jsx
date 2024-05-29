import UserDetails from "./UserDetails";

const ArrayTarefa4 = () => {
  const pessoas = [
    { id: 1, nome: "Raphael", idade: 26, profissao: "Desenvolvedor" },
    { id: 2, nome: "Renan", idade: 33, profissao: "Eletricista" },
    { id: 3, nome: "Clara", idade: 13, profissao: "Estudante" },
  ];

  const userDetailsArray = pessoas.map((pessoa) => (
    <UserDetails
      key={pessoa.id}
      name={pessoa.nome}
      age={pessoa.idade}
      job={pessoa.profissao}
    />
  ));

  return (<>
  <h1>O usuário poderá tirar a CNH?</h1>
  
  {userDetailsArray}</>)
  // está retornando um elemento JSX que contém o array dos componentes UserDetails gerada pelo método map(), na qual cada componente é uma pessoa.
};

export default ArrayTarefa4; {/*Componente pai */}

