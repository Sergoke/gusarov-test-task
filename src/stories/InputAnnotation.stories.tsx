import type { Meta, StoryObj } from '@storybook/react';
import InputAnnotation from '../components/InputAnnotation/InputAnnotation';
import ThemeDecorator from './decorators/ThemeDecorator';

const meta = {
    title: 'Components/InputAnnotation',
    component: InputAnnotation,
    decorators: [ThemeDecorator],
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        text: { control: 'text', description: 'Annotation text' },
        marginTopSize: { control: 'select', options: ['sm', 'md'], description: 'Margin top size' },
        disabled: { control: 'boolean', description: 'Whether the input is disabled' },
        error: { control: 'boolean', description: 'Whether to show an error state' },
    },
} satisfies Meta<typeof InputAnnotation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'This is an annotation',
        marginTopSize: 'sm',
        disabled: false,
        error: false,
    },
};

export const Error: Story = {
    args: {
        text: 'This is an error annotation',
        marginTopSize: 'sm',
        disabled: false,
        error: true,
    },
};

export const Disabled: Story = {
    args: {
        text: 'This is a disabled annotation',
        marginTopSize: 'sm',
        disabled: true,
        error: false,
    },
};
