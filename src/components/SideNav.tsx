'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function SideNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      href: '/',
      label: 'Home',
      icon: '🏠',
      description: 'Overview & About',
    },
    {
      href: '/fundamentals',
      label: 'Fundamentals',
      icon: '🧱',
      description: 'Individual components, basic APIs',
    },
    {
      href: '/integration',
      label: 'Integration',
      icon: '🔗',
      description: 'Full-stack apps, API orchestration',
    },
    {
      href: '/innovation',
      label: 'Innovation',
      icon: '🚀',
      description: 'ML features, experimental work',
    },
    {
      href: '/production',
      label: 'Production',
      icon: '⚡',
      description: 'Scaled systems, monitoring, MLOps',
    },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white dark:bg-slate-800 shadow-lg"
      >
        <svg
          className="w-6 h-6 text-slate-700 dark:text-slate-300"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Portfolio
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Full-Stack Engineering Journey
            </p>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block group transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-l-4 border-blue-600 dark:border-blue-400'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800 border-l-4 border-transparent'
                  }`}
                >
                  <div className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <div className="flex-1">
                        <div
                          className={`font-semibold ${
                            isActive
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {item.label}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-500">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="space-y-4">
              <a
                href="https://github.com/dlgiant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                <span>🐙</span>
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rick-nunes/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                <span>💼</span>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:rick@nunes.work"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                <span>📧</span>
                <span className="text-sm">Contact</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
        />
      )}
    </>
  );
}
