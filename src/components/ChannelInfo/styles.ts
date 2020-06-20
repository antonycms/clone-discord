import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;

  padding: 0 17px;

  background-color: var(--primary);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
`;

export const HashtagIcon = styled(Hashtag)`
  width: 24px;
  height: 24px;
  color: var(--symbol);
  margin-right: 9px;
`;

export const Separator = styled.div`
  width: 1px;
  height: 24px;
  margin: 0 13px;
  background-color: #2d2f32;
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #fffff8;
  text-transform: lowercase;
`;

export const Subtitle = styled.p`
  font-size: 15px;
  line-height: 18px;
  color: white;
  opacity: 0.7;
`;
