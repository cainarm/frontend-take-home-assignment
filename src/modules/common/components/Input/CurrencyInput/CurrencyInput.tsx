import { Field } from 'modules/common/components/Input';
import { DollarSign } from 'modules/common/components/Icons';
import ReactCurrencyInput from 'react-currency-input-field';

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

export function CurrencyInput({ label, value, onChange }: Props) {
  return (
    <Field
      label={label}
      startAdorment={<DollarSign aria-hidden="true" />}
      input={
        <ReactCurrencyInput
          allowNegativeValue={false}
          decimalSeparator="."
          decimalsLimit={2}
          groupSeparator=","
          value={value}
          onValueChange={(amount) => onChange(amount || '0')}
        />
      }
    />
  );
}
