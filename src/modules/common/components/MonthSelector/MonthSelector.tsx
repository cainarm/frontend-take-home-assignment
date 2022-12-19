import styled from 'styled-components';
import { ChevronLeft, ChevronRight } from 'modules/common/components/Icons';
import { Paragraph as P } from 'modules/common/components/Typography';
import { useHandleFocus } from 'modules/common/hooks/useHandleFocus';
import { Colors } from 'modules/common/constants/Colors';

type HTMLButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type Props = Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  value: Date;
  onChange: (date: Date) => void;
  buttonProps?: {
    left?: HTMLButtonProps;
    right?: HTMLButtonProps;
  };
};

function getlocaleMonth(date: Date) {
  const month = date.toLocaleString('en', { month: 'long' });
  return month;
}

function getLocaleYear(date: Date) {
  const year = date.toLocaleString('en', { year: 'numeric' });
  return year;
}

export function MonthSelector({
  value,
  onChange,
  buttonProps = {
    left: {},
    right: {},
  },
  ...otherProps
}: Props): JSX.Element {
  const { focused, onFocus, onBlur } = useHandleFocus();

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

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (focused) {
      if (event.key === 'ArrowLeft' && !buttonProps?.left?.disabled) {
        goToPreviousMonth();
      }

      if (event.key === 'ArrowRight' && !buttonProps?.right?.disabled) {
        goToNextMonth();
      }
    }
  };

  return (
    <Wrapper
      {...otherProps}
      onFocus={onFocus}
      onBlur={onBlur}
      tabIndex={1}
      onKeyDown={handleKeyPress}
    >
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
        <Year aria-label="year">{getLocaleYear(value)}</Year>
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
  width: 100%;
  justify-content: space-between;

  &:focus {
    outline: none;
  }
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

const Year = styled(P)`
  color: ${Colors.blueGray[300]};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-wrap: break-word;
  text-align: center;
`;
