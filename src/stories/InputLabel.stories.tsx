import type { Meta, StoryObj } from '@storybook/react';
import InputLabel from '../components/InputLabel/InputLabel';
import ThemeDecorator from './decorators/ThemeDecorator';

const meta = {
    title: 'Components/InputLabel',
    component: InputLabel,
    decorators: [ThemeDecorator],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: { control: 'text', description: 'Label text' },
        inputId: { control: 'text', description: 'ID of the associated input element' },
        required: { control: 'boolean', description: 'Whether the associated input is required' },
        labelSize: { control: 'select', options: ['sm', 'md'], description: 'Size of the label' },
        disabled: { control: 'boolean', description: 'Whether the associated input is disabled' },
        labelIcon: { control: 'boolean', description: 'Whether to show an info icon next to the label' },
    },
} satisfies Meta<typeof InputLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Email',
        required: false,
        labelSize: 'md',
        labelIcon: false,
        disabled: false,
        inputId: '',
    },
};

export const Required: Story = {
    args: {
        ...Default.args,
        required: true,
    },
};

export const WithIcon: Story = {
    args: {
        ...Default.args,
        labelIcon: true,
    },
};

export const SmallSize: Story = {
    args: {
        ...Default.args,
        labelSize: 'sm',
    },
};

export const RequiredWithIcon: Story = {
    args: {
        ...Default.args,
        required: true,
        labelIcon: true,
    },
};
