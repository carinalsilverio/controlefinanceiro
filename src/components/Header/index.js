import React from 'react';
import * as C from './styles'; //C para carregar todos os componentes que desejar

const Header = () => {
  return (
    <C.Container>
      <C.Header>
        <C.Title>Controle Financeiro</C.Title>
      </C.Header>
    </C.Container>
  );
};

export default Header;
