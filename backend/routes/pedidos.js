const express = require('express');
const { Pedido } = require('../models');
const router = express.Router();

<<<<<<< HEAD
=======
// Rota para criar um pedido
>>>>>>> aceea83 (Update 1)
router.post('/pedidos', async (req, res) => {
  try {
    const { arroz, feijao, nome, proteinas } = req.body;

<<<<<<< HEAD
=======
    // Criar um novo pedido no banco
>>>>>>> aceea83 (Update 1)
    const novoPedido = await Pedido.create({
      arroz,
      feijao,
      nome,
      proteinas,
    });

    res.status(201).json({ message: 'Pedido criado com sucesso', pedido: novoPedido });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar pedido' });
  }
});

module.exports = router;
