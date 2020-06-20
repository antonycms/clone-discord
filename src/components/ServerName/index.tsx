import React from 'react';

import { Container, ExpandIcon } from './styles';

interface IServerName {
  title: string;
}

const ServerName: React.FC<IServerName> = ({ title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <ExpandIcon />
    </Container>
  );
};

export default ServerName;
