import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Raphael", "Josias"]);
  //[list] array desestruturado

  const [users, setUsers] = useState([
    { id: 1, name: "Carlos", age: 32 },
    { id: 2, name: "Douglas", age: 21 },
    { id: 3, name: "Ednaldo", age: 47 },
  ]);

  const DeletarUsuario = () => {
    const numeroAleatorio = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => numeroAleatorio !== user.id);
      //Para cada usuário (user) no array prevUsers, estamos verificando se o id do usuário é diferente do numeroAleatorio. Se for, o usuário é mantido no array resultante; caso contrário, é excluído.
    });
  };

  return (
    <>
      <h3>Lista-Array Exemplo</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>



      <h3>Array de Usuarios</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      <button onClick={DeletarUsuario}> Deletar Usuario Randomicamente</button>
    </>
  );
};

export default ListRender;
