import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  justify-content: space-between;

  padding: 0 10px;
  align-items: center;

  background-color: var(--quaternary);
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #c4c4c4;
  position: relative;
  cursor: pointer;

  img {
    height: 32px;
    border-radius: 50%;
  }

  &::after {
    content: '-';
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0.1px;

    font-weight: bold;

    bottom: 0px;
    right: 0px;

    width: 10px;
    height: 10px;

    background: #eb4849;
    border-radius: 16px;
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  justify-content: center;

  strong {
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    color: white;
  }

  span {
    font-size: 13px;
    line-height: 15px;
    color: #ffffff;
    opacity: 0.69;
  }
  span::before {
    content: '#';
    font-size: 13.5 px;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
`;

export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const HeadSetIcon = styled(Headset)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
  margin: 0 9.5px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
