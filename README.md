# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


/meu-projeto
│
├── /backend
│   ├── /config
│   │   └── sequelize.js      # Configuração do Sequelize e conexão com o banco de dados
│   ├── /models
│   │   └── pedido.js         # Definição do modelo do Pedido
│   ├── /routes
│   │   └── pedidos.js        # Rota que vai receber os pedidos e salvá-los no banco
│   ├── /controllers
│   │   └── pedidoController.js # Funções que manipulam a lógica de criação do pedido
│   ├── server.js             # Arquivo principal que configura o servidor Express
│   └── /node_modules         # Dependências do backend
│
├── /frontend
│   ├── /src
│   │   ├── /components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   ├── FoodChoice.js  # Componente para exibir opções de comida
│   │   │   ├── OrderSummary.js # Componente para exibir o resumo do pedido
│   │   ├── App.js
│   │   └── index.js
│   └── /node_modules         # Dependências do frontend
│
└── package.json              # Arquivo de configuração do npm, com as dependências de backend e frontend
