import React from 'react';

import { Container, InputContainer, Input, BodyContainer, AddIcon } from './styles';
import ChatLine from '../ChatLine';

const ChannelBody: React.FC = () => {
  return (
    <Container>
      <BodyContainer>
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
        <ChatLine date="13/07/2000" userName="AntonyS" message="Hello World" />
      </BodyContainer>

      <InputContainer>
        <AddIcon />
        <Input placeholder="Message" />
      </InputContainer>
    </Container>
  );
};

export default ChannelBody;
