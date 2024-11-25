const { Sequelize, DataTypes } = require('sequelize');

// Substitua esses dados com as credenciais do seu banco de dados
const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
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
});

// Sincronizando o modelo com o banco de dados
sequelize.sync()
  .then(() => console.log('Banco de dados conectado e modelo sincronizado'))
  .catch(err => console.log('Erro ao conectar ao banco:', err));

module.exports = { sequelize, Pedido };
