import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //5 refatorando o POST
  const [config, setConfig] = useState(null); // configura o metodo e cabeçalho do POST
  const [method, setMethod] = useState(null); // seta o metodo a ser utilizado(POST, GET, UPDATE...)
  const [callFetch, setCallFetch] = useState(false); //traz os dados atualizados do componente

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const returnData = await response.json();

      setData(returnData); // valor da requisição feita no banco de dados
    };

    getData();
  }, [url, callFetch]);

  // mudando a configuração do metodo
  const httpConfig = (data, method) => {
    if(method === "POST") {
       setConfig({
        method,
        headers: { "Content-Type": "application/json" }, /*tipo do conteudo da manipulaçao de dados(json) */
        body: JSON.stringify(data) /*transformando o state data em um json */
       })

       setMethod(method) // alterando o metodo quando enviar a requisição
    }
  }

  //5 refatorando o POST
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        const getOptions = [url, config]; // obtém de forma dinamica uma url e a configuração do metodo

        const response = await fetch(...getOptions);
        const returnData = await response.json();

        setCallFetch(returnData);
      }
    }

    httpRequest()
  }, [config, method, url]);

  return { data, httpConfig }; //valor que vai receber no momento que chamar o hook, no App.js
};
