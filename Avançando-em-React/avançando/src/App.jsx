//style file
import "./App.css";

//imagens
import Cidade from "./assets/city.jpg";


function App() {

  return (
    <>
      <div>
        {/* importando imagem pela pasta public */}
        <h4>importando imagem pela pasta public</h4>
        <img src="../public/img1.jpg" alt="Paisagem" />
        <br />
        {/* importando imagem pela pasta assets */}
        <h4>importando imagem pela pasta assets</h4>
        <img src={Cidade} alt="Cidade noturna" />
     
      </div>
    </>
  );
}

export default App;
