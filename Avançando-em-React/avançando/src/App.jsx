//style file
import "./App.css";


//imagens
import Cidade from "./assets/city.jpg";

function App() {

  return (
    <>
      <div>
        {/* importando imagem pela pasta public */}
        <img src="../public/img1.jpg" alt="Paisagem" />
        <br />
        {/* importando imagem pela pasta assets */}
        <img src={Cidade} alt="Cidade noturna" />
      </div>
    </>
  );
}

export default App;
