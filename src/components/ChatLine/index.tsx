import React from 'react';

import { Container, Avatar, ContentContainer, Header, Content } from './styles';

interface IChatLine {
  userName: string;
  message: string;
  date: string | Date;
}

const ChatLine: React.FC<IChatLine> = ({ userName, message, date }) => {
  return (
    <Container>
      <Avatar />

      <ContentContainer>
        <Header>
          <h4>{userName}</h4>
          <span>{date}</span>
        </Header>

        <Content>{message}</Content>
      </ContentContainer>
    </Container>
  );
};

export default ChatLine;
