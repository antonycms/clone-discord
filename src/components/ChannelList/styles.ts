import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CL;

  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 13.88px 0 13.88px;

  span {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: white;
    opacity: 0.49;
    text-transform: uppercase;
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;
  color: var(--symbol);
  margin-bottom: 9px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;
