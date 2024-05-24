//libs
import { useState } from "react";

//styles
import "./Condicionais.css"

const Condicionais = () => {
  const [x] = useState(true); /* se X for falso, não renderizará */
  /*[x] array desestruturado */

  const [name, setName] = useState("Raphael"); //o nome é João?

  return (
    <>
    <h1 className="titulo"> Renderizando elementos com Condicionais</h1>

      <div className="condicional_simples">
        <h2>Condição simples em React</h2>
        <h2>O Elemento paragrafo será renderizado?</h2>
        {x && <p>O x é true, portanto sim</p>}
        {/* se X for falso, não renderizará */}
      </div>

      <div className="condicional_ternaria">
        <h2>Condicional Ternaria</h2>

        <h3>O nome é João?</h3>
        {name === "João" ? <p>O nome é João</p> : <p>O nome não é João ou nome não foi encontrado!</p>}
        <button onClick={() => setName("João")}>Verificar nome</button>

      </div>
    </>
  );
};

export default Condicionais;
