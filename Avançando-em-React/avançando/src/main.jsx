//libs
import React from "react";
import ReactDOM from "react-dom/client";

//components
import App from "./App.jsx";
import GerenciandoDados from "./components/GerenciandoDadosComReactHook.jsx";
import ListRender from "./components/Lists.jsx";
import Condicionais from "./components/Condicionais.jsx";
import SimpleProps from "./components/SimpleProps.jsx";
import DestructuringProps from "./components/DestructuringProps.jsx";
import Container from "./components/Container.jsx";
import ExecuteFunction from "./components/ExecuteFunction.jsx";
import UserDetails from "./components/UserDetails.jsx";

//files
import "./index.css";
import ArrayTarefa4 from "./components/Tarefa-4-Sessao-3.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <GerenciandoDados /> */}
    {/* <ListRender /> */}
    {/* <Condicionais /> */}
    {/* <SimpleProps userName="Raphael" /> */}
    {/* <DestructuringProps brand= " Volskwagen" model= " gol" km={35000} color=" prata"/> */}

    {/* reaproveitando componentes */}
    {/* <DestructuringProps brand= " Fiat" model= " uno" km={0} color= " vermelho" /> */}
    {/* <DestructuringProps brand= " Chevrolet" model= " camaro" km={80000} color= " amarelo" /> */}

    {/* children props */}
    {/* <Container>
      <p>Este é o conteúdo</p>
    </Container>

    <Container componentValue>
      <h5>Conteudo distinto do componente acima</h5>
    </Container> */}

    {/* passando uma função como props */}
    {/* simulando um componante pai 
      function showMessage() {
        console.log("Função executada numa props");
      } 
     <ExecuteFunction funtionAsProps={showMessage}/> 
    */}

    {/* TAREFA 4 */}
    <ArrayTarefa4>
      <UserDetails />
    </ArrayTarefa4>


  </React.StrictMode>
);
