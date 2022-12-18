import styled from 'styled-components';
import { up } from 'styled-breakpoints';

export const Label = styled.label`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  ${up('md')} {
    font-size: 14px;
    line-height: 21px;
  }
`;
