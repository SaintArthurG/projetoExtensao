import React from 'react';

const OrderSummary = ({ arroz, feijao, nome, proteinas }) => {
  return (
    <div>
      <h3>Resumo do Pedido</h3>
      <p>Arroz escolhido: {arroz}</p>
      <p>Feijão escolhido: {feijao}</p>
      <p>Nome escolhidas: {nome.join(', ')}</p>
      <p>Proteinas escolhidas: {proteinas.join(', ')}</p>
    </div>
  );
};

export default OrderSummary;
