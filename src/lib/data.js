import { Cloud, Database, Shield, Globe, Code, ChartBar } from "lucide-react";
import { Project } from "../components/ProjectShowcase";
import { Partner } from "../components/PartnerLogos";

export const services = [
  {
    id: 1,
    title: "Cloud Computing",
    description: "Modernize your infrastructure with our cloud solutions. We provide migration, optimization, and management services across major cloud platforms.",
    icon: Cloud,
    color: "bg-blue-100",
    iconColor: "text-blue-500",
    slug: "cloud-computing"
  },
  {
    id: 2,
    title: "Data Analysis",
    description: "Transform your data into actionable insights with our advanced analytics services. Discover patterns, trends, and opportunities for business growth.",
    icon: ChartBar,
    color: "bg-green-100",
    iconColor: "text-green-500",
    slug: "data-analysis"
  },
  {
    id: 3,
    title: "Cyber Security",
    description: "Protect your digital assets with comprehensive security solutions. We offer threat detection, prevention, and response strategies.",
    icon: Shield,
    color: "bg-red-100",
    iconColor: "text-red-500",
    slug: "cyber-security"
  },
  {
    id: 4,
    title: "Web Development",
    description: "Create stunning, functional websites that drive business results. Our development team builds responsive, optimized sites for any industry.",
    icon: Globe,
    color: "bg-purple-100",
    iconColor: "text-purple-500",
    slug: "web-development"
  },
  {
    id: 5,
    title: "Custom Software",
    description: "Build tailored solutions for your unique business challenges. From enterprise applications to mobile apps, we deliver quality software.",
    icon: Code,
    color: "bg-orange-100",
    iconColor: "text-orange-500",
    slug: "custom-software"
  },
  {
    id: 6,
    title: "Database Management",
    description: "Optimize your database performance and reliability. Our experts can help with design, migration, and ongoing administration.",
    icon: Database,
    color: "bg-yellow-100", 
    iconColor: "text-yellow-600",
    slug: "database-management"
  }
];

export const stats = [
  { id: 1, value: "200+", label: "Clients" },
  { id: 2, value: "10+", label: "Years Experience" },
  { id: 3, value: "500+", label: "Projects" },
  { id: 4, value: "98%", label: "Client Satisfaction" }
];

// Testimonials by service
export const testimonials = {
  "cloud-computing": [
    {
      name: "Michael Johnson",
      company: "TechFront Inc.",
      quote: "Profoelctron Solution's cloud migration strategy saved us 40% on infrastructure costs while improving our system reliability by 99.99%.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      company: "DataStream Corp",
      quote: "Their cloud optimization services transformed our operations, giving us the scalability we desperately needed during peak usage periods.",
      rating: 5
    },
    {
      name: "David Chen",
      company: "Global Retail Solutions",
      quote: "We've worked with several cloud consultants before, but none matched Profoelctron Solution's expertise and dedication to our success.",
      rating: 4
    }
  ],
  "data-analysis": [
    {
      name: "Jennifer Lee",
      company: "Market Analytics Pro",
      quote: "The insights Profoelctron Solution's derived from our customer data completely changed our marketing strategy, increasing conversion rates by 35%.",
      rating: 5
    },
    {
      name: "Robert Garcia",
      company: "Financial Services Inc.",
      quote: "Their predictive analytics models have proven to be 95% accurate, giving us confidence to make critical business decisions.",
      rating: 5
    },
    {
      name: "Emily Taylor",
      company: "Healthcare Solutions",
      quote: "Working with Profoelctron Solution's data team helped us identify patterns in patient care that led to improved outcomes and reduced readmissions.",
      rating: 5
    }
  ],
  "cyber-security": [
    {
      name: "Thomas Wilson",
      company: "Secure Banking Ltd",
      quote: "After Profoelctron Solution's security audit and implementation, we've had zero breaches despite being in a high-risk industry.",
      rating: 5
    },
    {
      name: "Amanda Brown",
      company: "Insurance Direct",
      quote: "Their incident response team saved us during a potential breach, identifying and neutralizing the threat before any damage occurred.",
      rating: 5
    },
    {
      name: "Kevin Martin",
      company: "Government Services",
      quote: "We appreciate the thorough approach Profoelctron Solution takes with security. Their team doesn't just fix problems—they prevent them.",
      rating: 4
    }
  ],
  "web-development": [
    {
      name: "Lisa Rodriguez",
      company: "E-commerce Platform",
      quote: "Our website redesign by Profoelctron Solution resulted in a 60% increase in user engagement and a 45% boost in conversions. Exceptional work!",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "Creative Agency",
      quote: "The attention to detail and user experience focus from Profoelctron Solution's web team made our site stand out from competitors.",
      rating: 5
    },
    {
      name: "Nicole Peterson",
      company: "Travel Services Online",
      quote: "Fast, responsive, and beautiful—our customers consistently compliment our new website built by Profoelctron Solution.",
      rating: 5
    }
  ],
  "custom-software": [
    {
      name: "Brian Murphy",
      company: "Logistics Solutions",
      quote: "The custom inventory management system Profoelctron Solution built has streamlined our operations and reduced manual errors by 85%.",
      rating: 5
    },
    {
      name: "Karen Thompson",
      company: "Educational Technology",
      quote: "We had a complex vision for our learning platform, and Profoelctron Solution turned it into reality with exceptional attention to user needs.",
      rating: 4
    },
    {
      name: "Steve Anderson",
      company: "Manufacturing Inc.",
      quote: "Our production scheduling software from Profoelctron Solution has increased efficiency by 30% and provides insights we never had before.",
      rating: 5
    }
  ],
  "database-management": [
    {
      name: "Michelle Scott",
      company: "Data Storage Solutions",
      quote: "Profoelctron Solution's database optimization reduced our query times by 70% and significantly improved our application performance.",
      rating: 5
    },
    {
      name: "Daniel Kim",
      company: "Transaction Processing Inc.",
      quote: "The migration to a new database architecture was seamless with zero downtime—exactly what we needed for our 24/7 operation.",
      rating: 5
    },
    {
      name: "Rachel Foster",
      company: "Customer Relations Management",
      quote: "Their database team not only solved our immediate performance issues but also implemented a scaling strategy for our future growth.",
      rating: 4
    }
  ]
};

// Projects by service
export const projects = {
  "cloud-computing": [
    {
      id: 1,
      title: "Enterprise Cloud Migration",
      description: "Migrated a financial institution's legacy infrastructure to AWS, improving performance and reducing costs by 35%.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
      tags: ["AWS", "Migration", "Financial Services", "Security"],
      client: "Major Financial Institution"
    },
    {
      id: 2,
      title: "Multi-Cloud Orchestration",
      description: "Designed and implemented a hybrid cloud solution across AWS, Azure, and on-premises infrastructure for a global retail company.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop",
      tags: ["Multi-Cloud", "Kubernetes", "Orchestration", "Retail"],
      client: "Global Retail Chain"
    },
    {
      id: 3,
      title: "Cloud-Native Transformation",
      description: "Rebuilt a monolithic application as microservices using containerization and serverless technologies.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop",
      tags: ["Serverless", "Containers", "Microservices", "DevOps"],
      client: "Tech Startup"
    }
  ],
  "data-analysis": [
    {
      id: 1,
      title: "Predictive Sales Analytics",
      description: "Developed a machine learning model that predicts customer buying behavior with 92% accuracy, increasing sales by 28%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      tags: ["Machine Learning", "Sales", "Prediction", "Analytics"],
      client: "Retail Corporation"
    },
    {
      id: 2,
      title: "Healthcare Outcomes Analysis",
      description: "Created a data pipeline and visualization dashboard to track patient outcomes and improve treatment protocols.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
      tags: ["Healthcare", "Visualization", "Big Data", "Dashboard"],
      client: "Regional Hospital Network"
    },
    {
      id: 3,
      title: "Supply Chain Optimization",
      description: "Used advanced analytics to optimize inventory levels and distribution routes, reducing costs by 22%.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
      tags: ["Supply Chain", "Optimization", "Logistics", "Analytics"],
      client: "Manufacturing Company"
    }
  ],
  "cyber-security": [
    {
      id: 1,
      title: "Financial Security Overhaul",
      description: "Comprehensive security assessment and implementation of advanced protection measures for a banking system.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
      tags: ["Banking", "Security Assessment", "Compliance", "Encryption"],
      client: "National Bank"
    },
    {
      id: 2,
      title: "Threat Detection System",
      description: "Deployed an AI-powered threat detection system that identifies and responds to potential security breaches in real-time.",
      image: "https://images.unsplash.com/photo-1542451542907-6cf4d5fbd84e?w=800&auto=format&fit=crop",
      tags: ["AI", "Threat Detection", "Real-time", "Monitoring"],
      client: "Government Agency"
    },
    {
      id: 3,
      title: "Security Training Program",
      description: "Developed and delivered a comprehensive security awareness training program that reduced security incidents by 75%.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&auto=format&fit=crop",
      tags: ["Training", "Awareness", "Human Factor", "Security Culture"],
      client: "Corporate Enterprise"
    }
  ],
  "web-development": [
    {
      id: 1,
      title: "E-commerce Platform Rebuild",
      description: "Completely redesigned an outdated e-commerce platform, increasing mobile conversions by 120% and overall sales by 45%.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop",
      tags: ["E-commerce", "Responsive", "UX/UI", "Performance"],
      client: "Fashion Retailer"
    },
    {
      id: 2,
      title: "Educational Portal",
      description: "Built an interactive learning platform with personalized curriculum paths, video integration, and progress tracking.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop",
      tags: ["Education", "Interactive", "Responsive", "Accessibility"],
      client: "Online University"
    },
    {
      id: 3,
      title: "Real Estate Listing Platform",
      description: "Developed a property listing website with advanced search, virtual tours, and automated appointment scheduling.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      tags: ["Real Estate", "Search", "Virtual Tours", "Booking"],
      client: "Property Management Firm"
    }
  ],
  "custom-software": [
    {
      id: 1,
      title: "Inventory Management System",
      description: "Custom-built inventory solution with real-time tracking, predictive ordering, and supplier integration.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop",
      tags: ["Inventory", "Real-time", "Integration", "Desktop"],
      client: "Wholesale Distributor"
    },
    {
      id: 2,
      title: "Patient Management Platform",
      description: "HIPAA-compliant healthcare management system for scheduling, record keeping, and integrated billing.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
      tags: ["Healthcare", "HIPAA", "Records", "Scheduling"],
      client: "Medical Practice Group"
    },
    {
      id: 3,
      title: "Automated Workflow System",
      description: "Workflow automation software that reduced processing time by 65% and eliminated manual data entry errors.",
      image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=800&auto=format&fit=crop",
      tags: ["Automation", "Workflow", "Integration", "Business Process"],
      client: "Insurance Provider"
    }
  ],
  "database-management": [
    {
      id: 1,
      title: "Database Performance Optimization",
      description: "Restructured database architecture and optimized queries, reducing response times by 80% during peak loads.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
      tags: ["Performance", "Optimization", "SQL", "Scaling"],
      client: "E-commerce Platform"
    },
    {
      id: 2,
      title: "Data Migration & Integration",
      description: "Migrated legacy database systems to a modern architecture while maintaining data integrity and business continuity.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
      tags: ["Migration", "Legacy", "Integration", "Data Integrity"],
      client: "Manufacturing Corporation"
    },
    {
      id: 3,
      title: "Distributed Database Implementation",
      description: "Designed and implemented a globally distributed database system that ensures high availability and disaster recovery.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
      tags: ["Distributed", "High Availability", "Disaster Recovery", "Global"],
      client: "International Financial Services"
    }
  ]
};

// Partner logos
export const partners = [
  {
    id: 1,
    name: "Amazon Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  {
    id: 2,
    name: "Microsoft Azure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
  },
  {
    id: 3,
    name: "Google Cloud Platform",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
  },
  {
    id: 4,
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
  },
  {
    id: 5,
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  },
  {
    id: 6,
    name: "Salesforce",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
  }
];