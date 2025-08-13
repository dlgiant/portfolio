import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile button component with multiple variants, sizes, and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'success', 'ghost'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the button is in a loading state',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the button should take full width of its container',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary button story
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

// Secondary button story
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

// Danger button story
export const Danger: Story = {
  args: {
    children: 'Delete',
    variant: 'danger',
  },
};

// Success button story
export const Success: Story = {
  args: {
    children: 'Save',
    variant: 'success',
  },
};

// Ghost button story
export const Ghost: Story = {
  args: {
    children: 'Cancel',
    variant: 'ghost',
  },
};

// Button sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// Loading state
export const Loading: Story = {
  args: {
    children: 'Submit',
    loading: true,
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Button
        leftIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        }
      >
        Add Item
      </Button>
      <Button
        variant="danger"
        rightIcon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        }
      >
        Delete
      </Button>
    </div>
  ),
};

// Full width button
export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="success">Success</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="primary" disabled>Primary</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="danger" disabled>Danger</Button>
        <Button variant="success" disabled>Success</Button>
        <Button variant="ghost" disabled>Ghost</Button>
      </div>
    </div>
  ),
};
