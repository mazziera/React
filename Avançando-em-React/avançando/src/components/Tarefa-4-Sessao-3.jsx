import UserDetails from "./UserDetails";

const ArrayTarefa4 = () => {
  const pessoas = [
    { id: 1, nome: "Raphael", idade: 26, profissao: "Desenvolvedor" },
    { id: 2, nome: "Renan", idade: 33, profissao: "Eletricista" },
    { id: 3, nome: "Clara", idade: 13, profissao: "Estudante" },
  ];

  const userDetailsList = pessoas.map((pessoa) => (
    <UserDetails
      key={pessoa.id}
      name={pessoa.nome}
      age={pessoa.idade}
      job={pessoa.profissao}
    />
  ));

  return (<>{userDetailsList}</>)
  // está retornando um elemento JSX que contém o array do componente UserDetails gerada pelo método map()
};

export default ArrayTarefa4; {/*Componente pai */}

