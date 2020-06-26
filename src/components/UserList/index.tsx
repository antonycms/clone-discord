import React from 'react';

import { Container, Label } from './styles';

import UserRow from '../UserRow';

const UserList: React.FC = () => {
  return (
    <Container>
      <Label qtdUsers={5}>disponivel</Label>
      <UserRow bot={false} userName={'User1'} />
      <UserRow bot={false} userName={'User2'} />
      <UserRow bot={true} userName={'User3'} />
      <UserRow bot={false} userName={'User4'} />
      <UserRow bot={false} userName={'User5'} />

      <Label qtdUsers={5}>offline</Label>
      <UserRow bot={false} userName={'User6'} />
      <UserRow bot={false} userName={'User7'} />
      <UserRow bot={false} userName={'User8'} />
      <UserRow bot={false} userName={'User9'} />
      <UserRow bot={false} userName={'User10'} />
    </Container>
  );
};

export default UserList;
