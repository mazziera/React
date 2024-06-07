//utilizado para acessar os parâmetros da URL na qual o componente está renderizado. Isso é especialmente útil quando precisa extrair informações específicas diretamente da URL
import { Link, useParams } from "react-router-dom";

//hook
import { useFetch } from "../hooks/useFetch";

const ProductDetail = () => {
  //4 - Rota Dinâmica
  const { id } = useParams(); // valor que faz referência ao id do produto da rota "/products/:id", no app.jsx

  //5 - Carregamento dinamico de um dado individual
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      {/* 5 - Carregamento dinamico de um dado individual */}
      <p>Id do Produto: {id}</p>

      {error && <p>Ocorreu um erro. Tente novamente mais tarde</p>}

      {loading && <p>Carregando produto...</p>}

      {product && (
        <div>
          <h3>{product.name}</h3>
          <p>R${product.price} reais</p>

          {/* 6 - Nested Routes */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
