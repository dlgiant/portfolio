'use client';

import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const skills = [
    { name: 'TypeScript', level: 95, color: 'bg-blue-500' },
    { name: 'React', level: 95, color: 'bg-cyan-500' },
    { name: 'Python', level: 90, color: 'bg-yellow-500' },
    { name: 'Ruby on Rails', level: 85, color: 'bg-red-500' },
    { name: 'AWS', level: 85, color: 'bg-orange-500' },
    { name: 'Cypress IO', level: 90, color: 'bg-green-500' },
  ];

  const achievements = [
    {
      title: 'Data Analytics Dashboard Architecture',
      description: 'Architected, implemented, and integrated complex features for data analytics dashboards',
      impact: '20% increase in user engagement',
      tech: ['React', 'TypeScript', 'Python'],
      icon: '📊',
    },
    {
      title: 'End-to-End Testing Culture',
      description: 'Led the effort to establish testing culture and increase application coverage using Cypress IO',
      impact: '50% reduction in bug reports',
      tech: ['Cypress IO', 'TypeScript', 'CI/CD'],
      icon: '🧪',
    },
    {
      title: 'Performance Optimization',
      description: 'Decreased service and front-end bottlenecks, improving UX by creating local and backend caches',
      impact: 'Improved response times by 40%',
      tech: ['Redis', 'Local Storage', 'React'],
      icon: '⚡',
    },
    {
      title: 'PDF Report Generation Solution',
      description: 'Devised and implemented PDF report generation using Node.js and Puppeteer within AWS Lambda',
      impact: '40% increase in user engagement',
      tech: ['Node.js', 'Puppeteer', 'AWS Lambda'],
      icon: '📄',
    },
    {
      title: 'User Experience Enhancement',
      description: 'Engaged with design and product teams to improve UX and integrated user research tools like Pendo.io',
      impact: 'Proactive bug detection',
      tech: ['Pendo.io', 'UX Research', 'Analytics'],
      icon: '🎨',
    },
    {
      title: 'Authentication & Security',
      description: 'Integrated custom authentication interface with Auth0 allowing SSO and maintained secure CRUD endpoints',
      impact: 'Enhanced security & user experience',
      tech: ['Auth0', 'SSO', 'TDD'],
      icon: '🔐',
    },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 opacity-50"></div>
        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-6">
              Full-Stack Engineer
            </h1>
            <p className="text-xl lg:text-2xl text-slate-700 dark:text-slate-300 mb-8">
              9+ years crafting exceptional digital experiences
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Experienced full-stack engineer with expertise in Python, JavaScript/TypeScript, React, Ruby on Rails, and AWS. 
              Proven track record in leading cross-functional teams and driving complex projects to successful completion. 
              Passionate about utilizing technology to solve business challenges and enhance user experiences.
            </p>
            <div className="flex gap-4 justify-center mt-10">
              <a
                href="#achievements"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                View Achievements
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-slate-700 dark:border-slate-300 text-slate-700 dark:text-slate-300 rounded-full font-semibold hover:bg-slate-700 hover:text-white dark:hover:bg-slate-300 dark:hover:text-slate-900 transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
          Technical Expertise
        </h2>
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-slate-700 dark:text-slate-300 font-semibold">{skill.name}</span>
                <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div id="achievements" className="container mx-auto px-6 py-20 bg-white dark:bg-slate-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">
          Key Achievements
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-200 dark:border-slate-600"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-200">
                {achievement.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {achievement.description}
              </p>
              <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-lg p-3 mb-4">
                <p className="text-sm font-semibold text-green-800 dark:text-green-200">
                  ✨ {achievement.impact}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {achievement.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-slate-200">
            Let's Build Something Amazing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Ready to collaborate on your next project? I'm always excited to work on innovative solutions that make a difference.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:rick@nunes.work"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              📧 Get in Touch
            </a>
            <a
              href="https://github.com/dlgiant"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-slate-700 dark:border-slate-300 text-slate-700 dark:text-slate-300 rounded-full font-semibold hover:bg-slate-700 hover:text-white dark:hover:bg-slate-300 dark:hover:text-slate-900 transition-all duration-200"
            >
              🐙 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rick-nunes/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-slate-700 dark:border-slate-300 text-slate-700 dark:text-slate-300 rounded-full font-semibold hover:bg-slate-700 hover:text-white dark:hover:bg-slate-300 dark:hover:text-slate-900 transition-all duration-200"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 py-8">
        <div className="container mx-auto px-6 text-center text-slate-600 dark:text-slate-400">
          <p>© {currentYear} nunes.work • Built with Next.js, React, and TypeScript</p>
        </div>
      </footer>
    </div>
  );
}
