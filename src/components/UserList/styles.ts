import styled from 'styled-components';

export const Container = styled.div`
  grid-area: LU;

  background-color: var(--secondary);
  padding-top: 23px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

interface ILabel {
  qtdUsers: number;
}

export const Label = styled.span<ILabel>`
  padding: 0 23px;
  display: flex;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  opacity: 0.45;
  text-transform: uppercase;

  margin-bottom: 10px;

  &:not(:first-child) {
    margin-top: 20px;
  }

  &::after {
    content: '-${(props) => (props.qtdUsers ? props.qtdUsers : '')}';
  }
`;
