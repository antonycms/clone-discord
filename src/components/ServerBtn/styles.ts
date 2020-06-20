import styled from 'styled-components';
import { IServerBtn } from '.';

export const Container = styled.button<IServerBtn>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  height: 48px;
  width: 48px;
  margin: 11px 0 8px 0;
  border: 0;
  border-radius: ${(props) => (props.isActive ? '16px' : '50%')};
  position: relative;

  background-color: var(--primary);
  cursor: pointer;

  img {
    width: 48px;
    height: 48px;
    border-radius: ${(props) => (props.isActive ? '16px' : '50%')};
  }

  &:hover,
  img:hover {
    border-radius: 16px;
    ${(props) => (props.image ? '' : 'background-color: var(--discord)')}
  }

  &:focus {
    outline: transparent;
  }

  &::after {
    position: absolute;
    content: '';

    left: -17px;

    display: flex;
    background-color: white;

    width: 9px;
    height: 9px;

    border-radius: 50%;
  }

  &::before {
    content: '${(props) => (props.hasNotification ? props.hasNotification : '')}';

    position: absolute;
    right: -4px;
    bottom: -4px;

    background-color: var(--notification);
    color: white;
    font-weight: bold;
    font-size: 13px;

    width: auto;
    height: 16px;
    padding: 0 4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    display: ${(props) => (props.hasNotification ? 'flex' : 'none')};
  }
`;
