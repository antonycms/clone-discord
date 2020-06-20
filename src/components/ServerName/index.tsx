import React from 'react';

import { Container } from './styles';
import arrowDown from '../../assets/arrow-down.svg';

interface IServerName {
  title: string;
}

const ServerName: React.FC<IServerName> = ({ title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <img src={arrowDown} alt="menu do servidor" />
    </Container>
  );
};

export default ServerName;
