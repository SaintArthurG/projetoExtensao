const express = require('express');
const { Pedido } = require('../models');
const router = express.Router();

router.post('/pedidos', async (req, res) => {
  try {
    const { arroz, feijao, nome, proteinas } = req.body;

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
