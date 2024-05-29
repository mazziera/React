//hooks
import { useState, useEffect } from "react";

//styles
import "./App.css";

// url => db.json simula um banco de dados
const url = "http://localhost:3000/products";

//4 custom hook
import { useFetch } from "./hooks/useFetch";

function App() {

  const [products, setProducts] = useState([]); // salvar os dados do banco de dados

  // 4- custom hook e 5 - refatorando o POST
  const {data: items, httpConfig}= useFetch(url)// importando o retorno dos valores do hook


  // 1- Resgatando os dados do banco de dados
  const [name, setName] = useState(""); //nome do produto
  const [price, setPrice] = useState(""); //preço do produto

  //fazendo a requisição no banco de dados e buscando os dados dos produtos
  // useEffect(() => {
  //   async function getData() {
  //     const response = await fetch("http://localhost:3000/products")

  //     const returnData = await response.json()

  //     setProducts(returnData)
  //   }

  //   getData()
  // }, []);

  // 2- adicionando dados(produtos) 
  const handleSubmit = async (event) => {
    event.preventDefault();

    //criando o objeto de um novo produto que vai ser enviado para o banco de dados
    const newProduct = {
      name: name,
      price: price,
    };
    
    // Configurando a requisição para o metodo POST
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" }, /*tipo do conteudo da manipulaçao de dados(json) */
    //   body: JSON.stringify(newProduct) /*transformando o objeto newProduct em um json */
    // });

    // console.log(newProduct);

    // // 3- Carregamento de dados dinâmicos
    // const addedProduct = await response.json() // transforma novamente em um objeto JS.

    // setProducts((previousProducts) => [...previousProducts, addedProduct]) //O operador spread, copia todos os produtos do estado anterior para o novo estado, atualizando o componente de forma instantanea

    //5- refatorando o POST
    httpConfig(newProduct, "POST")

    setName("")
    setPrice("")

  };

  
  return (
    <div className="app">
      <h1>Lista de Produtos</h1>

      <ul>
        {items && items.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>

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

          <button>Adicionar Produto</button>
        </form>
      </div>
    </div>
  );
}

export default App;
