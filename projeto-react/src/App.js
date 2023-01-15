import React from 'react';
import { useState } from 'react';
import Header from './componentes/Header/Header';
import Main from './componentes/Main/Main';
import Carrinho from './componentes/Carrinho/Carrinho';
import Footer from './componentes/Footer/Footer';
import data from './data';

function App(props) {
  const { produtos } = data;
  const [itens, setItens] = useState([]);
  const [listaProdutos, setListaProdutos] = useState(produtos);

  const onAdd = (produto) => {
    const confere = itens.find(x => x.id === produto.id);
    if(confere) {
      setItens(itens.map(x => x.id === produto.id ? {...confere, quantidade: confere.quantidade +1} : x
        ));
    } else{
      setItens([...itens, {...produto, quantidade: 1}]);
    }
  };

  const onRemove = (produto) => {
    const confere = itens.find((x) => x.id === produto.id);
    if(confere.quantidade === 1) {
      setItens(itens.filter((x) => x.id !== produto.id));
    } else{
      setItens(itens.map(x => x.id === produto.id ? {...confere, quantidade: confere.quantidade -1} : x
        ));
    }
  }

  console.log(listaProdutos);
  return (
    <div className="App">
      <Header contaItens={itens.length}></Header>
      <div className='row'>
      <Main itens={listaProdutos} setItens={setListaProdutos} onAdd={onAdd} produtos={listaProdutos}></Main>
      <Carrinho onAdd={onAdd} onRemove={onRemove} itens={itens}></Carrinho>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App;