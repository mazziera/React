//libs
import { useState } from "react";

//styles
import "./GerenciandoDados.css"

const GerenciandoDados = () => {
  let numero = 10; // variavel normal

  const [valor, setValor] = useState(20); //State = React Hook

  return (
    <>
    <div className="variavel_normal">
      <p>Valor: {numero}</p>
      <button onClick={() => (numero = 15)}>Mudar Valor variavel normal</button>
      {console.log("O problema com variáveis normais é que quando você as altera, isso não dispara uma nova renderização do componente. Isso significa que, mesmo que você mude o valor da variável numero, o componente não vai atualizar na tela para mostrar essa mudança.")}
    </div>

    <div className="variavel_use_State">
      <p>Valor: {valor}</p>
      <button onClick={() => setValor(45)}>Mudar Valor com useState </button> {/* useState(45) */}
      <button onClick={() => setValor(20)}>Voltar o valor inicial do State</button> {/* useState(20) */}
      
    </div>  
    </>
  );
};

export default GerenciandoDados;
