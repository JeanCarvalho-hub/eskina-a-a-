import React from 'react';
//componentes
import Header from '../../components/header';
import Menu from '../../components/menu';
import Destaques from '../../components/destaque';
import ProdutosDestaques from '../../components/produtosDestaques';
import AllItens from '../../components/itens';
import Tigela from '../../components/tigela';
import Abas from '../../components/menu-aba';

function Inicio() {
  return (
    <>
      <Abas />
      <header className="App-header">
        <Header />
      </header>
      <div className='div-destaque'>
        <Destaques />
      </div>
      <section className='section-products'>
        <Menu />
        <ProdutosDestaques />
        <AllItens />
        <Tigela />
        copos
      </section>
    </>
  );
}

export default Inicio;
