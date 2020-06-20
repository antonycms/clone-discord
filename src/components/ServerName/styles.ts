import styled from 'styled-components';
import { ExpandMore } from 'styled-icons/material';

export const Container = styled.div`
  background-color: var(--secondary);

  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);

  align-items: center;

  h2 {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: white;
  }
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;
  color: var(--white);
  cursor: pointer;
`;
