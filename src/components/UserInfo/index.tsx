import React from 'react';

import { Container, Profile, Avatar, UserData, ContainerIcons, MicIcon, HeadSetIcon, SettingsIcon } from './styles';

interface IUserInfo {
  userName: string;
  userCode: string;
}

const UserInfo: React.FC<IUserInfo> = ({ userName, userCode }) => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>{userName}</strong>
          <span>{userCode}</span>
        </UserData>
      </Profile>

      <ContainerIcons>
        <MicIcon />
        <HeadSetIcon />
        <SettingsIcon />
      </ContainerIcons>
    </Container>
  );
};

export default UserInfo;
