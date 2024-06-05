# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


instalando versão funcional/sem bugs do json server

    no terminal: npm install json-server@0.17.0

rodando o json server:

    acessar o arquivo package.json
    em scripts, adicionar: "server": "json-server --watch data/db.json --port 3000"
    no terminal: npm run server


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
