import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import InputText from '../components/InputText/InputText';
import ThemeDecorator from './decorators/ThemeDecorator';
import { useArgs } from 'storybook/internal/preview-api';

const searchIcon =
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor">
        <path d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>;

const helpCircleIcon =
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor">
        <path d="M7.57502 7.50008C7.77094 6.94314 8.15765 6.4735 8.66665 6.17436C9.17565 5.87521 9.7741 5.76586 10.356 5.86567C10.9379 5.96549 11.4657 6.26802 11.8459 6.71969C12.2261 7.17136 12.4342 7.74302 12.4334 8.33342C12.4334 10.0001 9.93335 10.8334 9.93335 10.8334M10 14.1667H10.0084M18.3334 10.0001C18.3334 14.6025 14.6024 18.3334 10 18.3334C5.39765 18.3334 1.66669 14.6025 1.66669 10.0001C1.66669 5.39771 5.39765 1.66675 10 1.66675C14.6024 1.66675 18.3334 5.39771 18.3334 10.0001Z" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
    </svg>;

const meta = {
    title: 'Components/InputText',
    component: InputText,
    decorators: [
        ThemeDecorator,
    ],
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'gray',
            values: [
                { name: 'gray', value: '#f0f0f0' },
            ],
        },
    },
    tags: ['autodocs'],
    argTypes: {
        value: { control: 'text', description: 'The current value of the input' },
        onChange: { 
            action: 'changed',
            description: 'Callback function triggered when the input value changes',
        },
        size: { control: 'select', options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl'], description: 'Size of the input' },
        disabled: { control: 'boolean', description: 'Whether the input is disabled' },
        error: { control: 'boolean', description: 'Whether to show an error state' },
        placeholder: { control: 'text', description: 'Placeholder text for the input' },
        variant: { control: 'select', options: ['fill', 'outline'], description: 'Visual style variant of the input' },
        quiet: { control: 'boolean', description: 'Whether to use a quiet styling' },
        textAlign: { control: 'select', options: ['left', 'right'], description: 'Text alignment within the input' },
        iconBefore: { control: 'boolean', description: 'Icon to display before the input' },
        iconAfter: { control: 'boolean', description: 'Icon to display after the input' },
        shortKey: { control: 'boolean', description: 'Shortcut key to display in the input' },
        inputId: { control: 'text', description: 'ID for the input and label\'s "for" attribute. If not provided, a random ID will be generated.' },
    },
    args: { onChange: fn() },
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => {
        const [{ value }, updateArgs] = useArgs();
        return (
            <InputText
                {...args}
                value={value}
                onChange={(e) => updateArgs({ value: e.target.value })}
            />
        );
    },
    args: {
        value: '',
        onChange: fn(),
        size: 'md',
        disabled: false,
        error: false,
        placeholder: 'Input...',
        variant: 'fill',
        quiet: false,
        textAlign: 'left',
        iconBefore: false,
        iconAfter: false,
        shortKey: '',
    },
};

Default.decorators = [
    (Story, context) => (
        <Story
            args={{
                ...context.args,
                iconBefore: context.args.iconBefore ?  searchIcon : undefined,
                iconAfter: context.args.iconAfter ? helpCircleIcon : undefined,
                shortKey: context.args.shortKey ? '⌘K' : undefined,
            }}
        />
    ),
];

export const ExtraExtraSmall: Story = {
    render: Default.render,
    args: {
        ...Default.args,
        size: 'xxs',
    },
};

export const ExtraSmall: Story = {
    render: Default.render,
    args: {
        ...Default.args,
        size: 'xs',
    },
};

export const Small: Story = {
    render: Default.render,
    args: {
        ...Default.args,
        size: 'sm',
    },
};

export const Medium: Story = {
    render: Default.render,
    args: {
        ...Default.args,
        size: 'md',
    },
};

export const Large: Story = {
    render: Default.render,
    args: {
        ...Default.args,
        size: 'lg',
    },
};

export const ExtraLarge: Story = {
    render: Default.render,
    args: {
        ...Default.args,
        size: 'xl',
    },
};

export const Disabled: Story = {
    render: Default.render,
    args: {
        ...Default.args,
        disabled: true,
    },
};

export const Error: Story = {
    render: Default.render,
    args: {
        ...Default.args,
        error: true,
    },
};

export const Outline: Story = {
    render: Default.render,
    args: {
        ...Default.args,
        variant: 'outline',
    },
};

export const Quiet: Story = {
    render: Default.render,
    args: {
        ...Default.args,
        quiet: true,
    },
};

export const WithIconBefore: Story = {
    render: Default.render,
    args: {
        ...Default.args,
        iconBefore: searchIcon,
    },
};

export const WithIconAfter: Story = {
    render: Default.render,
    args: {
        ...Default.args,
        iconAfter: searchIcon,
    },
};

export const WithIconBeforeAndAfter: Story = {
    render: Default.render,
    args: {
        ...Default.args,
        iconBefore: searchIcon,
        iconAfter: searchIcon,
    },
};

export const WithShortKey: Story = {
    render: Default.render,
    args: {
        ...Default.args,
        shortKey: '⌘K',
    },
};

export const WithIconsAndShortKey: Story = {
    render: Default.render,
    args: {
        ...Default.args,
        iconBefore: searchIcon,
        iconAfter: helpCircleIcon,
        shortKey: '⌘K',
    },
};
