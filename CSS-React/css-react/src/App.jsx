//files
import './App.css'

//components
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {

  const titleDinamic = true

  return (
    <>
    <h1>CSS NO REACT</h1>
    <h2>CSS Global- nota-se que a cor deste titulo está vazando para o titulo do componente abaixo</h2>

    {/* css de componente */}
    <MyComponent />
    <p>Este paragrafo é do App.jsx</p>

    {/* css inline */}
    <h2 style={{ color: "yellow" }}>CSS Inline</h2>
    <p style={{color: "green", background: "yellow" }}>este elemento foi estilizado com css inline</p>

    {/* css dinamico com classes */}
    <h2 className='title-css-dinamic'>CSS Dinâmico</h2>
    <h3 className= {titleDinamic  === true ? "redTitle" : "redTitleFalse"}>este subtitulo vai ter classe dinamica</h3>
    {/* pode ser feito assim também: className= {title ? "redTitle" : "redTitleFalse"}*
    as classes estão setadas no arquivo index.css/}

    {/* CSS Modules */}
    <h2 className='title-css-modules'>CSS Modules</h2>
    <Title />
    </>
  )
}

export default App
