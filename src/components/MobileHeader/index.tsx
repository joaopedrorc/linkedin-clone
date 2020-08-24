import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles'; 

const MobileHeader = () => {
  return (
    <Container>
      <ProfileCircle src="http://github.com/jotape02.png" />
      <SearchInput placeholder="Pesquisar"/>
      <MessageIcon />
    </Container>
  );
}

export default MobileHeader;