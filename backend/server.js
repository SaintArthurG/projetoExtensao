const express = require('express');
const bodyParser = require('body-parser');
const pedidosRoutes = require('./routes/pedidos');
const { sequelize } = require('./models');

const app = express();


app.use(bodyParser.json()); 

// Rota de pedidos
app.use('/api', pedidosRoutes);

app.listen(3001, async () => {
  console.log('Servidor rodando na porta 3001');
  
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
});
