import React from 'react';

import { Container, AddCategoryIcon, Category } from './styles';
import ChanellRow from '../ChanellRow';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChanellRow title={'chat-livre'} />
      <ChanellRow title={'chat-livre'} />
      <ChanellRow title={'chat-livre'} />
      <ChanellRow title={'chat-livre'} />
    </Container>
  );
};

export default ChannelList;
