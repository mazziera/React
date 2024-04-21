//libs
import { useState } from "react";

//styles
import './Arrays.css'

const ArrayRender = () => {
  const [list] = useState(["Matheus", "Raphael", "Josias"]); //Lista-Array Exemplo
  //[list] array desestruturado

  
  //Array de Usuarios
  const [users, setUsers] = useState([
    { id: 1, name: "Carlos", age: 32 },
    { id: 2, name: "Douglas", age: 21 },
    { id: 3, name: "Ednaldo", age: 47 },
  ]);

  const DeletarUsuario = () => {
    const numeroAleatorio = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => numeroAleatorio !== user.id);
      //Para cada usuário (user) no array prevUsers(users), estamos verificando se o id do usuário é diferente do numeroAleatorio. Se for diferente, o usuário é mantido no array resultante; caso seja igual, é excluído.
    });
  };

  return (
    <>
      <div className="array_exemplo">
        <h3>Lista-Array Exemplo</h3>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>



      <div className="array_usuarios">
        <h3>Array de Usuarios</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>Nome: {user.name} - Idade: {user.age} anos</p>
            </li>
          ))}
        </ul>
        <button onClick={DeletarUsuario}> Deletar Usuario Randomicamente</button>
      </div>
    </>
  );
};

export default ArrayRender;
