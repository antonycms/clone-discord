import React from 'react';

import { Container, Separator } from './styles';
import ServerBtn from '../ServerBtn';
import avatar from '../../assets/user_avatar.jpeg';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerBtn hasNotification={3} image={avatar} isActive />

      <Separator />

      <ServerBtn />
      <ServerBtn />
      <ServerBtn />
      <ServerBtn />
      <ServerBtn />
      <ServerBtn />
      <ServerBtn />
      <ServerBtn />
      <ServerBtn />
      <ServerBtn />
      <ServerBtn />
      <ServerBtn />
    </Container>
  );
};

export default ServerList;
