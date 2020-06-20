import React from 'react';

import { Container } from './styles';

export interface IServerBtn {
  isActive?: boolean;
  hasNotification?: number;
  image?: string;
}

const ServerBtn: React.FC<IServerBtn> = ({ hasNotification, image, isActive }) => {
  return (
    <Container hasNotification={hasNotification} isActive={isActive}>
      {image && <img src={image} alt="server button" />}
    </Container>
  );
};

export default ServerBtn;
