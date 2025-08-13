'use client';

export default function ProductionPage() {
  const systems = [
    {
      title: 'Microservices Architecture',
      scale: '1M+ requests/day',
      icon: '🏗️',
      description: 'Distributed system handling high-volume transactions',
      architecture: [
        'API Gateway (Kong)',
        'Service Mesh (Istio)',
        'Container Orchestration (Kubernetes)',
        'Message Queue (RabbitMQ)',
        'Event Streaming (Kafka)',
      ],
      metrics: {
        availability: '99.99%',
        latency: '< 50ms p99',
        throughput: '10K req/s',
        errorRate: '< 0.01%',
      },
    },
    {
      title: 'Data Pipeline Infrastructure',
      scale: '100TB+ processed',
      icon: '📡',
      description: 'Real-time data processing and analytics pipeline',
      architecture: [
        'Apache Spark for batch processing',
        'Kafka Streams for real-time',
        'Airflow for orchestration',
        'Delta Lake for storage',
        'Databricks for analytics',
      ],
      metrics: {
        dataProcessed: '100TB+',
        pipelineJobs: '500+ daily',
        processingTime: '< 5 min',
        dataQuality: '99.5%',
      },
    },
    {
      title: 'MLOps Platform',
      scale: '50+ models in production',
      icon: '🤖',
      description: 'End-to-end machine learning operations platform',
      architecture: [
        'Model Registry (MLflow)',
        'Feature Store (Feast)',
        'Model Serving (TorchServe)',
        'Monitoring (Prometheus)',
        'A/B Testing Framework',
      ],
      metrics: {
        models: '50+ deployed',
        predictions: '10M+ daily',
        retraining: 'Automated weekly',
        accuracy: 'Monitored realtime',
      },
    },
  ];

  const monitoring = [
    {
      tool: 'Prometheus + Grafana',
      purpose: 'Metrics and visualization',
      metrics: ['CPU/Memory usage', 'Request rates', 'Error rates', 'Custom business metrics'],
    },
    {
      tool: 'ELK Stack',
      purpose: 'Log aggregation and analysis',
      metrics: ['Application logs', 'Error tracking', 'Audit trails', 'Search capabilities'],
    },
    {
      tool: 'Datadog APM',
      purpose: 'Application performance monitoring',
      metrics: ['Distributed tracing', 'Service maps', 'Performance bottlenecks', 'Database queries'],
    },
    {
      tool: 'PagerDuty',
      purpose: 'Incident management',
      metrics: ['Alert routing', 'On-call scheduling', 'Incident response', 'Post-mortems'],
    },
  ];

  const deployments = [
    {
      strategy: 'Blue-Green Deployment',
      description: 'Zero-downtime deployments with instant rollback capability',
      benefits: ['No downtime', 'Quick rollback', 'Full testing before switch'],
      icon: '🔄',
    },
    {
      strategy: 'Canary Releases',
      description: 'Gradual rollout to subset of users for risk mitigation',
      benefits: ['Risk mitigation', 'Real-world testing', 'Gradual rollout'],
      icon: '🐤',
    },
    {
      strategy: 'Feature Flags',
      description: 'Toggle features without deployment using LaunchDarkly',
      benefits: ['Instant toggles', 'A/B testing', 'Gradual rollout'],
      icon: '🚩',
    },
    {
      strategy: 'GitOps',
      description: 'Infrastructure as code with ArgoCD for Kubernetes',
      benefits: ['Version control', 'Automated sync', 'Audit trail'],
      icon: '📝',
    },
  ];

  const performance = [
    {
      optimization: 'Database Optimization',
      improvements: [
        'Query optimization reduced latency by 60%',
        'Index optimization improved read performance 3x',
        'Connection pooling reduced overhead by 40%',
        'Implemented read replicas for scaling',
      ],
    },
    {
      optimization: 'Caching Strategy',
      improvements: [
        'Redis caching reduced API response time by 70%',
        'CDN implementation improved global latency',
        'Browser caching reduced bandwidth by 50%',
        'Database query caching improved throughput 2x',
      ],
    },
    {
      optimization: 'Code Performance',
      improvements: [
        'Async processing reduced blocking operations',
        'Memory leak fixes reduced consumption by 30%',
        'Algorithm optimization improved speed 5x',
        'Lazy loading reduced initial load time by 40%',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-200 mb-2">
            ⚡ Production
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Scaled systems, monitoring, MLOps, and production-grade infrastructure
          </p>
        </div>
      </div>

      {/* Production Systems */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8">
          Production Systems at Scale
        </h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {systems.map((system, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{system.icon}</div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-semibold">
                  {system.scale}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                {system.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {system.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Architecture
                </h4>
                <ul className="space-y-1">
                  {system.architecture.map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {Object.entries(system.metrics).map(([key, value]) => (
                  <div key={key} className="bg-slate-50 dark:bg-slate-900 rounded-lg p-2">
                    <div className="text-xs text-slate-500 dark:text-slate-500 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monitoring & Observability */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8">
          Monitoring & Observability
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {monitoring.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">
                {item.tool}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {item.purpose}
              </p>
              <div className="space-y-2">
                {item.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deployment Strategies */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8">
          Deployment Strategies
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {deployments.map((deployment, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{deployment.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                    {deployment.strategy}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {deployment.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {deployment.benefits.map((benefit, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Optimizations */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-8">
          Performance Optimizations
        </h2>
        <div className="space-y-6">
          {performance.map((perf, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-4">
                {perf.optimization}
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {perf.improvements.map((improvement, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">↑</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      {improvement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
