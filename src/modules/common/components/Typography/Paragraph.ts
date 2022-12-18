import styled from 'styled-components';
import { Colors } from 'modules/common/constants/Colors';
import { up } from 'styled-breakpoints';

export const Paragraph = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-size: 14px;
  line-height: 21px;
  color: ${Colors.blueGray[900]};

  ${up('md')} {
    font-size: 16px;
    line-height: 24px;
  }
`;
