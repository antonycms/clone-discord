import React from 'react';

import { Container } from './styles';

import ServerList from '../../components/ServerList';
import ServerName from '../../components/ServerName';
import ChannelInfo from '../../components/ChannelInfo';
import ChannelList from '../../components/ChannelList';
import UserInterface from '../../components/UserInterface';

const Home: React.FC = () => {
  return (
    <Container>
      <ServerList />
      <ServerName title={'Nome do Servidor'} />
      <ChannelInfo title={'Nome do Servidor'} />
      <ChannelList />
      <UserInterface />
    </Container>
  );
};

export default Home;
