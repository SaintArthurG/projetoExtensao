const Pedido = ({ arroz, proteinas }) => {
    return (
      <div>
        <h3>Resumo do Pedido</h3>
        <p>Arroz escolhido: {arroz}</p>
        <p>Proteínas escolhidas: {proteinas.join(', ')}</p>
      </div>
    );
  };
  
export default Pedido;
