import { CurrencyInput } from 'modules/common/components/Input';

type Props = Omit<React.ComponentProps<typeof CurrencyInput>, 'label'>;

export function Amount(props: Props) {
  return <CurrencyInput label="Total amount" name="amount" {...props} />;
}
