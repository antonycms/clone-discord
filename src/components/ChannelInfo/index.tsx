import React from 'react';

import { Container, Separator, Title, Subtitle } from './styles';

interface IChannelInfo {
  title: string;
}

const ChannelInfo: React.FC<IChannelInfo> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Separator />
      <Subtitle>Canal aberto para conversas</Subtitle>
    </Container>
  );
};

export default ChannelInfo;
