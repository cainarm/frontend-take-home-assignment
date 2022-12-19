import styled from 'styled-components';
import { up } from 'styled-breakpoints';
import { Colors } from 'modules/common/constants/Colors';
import { Label } from 'modules/common/components/Typography/Label';

type Props = {
  startAdorment?: React.ReactNode;
  input: React.ReactNode;
  label: string;
  labelProps?: React.ComponentProps<typeof Label>;
} & React.HTMLAttributes<HTMLDivElement>;

export function Field({
  startAdorment,
  input,
  label,
  labelProps,
  ...otherProps
}: Props) {
  return (
    <Wrapper {...otherProps} tabIndex={1}>
      <Label {...labelProps}>{label}</Label>
      <Content>
        {startAdorment && <Adorment>{startAdorment}</Adorment>}
        {input}
      </Content>
    </Wrapper>
  );
}

const Content = styled.div`
  margin-top: 4px;
  border: 1px solid ${Colors.blueGray[50]};
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  padding: 0;
  width: 100%;
  height: 56px;
  background-color: ${Colors.white};

  input {
    font-family: 'Rubik';
    font-style: normal;
    font-size: 20px;
    line-height: 24px;
    border: none;
    padding-left: 8px;
    color: ${Colors.blueGray[600]};
    width: 100%;

    &:focus {
      outline: none;
    }

    ${up('md')} {
      font-size: 24px;
      line-height: 29px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:focus ${Content}, &:focus-within ${Content} {
    border: 1px solid ${Colors.blueGray[300]};
  }
`;

const Adorment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: auto;
  margin-left: 12px;
`;
