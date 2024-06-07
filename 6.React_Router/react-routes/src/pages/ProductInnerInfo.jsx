//utilizado para acessar os parâmetros da URL na qual o componente está renderizado. Isso é especialmente útil quando precisa extrair informações específicas diretamente da URL
import { useParams } from "react-router-dom";

const ProdutcInnerInfo = () => {
  //4 - Rota Dinâmica
  const { id } = useParams(); // valor que faz referência ao id do produto da rota "/products/:id", no app.jsx

  return (
    <>
    <h2>Informações avançadas do produto: { id} </h2>
    </>
  );
};

export default ProdutcInnerInfo;
