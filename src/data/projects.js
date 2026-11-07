export const projects = [
  {
    id: 'gcp-platform',
    title: 'GCP Global Edge & Event-Driven Platform',
    category: 'cloud',
    categoryLabel: 'Cloud Architecture',
    desc: 'Event-driven design on Google Cloud combining global edge delivery with GKE for HA, low-latency workloads.',
    tags: ['Google Cloud', 'GKE', 'Cloud Armor', 'Event-Driven', 'HA Edge'],
    highlights: [
      'Global Anycast L7 load balancing with Cloud CDN & Cloud Armor WAF/DDoS protection at the edge.',
      'Asynchronous event mesh using Pub/Sub and Cloud Run / GKE Autopilot for elastic zero-downtime scaling.',
      'Integrated Vertex AI / Gemini inference pipeline with VPC Service Controls and IAM least-privilege.'
    ],
    image: 'assets/img/work/gcp-arch.webp',
    fullImage: 'assets/img/work/gcp-arch.webp',
    caption: 'Diagram of a GCP global edge and event-driven architecture with Gemini AI'
  },
  {
    id: 'aws-hybrid-ai',
    title: 'Enterprise Hybrid AWS AI Platform',
    category: 'cloud',
    categoryLabel: 'Cloud Architecture',
    desc: 'Hybrid AWS platform serving Spring Boot microservices, with DevSecOps guardrails built into every stage of delivery.',
    tags: ['AWS', 'Amazon Bedrock', 'EKS', 'Spring Boot', 'DevSecOps'],
    highlights: [
      'Multi-AZ Amazon EKS cluster hosting Spring Boot microservices connected via AWS Transit Gateway & Direct Connect.',
      'Enterprise Generative AI layer powered by Amazon Bedrock with private VPC endpoints and guardrails.',
      'Automated DevSecOps CI/CD pipeline with SAST/DAST, container image signing, and Terraform IaC.'
    ],
    image: 'assets/img/work/aws-arch.webp',
    fullImage: 'assets/img/work/aws-arch.webp',
    caption: 'Diagram of an enterprise hybrid AWS AI platform for Spring microservices with DevSecOps and Amazon Bedrock'
  },
  {
    id: 'azure-hybrid-ai',
    title: 'Enterprise Hybrid Azure AI Platform',
    category: 'cloud',
    categoryLabel: 'Cloud Architecture',
    desc: 'Hybrid Azure platform for .NET microservices with an integrated AI layer and DevSecOps controls end to end.',
    tags: ['Azure', 'Azure AI Foundry', 'AKS', '.NET', 'DevOps'],
    highlights: [
      'Hub-and-Spoke landing zone with ExpressRoute hybrid connectivity, Azure Firewall, and Front Door WAF.',
      'Resilient AKS clusters running .NET microservices integrated with Azure AI Foundry & OpenAI models.',
      'End-to-end governance via Microsoft Defender for Cloud, Key Vault secrets rotation, and Azure Monitor.'
    ],
    image: 'assets/img/work/az-arch.webp',
    fullImage: 'assets/img/work/az-arch.webp',
    caption: 'Diagram of an enterprise hybrid Azure Foundry AI platform for .NET microservices with DevSecOps'
  },
  {
    id: 'aws-llm-demo',
    title: 'AWS LLM Demo Platform',
    category: 'ai',
    categoryLabel: 'AI',
    desc: 'Applied exploration of large language model deployment patterns on AWS-native services.',
    tags: ['Generative AI', 'LLM', 'AWS Bedrock', 'Lambda', 'Vector Search'],
    highlights: [
      'Serverless RAG & prompt orchestration using AWS Lambda, API Gateway, and Amazon Bedrock foundation models.',
      'Low-latency vector embeddings lookup and context retrieval for grounded enterprise responses.',
      'Token-usage telemetry, cost guardrails, and IAM role isolation per inference workflow.'
    ],
    image: 'assets/img/work/aws-ai.webp',
    fullImage: 'assets/img/work/aws-ai.webp',
    caption: 'Diagram of an AWS LLM demo project'
  },
  {
    id: 'agile-team-ea',
    title: 'Agile Team & Enterprise Architecture',
    category: 'agile',
    categoryLabel: 'Agile / EA',
    desc: 'n-Ops Team Formation and enterprise governance frameworks for distributed engineering squads.',
    tags: ['Agile', 'SAFe', 'EA Governance', 'DevOps', 'Scrum'],
    highlights: [
      'Cross-functional n-Ops topology aligning Architecture, DevSecOps, FinOps, and Product delivery.',
      'Standardized Architecture Decision Records (ADRs) and Well-Architected review gates across value streams.',
      'Iterative Scrum/SAFe cadence designed to accelerate lead time while maintaining enterprise compliance.'
    ],
    image: 'assets/img/work/agile-ea.webp',
    fullImage: 'assets/img/work/agile-ea.webp',
    caption: 'Diagram of an Agile DevTeam and n-Ops Team Formation'
  },
  {
    id: 'microservices-arch',
    title: 'Microservices Architecture Fundamentals',
    category: 'swarch',
    categoryLabel: 'Sw Architecture',
    desc: 'Reference patterns for resilient, observable and event-driven microservices across multi-cloud.',
    tags: ['Microservices', 'Distributed Systems', 'Resilience', 'API Gateway'],
    highlights: [
      'Decoupled domain services with API Gateway routing, circuit breakers, and polyglot persistence.',
      'Distributed tracing, metrics, and centralized logging (OpenTelemetry / Prometheus / Grafana).',
      'Event-driven saga patterns and idempotent message consumers for eventual consistency.'
    ],
    image: 'assets/img/work/microservices-demo-thumb.webp',
    fullImage: 'assets/img/work/microservices-demo.webp',
    caption: 'Diagram of a microservices architecture'
  }
];

export const categories = [
  { id: '*', label: 'All Projects' },
  { id: 'cloud', label: 'Cloud Architecture' },
  { id: 'ai', label: 'AI & LLMs' },
  { id: 'swarch', label: 'Sw Architecture' },
  { id: 'agile', label: 'Agile / EA' }
];
