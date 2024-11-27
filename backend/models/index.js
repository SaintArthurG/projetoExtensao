<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

// Configuração do Sequelize
const sequelize = new Sequelize('pedido', 'root', 'pedro', {
=======
const { Sequelize, DataTypes } = require('sequelize');

// Substitua esses dados com as credenciais do seu banco de dados
const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
>>>>>>> aceea83 (Update 1)
  host: 'localhost',
  dialect: 'mysql',
});

<<<<<<< HEAD
// Definição do modelo Pedido
=======
>>>>>>> aceea83 (Update 1)
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

<<<<<<< HEAD
// Sincronizar o banco de dados
=======
// Sincronizando o modelo com o banco de dados
>>>>>>> aceea83 (Update 1)
sequelize.sync()
  .then(() => console.log('Banco de dados conectado e modelo sincronizado'))
  .catch(err => console.log('Erro ao conectar ao banco:', err));

<<<<<<< HEAD
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

=======
>>>>>>> aceea83 (Update 1)
module.exports = { sequelize, Pedido };
