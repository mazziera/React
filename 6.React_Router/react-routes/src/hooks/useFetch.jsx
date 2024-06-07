import { useState, useEffect } from "react";

// 4- custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null); // dados recebidos do banco de dados

  //5- refatorando o POST
  const [config, setConfig] = useState(null); // configura o metodo e cabeçalho do POST
  const [method, setMethod] = useState(null); // seta o metodo a ser utilizado(POST, GET, UPDATE...)
  const [callFetch, setCallFetch] = useState(false); //traz os dados atualizados do componente

  //6- loading de dados
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Adiciona o estado de erro

  //8- deletando um produto
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true); //6- loading

      //7- tratando erros
      try {
        const response = await fetch(url);
        if (!response.ok) {

          throw new Error("erro ao carregar os dados");
        }
        const returnData = await response.json();
        setData(returnData); // valor da requisição feita no banco de dados
        
      } catch (error) {
        setError(error.message);

      } finally {
        setLoading(false); //6 loading
      }
    };

    getData();
  }, [url, callFetch]);

  //5- refatorando o POST
  useEffect(() => {
    const httpRequest = async () => {
      if (!config || !method) return; // Verifica se config e method não são nulos

      let fetchOptions = [url, config];
      
      if (method === "DELETE") {
        fetchOptions = [`${url}/${itemId}`, config];
      }

      try {
        const response = await fetch(...fetchOptions);
        if (!response.ok) {
          throw new Error("Request failed");
        }
        const returnData = await response.json();

        setCallFetch((prev) => !prev); // Toggle para atualizar os dados
      } catch (error) {
        setError(error.message);
      }
    };

    httpRequest();
  }, [config, method, url, itemId]);

  // mudando a configuração do metodo
  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else if (method === "DELETE") {
      setConfig({
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      setItemId(data);
    }
    setMethod(method); // alterando o metodo quando enviar a requisição
  };

  return { data, httpConfig, loading, error }; //valor que vai receber no momento que chamar o hook, no App.jsx
};
