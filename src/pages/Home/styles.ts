import styled from 'styled-components';

/**
 * SL - Server List
 * SN - Server Name
 * CI - Chat Info
 * CL - Channel List
 * CB - Chat Body
 * LU - List Users
 * UI - UserInfo
 */

export const Container = styled.div`
  display: grid;
  grid-template-rows: 46px auto 52px;
  grid-template-columns: 71px 240px auto 240px;

  grid-template-areas:
    'SL SN CI CI'
    'SL CL CB LU'
    'SL UI CB LU';

  height: 100vh;
`;
