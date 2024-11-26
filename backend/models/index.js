const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

// Configuração do Sequelize
const sequelize = new Sequelize('pedido', 'root', 'pedro', {
  host: 'localhost',
  dialect: 'mysql',
});

// Definição do modelo Pedido
const Pedido = sequelize.define('Pedido', {
  arroz: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  feijao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  proteinas: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

// Sincronizar o banco de dados
sequelize.sync()
  .then(() => console.log('Banco de dados conectado e modelo sincronizado'))
  .catch(err => console.log('Erro ao conectar ao banco:', err));

// Configuração do servidor Express
const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Permitir CORS de todas as origens (para desenvolvimento)
app.use(bodyParser.json()); // Parsear JSON do corpo da requisição

// Rota para criar um novo pedido
app.post('/api/pedidos', async (req, res) => {
  try {
    const { arroz, feijao, nome, proteinas } = req.body;
    const novoPedido = await Pedido.create({ arroz, feijao, nome, proteinas });
    res.status(201).json(novoPedido); // Retorna o pedido criado com status 201
  } catch (error) {
    console.error('Erro ao criar o pedido:', error);
    res.status(500).json({ error: 'Erro ao criar o pedido' });
  }
});

// Rota para listar todos os pedidos
app.get('/api/pedidos', async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    res.status(500).json({ error: 'Erro ao buscar pedidos' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = { sequelize, Pedido };
