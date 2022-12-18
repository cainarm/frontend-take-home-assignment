import React, { useState } from 'react';
import { ReachDate } from './ReachDate';

export default {
  title: 'ReachDate',
  component: ReachDate,
};

export const Default = () => {
  const [value, setValue] = useState(new Date());

  return <ReachDate value={value} onChange={setValue} />;
};
