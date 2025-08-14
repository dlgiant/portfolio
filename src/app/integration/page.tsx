'use client';

export default function IntegrationPage() {
  const projects = [
    {
      title: 'Analytics Dashboard',
      description: 'Data visualization platform with real-time metrics and reporting',
      image: '📊',
      architecture: {
        frontend: ['React', 'D3.js', 'Chart.js', 'Material-UI'],
        backend: ['Python', 'FastAPI', 'MongoDB', 'Ruby On Rails'],
        infrastructure: ['Docker', 'Kubernetes', 'AWS EKS'],
      },
      features: [
        'Real-time data streaming',
        'Custom dashboard builder',
        'Automated report generation',
        'Data export (CSV, PDF)',
        'Role-based access control',
        'API rate limiting',
      ],
      metrics: {
        users: '5K+ business users',
        dataPoints: '1M+ data points/day',
        reports: '10K+ reports generated',
        performance: '< 100ms query time',
      },
    },
  ];

  const integrations = [
    {
      category: 'Authentication',
      services: ['Auth0', 'Firebase Auth', 'AWS Cognito', 'Okta'],
      color: 'bg-blue-500',
    },
    {
      category: 'Cloud Services',
      services: ['AWS', 'Google Cloud', 'Azure', 'Vercel'],
      color: 'bg-purple-500',
    },
    {
      category: 'Monitoring',
      services: ['Datadog', 'New Relic', 'LogRocket'],
      color: 'bg-orange-500',
    },
    {
      category: 'Communication',
      services: ['Slack'],
      color: 'bg-pink-500',
    },
    {
      category: 'Analytics',
      services: ['Google Analytics'],
      color: 'bg-indigo-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">
            🔗 Integration
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Full-stack applications with complex API orchestration and third-party integrations
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8">
          Featured Full-Stack Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="grid lg:grid-cols-3 gap-6 p-8">
                {/* Project Overview */}
                <div className="lg:col-span-1">
                  <div className="text-6xl mb-4">{project.image}</div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-2">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-slate-500 dark:text-slate-500 capitalize">
                          {key}:
                        </span>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture */}
                <div className="lg:col-span-1">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                    Tech Stack
                  </h4>
                  {Object.entries(project.architecture).map(([layer, techs]) => (
                    <div key={layer} className="mb-4">
                      <h5 className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 capitalize">
                        {layer}:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="lg:col-span-1">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8">
          API Integrations & Third-Party Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${integration.color}`}></div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  {integration.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {integration.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
