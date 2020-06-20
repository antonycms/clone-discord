import React from 'react';

import { Container, ItemsContainer, Title, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

interface IChannelRow {
  title: string;
}

const ChanellRow: React.FC<IChannelRow> = ({ title }) => {
  return (
    <Container>
      <ItemsContainer>
        <HashtagIcon />
        <Title>{title}</Title>
      </ItemsContainer>

      <ItemsContainer>
        <InviteIcon />
        <SettingsIcon />
      </ItemsContainer>
    </Container>
  );
};

export default ChanellRow;
