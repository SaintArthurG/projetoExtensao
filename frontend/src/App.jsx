
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FoodChoice from './components/FoodChoice';
import OrderSummary from './components/OrderSummary';
import axios from 'axios';
import DivLogin from './components/CozinhaLogin';


const App = () => {
  const [arroz, setArroz] = useState(null);
  const [feijao, setFeijao] = useState(null);
  const [nome, setNome] = useState([]);
  const [proteinas, setProteinas] = useState([]);

  const handleArrozChange = (choice) => setArroz(choice);

  const handleFeijaoChange = (choice) => setFeijao(choice);

  const handleProteinaChange = (choice) => {
    if (proteinas.includes(choice)) {
      setProteinas(proteinas.filter(p => p !== choice));
    } else {
      setProteinas([...proteinas, choice]);
    }
  };

  const handleNomeChange = (choice) => {
    if (nome.includes(choice)) {
      setNome(nome.filter(p => p !== choice));
    } else {
      setNome([...nome, choice]);
    }
  };

  const handleSubmit = async () => {
    const pedido = {
      arroz,
      feijao,
      nome,
      proteinas,
    };

    try {
      const response = await axios.post('http://localhost:3001/api/pedidos', pedido);
      console.log('Pedido enviado com sucesso:', response.data);
      alert('Pedido enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      alert('Erro ao enviar o pedido');
    }

    const pedidoJSON = JSON.stringify(pedido);
    console.log("Pedido em JSON:", pedidoJSON);
  };


  return (

    <>
      <Header />
      <div>
        <h1>Faça o seu Pedido</h1>
        <FoodChoice
          title="Escolha o tipo de arroz"
          options={['Arroz Branco', 'Arroz com pequi', 'Arroz integral']}
          selected={arroz}
          onChange={handleArrozChange}
        />

        <FoodChoice
          title={"Escolha o tipo de feijão"}
          options={['Feijão Tropeiro', 'Feijão Preto com caldo']}
          selected={feijao}
          onChange={handleFeijaoChange}
        />

        <FoodChoice
          title={"Escolha as nome"}
          options={['Batata Doce', 'Batata Palha', 'Batata Frita', 'Purê']}
          selected={nome}
          onChange={handleNomeChange}
          multiSelect
        />

        <FoodChoice
          title="Escolha as proteínas"
          options={['Frango', 'Carne', 'Linguiça']}
          selected={proteinas}
          onChange={handleProteinaChange}
          multiSelect
        />

        <OrderSummary arroz={arroz} feijao={feijao} nome={nome} proteinas={proteinas} />

        <button onClick={handleSubmit}>Enviar Pedido</button>
      </div>
      <Footer />
    </>
  )
}

export default App
