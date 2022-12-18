import { useState } from 'react';
import { CurrencyInput } from 'modules/common/components/Input/CurrencyInput/CurrencyInput';

export default {
  title: 'Common/CurrencyInput',
  component: CurrencyInput,
};

export const Default = () => {
  const [value, setValue] = useState('0');

  return (
    <CurrencyInput label="Total amount" value={value} onChange={setValue} />
  );
};
