import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import Button from './Button';

const meta = {
  title: 'Design System/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible card component for displaying content in a contained format.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Padding size for the card content',
    },
    shadow: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'xl'],
      description: 'Shadow depth of the card',
    },
    border: {
      control: { type: 'boolean' },
      description: 'Whether the card has a border',
    },
    hoverable: {
      control: { type: 'boolean' },
      description: 'Whether the card has hover effects',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic card
export const Basic: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card subtitle goes here',
    children: 'This is the card content. It can contain any React components or text.',
  },
};

// Card with image
export const WithImage: Story = {
  args: {
    title: 'Beautiful Landscape',
    subtitle: 'Photography',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    imageAlt: 'Mountain landscape',
    children: 'Stunning mountain views captured during golden hour. This breathtaking landscape showcases the beauty of nature.',
  },
};

// Card with footer
export const WithFooter: Story = {
  args: {
    title: 'Article Card',
    subtitle: 'Published 2 days ago',
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    footer: (
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">5 min read</span>
        <Button size="sm" variant="ghost">Read More</Button>
      </div>
    ),
  },
};

// Hoverable card
export const Hoverable: Story = {
  args: {
    title: 'Interactive Card',
    subtitle: 'Click me!',
    children: 'This card has hover effects and can be clicked.',
    hoverable: true,
    onClick: () => alert('Card clicked!'),
  },
};

// Card without border
export const NoBorder: Story = {
  args: {
    title: 'Borderless Card',
    children: 'This card has no border, only shadow.',
    border: false,
    shadow: 'lg',
  },
};

// Different padding sizes
export const PaddingSizes: Story = {
  args: {
    children: 'Card content',
  },
  render: () => (
    <div className="space-y-4">
      <Card padding="sm" title="Small Padding">
        This card has small padding.
      </Card>
      <Card padding="md" title="Medium Padding">
        This card has medium padding.
      </Card>
      <Card padding="lg" title="Large Padding">
        This card has large padding.
      </Card>
    </div>
  ),
};

// Different shadow sizes
export const ShadowSizes: Story = {
  args: {
    children: 'Card content',
  },
  render: () => (
    <div className="space-y-6">
      <Card shadow="none" title="No Shadow">
        This card has no shadow.
      </Card>
      <Card shadow="sm" title="Small Shadow">
        This card has a small shadow.
      </Card>
      <Card shadow="md" title="Medium Shadow">
        This card has a medium shadow.
      </Card>
      <Card shadow="lg" title="Large Shadow">
        This card has a large shadow.
      </Card>
      <Card shadow="xl" title="Extra Large Shadow">
        This card has an extra large shadow.
      </Card>
    </div>
  ),
};

// Complex card example
export const ComplexExample: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    imageAlt: 'Coding setup',
    title: 'Full-Stack Development',
    subtitle: 'Modern web technologies',
    children: (
      <div className="space-y-3">
        <p>Build scalable applications with cutting-edge technologies.</p>
        <ul className="space-y-1 text-sm">
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            React & Next.js
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            TypeScript
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span>
            Tailwind CSS
          </li>
        </ul>
      </div>
    ),
    footer: (
      <div className="flex gap-2">
        <Button size="sm" variant="primary" fullWidth>
          Get Started
        </Button>
        <Button size="sm" variant="ghost" fullWidth>
          Learn More
        </Button>
      </div>
    ),
    hoverable: true,
  },
};
