'use client';

import { useState } from 'react';

export default function FundamentalsPage() {
  const [activeTab, setActiveTab] = useState('components');

  const components = [
    {
      title: 'React Design System',
      description: 'Complete design system with TypeScript and Storybook',
      tech: ['React', 'TypeScript', 'Storybook', 'Tailwind CSS'],
      features: [
        'Fully typed components with TypeScript',
        'Interactive Storybook documentation',
        'Dark mode support',
        'Accessibility compliant (WCAG 2.1)',
      ],
      code: `interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  onClick: () => void;
  children: React.ReactNode;
}`,
      demo: true,
    },
    {
      title: 'Form Validation System',
      description: 'Custom form validation library with real-time feedback',
      tech: ['JavaScript', 'React Hook Form', 'Zod'],
      features: [
        'Schema-based validation',
        'Custom error messages',
        'Async validation support',
        'Field-level error handling',
      ],
      code: `const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  age: z.number().min(18)
});`,
    },
    {
      title: 'Data Table Component',
      description: 'Advanced data table with sorting, filtering, and pagination',
      tech: ['React', 'TanStack Table', 'Tailwind CSS'],
      features: [
        'Server-side pagination',
        'Multi-column sorting',
        'Advanced filtering',
        'CSV export functionality',
      ],
      code: `const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
});`,
    },
  ];

  const apis = [
    {
      title: 'RESTful API Design',
      description: 'Designed and implemented RESTful APIs following best practices',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      endpoints: [
        { method: 'GET', path: '/api/users', description: 'Fetch all users with pagination' },
        { method: 'POST', path: '/api/users', description: 'Create new user with validation' },
        { method: 'PUT', path: '/api/users/:id', description: 'Update user information' },
        { method: 'DELETE', path: '/api/users/:id', description: 'Soft delete user' },
      ],
    },
    {
      title: 'GraphQL Schema Development',
      description: 'Built flexible GraphQL APIs with type-safe resolvers',
      tech: ['GraphQL', 'Apollo Server', 'TypeGraphQL', 'Prisma'],
      endpoints: [
        { method: 'Query', path: 'users', description: 'Query users with filtering' },
        { method: 'Mutation', path: 'createUser', description: 'Create user mutation' },
        { method: 'Subscription', path: 'userUpdated', description: 'Real-time user updates' },
      ],
    },
    {
      title: 'Authentication & Authorization',
      description: 'Implemented secure authentication systems',
      tech: ['JWT', 'OAuth 2.0', 'Auth0', 'Passport.js'],
      endpoints: [
        { method: 'POST', path: '/auth/login', description: 'User authentication' },
        { method: 'POST', path: '/auth/refresh', description: 'Token refresh' },
        { method: 'POST', path: '/auth/logout', description: 'Session termination' },
        { method: 'GET', path: '/auth/verify', description: 'Token verification' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">
            🧱 Fundamentals
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Building blocks of modern applications - Components, APIs, and core functionality
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex gap-4 border-b border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab('components')}
            className={`px-4 py-2 font-semibold transition-colors ${
              activeTab === 'components'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            UI Components
          </button>
          <button
            onClick={() => setActiveTab('apis')}
            className={`px-4 py-2 font-semibold transition-colors ${
              activeTab === 'apis'
                ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            API Development
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-8">
        {activeTab === 'components' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                  {component.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {component.description}
                </p>
                
                {/* Code Preview */}
                <div className="bg-slate-900 dark:bg-slate-950 rounded-lg p-3 mb-4 overflow-x-auto">
                  <pre className="text-xs text-green-400 font-mono">
                    <code>{component.code}</code>
                  </pre>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    {component.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {component.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Demo Link */}
                {(component as any).demo && (
                  <a
                    href="https://design.nunes.work"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    <span>View Live Demo</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'apis' && (
          <div className="space-y-6">
            {apis.map((api, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
              >
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                  {api.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {api.description}
                </p>

                {/* Endpoints */}
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    Endpoints:
                  </h4>
                  <div className="space-y-2">
                    {api.endpoints.map((endpoint, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 font-mono text-sm"
                      >
                        <span
                          className={`px-2 py-1 rounded font-semibold ${
                            endpoint.method === 'GET'
                              ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                              : endpoint.method === 'POST'
                              ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                              : endpoint.method === 'PUT'
                              ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                              : endpoint.method === 'DELETE'
                              ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300'
                              : endpoint.method === 'Query'
                              ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                              : endpoint.method === 'Mutation'
                              ? 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
                              : 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300'
                          }`}
                        >
                          {endpoint.method}
                        </span>
                        <span className="text-slate-700 dark:text-slate-300">
                          {endpoint.path}
                        </span>
                        <span className="text-slate-500 dark:text-slate-500 flex-1">
                          - {endpoint.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {api.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
