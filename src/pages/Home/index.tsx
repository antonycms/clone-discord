import React from 'react';

import { Container } from './styles';

import ServerList from '../../components/ServerList';
import ServerName from '../../components/ServerName';
import ChannelInfo from '../../components/ChannelInfo';
import ChannelList from '../../components/ChannelList';
import UserInfo from '../../components/UserInfo';

const Home: React.FC = () => {
  return (
    <Container>
      <ServerList />
      <ServerName title={'Nome do Servidor'} />
      <ChannelInfo title={'Nome do Servidor'} />
      <ChannelList />
      <UserInfo userName={'Antony Santos'} userCode={'9461'} />
    </Container>
  );
};

export default Home;
