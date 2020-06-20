import React from 'react';

import { Container } from './styles';

import ServerList from '../../components/ServerList';
import ServerName from '../../components/ServerName';
import ChannelInfo from '../../components/ChannelInfo';

const Home: React.FC = () => {
  return (
    <Container>
      <ServerList />
      <ServerName title={'Nome do Servidor'} />
      <ChannelInfo title={'Nome do Servidor'} />
    </Container>
  );
};

export default Home;
