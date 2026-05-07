export const personalInfo = {
  name: "Dania Reza",
  title: "Full-Stack Software Engineer",
  email: "Daniaestrada.tech@gmail.com",
  phone: "720-352-4655",
  github: "https://github.com/dania-reza",
  linkedin: "https://linkedin.com/in/dania-reza",
  summary:
    "Full-stack Software Engineer with experience building scalable cloud-native applications, AI-powered platforms, and enterprise contact center systems. Experienced in AWS cloud architecture, AI/ML integrations, microservices, and CI/CD automation. Built compliance-focused AI safety systems, RAG pipelines, and multi-agent platforms using AWS Bedrock, LangChain, and Terraform.",
};

export const skills = {
  languages: ["Python", "Java", "Go", "JavaScript (ES6+)", "TypeScript", "SQL"],
  frameworks: [
    "LangChain",
    "LangGraph",
    "Angular",
    "Spring Boot",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Express.js",
    "FastAPI",
  ],
  aiMl: [
    "Amazon Bedrock",
    "LangSmith",
    "Bedrock AgentCore",
    "RAG Pipelines",
    "Agentic Workflows",
    "OpenAI API",
    "Multi-model Evaluation",
  ],
  cloud: [
    "AWS (ECS, EKS, ECR, S3, EC2, IAM/OIDC, Secrets Manager, CodeBuild, CodeDeploy, CodePipeline)",
    "Terraform",
    "Spacelift",
    "Docker",
    "GitHub Actions",
  ],
  databases: ["PostgreSQL", "MySQL"],
  tools: [
    "GitHub",
    "Bitbucket",
    "New Relic",
    "CloudWatch",
    "Postman",
    "Maven",
    "Jira",
    "Jenkins",
  ],
};

export const experience = [
  {
    company: "Cook Systems - University of Phoenix",
    role: "Software Engineer",
    period: "June 2025 - Present",
    highlights: [
      "Architected and built an enterprise multi-agent AI orchestration platform (Phoebe Supervisor) serving 100K+ students using a custom 3-phase pipeline for input guardrails, intent routing, and output validation.",
      "Built Guardian Sentinel, a real-time AI compliance and safety classification gate evaluating 30+ categories including Title IX, ADA accommodations, FERPA privacy, and crisis detection.",
      "Benchmarked 22 LLMs using a 188-example evaluation dataset, achieving 92% classification accuracy with LangSmith experiment tracking.",
      "Established CI/CD pipelines with GitHub Actions OIDC authentication, path-filtered workflows, automated ARM64 Docker builds, ECR deployments, and 80%+ coverage quality gates.",
      "Deployed containerized services on AWS ECS Fargate with CodeDeploy blue/green deployments and Bedrock AgentCore integration.",
      "Built RAG-based downstream AI agents and automated ingestion pipelines using AWS Bedrock Knowledge Bases, ECS Fargate, Puppeteer, and EventBridge scheduled sync jobs.",
    ],
    tech: [
      "Python",
      "TypeScript",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "AWS Bedrock",
      "ECS Fargate",
      "Terraform",
      "GitHub Actions",
      "Docker",
    ],
  },
  {
    company: "AT&T - Dallas, TX",
    role: "Technology Analyst, Team Lead",
    period: "May 2020 - June 2025",
    highlights: [
      "Led a nine-person QA and application support team in a global delivery environment, reducing testing timelines by 20% while maintaining 100% on-time project delivery.",
      "Spearheaded migration of multiple IVR applications from VoiceTone to AEP.",
      "Developed and optimized application enhancements using Java and Spring while ensuring seamless integration with existing workflows and APIs.",
      "Partnered with cross-functional teams to resolve production defects, optimize application performance, and improve deployment reliability.",
    ],
    tech: ["Java", "Spring", "Jenkins", "Jira", "Postman", "GitHub"],
  },
  {
    company: "Cook Systems",
    role: "FastTrack Full-Stack Developer",
    period: "February 2025 - March 2025",
    highlights: [
      "Built RESTful APIs and full-stack applications using Spring Boot, Angular, PostgreSQL, and TypeScript.",
      "Led development of a Twitter-like social media API implementing authentication, tweets, likes, mentions, and follow relationships.",
      "Developed a wiki-style project management dashboard with role-based access controls and CRUD functionality.",
    ],
    tech: ["Spring Boot", "Angular", "PostgreSQL", "TypeScript"],
  },
  {
    company: "Kada Imports LLC",
    role: "Assistant Manager of Web Services",
    period: "May 2015 - December 2019",
    highlights: [
      "Led a five-person team developing and maintaining e-commerce site content and user experiences.",
      "Collaborated on UX improvements and platform optimizations resulting in a 30% increase in purchases.",
    ],
    tech: ["Web Development", "E-commerce", "UX"],
  },
];

export const projects = [
  {
    title: "Phoebe Supervisor",
    description:
      "Enterprise multi-agent AI orchestration platform serving 100K+ students with a custom 3-phase pipeline for input guardrails, intent routing, and output validation.",
    tech: [
      "Python",
      "LangChain",
      "LangGraph",
      "AWS Bedrock",
      "FastAPI",
      "Socket.IO",
    ],
    highlights: [
      "Multi-agent orchestration",
      "Real-time streaming",
      "92% classification accuracy",
    ],
  },
  {
    title: "Guardian Sentinel",
    description:
      "Real-time AI compliance and safety classification gate evaluating 30+ categories including Title IX, ADA, FERPA privacy, crisis/self-harm detection, and harassment escalation.",
    tech: ["Python", "LangChain", "AWS Bedrock", "FastAPI"],
    highlights: [
      "30+ safety categories",
      "Real-time classification",
      "Compliance enforcement",
    ],
  },
  {
    title: "Custom Kubernetes Ingress Controller",
    description:
      "Custom Kubernetes controller in Go that rerouted failed requests between clusters for improved resiliency with automated testing for failover validation.",
    tech: ["Go", "Kubernetes", "Docker"],
    github: "#",
    highlights: [
      "Cross-cluster routing",
      "Automated failover",
      "Custom controller",
    ],
  },
  {
    title: "Overlay Networking",
    description:
      "Golang-based horoscope application deployed across AWS EC2 instances using Terraform and Docker with CI/CD workflows via Jenkins.",
    tech: ["Go", "Terraform", "Docker", "AWS EC2", "Jenkins"],
    github: "#",
    highlights: ["Multi-instance deployment", "IaC", "Automated CI/CD"],
  },
  {
    title: "Network Function Virtualization",
    description:
      "Intrusion detection and firewall system using Go, SQLite, iptables, and reverse proxy architecture with bash automation scripts.",
    tech: ["Go", "SQLite", "iptables", "Bash"],
    github: "#",
    highlights: [
      "Intrusion detection",
      "Firewall system",
      "Reverse proxy",
    ],
  },
  {
    title: "Interactive Data Visualization Platform",
    description:
      "Processed 100+ CSV datasets into PostgreSQL with interactive county-level data visualizations using Leaflet.",
    tech: ["Python", "PostgreSQL", "Leaflet", "JavaScript", "HTML/CSS"],
    github: "#",
    highlights: [
      "100+ datasets",
      "Interactive maps",
      "County-level visualization",
    ],
  },
];

export const education = [
  {
    school: "Duke University - Durham, NC",
    degree: "Bachelor of Arts in Computer Science",
    minor: "Minor in Visual and Media Studies",
    year: "2019",
  },
  {
    school: "Cook Systems FastTrack",
    degree: "Java Program",
    minor: "Full-stack software engineering and Java frameworks training",
    year: "2025",
  },
];
