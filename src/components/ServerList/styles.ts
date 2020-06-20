import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--tertiary);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  width: 32px;
  height: 2px;
  background-color: #2d2f32;
`;
