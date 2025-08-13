'use client'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import React, { useState } from 'react';
import PortfolioPage from './portfolio/Portfolio';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
 

const TABS = [
  {
    label: 'Home',
    icon: 'home',
    href: '/home',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Components',
    href: '/components',
  },
  {
    label: 'Services',
    href: '/services',
  }
];

const Nav = ({ children }: any) => {
  const [openNav, setOpenNav] = useState(true);
  const navigate = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const handleMouseEnter = () => {
    if (!isPinned) setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    if (!isPinned) setIsExpanded(false);
  };

  const togglePin = () => {
    setIsPinned(!isPinned);
    if (!isPinned) setIsExpanded(true);
  } 

  return (
    <div>
    <nav
      className={`
        bg-slate-900 text-white transition-all duration-300 ease-in-out
        ${isExpanded || isPinned ? 'w-64' : 'w-16'}
        relative flex flex-col shadow-lg
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <TabGroup className="w-full max-w-md">
        <TabList className="flex gap-10">
          {
            TABS.map(({ label, href }) => (
              <Tab
                key={label}
                className="rounded-full px-3 py-1 text-sm/6 font-semibold text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/5 data-selected:bg-white/10 data-selected:data-hover:bg-white/10"
                onClick={() => navigate.push(href)}
              >{label}</Tab>
            ))
          }
        </TabList>
      </TabGroup> */}
    </nav>
    <div className="flex h-screen bg-gray-100">
      {/* Side Navigation */}
      <nav
        className={`
          bg-slate-900 text-white transition-all duration-300 ease-in-out
          ${isExpanded || isPinned ? 'w-64' : 'w-16'}
          relative flex flex-col shadow-lg
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm
              transition-opacity duration-300 
              
              `}>
                N.W.
              </div>
              <span 
                className={`font-semibold text-lg transition-opacity duration-300 ${
                  isExpanded || isPinned ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Nunes.Work
              </span>
            </div>
            
            {/* Pin/Unpin Button */}
            <button
              onClick={togglePin}
              className={`
                p-1 rounded hover:bg-slate-700 transition-all duration-200
                ${isExpanded || isPinned ? 'opacity-100' : 'opacity-0'}
              `}
            >
              {isPinned ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-4">
          <ul className="space-y-2 px-2">
            {TABS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-200 group"
                >
                  <span 
                    className={`
                      transition-all duration-300 whitespace-nowrap
                      ${isExpanded || isPinned ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
                    `}
                  >
                    {item.label}
                  </span>
                  
                  {/* Tooltip for collapsed state */}
                  {!isExpanded && !isPinned && (
                    <div className="absolute left-16 bg-slate-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 whitespace-nowrap">
                      {item.label}
                    </div>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div 
              className={`
                transition-all duration-300 min-w-0
                ${isExpanded || isPinned ? 'opacity-100' : 'opacity-0'}
              `}
            >
              <p className="text-sm font-medium truncate">Rick Nunes</p>
              <p className="text-xs text-slate-400 truncate">rick@nunes.work</p>
            </div>
          </div>
        </div>

        {/* Expansion Indicator */}
        {!isPinned && (
          <div 
            className={`
              absolute -right-3 top-1/2 transform -translate-y-1/2 
              w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center
              transition-opacity duration-200
              ${isExpanded ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <ChevronLeft className="w-3 h-3 text-white" />
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-1">
        {/* <div className="/mx-auto"> */}
          <h1 className="text-3xl font-bold text-gray-900 mb-1">{children}</h1>
        {/* </div?> */}
      </main>
    </div>
    </div>
  );
}

export default Nav;
