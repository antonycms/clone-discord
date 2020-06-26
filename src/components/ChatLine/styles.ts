import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-left: 16px;
  margin-top: 20px;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;

  background: #2f3136;
  border-radius: 50%;
`;

export const ContentContainer = styled.div`
  margin-left: 17px;
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;

  h4 {
    font-size: 16px;
    line-height: 19px;

    color: white;
    font-weight: normal;
    margin-right: 6px;
  }

  span {
    color: #ffffff;

    opacity: 0.42;
    font-size: 13px;
  }
`;

export const Content = styled.p`
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;

  font-weight: normal;
`;
