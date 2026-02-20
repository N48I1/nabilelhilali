import { Profile, Experience, Project, SkillCategory, Education, Certification, UI } from './types';

interface Data {
  PROFILE: Profile;
  SKILLS: SkillCategory[];
  EXPERIENCE: Experience[];
  PROJECTS: Project[];
  EDUCATION: Education[];
  CERTIFICATIONS: Certification[];
  ENGAGEMENTS: Experience[];
  UI: UI;
}

const DATA_EN: Data = {
  UI: {
    status: "STATUS: Open to a 4–6 month internship beginning February 2026.",
    greeting: "Hello, I'm",
    viewOperations: "View Operations",
    contactMe: "Contact Me",
    systemSpecs: "System Specs",
    locationLabel: "Location",
    focusLabel: "Focus",
    experienceLabel: "Experience",
    downloadResume: "Download Resume",
    aboutMe: "About Me",
    technicalArsenal: "Technical Arsenal",
    technicalArsenalDesc: "A comprehensive toolkit utilized for offensive and defensive security operations.",
    featuredOperations: "Featured Operations",
    featuredOperationsDesc: "Key projects and deployments.",
    viewGithub: "View GitHub",
    professionalTimeline: "Professional Timeline",
    academicBackground: "Academic Background",
    communityTeaching: "Community & Teaching",
    communityTeachingDesc: "Sharing knowledge and mentoring the next generation of engineers.",
    designedBy: "Designed & Built by",
    rightsReserved: "All Rights Reserved."
  },
  PROFILE: {
    username: "N48I1",
    fullName: "El Hilali Nabil",
    title: "Network & IT Security Engineering Student — Defensive Cybersecurity & AI",
    tagline: "Securing systems. Leveraging AI. Engineering resilience.",
    shortDescription: "Network & IT Security engineering student specializing in defensive cybersecurity, SOC architecture, and AI-driven threat detection.",
    description: "Network & IT Security engineering student passionate about defensive cybersecurity and AI-powered security operations. I specialize in building and tuning SOC environments, leveraging machine learning for threat detection and incident response automation, and designing resilient network architectures. Combining deep security expertise with AI to stay ahead of evolving threats.",
    email: "nabil.elhilali.25@gmail.com",
    phone: "+212 6 48 85 20 24",
    location: "Casablanca - Oasis, Morocco",
    linkedin: "https://www.linkedin.com/in/nabil-el-hilali-712224237/",
    portfolio: "https://www.nabilelhilali.tech",
    avatarUrl: "/assets/PERSO_RESUME1.jpeg",
    resumeUrl: "/assets/EL-HILALI_NABIL_RESUME_2026.pdf"
  },
  SKILLS: [
    {
      category: "SOC & Blue Team",
      skills: ["Wazuh", "ELK Stack (Elasticsearch, Filebeat, Logstash, Kibana)", "Suricata", "Zeek", "TheHive", "Cortex", "MISP"]
    },
    {
      category: "SOAR & Automation",
      skills: ["n8n", "Shuffle (shuffler.io)"]
    },
    {
      category: "Cloud / Virtualization",
      skills: ["Microsoft Azure", "DigitalOcean", "VMware ESXi", "Proxmox VE", "Docker", "Docker Compose"]
    },
    {
      category: "Network Security",
      skills: ["TCP/IP", "VLANs", "VPNs", "Firewall Policies", "IDS/IPS", "SDN security (IOTA 2.0)"]
    },
    {
      category: "Networks & Infrastructure",
      skills: ["FortiGate", "FortiSwitch", "Cisco switching/routing", "Dell EMC² & HPE servers"]
    },
    {
      category: "Pentesting / Offensive Security",
      skills: ["Nmap", "Wireshark", "Nessus", "OpenVAS", "Burp Suite", "Nikto", "Gobuster", "FFUF", "Hydra", "Metasploit", "Bettercap", "Dirsearch", "John the Ripper", "Hashcat", "STRIX Agent"]
    },
    {
      category: "Dev & Scripting",
      skills: ["Python", "Bash", "PowerShell", "JavaScript", "Java", "React", "SQL", "Git/GitHub"]
    },
    {
      category: "AI & Data",
      skills: ["Gemini API", "LangChain (basics)", "RAG", "Prompt Engineering", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Keras / TensorFlow (basics)"]
    }
  ],
  EXPERIENCE: [
    {
      role: "End-of-Year Internship",
      company: "EVERNEX Morocco",
      location: "Casablanca, Morocco",
      period: "July - August 2025",
      tasks: [
        "Level 1 and Level 2 technical support, diagnosis, and incident resolution.",
        "Intervention on essential equipment in client Data Centers (HPE, DELL, EMC²).",
        "Technical Project: Design and Virtual Deployment of a Data Center Solution for Maroc Telecom RAN 5G 2025.",
        "Preparation of Low-Level Design (LLD) for architecture.",
        "Network deployment simulation using EVE-NG."
      ]
    }
  ],
  PROJECTS: [
    {
      title: "RAG-POWERED RCA DECISION SUPPORT PLATFORM",
      tech: ["LangGraph", "LangChain", "Mistral 7B", "Ollama", "ChromaDB", "FastAPI", "React", "TypeScript"],
      description: "Designing a multi-agent AI platform that accelerates Root Cause Analysis for IT maintenance engineers — fully local, no GPU, no cloud.",
      status: "Ongoing",
      details: [
        "6-agent architecture (LangGraph) for email parsing, log analysis, RCA generation, action planning, and validation — all orchestrated via state machine.",
        "RAG pipeline with ChromaDB for semantic similarity search against historical cases, achieving 80%+ RCA accuracy.",
        "Runs entirely on CPU (Mistral 7B Q4 + Phi-3 Mini via Ollama) with ~4-6 GB RAM footprint — zero external API calls.",
        "Browser extension (Chrome Manifest V3) for automated ticket extraction, with mTLS + JWT security."
      ]
    },
    {
      title: "SOC / SIEM, SOAR & AI – ENIAD LAB",
      tech: ["Wazuh", "TheHive", "Cortex", "MISP", "Shuffle", "Gemini API", "VMware ESXi"],
      description: "Implementation of an automated SOC environment on virtualized DELL EMC² infrastructure under VMware ESXi.",
      details: [
        "Integrated Wazuh for detection, TheHive for Incident Response, Cortex and MISP for analysis and enrichment.",
        "Implemented SOAR automation via Shuffle coupled with Gemini API for intelligent incident creation.",
        "Enabled proactive supervision and centralized response on Windows endpoints and web infrastructures."
      ]
    },
    {
      title: "SIEM DETECTION LAB",
      tech: ["ELK Stack", "Suricata", "Zeek", "Docker", "Filebeat"],
      description: "Deployed and configured a complete SIEM environment on Ubuntu for real-time traffic analysis.",
      details: [
        "Integrated Filebeat, Elasticsearch, and Kibana using Docker Compose.",
        "Achieved centralized visualization of Suricata and Zeek logs.",
        "Enhanced network visibility by monitoring live traffic and generating security alerts."
      ]
    },
    {
      title: "IOTASDN – IOTA 2.0 SMART CONTRACTS",
      tech: ["React", "TypeScript", "Flask", "Ryu SDN", "IOTA 2.0"],
      description: "Developed a security-enhanced SDN platform combining blockchain and SDN.",
      details: [
        "Implemented decentralized access control and authority management.",
        "Developed DoS attack detection mechanisms.",
        "Combined React frontend with Flask backend and Ryu controller."
      ]
    }
  ],
  EDUCATION: [
    {
      degree: "Engineering Student in Network & Computer Security",
      institution: "ENIAD – Berkane",
      year: "2023 - Ongoing",
      url: "http://eniad.ump.ma"
    },
    {
      degree: "DEUST in Mathematics, Computer Science, and Physics",
      institution: "FSTh - Al Hoceima",
      year: "2021 - 2023",
      url: "http://fsth.ma"
    },
    {
      degree: "French Baccalaureate in Physical Sciences",
      institution: "Taha Hussein High School",
      year: "2020 - 2021"
    }
  ],
  CERTIFICATIONS: [
    { name: "Cisco CCNA", status: "In Progress", logoUrl: "/assets/CCNA_logo.png" },
    {
      name: "Fortinet NSE 1",
      status: "Completed",
      logoUrl: "/assets/NSE1_logo.png",
      imageUrl: "/assets/Fortinet Certified Fundamentals in Cybersecurity_page-0001.jpg"
    },
    { name: "Fortinet NSE 2", status: "In Progress", logoUrl: "/assets/NSE2_logo.png" },
    {
      name: "Fortinet NSE 3",
      status: "Completed",
      logoUrl: "/assets/NSE3_logo.png",
      imageUrl: "/assets/Fortinet Certified Associate in Cybersecurity_page-0001.jpg"
    }
  ],
  ENGAGEMENTS: [
    {
      role: "In Person Trainer – Introduction to Git and GitHub",
      company: "ENIAD-Berkane",
      location: "Berkane",
      period: "Workshop Lead",
      imageUrl: "/assets/git_workshop.jpg",
      tasks: [
        "Designed and facilitated workshops on Git and GitHub fundamentals.",
        "Provided mentorship and support for students engaged in collaborative projects utilizing distributed version control systems."
      ]
    },
    {
      role: "Linux 101: Beyond the GUI",
      company: "ENIAD-Berkane",
      location: "Berkane",
      period: "Training Lead",
      imageUrl: "/assets/linux_101.jpg",
      tasks: [
        "Guided participants through Linux fundamentals, from OS architecture and terminal usage to advanced CLI operations.",
        "Introduced core security concepts including SSH configuration, reverse shells, and backdoor mechanisms.",
        "Designed and facilitated a hands-on CTF challenge where attendees SSH'd into a custom server to locate hidden flags."
      ]
    },
    {
      role: "Online Trainer – Introduction to Bash (Linux)",
      company: "Community Initiative",
      location: "Remote",
      period: "Course Creator",
      tasks: [
        "Developed and presented an online course on the fundamentals of Linux and Bash scripting.",
        "Created interactive sessions and practical exercises to enhance hands-on learning."
      ]
    }
  ]
};

const DATA_FR: Data = {
  UI: {
    status: "STATUT : Recherche un stage de 4 à 6 mois débutant en Février 2026.",
    greeting: "Bonjour, je suis",
    viewOperations: "Voir Opérations",
    contactMe: "Me Contacter",
    systemSpecs: "Spécifications Système",
    locationLabel: "Lieu",
    focusLabel: "Focus",
    experienceLabel: "Expérience",
    downloadResume: "Télécharger CV",
    aboutMe: "À Propos",
    technicalArsenal: "Arsenal Technique",
    technicalArsenalDesc: "Une boîte à outils complète utilisée pour les opérations de sécurité offensive et défensive.",
    featuredOperations: "Opérations Mises en Avant",
    featuredOperationsDesc: "Projets clés et déploiements.",
    viewGithub: "Voir GitHub",
    professionalTimeline: "Chronologie Professionnelle",
    academicBackground: "Parcours Académique",
    communityTeaching: "Communauté & Enseignement",
    communityTeachingDesc: "Partage de connaissances et mentorat de la prochaine génération d'ingénieurs.",
    designedBy: "Conçu & Construit par",
    rightsReserved: "Tous Droits Réservés."
  },
  PROFILE: {
    username: "N48I1",
    fullName: "El Hilali Nabil",
    title: "Élève Ingénieur Réseaux & Sécurité IT — Cybersécurité Défensive & IA",
    tagline: "Sécuriser les systèmes. Exploiter l'IA. Concevoir la résilience.",
    shortDescription: "Élève ingénieur en réseaux et sécurité IT, spécialisé en cybersécurité défensive, architecture SOC et détection de menaces par IA.",
    description: "Élève ingénieur en réseaux et sécurité IT, passionné par la cybersécurité défensive et les opérations de sécurité augmentées par l'IA. Je me spécialise dans la construction et l'optimisation d'environnements SOC, l'exploitation du machine learning pour la détection de menaces et l'automatisation de la réponse aux incidents, ainsi que la conception d'architectures réseau résilientes. Allier expertise sécurité et IA pour anticiper les menaces émergentes.",
    email: "nabil.elhilali.25@gmail.com",
    phone: "+212 6 48 85 20 24",
    location: "Casablanca - Oasis, Maroc",
    linkedin: "https://www.linkedin.com/in/nabil-el-hilali-712224237/",
    portfolio: "https://www.nabilelhilali.tech",
    avatarUrl: "/assets/PERSO_RESUME1.jpeg",
    resumeUrl: "/assets/EL-HILALI_NABIL_CV_2026.pdf"
  },
  SKILLS: [
    {
      category: "SOC & Blue Team",
      skills: ["Wazuh", "ELK Stack (Elasticsearch, Filebeat, Logstash, Kibana)", "Suricata", "Zeek", "TheHive", "Cortex", "MISP"]
    },
    {
      category: "SOAR & Automatisation",
      skills: ["n8n", "Shuffle (shuffler.io)"]
    },
    {
      category: "Cloud / Virtualisation",
      skills: ["Microsoft Azure", "DigitalOcean", "VMware ESXi", "Proxmox VE", "Docker", "Docker Compose"]
    },
    {
      category: "Sécurité Réseau",
      skills: ["TCP/IP", "VLANs", "VPNs", "Règles de pare-feu", "IDS/IPS", "SDN security (IOTA 2.0)"]
    },
    {
      category: "Réseaux & Infrastructure",
      skills: ["FortiGate", "FortiSwitch", "Cisco switching/routing", "Dell EMC² & HPE servers"]
    },
    {
      category: "Pentesting / Sécurité Offensive",
      skills: ["Nmap", "Wireshark", "Nessus", "OpenVAS", "Burp Suite", "Nikto", "Gobuster", "FFUF", "Hydra", "Metasploit", "Bettercap", "Dirsearch", "John the Ripper", "Hashcat", "STRIX Agent"]
    },
    {
      category: "Programmation & Scripts",
      skills: ["Python", "Bash", "PowerShell", "JavaScript", "Java", "React", "SQL", "Git/GitHub"]
    },
    {
      category: "IA & Data",
      skills: ["Gemini API", "LangChain (bases)", "RAG", "Prompt Engineering", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Keras / TensorFlow (bases)"]
    }
  ],
  EXPERIENCE: [
    {
      role: "Stage Technique",
      company: "EVERNEX Maroc",
      location: "Casablanca, Maroc",
      period: "Juillet - Août 2025",
      tasks: [
        "Support technique Niveau 1 et Niveau 2, diagnostic et résolution d'incidents.",
        "Intervention sur équipements essentiels dans les Data Centers clients (HPE, DELL, EMC²).",
        "Projet Technique : Conception et déploiement virtuel d'une solution Data Center pour Maroc Telecom RAN 5G 2025.",
        "Préparation du Low-Level Design (LLD) pour l'architecture.",
        "Simulation de déploiement réseau avec EVE-NG."
      ]
    }
  ],
  PROJECTS: [
    {
      title: "PLATEFORME D'AIDE À LA DÉCISION RCA AUGMENTÉE PAR RAG",
      tech: ["LangGraph", "LangChain", "Mistral 7B", "Ollama", "ChromaDB", "FastAPI", "React", "TypeScript"],
      description: "Conception d'une plateforme IA multi-agents accélérant l'analyse de cause racine (RCA) pour les ingénieurs de maintenance IT — entièrement locale, sans GPU, sans cloud.",
      status: "En cours",
      details: [
        "Architecture à 6 agents (LangGraph) pour le parsing d'emails, l'analyse de logs, la génération de RCA, la planification d'actions et la validation — orchestrés via machine à états.",
        "Pipeline RAG avec ChromaDB pour la recherche sémantique dans les cas historiques, atteignant 80%+ de précision RCA.",
        "Fonctionne entièrement sur CPU (Mistral 7B Q4 + Phi-3 Mini via Ollama) avec ~4-6 Go de RAM — zéro appel API externe.",
        "Extension navigateur (Chrome Manifest V3) pour l'extraction automatisée de tickets, sécurisée par mTLS + JWT."
      ]
    },
    {
      title: "SOC / SIEM, SOAR & AI – ENIAD LAB",
      tech: ["Wazuh", "TheHive", "Cortex", "MISP", "Shuffle", "Gemini API", "VMware ESXi"],
      description: "Mise en œuvre d’un environnement SOC automatisé sur infrastructure DELL EMC² virtualisée sous VMware ESXi.",
      details: [
        "Intégration de Wazuh pour la détection, TheHive pour l’Incident Response, Cortex et MISP pour l’analyse et l’enrichissement.",
        "Automatisation SOAR via Shuffle couplée à une API Gemini pour la création intelligente d’incidents.",
        "Supervision proactive et réponse centralisée sur endpoints Windows et infrastructures web."
      ]
    },
    {
      title: "SIEM DETECTION LAB",
      tech: ["ELK Stack", "Suricata", "Zeek", "Docker", "Filebeat"],
      description: "Déploiement et configuration d'un environnement SIEM complet sur Ubuntu pour l'analyse de trafic en temps réel.",
      details: [
        "Intégration de Filebeat, Elasticsearch et Kibana via Docker Compose.",
        "Visualisation centralisée des logs Suricata et Zeek.",
        "Amélioration de la visibilité réseau en surveillant le trafic en direct et en générant des alertes de sécurité."
      ]
    },
    {
      title: "IOTASDN – IOTA 2.0 SMART CONTRACTS",
      tech: ["React", "TypeScript", "Flask", "Ryu SDN", "IOTA 2.0"],
      description: "Développement d'une plateforme SDN sécurisée combinant blockchain et SDN.",
      details: [
        "Implémentation d'un contrôle d'accès décentralisé et d'une gestion d'autorité.",
        "Développement de mécanismes de détection d'attaques DoS.",
        "Combinaison d'un frontend React avec un backend Flask et un contrôleur Ryu."
      ]
    }
  ],
  EDUCATION: [
    {
      degree: "Élève Ingénieur en Réseaux et Sécurité Informatique",
      institution: "ENIAD – Berkane",
      year: "2023 - En cours",
      url: "http://eniad.ump.ma"
    },
    {
      degree: "DEUST en Mathématiques, Informatique et Physique",
      institution: "FSTh - Al Hoceima",
      year: "2021 - 2023",
      url: "http://fsth.ma"
    },
    {
      degree: "Baccalauréat Français en Sciences Physiques",
      institution: "Lycée Taha Hussein",
      year: "2020 - 2021"
    }
  ],
  CERTIFICATIONS: [
    { name: "Cisco CCNA", status: "En cours", logoUrl: "/assets/CCNA_logo.png" },
    {
      name: "Fortinet NSE 1",
      status: "Terminé",
      logoUrl: "/assets/NSE1_logo.png",
      imageUrl: "/assets/Fortinet Certified Fundamentals in Cybersecurity_page-0001.jpg"
    },
    { name: "Fortinet NSE 2", status: "En cours", logoUrl: "/assets/NSE2_logo.png" },
    {
      name: "Fortinet NSE 3",
      status: "Terminé",
      logoUrl: "/assets/NSE3_logo.png",
      imageUrl: "/assets/Fortinet Certified Associate in Cybersecurity_page-0001.jpg"
    }
  ],
  ENGAGEMENTS: [
    {
      role: "Formateur Présentiel – Introduction à Git et GitHub",
      company: "ENIAD-Berkane",
      location: "Berkane",
      period: "Responsable Atelier",
      imageUrl: "/assets/git_workshop.jpg",
      tasks: [
        "Conception et animation d'ateliers sur les fondamentaux de Git et GitHub.",
        "Mentorat et support pour les étudiants engagés dans des projets collaboratifs utilisant des systèmes de contrôle de version distribués."
      ]
    },
    {
      role: "Linux 101: Au-delà de l'interface graphique",
      company: "ENIAD-Berkane",
      location: "Berkane",
      period: "Responsable Formation",
      imageUrl: "/assets/linux_101.jpg",
      tasks: [
        "Guidage des participants à travers les fondamentaux de Linux, de l'architecture OS aux opérations avancées en ligne de commande.",
        "Introduction aux concepts clés de sécurité incluant la configuration SSH, les reverse shells et les mécanismes de backdoor.",
        "Conception et animation d'un challenge CTF pratique où les participants se connectent via SSH à un serveur personnalisé pour trouver des drapeaux cachés."
      ]
    },
    {
      role: "Formateur en ligne – Introduction à Bash (Linux)",
      company: "Initiative Communautaire",
      location: "À distance",
      period: "Créateur de Cours",
      tasks: [
        "Développement et présentation d'un cours en ligne sur les fondamentaux de Linux et du scripting Bash.",
        "Création de sessions interactives et d'exercices pratiques pour renforcer l'apprentissage par la pratique."
      ]
    }
  ]
};

export const DATA = {
  en: DATA_EN,
  fr: DATA_FR
};