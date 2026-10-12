export const projects = [
  {
    id: 'gcp-platform',
    title: 'GCP Global Edge & Event-Driven Platform',
    category: 'cloud',
    categoryLabel: 'Cloud Architecture',
    desc: 'Event-driven design on Google Cloud combining global edge delivery with GKE for HA, low-latency workloads.',
    tags: ['Google Cloud', 'GKE', 'Cloud Armor', 'Event-Driven', 'HA Edge'],
    image: 'assets/img/work/gcp-arch.png',
    fullImage: 'assets/img/work/gcp-arch.png',
    caption: 'Diagram of a GCP global edge and event-driven architecture with Gemini AI'
  },
  {
    id: 'aws-hybrid-ai',
    title: 'Enterprise Hybrid AWS AI Platform',
    category: 'cloud',
    categoryLabel: 'Cloud Architecture',
    desc: 'Hybrid AWS platform serving Spring Boot microservices, with DevSecOps guardrails built into every stage of delivery.',
    tags: ['AWS', 'Amazon Bedrock', 'EKS', 'Spring Boot', 'DevSecOps'],
    image: 'assets/img/work/aws-arch.png',
    fullImage: 'assets/img/work/aws-arch.png',
    caption: 'Diagram of an enterprise hybrid AWS AI platform for Spring microservices with DevSecOps and Amazon Bedrock'
  },
  {
    id: 'azure-hybrid-ai',
    title: 'Enterprise Hybrid Azure AI Platform',
    category: 'cloud',
    categoryLabel: 'Cloud Architecture',
    desc: 'Hybrid Azure platform for .NET microservices with an integrated AI layer and DevSecOps controls end to end.',
    tags: ['Azure', 'Azure AI Foundry', 'AKS', '.NET', 'DevOps'],
    image: 'assets/img/work/az-arch.png',
    fullImage: 'assets/img/work/az-arch.png',
    caption: 'Diagram of an enterprise hybrid Azure Foundry AI platform for .NET microservices with DevSecOps'
  },
  {
    id: 'aws-llm-demo',
    title: 'AWS LLM Demo Platform',
    category: 'ai',
    categoryLabel: 'AI',
    desc: 'Applied exploration of large language model deployment patterns on AWS-native services.',
    tags: ['Generative AI', 'LLM', 'AWS Bedrock', 'Lambda', 'Vector Search'],
    image: 'assets/img/work/aws-ai.png',
    fullImage: 'assets/img/work/aws-ai.png',
    caption: 'Diagram of an AWS LLM demo project'
  },
  {
    id: 'agile-team-ea',
    title: 'Agile Team & Enterprise Architecture',
    category: 'agile',
    categoryLabel: 'Agile / EA',
    desc: 'n-Ops Team Formation and enterprise governance frameworks for distributed engineering squads.',
    tags: ['Agile', 'SAFe', 'EA Governance', 'DevOps', 'Scrum'],
    image: 'assets/img/work/agile-ea.png',
    fullImage: 'assets/img/work/agile-ea.png',
    caption: 'Diagram of an Agile DevTeam and n-Ops Team Formation'
  },
  {
    id: 'microservices-arch',
    title: 'Microservices Architecture Fundamentals',
    category: 'swarch',
    categoryLabel: 'Sw Architecture',
    desc: 'Reference patterns for resilient, observable and event-driven microservices across multi-cloud.',
    tags: ['Microservices', 'Distributed Systems', 'Resilience', 'API Gateway'],
    image: 'assets/img/work/microservices-demo-thumb.jpg',
    fullImage: 'assets/img/work/microservices-demo.webp',
    fallbackImage: 'assets/img/work/microservices-demo.GIF',
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
