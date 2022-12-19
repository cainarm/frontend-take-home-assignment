import styled, { css } from 'styled-components';
import { up } from 'styled-breakpoints';
import { Colors } from 'modules/common/constants/Colors';

type Variants = 'small' | 'medium';

const smallHeading = css`
  font-size: 20px;
  line-height: 24px;

  ${up('md')} {
    font-size: 24px;
    line-height: 29px;
  }
`;

const mediumHeading = css`
  font-size: 24px;
  line-height: 29px;

  ${up('md')} {
    font-size: 32px;
  }
`;

const HeadingElement = styled.h1<{
  $variant?: Variants;
}>`
  font-family: 'Rubik';
  font-weight: 500;
  color: ${Colors.blueGray[900]};

  ${({ $variant }) => {
    switch ($variant) {
      case 'small':
        return smallHeading;
      case 'medium':
        return mediumHeading;
      default:
        return smallHeading;
    }
  }};
`;

type Props = {
  variant: Variants;
} & React.ComponentProps<typeof HeadingElement>;

export function Heading({ variant, as, ...otherProps }: Props) {
  return <HeadingElement as={as} $variant={variant} {...otherProps} />;
}
