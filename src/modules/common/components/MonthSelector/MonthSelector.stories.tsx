import { useState } from 'react';
import { MonthSelector } from './MonthSelector';

export default {
  title: 'Common/MonthSelector',
  component: MonthSelector,
};

export const Default = () => {
  const [value, setValue] = useState(new Date());

  return <MonthSelector value={value} onChange={setValue} />;
};
