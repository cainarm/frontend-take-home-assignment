import { ChevronLeft, ChevronRight, DollarSign } from './index';
import { CommomIconProps } from './types';

export default {
  title: 'Common/Icons',
  component: ChevronLeft,
};

export const Default = (args: CommomIconProps) => (
  <>
    <ChevronLeft {...args} />
    <ChevronRight {...args} />
    <DollarSign {...args} />
  </>
);
Default.story = {
  name: 'All icons',
};

export const ChevronLeftStory = (args: CommomIconProps) => (
  <ChevronLeft {...args} />
);
ChevronLeftStory.story = {
  name: 'ChevronLeft',
};

export const ChevronRightStory = (args: CommomIconProps) => (
  <ChevronRight {...args} />
);
ChevronRightStory.story = {
  name: 'ChevronRight',
};

export const DollarSignStory = (args: CommomIconProps) => (
  <DollarSign {...args} />
);
DollarSignStory.story = {
  name: 'DollarSign',
};
