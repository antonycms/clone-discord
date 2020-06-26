import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CB;

  background-color: #36393f;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

export const BodyContainer = styled.div`
  flex: 1;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #40444b;

  margin: 0 16px;
  margin-bottom: 13px;
  border-radius: 7px;
  margin-top: 10px;
`;

export const AddIcon = styled(Add)`
  width: 24px;
  height: 24px;

  padding: 2.5px;

  margin-left: 14px;
  cursor: pointer;

  color: var(--white);
  background-color: #57585d;
  border-radius: 50%;

  &:hover {
    opacity: 70%;
  }
`;

export const Input = styled.input`
  height: 44px;
  background-color: transparent;
  flex: 1;

  padding: 10px 14px;

  border: 0;

  font-size: 16px;
  line-height: 19px;
  color: white;

  &:focus {
    outline: transparent;
  }
`;
