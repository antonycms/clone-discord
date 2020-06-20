import React from 'react';

import { Container } from './styles';

export interface IServerBtn {
  isActive?: boolean;
  hasNotification?: number;
  hasMentioned?: boolean;
  image?: string;
}

const ServerBtn: React.FC<IServerBtn> = ({ hasNotification, image, isActive, hasMentioned }) => {
  return (
    <Container hasMentioned={hasMentioned} hasNotification={hasNotification} isActive={isActive}>
      {image && <img src={image} alt="server button" />}
    </Container>
  );
};

export default ServerBtn;
