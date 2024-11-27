import './App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  const [carrinho, setCarrinho] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);

  const [opcoesMarmita, setOpcoesMarmita] = useState({
    arroz: 'Arroz branco',
    feijao: 'Feijão preto',
    carne: 'Frango grelhado',
    salada: 'Alface e tomate',
    talher: 'Talher plástico'
  });

  const monteSuaMarmita = [
    { id: 1, nome: 'Marmita De Carnes', descricao: 'Monte sua marmita com as opções disponíveis.', preco: 20, imagem: 'src/img/MM-carne.jpg' },
    { id: 2, nome: 'Marmita Vegetariana', descricao: 'Monte sua marmita com as opções disponíveis.', preco: 20, imagem: 'src/img/MM-vergetariana.jpg' }
  ];

  const marmitasEspeciais = [
    { id: 1, nome: 'Marmita de Carne Seca', descricao: 'Carne seca desfiada com arroz branco, feijão, Alface e Tomate', preco: 22, imagem: 'src/img/ME-carneSeca.jpg' },
    { id: 2, nome: 'Marmita de Peixe', descricao: 'Peixe grelhado com arroz de coco e salada.', preco: 27, imagem: 'src/img/ME-Peixe.jpg' },
    { id: 3, nome: 'Marmita de Frango ao Curry', descricao: 'Frango ao curry com arroz e legumes', preco: 28, imagem: 'src/img/ME-Curry.jpg' }
  ];

  const bebidasOpcoes = [
    { id: 1, nome: 'Coca-Cola', preco: 5, imagem: 'src/img/bebidas1.jpg' },
    { id: 2, nome: 'Guaraná', preco: 4.5, imagem: 'src/img/bebidas2.jpg' },
    { id: 3, nome: 'Água', preco: 3, imagem: 'src/img/bebidas3.jpg' },
    { id: 4, nome: 'Suco De Laranja', preco: 4, imagem: 'src/img/bebidas4.jpg' },
    { id: 5, nome: 'Suco De Uva', preco: 4, imagem: 'src/img/bebidas5.jpg' }
  ];

  const sobremesasOpcoes = [
    { id: 1, nome: 'Pudim', preco: 6.5, imagem: 'src/img/sobremesas1.jpg' },
    { id: 2, nome: 'Brigadeiro', preco: 2.5, imagem: 'src/img/sobremesas2.jpg' },
    { id: 3, nome: 'Bolo de chocolate', preco: 3.5, imagem: 'src/img/sobremesas3.jpg' }
  ];

  const adicionarAoCarrinho = (item) => {
    setCarrinho([...carrinho, { ...item, opcoes: opcoesMarmita }]);
    setMostrarModal(false);
  };

  const removerDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/pedidos', { carrinho });
      console.log('Pedido enviado com sucesso:', response.data);
      alert('Pedido enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar pedido:', error);
      alert('Erro ao enviar o pedido');
    }
  };

  const atualizarOpcoesMarmita = (opcao, valor) => {
    setOpcoesMarmita((prevState) => ({
      ...prevState,
      [opcao]: valor
    }));
  };

  const abrirModal = (item) => {
    setItemSelecionado(item);
    setMostrarModal(true);
  };

  const fecharModal = () => {
    setMostrarModal(false);
    setItemSelecionado(null);
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <section id="monte-marmita">
          <h2>Monte sua Marmita</h2>
          <div className="card-container">
            {monteSuaMarmita.map((item) => (
              <div key={item.id} className="card" onClick={() => abrirModal(item)}>
                <div className="titulo">{item.nome}</div>
                <p className="descricao">{item.descricao}</p>
                <img src={item.imagem} alt={item.nome} />
                <div className="info">
                  <p className="preco">R$ {item.preco.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

<section id="marmitas-especiais">
  <h2>Marmitas Especiais</h2>
  <div className="card-container">
    {marmitasEspeciais.map((item) => (
      <div key={item.id} className="card">
        <div className="titulo">{item.nome}</div>
        <p className="descricao">{item.descricao}</p>
        <img src={item.imagem} alt={item.nome} />
        <div className="info">
          <p className="preco">R$ {item.preco.toFixed(2)}</p>
          <button className="adicionar" onClick={() => adicionarAoCarrinho(item)}>
            <FontAwesomeIcon icon={faCartPlus} /> Adicionar ao Carrinho
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

<section id="bebidas">
  <h2>Bebidas</h2>
  <div className="card-container">
    {bebidasOpcoes.map((item) => (
      <div key={item.id} className="card">
        <div className="titulo">{item.nome}</div>
        <img src={item.imagem} alt={item.nome} />
        <div className="info">
          <p className="preco">R$ {item.preco.toFixed(2)}</p>
          <button className="adicionar" onClick={() => adicionarAoCarrinho(item)}>
            <FontAwesomeIcon icon={faCartPlus} /> Adicionar ao Carrinho
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

<section id="sobremesas">
  <h2>Sobremesas</h2>
  <div className="card-container">
    {sobremesasOpcoes.map((item) => (
      <div key={item.id} className="card">
        <div className="titulo">{item.nome}</div>
        <img src={item.imagem} alt={item.nome} />
        <div className="info">
          <p className="preco">R$ {item.preco.toFixed(2)}</p>
          <button className="adicionar" onClick={() => adicionarAoCarrinho(item)}>
            <FontAwesomeIcon icon={faCartPlus} /> Adicionar ao Carrinho
          </button>
        </div>
      </div>
    ))}
  </div>
</section>


        <section>
          <h2>Seu Carrinho</h2>
          {carrinho.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <ul>
              {carrinho.map((item, index) => (
                <li key={index}>
                  {item.nome} - R$ {item.preco.toFixed(2)}
                  <button className="remover" onClick={() => removerDoCarrinho(index)}>
                    <FontAwesomeIcon icon={faTrash} /> Remover
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        <button className="confirmar" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faCheck} /> Finalizar Pedido
        </button>
      </div>

      {mostrarModal && itemSelecionado && (
        <div className={`modal ${mostrarModal ? 'show' : ''}`}>
          <div className="modal-content">
            <h3>{itemSelecionado.nome}</h3>
            <p>{itemSelecionado.descricao}</p>
            <p className="preco">R$ {itemSelecionado.preco.toFixed(2)}</p>

            <div>
              <h4>Escolha seu arroz:</h4>
              <div>
                <input
                  type="radio"
                  id="arrozBranco"
                  name="arroz"
                  value="Arroz branco"
                  checked={opcoesMarmita.arroz === 'Arroz branco'}
                  onChange={() => atualizarOpcoesMarmita('arroz', 'Arroz branco')}
                />
                <label htmlFor="arrozBranco">Arroz branco</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="arrozIntegral"
                  name="arroz"
                  value="Arroz integral"
                  checked={opcoesMarmita.arroz === 'Arroz integral'}
                  onChange={() => atualizarOpcoesMarmita('arroz', 'Arroz integral')}
                />
                <label htmlFor="arrozIntegral">Arroz integral</label>
              </div>
            </div>

            <div>
              <h4>Escolha sua carne:</h4>
              <div>
                <input
                  type="radio"
                  id="frangoGrelhado"
                  name="carne"
                  value="Frango grelhado"
                  checked={opcoesMarmita.carne === 'Frango grelhado'}
                  onChange={() => atualizarOpcoesMarmita('carne', 'Frango grelhado')}
                />
                <label htmlFor="frangoGrelhado">Frango grelhado</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="carneDeSol"
                  name="carne"
                  value="Carne de sol"
                  checked={opcoesMarmita.carne === 'Carne de sol'}
                  onChange={() => atualizarOpcoesMarmita('carne', 'Carne de sol')}
                />
                <label htmlFor="carneDeSol">Carne de sol</label>
              </div>
            </div>

            <div>
              <h4>Escolha seu feijão:</h4>
              <div>
                <input
                  type="radio"
                  id="feijaoPreto"
                  name="feijao"
                  value="Feijão preto"
                  checked={opcoesMarmita.feijao === 'Feijão preto'}
                  onChange={() => atualizarOpcoesMarmita('feijao', 'Feijão preto')}
                />
                <label htmlFor="feijaoPreto">Feijão preto</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="feijaoCarioca"
                  name="feijao"
                  value="Feijão carioca"
                  checked={opcoesMarmita.feijao === 'Feijão carioca'}
                  onChange={() => atualizarOpcoesMarmita('feijao', 'Feijão carioca')}
                />
                <label htmlFor="feijaoCarioca">Feijão carioca</label>
              </div>
            </div>

            <div>
              <h4>Escolha sua salada:</h4>
              <div>
                <input
                  type="radio"
                  id="saladaAlfaceTomate"
                  name="salada"
                  value="Alface e tomate"
                  checked={opcoesMarmita.salada === 'Alface e tomate'}
                  onChange={() => atualizarOpcoesMarmita('salada', 'Alface e tomate')}
                />
                <label htmlFor="saladaAlfaceTomate">Alface e tomate</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="saladaCouve"
                  name="salada"
                  value="Couve e cenoura"
                  checked={opcoesMarmita.salada === 'Couve e cenoura'}
                  onChange={() => atualizarOpcoesMarmita('salada', 'Couve e cenoura')}
                />
                <label htmlFor="saladaCouve">Couve e cenoura</label>
              </div>
            </div>

            <div>
              <h4>Escolha seu talher:</h4>
              <div>
                <input
                  type="radio"
                  id="talherPlastico"
                  name="talher"
                  value="Talher plástico"
                  checked={opcoesMarmita.talher === 'Talher plástico'}
                  onChange={() => atualizarOpcoesMarmita('talher', 'Talher plástico')}
                />
                <label htmlFor="talherPlastico">Talher plástico</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="talherMetal"
                  name="talher"
                  value="Talher de metal"
                  checked={opcoesMarmita.talher === 'Talher de metal'}
                  onChange={() => atualizarOpcoesMarmita('talher', 'Talher de metal')}
                />
                <label htmlFor="talherMetal">Talher de metal</label>
              </div>
            </div>

            <button className="adicionar" onClick={() => adicionarAoCarrinho(itemSelecionado)}>
              <FontAwesomeIcon icon={faCartPlus} /> Adicionar ao Carrinho
            </button>
            <button className="fechar" onClick={fecharModal}>
              Fechar
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default App;
