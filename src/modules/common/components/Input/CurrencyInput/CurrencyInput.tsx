import { Field } from 'modules/common/components/Input';
import { DollarSign } from 'modules/common/components/Icons';
import ReactCurrencyInput from 'react-currency-input-field';

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  name?: string;
};

export function CurrencyInput({ label, value, onChange, name }: Props) {
  return (
    <Field
      label={label}
      startAdorment={<DollarSign aria-hidden="true" />}
      labelProps={{
        htmlFor: name,
      }}
      input={
        <ReactCurrencyInput
          allowNegativeValue={false}
          decimalSeparator="."
          decimalsLimit={2}
          groupSeparator=","
          value={value}
          maxLength={8}
          onValueChange={(amount) => onChange(amount || '0')}
          name={name}
          id={name}
        />
      }
    />
  );
}
