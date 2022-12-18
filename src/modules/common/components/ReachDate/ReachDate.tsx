import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'modules/common/components/Icons';
import { Paragraph as P } from 'modules/common/components/Typography';

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  value: Date;
  onChange: (date: Date) => void;
  buttonProps?: {
    left: HTMLButtonProps;
    right: HTMLButtonProps;
  };
};

export function ReachDate({
  value,
  onChange,
  buttonProps = {
    left: {},
    right: {},
  },
  ...otherProps
}: Props): JSX.Element {
  const goToPreviousMonth = () => {
    const newDate = new Date(value);
    newDate.setMonth(newDate.getMonth() - 1);
    onChange(newDate);
  };

  const goToNextMonth = () => {
    const newDate = new Date(value);
    newDate.setMonth(newDate.getMonth() + 1);
    onChange(newDate);
  };

  const getlocaleMonth = (date: Date) => {
    const month = date.toLocaleString('en', { month: 'long' });
    return month;
  };

  const getLocaleYear = (date: Date) => {
    const year = date.toLocaleString('en', { year: 'numeric' });
    return year;
  };

  return (
    <Wrapper {...otherProps}>
      <Button
        {...buttonProps?.left}
        onClick={goToPreviousMonth}
        aria-label="go to previous month"
      >
        <ChevronLeft />
      </Button>
      <Content>
        <P aria-label="month">
          <b>{getlocaleMonth(value)}</b>
        </P>
        <P aria-label="year">{getLocaleYear(value)}</P>
      </Content>
      <Button
        {...buttonProps?.right}
        onClick={goToNextMonth}
        aria-label="go to next month"
      >
        <ChevronRight />
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  width: 48px;

  ${({ disabled }) =>
    disabled &&
    `
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-wrap: break-word;
  text-align: center;
  width: 96px;
`;
