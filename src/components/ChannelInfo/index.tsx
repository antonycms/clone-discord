import React from 'react';

import { Container, Separator, HashtagIcon, Title, Subtitle } from './styles';

interface IChannelInfo {
  title: string;
}

const ChannelInfo: React.FC<IChannelInfo> = ({ title }) => {
  return (
    <Container>
      <HashtagIcon />
      <Title>{title}</Title>
      <Separator />
      <Subtitle>Canal aberto para conversas</Subtitle>
    </Container>
  );
};

export default ChannelInfo;
