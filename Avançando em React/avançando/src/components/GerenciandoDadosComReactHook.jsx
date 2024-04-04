import { useState } from "react";

const GerenciandoDados = () => {
  let numero = 10; // variavel normal

  const [valor, setValor] = useState(20); // React Hook

  return (
    <>
      <p>Valor: {numero}</p>
      <button onClick={() => (numero = 15)}>Mudar Valor variavel</button>
      {/* O problema com variáveis normais é que quando você as altera, isso não dispara uma nova renderização do componente. Isso significa que, mesmo que você mude o valor da variável numero, o componente não vai atualizar na tela para mostrar essa mudança. */}

      <p>Valor: {valor}</p>
      <button onClick={() => setValor(25)}>Mudar Valor com useState </button>
      {/* useState(25) */}
      
    </>
  );
};

export default GerenciandoDados;
