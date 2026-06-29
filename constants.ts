import { Profile, Experience, Project, SkillCategory, Education, Certification, Achievement, UI } from './types';

interface Data {
  PROFILE: Profile;
  SKILLS: SkillCategory[];
  EXPERIENCE: Experience[];
  PROJECTS: Project[];
  EDUCATION: Education[];
  CERTIFICATIONS: Certification[];
  ACHIEVEMENTS: Achievement[];
  ENGAGEMENTS: Experience[];
  UI: UI;
}

const DATA_EN: Data = {
  UI: {
    status: "STATUS: Open to full-time cybersecurity roles.",
    greeting: "Hello, I'm",
    viewOperations: "View Projects",
    contactMe: "Contact Me",
    systemSpecs: "Profile",
    locationLabel: "Location",
    focusLabel: "Focus",
    experienceLabel: "Experience",
    downloadResume: "Download Resume",
    aboutMe: "About Me",
    technicalArsenal: "Skills & Tools",
    technicalArsenalDesc: "A comprehensive toolkit used across offensive and defensive security work.",
    featuredOperations: "Featured Projects",
    featuredOperationsDesc: "Key projects and deployments.",
    viewGithub: "View GitHub",
    professionalTimeline: "Experience",
    achievements: "Achievements",
    achievementsDesc: "Recognition earned in competitive cybersecurity events.",
    academicBackground: "Academic Background",
    communityTeaching: "Community & Teaching",
    communityTeachingDesc: "Sharing knowledge and mentoring the next generation of engineers.",
    designedBy: "Designed & Built by",
    rightsReserved: "All Rights Reserved."
  },
  PROFILE: {
    username: "N48I1",
    fullName: "El Hilali Nabil",
    title: "Network & IT Security Engineer — Defensive Cybersecurity & AI",
    tagline: "Securing systems. Leveraging AI. Engineering resilience.",
    shortDescription: "Network & IT Security engineer and MACC 2026 national CTF champion — specializing in defensive cybersecurity, SOC architecture, and AI-driven threat detection.",
    description: "I'm a Network & IT Security engineer specializing in defensive cybersecurity and AI-driven security operations. I design and tune SOC/SIEM environments, engineer detection rules and incident-response automation, and put LLMs and machine learning to work triaging threats and cutting analyst workload — most recently building a multi-agent, AI-driven SOC platform. A national CTF champion, I pair an attacker's mindset with an engineer's discipline to build systems that hold up under real-world pressure.",
    email: "nabil.elhilali.25@gmail.com",
    phone: "+212 6 48 85 20 24",
    location: "Temara, Morocco",
    linkedin: "https://www.linkedin.com/in/nabil-el-hilali-712224237/",
    portfolio: "https://www.nabilelhilali.tech",
    avatarUrl: "/assets/PERSO_RESUME1.jpeg",
    resumeUrl: "/assets/EL-HILALI_NABIL_RESUME_2026.pdf"
  },
  SKILLS: [
    {
      category: "SOC & Blue Team",
      skills: ["Wazuh", "ELK Stack (Elasticsearch, Logstash, Kibana)", "Suricata", "Zeek", "TheHive", "Cortex", "MISP", "MITRE ATT&CK", "Incident Response"]
    },
    {
      category: "AI Security & Automation",
      skills: ["LangGraph", "LangChain", "Multi-Agent Systems", "RAG", "Ollama", "OpenRouter", "ChromaDB", "pgvector", "Prompt Engineering", "Gemini API", "Mistral 7B", "STRIX Agent", "Shuffle", "n8n", "Detection & Response Automation"]
    },
    {
      category: "Cloud & Virtualization",
      skills: ["Microsoft Azure", "DigitalOcean", "VMware ESXi", "Proxmox VE", "Docker", "Docker Compose"]
    },
    {
      category: "Network Security",
      skills: ["TCP/IP", "VLANs", "VPNs", "Firewall Policies", "IDS/IPS", "SDN Security"]
    },
    {
      category: "Networks & Infrastructure",
      skills: ["FortiGate", "FortiSwitch", "Cisco switching/routing", "Dell EMC² & HPE servers"]
    },
    {
      category: "Offensive Security",
      skills: ["Nmap", "Wireshark", "Nessus", "OpenVAS", "Burp Suite", "Metasploit", "Hydra", "Hashcat", "John the Ripper", "FFUF", "Gobuster", "Nikto", "Bettercap"]
    },
    {
      category: "Dev & Scripting",
      skills: ["Python", "Bash", "PowerShell", "TypeScript", "JavaScript", "Java", "React", "FastAPI", "SQL", "PostgreSQL", "Git/GitHub"]
    },
    {
      category: "Data & ML",
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow / Keras", "Matplotlib"]
    }
  ],
  EXPERIENCE: [
    {
      role: "Network & IT Security Engineer",
      company: "Black Box Solutions",
      logoUrl: "/assets/bbs-logo.png",
      location: "Casablanca, Morocco",
      period: "September 2024 - Present",
      tasks: [
        "Administered and monitored network security infrastructure based on FortiGate firewalls — firewall policy management, site-to-site and remote-access VPNs, traffic inspection, NAT rules, and security event monitoring.",
        "Administered and configured enterprise network infrastructures including Cisco Switching & Routing and FortiSwitch environments.",
        "Implemented SIEM-integrated EDR/XDR capabilities with Wazuh, YARA rules, and MISP for endpoint monitoring, IOC enrichment, alert correlation, and threat detection.",
        "Administered and maintained virtualized infrastructures based on VMware ESXi and Proxmox VE, ensuring system availability, performance, and business continuity.",
        "Implemented and managed network security controls — firewall policies, VLAN segmentation, access control mechanisms, and secure network architectures.",
        "Participated in incident response activities, root cause analysis, and the implementation of corrective and preventive actions.",
        "Developed technical documentation, operating procedures, and infrastructure diagrams to support operational excellence and knowledge sharing.",
        "Collaborated with infrastructure, system, and security teams to ensure compliance with security standards and operational requirements."
      ]
    },
    {
      role: "End-of-Year Internship",
      company: "EVERNEX Morocco",
      logoUrl: "/assets/evernex-logo.png",
      location: "Casablanca, Morocco",
      period: "June - September 2023",
      tasks: [
        "Level 1 and Level 2 technical support, diagnosis, and incident resolution.",
        "On-site interventions on critical equipment in client Data Centers (HPE, Dell, EMC²).",
        "Design and virtual deployment of a Data Center infrastructure solution.",
        "Preparation of Low-Level Design (LLD) for the architecture.",
        "Network deployment simulation using EVE-NG."
      ]
    }
  ],
  PROJECTS: [
    {
      title: "AISOC — AI-DRIVEN SOC PLATFORM (AEGIS)",
      tech: ["LangGraph", "LangChain", "OpenRouter", "Ollama", "PostgreSQL", "pgvector", "Express", "Socket.IO", "React", "TypeScript"],
      description: "A full-stack, AI-driven Security Operations Center that automates alert triage, investigation, and incident response for analysts. Built during my internship at Black Box Solutions.",
      details: [
        "Multi-agent \"Hub-and-Swarm\" orchestration (LangGraph): a central planner dispatches specialized investigator agents in parallel across Triage, Investigation, and Composition phases.",
        "Ingests Wazuh-style alerts with real-time Socket.IO streaming to the analyst dashboard, automated MITRE ATT&CK mapping, remediation guidance, ticketing, and Markdown incident-report generation.",
        "pgvector-backed semantic memory and IOC history, multi-model LLM resilience (OpenRouter providers with local Ollama fallback), and false-positive short-circuiting for efficiency.",
        "React + Vite analyst frontend with an Express + PostgreSQL backend and JWT authentication."
      ]
    },
    {
      title: "RAG-POWERED RCA DECISION SUPPORT PLATFORM",
      tech: ["LangGraph", "LangChain", "Mistral 7B", "Ollama", "ChromaDB", "FastAPI", "React", "TypeScript"],
      description: "Designing a multi-agent AI platform that accelerates Root Cause Analysis for IT maintenance engineers — fully local, no GPU, no cloud.",
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
      degree: "Engineer's Degree — Network & Computer Security",
      institution: "ENIAD – Berkane",
      year: "2023 - 2026",
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
    { name: "Cisco CCNA", status: "Completed", logoUrl: "/assets/CCNA_logo.png" },
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
  ACHIEVEMENTS: [
    {
      title: "MACC 2026 CTF — Champions",
      event: "MACC 2026 Capture The Flag",
      organizer: "DGSSI (Moroccan General Directorate of Information Systems Security)",
      placement: "🥇 1st Place — Champions",
      rank: "gold",
      year: "2026",
      description: "Champions of the national CTF organized by Morocco's national cybersecurity authority (DGSSI), winning across offensive and defensive security challenges.",
      imageUrl: "/assets/macc-2026-team.jpg"
    },
    {
      title: "AIAC CTF — 3rd Place",
      event: "AIAC Capture The Flag",
      organizer: "AIAC",
      placement: "🥉 3rd Place",
      rank: "bronze",
      description: "Secured third place against competing teams in a multi-category cybersecurity competition.",
      imageUrl: "/assets/aiac-2026-team.jpg",
      imagePosition: "center top"
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
    status: "STATUT : Ouvert aux postes en cybersécurité (temps plein).",
    greeting: "Bonjour, je suis",
    viewOperations: "Voir les Projets",
    contactMe: "Me Contacter",
    systemSpecs: "Profil",
    locationLabel: "Lieu",
    focusLabel: "Focus",
    experienceLabel: "Expérience",
    downloadResume: "Télécharger CV",
    aboutMe: "À Propos",
    technicalArsenal: "Compétences & Outils",
    technicalArsenalDesc: "Un ensemble d'outils complet utilisé en sécurité offensive et défensive.",
    featuredOperations: "Projets Phares",
    featuredOperationsDesc: "Projets clés et déploiements.",
    viewGithub: "Voir GitHub",
    professionalTimeline: "Expérience",
    achievements: "Distinctions",
    achievementsDesc: "Reconnaissances obtenues lors de compétitions de cybersécurité.",
    academicBackground: "Parcours Académique",
    communityTeaching: "Communauté & Enseignement",
    communityTeachingDesc: "Partage de connaissances et mentorat de la prochaine génération d'ingénieurs.",
    designedBy: "Conçu & Construit par",
    rightsReserved: "Tous Droits Réservés."
  },
  PROFILE: {
    username: "N48I1",
    fullName: "El Hilali Nabil",
    title: "Ingénieur Réseaux & Sécurité IT — Cybersécurité Défensive & IA",
    tagline: "Sécuriser les systèmes. Exploiter l'IA. Concevoir la résilience.",
    shortDescription: "Ingénieur Réseaux & Sécurité IT et champion national du CTF MACC 2026 — spécialisé en cybersécurité défensive, architecture SOC et détection de menaces par IA.",
    description: "Ingénieur Réseaux & Sécurité IT spécialisé en cybersécurité défensive et en opérations de sécurité augmentées par l'IA. Je conçois et optimise des environnements SOC/SIEM, je développe des règles de détection et l'automatisation de la réponse aux incidents, et j'exploite les LLM et le machine learning pour trier les menaces et alléger la charge des analystes — avec, récemment, la création d'une plateforme SOC multi-agents pilotée par l'IA. Champion national de CTF, j'allie l'état d'esprit d'un attaquant à la rigueur d'un ingénieur pour bâtir des systèmes qui tiennent sous pression réelle.",
    email: "nabil.elhilali.25@gmail.com",
    phone: "+212 6 48 85 20 24",
    location: "Temara, Maroc",
    linkedin: "https://www.linkedin.com/in/nabil-el-hilali-712224237/",
    portfolio: "https://www.nabilelhilali.tech",
    avatarUrl: "/assets/PERSO_RESUME1.jpeg",
    resumeUrl: "/assets/EL-HILALI_NABIL_CV_2026.pdf"
  },
  SKILLS: [
    {
      category: "SOC & Blue Team",
      skills: ["Wazuh", "ELK Stack (Elasticsearch, Logstash, Kibana)", "Suricata", "Zeek", "TheHive", "Cortex", "MISP", "MITRE ATT&CK", "Réponse aux Incidents"]
    },
    {
      category: "Sécurité IA & Automatisation",
      skills: ["LangGraph", "LangChain", "Systèmes Multi-Agents", "RAG", "Ollama", "OpenRouter", "ChromaDB", "pgvector", "Prompt Engineering", "Gemini API", "Mistral 7B", "STRIX Agent", "Shuffle", "n8n", "Automatisation Détection & Réponse"]
    },
    {
      category: "Cloud & Virtualisation",
      skills: ["Microsoft Azure", "DigitalOcean", "VMware ESXi", "Proxmox VE", "Docker", "Docker Compose"]
    },
    {
      category: "Sécurité Réseau",
      skills: ["TCP/IP", "VLANs", "VPNs", "Règles de pare-feu", "IDS/IPS", "Sécurité SDN"]
    },
    {
      category: "Réseaux & Infrastructure",
      skills: ["FortiGate", "FortiSwitch", "Cisco switching/routing", "Dell EMC² & HPE servers"]
    },
    {
      category: "Sécurité Offensive",
      skills: ["Nmap", "Wireshark", "Nessus", "OpenVAS", "Burp Suite", "Metasploit", "Hydra", "Hashcat", "John the Ripper", "FFUF", "Gobuster", "Nikto", "Bettercap"]
    },
    {
      category: "Développement & Scripts",
      skills: ["Python", "Bash", "PowerShell", "TypeScript", "JavaScript", "Java", "React", "FastAPI", "SQL", "PostgreSQL", "Git/GitHub"]
    },
    {
      category: "Data & ML",
      skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow / Keras", "Matplotlib"]
    }
  ],
  EXPERIENCE: [
    {
      role: "Ingénieur Réseaux & Sécurité IT",
      company: "Black Box Solutions",
      logoUrl: "/assets/bbs-logo.png",
      location: "Casablanca, Maroc",
      period: "Septembre 2024 - Présent",
      tasks: [
        "Administration et supervision d'une infrastructure de sécurité réseau basée sur des pare-feux FortiGate — gestion des politiques de filtrage, VPN site-à-site et accès distant, inspection du trafic, règles NAT et surveillance des événements de sécurité.",
        "Administration et configuration d'infrastructures réseau d'entreprise, incluant le Switching & Routing Cisco et les environnements FortiSwitch.",
        "Mise en place de capacités EDR/XDR intégrées au SIEM avec Wazuh, règles YARA et MISP pour la surveillance des endpoints, l'enrichissement d'IOC, la corrélation d'alertes et la détection des menaces.",
        "Administration et maintenance d'infrastructures virtualisées basées sur VMware ESXi et Proxmox VE, garantissant disponibilité, performance et continuité d'activité.",
        "Mise en œuvre et gestion de contrôles de sécurité réseau — politiques de pare-feu, segmentation VLAN, mécanismes de contrôle d'accès et architectures réseau sécurisées.",
        "Participation aux activités de réponse aux incidents, à l'analyse des causes racines et à la mise en œuvre d'actions correctives et préventives.",
        "Rédaction de documentation technique, de procédures d'exploitation et de schémas d'infrastructure pour soutenir l'excellence opérationnelle et le partage des connaissances.",
        "Collaboration avec les équipes infrastructure, systèmes et sécurité pour assurer la conformité aux standards de sécurité et aux exigences opérationnelles."
      ]
    },
    {
      role: "Stage de fin d'année",
      company: "EVERNEX Maroc",
      logoUrl: "/assets/evernex-logo.png",
      location: "Casablanca, Maroc",
      period: "Juin - Septembre 2023",
      tasks: [
        "Support technique Niveau 1 et Niveau 2, diagnostic et résolution d'incidents.",
        "Interventions sur site sur des équipements critiques dans les Data Centers clients (HPE, Dell, EMC²).",
        "Conception et déploiement virtuel d'une solution d'infrastructure Data Center.",
        "Préparation du Low-Level Design (LLD) pour l'architecture.",
        "Simulation de déploiement réseau avec EVE-NG."
      ]
    }
  ],
  PROJECTS: [
    {
      title: "AISOC — PLATEFORME SOC PILOTÉE PAR L'IA (AEGIS)",
      tech: ["LangGraph", "LangChain", "OpenRouter", "Ollama", "PostgreSQL", "pgvector", "Express", "Socket.IO", "React", "TypeScript"],
      description: "Un SOC (Security Operations Center) full-stack piloté par l'IA, automatisant le tri des alertes, l'investigation et la réponse aux incidents pour les analystes. Réalisé lors de mon stage chez Black Box Solutions.",
      details: [
        "Orchestration multi-agents « Hub-and-Swarm » (LangGraph) : un planificateur central dispatche des agents investigateurs spécialisés en parallèle sur les phases Triage, Investigation et Composition.",
        "Ingestion d'alertes de type Wazuh avec streaming temps réel (Socket.IO) vers le tableau de bord analyste, mapping MITRE ATT&CK automatisé, recommandations de remédiation, ticketing et génération de rapports d'incident en Markdown.",
        "Mémoire sémantique et historique d'IOC basés sur pgvector, résilience multi-modèles (fournisseurs OpenRouter avec fallback Ollama local) et court-circuitage des faux positifs pour l'efficacité.",
        "Frontend analyste React + Vite avec un backend Express + PostgreSQL et authentification JWT."
      ]
    },
    {
      title: "PLATEFORME D'AIDE À LA DÉCISION RCA AUGMENTÉE PAR RAG",
      tech: ["LangGraph", "LangChain", "Mistral 7B", "Ollama", "ChromaDB", "FastAPI", "React", "TypeScript"],
      description: "Conception d'une plateforme IA multi-agents accélérant l'analyse de cause racine (RCA) pour les ingénieurs de maintenance IT — entièrement locale, sans GPU, sans cloud.",
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
      degree: "Diplôme d'Ingénieur — Réseaux et Sécurité Informatique",
      institution: "ENIAD – Berkane",
      year: "2023 - 2026",
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
    { name: "Cisco CCNA", status: "Terminé", logoUrl: "/assets/CCNA_logo.png" },
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
  ACHIEVEMENTS: [
    {
      title: "CTF MACC 2026 — Champions",
      event: "Capture The Flag MACC 2026",
      organizer: "DGSSI (Direction Générale de la Sécurité des Systèmes d'Information)",
      placement: "🥇 1ère Place — Champions",
      rank: "gold",
      year: "2026",
      description: "Champions du CTF national organisé par l'autorité nationale marocaine de cybersécurité (DGSSI), à travers des épreuves de sécurité offensive et défensive.",
      imageUrl: "/assets/macc-2026-team.jpg"
    },
    {
      title: "CTF AIAC — 3ème Place",
      event: "Capture The Flag AIAC",
      organizer: "AIAC",
      placement: "🥉 3ème Place",
      rank: "bronze",
      description: "Troisième place face aux équipes concurrentes lors d'une compétition de cybersécurité multi-catégories.",
      imageUrl: "/assets/aiac-2026-team.jpg",
      imagePosition: "center top"
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