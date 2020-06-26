import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto 9px auto;
  border-radius: 5px;
  padding: 0 8px;
  cursor: pointer;

  width: 220px;
  height: 32px;

  &:hover,
  &.active {
    background-color: var(--quinary);
    h2 {
      color: white;
    }
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 15px;
  line-height: 18px;
  text-transform: lowercase;
  color: var(--symbol);
`;

export const HashtagIcon = styled(Hashtag)`
  width: 15px;
  height: 28px;
  display: block;
  color: var(--symbol);
  margin-right: 9px;
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
  &:hover {
    color: var(--white);
  }
`;
