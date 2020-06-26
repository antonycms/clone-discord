import React from 'react';

import { Container } from './styles';

import ServerList from '../../components/ServerList';
import ServerName from '../../components/ServerName';
import ChannelInfo from '../../components/ChannelInfo';
import ChannelList from '../../components/ChannelList';
import UserInfo from '../../components/UserInfo';
import UserList from '../../components/UserList';
import ChannelBody from '../../components/ChannelBody';

const Home: React.FC = () => {
  return (
    <Container>
      <ServerList />
      <ServerName title={'Servidor do Tony'} />
      <ChannelInfo title={'chat-livre'} />
      <ChannelList />
      <UserInfo userName={'Antony Santos'} userCode={'9461'} />
      <UserList />
      <ChannelBody />
    </Container>
  );
};

export default Home;
