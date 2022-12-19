import { MonthSelector } from 'modules/common/components/MonthSelector';
import { Field } from 'modules/common/components/Input';

type Props = React.ComponentProps<typeof MonthSelector>;

function dateIsInNextMonthOrBefore(date: Date) {
  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);

  return date <= nextMonth;
}

export function ReachDate(props: Props) {
  return (
    <Field
      label="Reach goal by"
      input={
        <MonthSelector
          {...props}
          buttonProps={{
            left: {
              disabled: dateIsInNextMonthOrBefore(props.value),
            },
          }}
        />
      }
    />
  );
}
