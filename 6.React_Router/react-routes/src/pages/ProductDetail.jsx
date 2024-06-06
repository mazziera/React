//
import { useParams } from "react-router-dom";

//hook
import { useFetch } from "../hooks/useFetch";

const ProductDetail = () => {
  //4 - Rota Dinâmica
  const { id } = useParams(); // valor que faz referência ao id do produto do link "/products/:id", no app.jsx
  const url = "http://localhost:3000/products/" + id;

  //5 - Carregamento dinamico de um dado individual
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
        </div>
      )}
    </>
  );
};

export default ProductDetail;
