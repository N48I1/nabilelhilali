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
    title: "Cybersecurity & Network Engineer | SOC Enthusiast | Offensive Security Learner",
    tagline: "Always learning. Always improving. Always digging deeper.",
    shortDescription: "Cybersecurity engineering student aspiring Blue Team Operations, SOC Architecture, and Threat Intelligence.",
    description: "Cybersecurity engineering student passionate about defensive security, network intrusion detection, and offensive security methodologies. I specialize in building and tuning SOC environments, analyzing real-time threats, and designing resilient architectures using modern security stacks. I enjoy breaking things to understand how to defend them.",
    email: "nabil.elhilali.25@gmail.com",
    phone: "+212 6 48 85 20 24",
    location: "Nador, Morocco",
    linkedin: "https://www.linkedin.com/in/nabil-el-hilali-712224237/",
    portfolio: "https://www.nabilelhilali.tech",
    avatarUrl: "/assets/PERSO_RESUME.jpeg",
    resumeUrl: "/assets/EL HILALI NABIL RESUME 2025 EN.pdf"
  },
  SKILLS: [
    {
      category: "SOC & Blue Team",
      skills: ["Wazuh", "ELK Stack (Elasticsearch, Filebeat, Logstash, Kibana)", "Suricata", "Zeek", "TheHive", "Cortex", "MISP"]
    },
    {
      category: "Automation",
      skills: ["n8n", "Shuffle (shuffler.io)"]
    },
    {
      category: "Cloud, Virtualization & Containerization",
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
      category: "Data & Machine Learning",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Keras/TensorFlow basics"]
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
      year: "2023 - Ongoing"
    },
    {
      degree: "DEUST in Mathematics, Computer Science, and Physics",
      institution: "FSTh - Al Hoceima",
      year: "2021 - 2023"
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
    title: "Ingénieur Sécurité & Réseaux | Passionné par le SOC | Apprenti Offensive Security",
    tagline: "Toujours apprendre. S'améliorer sans cesse. Creuser toujours plus loin.",
    shortDescription: "Élève ingénieur en cybersécurité aspirant aux opérations Blue Team, à l'architecture SOC et à la Threat Intelligence.",
    description: "Élève ingénieur en cybersécurité passionné par la défense, la détection d'intrusions et les méthodologies offensives. Je me spécialise dans la construction et l'optimisation d'environnements SOC, l'analyse de menaces en temps réel et la conception d'architectures résilientes. J'aime casser les choses pour comprendre comment les défendre.",
    email: "nabil.elhilali.25@gmail.com",
    phone: "+212 6 48 85 20 24",
    location: "Nador, Maroc",
    linkedin: "https://www.linkedin.com/in/nabil-el-hilali-712224237/",
    portfolio: "https://www.nabilelhilali.tech",
    avatarUrl: "/assets/PERSO_RESUME.jpeg",
    resumeUrl: "/assets/NABIL EL HILALI CV 2025 FR.pdf" // Placeholder for French resume
  },
  SKILLS: [
    {
      category: "SOC & Blue Team",
      skills: ["Wazuh", "ELK Stack (Elasticsearch, Filebeat, Logstash, Kibana)", "Suricata", "Zeek", "TheHive", "Cortex", "MISP"]
    },
    {
      category: "Automatisation",
      skills: ["n8n", "Shuffle (shuffler.io)"]
    },
    {
      category: "Cloud, Virtualisation & Conteneurisation",
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
      category: "Données & Machine Learning",
      skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Keras/TensorFlow basics"]
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
      year: "2023 - En cours"
    },
    {
      degree: "DEUST en Mathématiques, Informatique et Physique",
      institution: "FSTh - Al Hoceima",
      year: "2021 - 2023"
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