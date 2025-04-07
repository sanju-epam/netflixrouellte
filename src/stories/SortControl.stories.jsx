import React from 'react';
import SortControl from '../components/SortControl';
import '../css/SortControl.css';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/SortControl',
  component: SortControl,
  argTypes: {
    currentSelection: {
      control: 'select',
      options: ['releaseDate', 'title'],
    },
    onSortChange: { action: 'sort changed' },
  },
};

const Template = (args) => <SortControl {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentSelection: 'releaseDate',
  onSortChange: action('Sort option selected'),
};
