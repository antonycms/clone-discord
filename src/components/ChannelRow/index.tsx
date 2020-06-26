import React from 'react';

import { Container, ItemsContainer, Title, HashtagIcon, InviteIcon, SettingsIcon } from './styles';

interface IChannelRow {
  title: string;
  active?: boolean;
}

const ChannelRow: React.FC<IChannelRow> = ({ title, active }) => {
  return (
    <Container className={active ? 'active' : ''}>
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

export default ChannelRow;
