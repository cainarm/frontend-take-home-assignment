import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Subtitle = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  ${up('md')} {
    font-size: 20px;
    line-height: 24px;
  }
`;
