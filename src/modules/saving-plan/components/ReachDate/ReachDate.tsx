import { MonthSelector } from 'modules/common/components/MonthSelector';
import { Field } from 'modules/common/components/Input';

type Props = React.ComponentProps<typeof MonthSelector>;

export function ReachDate(props: Props) {
  return <Field label="Reach Goal by" input={<MonthSelector {...props} />} />;
}
