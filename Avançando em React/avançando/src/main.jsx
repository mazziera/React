//libs
import React from 'react'
import ReactDOM from 'react-dom/client'

//components
import App from './App.jsx'
import GerenciandoDados from './components/GerenciandoDadosComReactHook.jsx'
import ListRender from './components/Lists.jsx'
import Condicionais from './components/Condicionais.jsx'

//files
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <GerenciandoDados /> */}
    {/* <ListRender /> */}
    <Condicionais />
  </React.StrictMode>,
)
