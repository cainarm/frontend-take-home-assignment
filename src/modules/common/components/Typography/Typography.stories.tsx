import React from 'react';
import { Paragraph, Subtitle, Heading, Caption } from './index';

export default {
  title: 'Common/Typography',
  component: Paragraph,
};

export const ParagraphStory = () => <Paragraph>This is a paragraph</Paragraph>;
ParagraphStory.story = {
  name: 'Paragraph',
};

export const SubtitleStory = () => <Subtitle>This is a subtitle</Subtitle>;
SubtitleStory.story = {
  name: 'Subtitle',
};

export const HeadingStory = (args: React.ComponentProps<typeof Heading>) => (
  <Heading {...args}>This is a heading</Heading>
);
HeadingStory.story = {
  name: 'Heading',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
  },
};

export const CaptionStory = () => <Caption>This is a caption</Caption>;
CaptionStory.story = {
  name: 'Caption',
};
