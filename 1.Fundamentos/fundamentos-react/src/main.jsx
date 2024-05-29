// Libs
import React from 'react'
import ReactDOM from 'react-dom/client'

//styles
import './index.css'

//Components
import App from './App.jsx';
import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import Events from './components/Events.jsx';
import Challenge from './components/Challenge.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <FirstComponent />
    <TemplateExpressions />
    <Events />
    <Challenge />
  </React.StrictMode>,
)
