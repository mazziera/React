import { useState } from "react";

const Condicionais = () => {
  const [x] = useState(true); /* se X for falso, não renderizará */

  const [name, setName] = useState("Raphael");

  return (
    <>
      <h1>O Elemento paragrafo será renderizado?</h1>
      {x && <p>O x é true, portanto sim</p>}
      {/* se X for falso, não renderizará */}

      <div>
        <h1>Condicional Ternaria</h1>
        <h3>O nome é João?</h3>

        {name === "João" ? <p>O nome é João</p> : <p>O nome não é João!</p>}

        <button onClick={() => setName("João")}>Verificar nome</button>
      </div>
    </>
  );
};

export default Condicionais;
