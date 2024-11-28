const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes, where } = require('sequelize');

const sequelize = new Sequelize('pedido', 'root', '244554', {
  host: 'localhost',
  dialect: 'mysql',
});

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
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

sequelize.sync()
  .then(() => console.log('Banco de dados conectado e modelo sincronizado'))
  .catch(err => console.log('Erro ao conectar ao banco:', err));

const app = express();
const PORT = 3001;

app.use(cors()); //
app.use(bodyParser.json()); // 

app.post('/api/pedidos', async (req, res) => {
  try {
    const { arroz, feijao, nome, proteinas } = req.body;
    const novoPedido = await Pedido.create({ arroz, feijao, nome, proteinas });
    res.status(201).json(novoPedido); // 
  } catch (error) {
    console.error('Erro ao criar o pedido:', error);
    res.status(500).json({ error: 'Erro ao criar o pedido' });
  }
});

app.get('/api/pedidos', async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
  } catch (error) {
    console.error('Erro ao buscar pedidos:', error);
    res.status(500).json({ error: 'Erro ao buscar pedidos' });
  }
});

app.post('/login', async (req, res) => {
  const {username, password} = req.body;

  try{
    const user = await Pedido.findOne({where:{username}});

    if(!user) {
      return res.status(404).json({error: 'Usuario nao encontrado'});
    }

    if(user.password !== password){
      return res.status(401).json({error: 'Senha inválida'});
    }

    res.json({message: 'Login bem-sucedido!'});
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Erro interno do servidor'});
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = { sequelize, Pedido };
