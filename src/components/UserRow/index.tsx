import React from 'react';

import { Container, Name, Avatar } from './styles';

interface IUserRow {
  userName: string;
  bot: boolean;
}

const UserRow: React.FC<IUserRow> = ({ userName, bot }) => {
  return (
    <Container>
      <Avatar />
      <Name bot={bot}>{userName}</Name>
    </Container>
  );
};

export default UserRow;
