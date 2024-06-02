//hooks
import { useState, useEffect } from "react";

//styles
import "./App.css";

// url => db.json simula um banco de dados
const url = "http://localhost:3000/products";

//4- custom hook
import { useFetch } from "./hooks/useFetch";

function App() {
  const [products, setProducts] = useState([]); // salvar os dados do banco de dados

  // 4- custom hook e 5 - refatorando o POST
  const { data: items, httpConfig, loading, error } = useFetch(url); // importando o retorno dos valores do hook

  // 1- Resgatando os dados do banco de dados
  const [name, setName] = useState(""); //nome do produto
  const [price, setPrice] = useState(""); //preço do produto

  //7- loading com prevenção de ações repetidas do usuario
  const isFormEmpty = !name.trim() || !price.trim(); 

  // 2- adicionando dados(produtos)
  const handleSubmit = async (event) => {
    event.preventDefault();

    //criando o objeto de um novo produto que vai ser enviado para o banco de dados
    const newProduct = {
      name: name,
      price: price,
    };

    //5- refatorando o POST
    httpConfig(newProduct, "POST");

    setName("");
    setPrice("");
  };

  //7- deletando um produto
  const handleDelete = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="app">
      <h1>Lista de Produtos</h1>

      {/* 6- loading de dados */}
      {loading && <p>Carregando produtos...</p>}
      {error && <p>Erro: {error}</p>} {/* Exibir mensagem de erro */}

      {!loading && !error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price} Reais - <button 
                onClick={() => handleDelete(product.id)}>Excluir</button>
              </li>
            ))}
        </ul>
      )}

      {/*2- adicionando dados(produtos)  */}
      <div className="adicionando_produto_container">
        <form onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              type="name"
              placeholder="nome "
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>

          <label>
            Preço
            <input
              type="number"
              placeholder="preço "
              name="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>
          {/* 7- loading com prevenção de ações repetidas do usuario */}
          {loading && <button  disabled>Aguarde</button>  }
          {!loading && <button disabled={isFormEmpty}>Adicionar Produto</button>} 
        </form>
      </div>
    </div>
  );
}

export default App;
