import type { Meta, StoryObj } from '@storybook/react';

const WelcomePage = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎨 Design System</h1>
      <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>
        Welcome to the <strong>Portfolio Design System</strong> - a comprehensive collection of React components built with TypeScript and Tailwind CSS.
      </p>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>📚 What's Inside</h2>
        <p style={{ marginBottom: '1rem' }}>
          This design system showcases my expertise in building reusable, accessible, and well-documented UI components. Each component is:
        </p>
        <ul style={{ listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
          <li><strong>Fully Typed</strong> with TypeScript for type safety</li>
          <li><strong>Accessible</strong> following WCAG 2.1 guidelines</li>
          <li><strong>Customizable</strong> with various props and variants</li>
          <li><strong>Well Documented</strong> with interactive examples</li>
          <li><strong>Tested</strong> for reliability and performance</li>
        </ul>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🧩 Components</h2>
        
        <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>Core Components</h3>
        <ul style={{ listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
          <li><strong>Button</strong> - Versatile button with multiple variants and states</li>
          <li><strong>Card</strong> - Flexible container for content display</li>
          <li><strong>Input</strong> - Form input with validation and icons</li>
        </ul>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀 Key Features</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>TypeScript Support</h3>
            <ul style={{ listStyle: 'circle', paddingLeft: '1.5rem', color: '#666' }}>
              <li>IntelliSense support in IDEs</li>
              <li>Type safety for props</li>
              <li>Better developer experience</li>
              <li>Self-documenting code</li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Tailwind CSS Integration</h3>
            <ul style={{ listStyle: 'circle', paddingLeft: '1.5rem', color: '#666' }}>
              <li>Consistent design tokens</li>
              <li>Responsive design out of the box</li>
              <li>Dark mode support</li>
              <li>Easy customization</li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Accessibility First</h3>
            <ul style={{ listStyle: 'circle', paddingLeft: '1.5rem', color: '#666' }}>
              <li>Keyboard navigation</li>
              <li>Screen reader support</li>
              <li>ARIA attributes</li>
              <li>Focus management</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>💻 Usage Example</h2>
        <pre style={{ 
          background: '#1e1e1e', 
          color: '#d4d4d4', 
          padding: '1.5rem', 
          borderRadius: '8px', 
          overflow: 'auto',
          fontSize: '0.9rem'
        }}>
          <code>{`import { Button, Card, Input } from '@/components/ui';

function MyComponent() {
  return (
    <Card title="Login Form">
      <Input 
        label="Email" 
        type="email" 
        required 
      />
      <Input 
        label="Password" 
        type="password" 
        required 
      />
      <Button variant="primary" fullWidth>
        Sign In
      </Button>
    </Card>
  );
}`}</code>
        </pre>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯 Design Principles</h2>
        <ol style={{ listStyle: 'decimal', paddingLeft: '2rem', lineHeight: '1.8' }}>
          <li><strong>Consistency</strong> - Uniform patterns across all components</li>
          <li><strong>Flexibility</strong> - Components adapt to various use cases</li>
          <li><strong>Performance</strong> - Optimized for speed and efficiency</li>
          <li><strong>Accessibility</strong> - Usable by everyone</li>
          <li><strong>Maintainability</strong> - Clean, documented code</li>
        </ol>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛠️ Technologies Used</h2>
        <ul style={{ listStyle: 'disc', paddingLeft: '2rem', lineHeight: '1.8' }}>
          <li><strong>React 18</strong> - Latest React features</li>
          <li><strong>TypeScript</strong> - Type safety and better DX</li>
          <li><strong>Tailwind CSS</strong> - Utility-first styling</li>
          <li><strong>Storybook</strong> - Component documentation</li>
          <li><strong>React Testing Library</strong> - Component testing</li>
        </ul>
      </section>

      <div style={{ 
        borderTop: '2px solid #e5e5e5', 
        marginTop: '3rem', 
        paddingTop: '2rem', 
        textAlign: 'center',
        color: '#666'
      }}>
        <p style={{ fontStyle: 'italic' }}>
          Explore the components in the sidebar to see them in action!
        </p>
      </div>
    </div>
  );
};

const meta = {
  title: 'Welcome',
  component: WelcomePage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof WelcomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
