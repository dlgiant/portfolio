import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
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
  args: {
    children: 'Button',
  },
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
  args: {
    children: 'Button',
  },
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
  args: {
    children: 'Button',
  },
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

// Simple dark mode test
export const SimpleDarkTest: Story = {
  args: {
    children: 'Button',
  },
  render: () => {
    const [isDark, setIsDark] = React.useState(false);
    
    React.useEffect(() => {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }, [isDark]);
    
    return (
      <div className="p-8">
        <div className="mb-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Toggle Dark Mode Manually (Currently: {isDark ? 'Dark' : 'Light'})
          </button>
        </div>
        
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg mb-4">
          <p className="text-black dark:text-white mb-2">
            This background should change from white to dark gray
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            This text should change from dark gray to light gray
          </p>
        </div>
        
        <div className="flex gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>
    );
  },
};

// Dark mode showcase
export const DarkMode: Story = {
  args: {
    children: 'Button',
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-900 p-8 rounded-lg" style={{ minHeight: '500px' }}>
        <Story />
      </div>
    ),
  ],
  render: () => (
    <div className="flex flex-col gap-8">
      {/* Title */}
      <div className="text-white">
        <h2 className="text-2xl font-bold mb-2">Dark Mode Button Showcase</h2>
        <p className="text-gray-400">All button variants, sizes, and states in dark mode</p>
      </div>

      {/* All Variants */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4">Variants</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </div>

      {/* All Sizes */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4">Sizes</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Button variant="primary" size="sm">Small Primary</Button>
            <Button variant="primary" size="md">Medium Primary</Button>
            <Button variant="primary" size="lg">Large Primary</Button>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="secondary" size="sm">Small Secondary</Button>
            <Button variant="secondary" size="md">Medium Secondary</Button>
            <Button variant="secondary" size="lg">Large Secondary</Button>
          </div>
        </div>
      </div>

      {/* States */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4">States</h3>
        <div className="flex flex-col gap-4">
          {/* Normal state */}
          <div>
            <p className="text-gray-400 text-sm mb-2">Normal</p>
            <div className="flex gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          {/* Disabled state */}
          <div>
            <p className="text-gray-400 text-sm mb-2">Disabled</p>
            <div className="flex gap-4">
              <Button variant="primary" disabled>Primary</Button>
              <Button variant="secondary" disabled>Secondary</Button>
              <Button variant="danger" disabled>Danger</Button>
              <Button variant="success" disabled>Success</Button>
              <Button variant="ghost" disabled>Ghost</Button>
            </div>
          </div>

          {/* Loading state */}
          <div>
            <p className="text-gray-400 text-sm mb-2">Loading</p>
            <div className="flex gap-4">
              <Button variant="primary" loading>Primary</Button>
              <Button variant="secondary" loading>Secondary</Button>
              <Button variant="danger" loading>Danger</Button>
              <Button variant="success" loading>Success</Button>
              <Button variant="ghost" loading>Ghost</Button>
            </div>
          </div>
        </div>
      </div>

      {/* With Icons */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4">With Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="primary"
            leftIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            }
          >
            Add Item
          </Button>
          <Button
            variant="secondary"
            leftIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            }
          >
            Edit
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
          <Button
            variant="success"
            leftIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            }
          >
            Save
          </Button>
        </div>
      </div>

      {/* Full Width */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4">Full Width</h3>
        <div className="flex flex-col gap-4" style={{ maxWidth: '400px' }}>
          <Button variant="primary" fullWidth>Primary Full Width</Button>
          <Button variant="secondary" fullWidth>Secondary Full Width</Button>
          <Button variant="ghost" fullWidth>Ghost Full Width</Button>
        </div>
      </div>

      {/* Combined Examples */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4">Combined Examples</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="lg" 
            leftIcon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
          >
            Like
          </Button>
          <Button variant="secondary" size="sm" disabled>Small Disabled</Button>
          <Button variant="success" loading>Saving...</Button>
          <Button variant="danger" size="lg"
            rightIcon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            }
          >
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  ),
};
