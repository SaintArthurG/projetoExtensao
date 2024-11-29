import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Cozinha.module.css"; // Importando o CSS Module

const Cozinha = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/pedidos")
      .then((response) => setPedidos(response.data))
      .catch((error) => console.error("Erro ao buscar pedidos:", error));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pedidos</h1>
      <ul className={styles.list}>
        {pedidos.map((pedido, index) => (
          <li key={index} className={styles.listItem}>
            <p><strong>Arroz:</strong> {pedido.arroz}</p>
            <p><strong>Feijão:</strong> {pedido.feijao}</p>
            <p><strong>Nome:</strong> {JSON.stringify(pedido.nome)}</p>
            <p><strong>Proteínas:</strong> {JSON.stringify(pedido.proteinas)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cozinha;
