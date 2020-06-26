import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 11px;
  margin-left: 15px;
  padding: 4px 8px;
  border-radius: 5px;
  cursor: pointer;

  &:hover,
  &.active {
    background-color: var(--quinary);
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 13px;

  background-color: white;

  border-radius: 50%;
`;

interface IName {
  bot: boolean;
}

export const Name = styled.h4<IName>`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 19px;
  font-weight: normal;
  color: #ffffff;
  opacity: 0.74;

  &::after {
    content: 'BOT';
    display: ${(props) => (props.bot ? 'flex' : 'none')};

    background-color: #6e86d6;
    border-radius: 4px;

    font-weight: bold;
    font-size: 9px;
    line-height: 11px;
    text-align: center;

    padding: 2px 5px;
    margin-left: 8px;
  }
`;
