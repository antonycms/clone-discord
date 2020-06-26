import React from 'react';

import { Container, AddCategoryIcon, Category } from './styles';
import ChannelRow from '../ChannelRow';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelRow title={'chat-livre'} />
      <ChannelRow active title={'chat-livre'} />
      <ChannelRow title={'chat-livre'} />
      <ChannelRow title={'chat-livre'} />
    </Container>
  );
};

export default ChannelList;
