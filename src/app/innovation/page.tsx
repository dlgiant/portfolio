'use client';

export default function InnovationPage() {
  const mlProjects = [
    // {
    //   title: 'Sentiment Analysis Engine',
    //   description: 'NLP-powered sentiment analysis for customer feedback',
    //   icon: '🧠',
    //   model: 'BERT Fine-tuned',
    //   accuracy: '94.5%',
    //   tech: ['Python', 'TensorFlow', 'Transformers', 'FastAPI'],
    //   features: [
    //     'Multi-language support',
    //     'Real-time processing',
    //     'Emotion detection',
    //     'Aspect-based sentiment',
    //   ],
    //   impact: 'Reduced manual review time by 75%',
    // },
    // {
    //   title: 'Recommendation System',
    //   description: 'Collaborative filtering for personalized content recommendations',
    //   icon: '🎯',
    //   model: 'Neural Collaborative Filtering',
    //   accuracy: '89.2%',
    //   tech: ['Python', 'PyTorch', 'Redis', 'Apache Spark'],
    //   features: [
    //     'Real-time recommendations',
    //     'Cold start handling',
    //     'A/B testing framework',
    //     'Explainable AI insights',
    //   ],
    //   impact: '35% increase in user engagement',
    // },
    {
      title: 'MVP - Cacao Classification - Precision Agroforestry',
      description: 'Computer vision platform for monitoring cacao forests in a cabruca system',
      icon: '🛰️ 🌳',
      model: 'Dual-head architecture combining Mask R-CNN and DeepLabV3+',
      accuracy: '80%',
      tech: ['Python', 'Keras', 'OpenCV', 'Docker', 'Planet-SkySat', 'WorldView'],
      features: [
        'Instance segmentation for detecting individual trees',
        'Semantic segmentation for land cover classification',
        'Additional heads for crown diameter estimation and canopy density calculation',
        'Optional SAM integration for mask refinement',
      ],
      impact: 'Improve forest health by recognizing cacao trees affected by Witches\' brooms disease and other health metrics',
    },
  ];

  // const experiments = [
  //   {
  //     title: 'WebAssembly Performance',
  //     description: 'Explored WASM for compute-intensive browser applications',
  //     status: 'success',
  //     findings: [
  //       '3x performance improvement for image processing',
  //       'Near-native execution speed',
  //       'Reduced server load by 60%',
  //     ],
  //     tech: ['Rust', 'WebAssembly', 'JavaScript'],
  //   },
  //   {
  //     title: 'Real-time Collaboration',
  //     description: 'Built collaborative editing with CRDTs',
  //     status: 'prototype',
  //     findings: [
  //       'Conflict-free concurrent editing',
  //       'Offline-first capability',
  //       'Scalable to 100+ users',
  //     ],
  //     tech: ['Yjs', 'WebRTC', 'Socket.io'],
  //   },
  // ];

  const innovations = [
    // {
    //   category: 'AI/ML Integration',
    //   items: [
    //     'GPT-4 API integration for content generation',
    //     'Custom LLM fine-tuning for domain-specific tasks',
    //     'Prompt engineering for optimal results',
    //     'RAG (Retrieval Augmented Generation) implementation',
    //   ],
    // },
    {
      category: 'Performance Optimization',
      items: [
        'Micro-frontend architecture',
        'Service worker caching strategies',
        'Code splitting and lazy loading',
        'Database query optimization',
      ],
    },
    {
      category: 'Developer Experience',
      items: [
        'Custom CLI tools for automation',
        'GitHub Actions for CI/CD',
        'Automated testing frameworks - Cypress IO',
        'Documentation generation',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">
            🚀 Innovation
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Machine Learning features, experimental work, and cutting-edge technologies
          </p>
        </div>
      </div>

      {/* ML Projects */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8">
          Machine Learning Projects
        </h2>
        <div className="grid">
          {mlProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{project.icon}</div>
                <div className="text-right">
                  <div className="text-xs text-slate-500 dark:text-slate-500">Accuracy</div>
                  <div className="text-xl font-bold text-green-600 dark:text-green-400">
                    {project.accuracy}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-3">
                {project.description}
              </p>

              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 mb-4">
                <div className="text-xs text-slate-500 dark:text-slate-500 mb-1">Model</div>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {project.model}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2 uppercase">
                  Features
                </h4>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-3 mb-4">
                <div className="text-xs text-slate-600 dark:text-slate-400">Impact</div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {project.impact}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experimental Work */}
      {/* <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8">
          Experimental Work
        </h2>
        <div className="space-y-6">
          {experiments.map((experiment, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {experiment.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {experiment.description}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    experiment.status === 'success'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                      : experiment.status === 'production'
                      ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                  }`}
                >
                  {experiment.status}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    Key Findings
                  </h4>
                  <ul className="space-y-2">
                    {experiment.findings.map((finding, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experiment.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Innovation Areas */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8">
          Innovation Areas
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4">
                {innovation.category}
              </h3>
              <ul className="space-y-2">
                {innovation.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-purple-500 mt-0.5">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
