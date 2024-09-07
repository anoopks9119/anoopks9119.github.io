import type { Meta, StoryObj } from '@storybook/react';
 
import Tab from './Tab';
 
//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Tab> = {
  component: Tab,
};
 
export default meta;
type Story = StoryObj<typeof Tab>;
 
export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};