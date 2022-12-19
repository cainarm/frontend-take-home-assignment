import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Colors } from 'modules/common/constants/Colors';
import logo from 'assets/logo.svg';

type Props = {
  children: React.ReactNode;
};

export function Default(props: Props) {
  return (
    <Body>
      <Header>
        <Logo />
      </Header>
      {props.children}
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Colors.blueGray[10]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 56px;
  padding: 16px;

  background-color: ${Colors.white};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${up('md')} {
    height: 80px;
    padding: 0 56px;
  }
`;

const Logo = styled.img.attrs({
  src: logo,
})`
  height: 24px;
  width: 75px;

  ${up('md')} {
    height: 32px;
    width: 100px;
  }
`;
