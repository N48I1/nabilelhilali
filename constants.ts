import { Profile, Experience, Project, SkillCategory, Education, Certification } from './types';

export const PROFILE: Profile = {
  username: "N48I1",
  fullName: "El Hilali Nabil",
  title: "Cybersecurity & Network Engineer | SOC Enthusiast | Offensive Security Learner",
  tagline: "Always learning. Always improving. Always digging deeper.",
  description: "Cybersecurity engineering student passionate about defensive security, network intrusion detection, and offensive security methodologies. I specialize in building and tuning SOC environments, analyzing real-time threats, and designing resilient architectures using modern security stacks. I enjoy breaking things to understand how to defend them.",
  email: "nabil.elhilali.25@gmail.com",
  phone: "+212 6 48 85 20 24",
  location: "Nador, Morocco",
  linkedin: "https://www.linkedin.com/in/nabil-el-hilali-712224237/",
  portfolio: "https://www.nabilelhilali.tech",
  avatarUrl: "https://github.com/n48i1.png"
};

export const SKILLS: SkillCategory[] = [
  {
    category: "SOC & Blue Team",
    skills: ["Wazuh", "ELK Stack", "Suricata", "Zeek", "TheHive", "Cortex", "MISP", "Log Analysis", "Event Correlation"]
  },
  {
    category: "Offensive Security",
    skills: ["Nmap", "Metasploit", "Burp Suite", "Wireshark", "OpenVAS", "Nessus", "Hydra","Bettercap", "John the Ripper"]
  },
  {
    category: "Network & Infra",
    skills: ["TCP/IP", "VLANs", "VPNs", "Firewall Policies", "Cisco Switching/Routing", "FortiGate","FortiSwitch", "Docker","VMware", "Linux"]
  },
  {
    category: "Dev & Scripting",
    skills: ["Python","Java", "Bash", "PowerShell", "JavaScript", "React", "SQL", "Git"]
  }
];

export const EXPERIENCE: Experience[] = [
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
];

export const PROJECTS: Project[] = [
  {
    title: "SOC/SIEM - ENIAD LAB",
    tech: ["Wazuh", "TheHive", "Cortex", "MISP", "VMware ESXi"],
    description: "Designed and deployed a fully virtualized security monitoring environment on a DELL EMC² server.",
    details: [
      "Implemented Wazuh for log collection and detection.",
      "Integrated TheHive for case management and Cortex for automated analysis.",
      "Used MISP for threat intelligence enrichment.",
      "Established a complete end-to-end incident response workflow."
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
];

export const EDUCATION: Education[] = [
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
];

export const CERTIFICATIONS: Certification[] = [
  { name: "Cisco CCNA", status: "In Progress" },
  { name: "Fortinet NSE 1", status: "Completed" },
  { name: "Fortinet NSE 2", status: "Completed" },
  { name: "Fortinet NSE 3", status: "In Progress" }
];

export const ENGAGEMENTS: Experience[] = [
  {
    role: "In Person Trainer – Introduction to Git and GitHub",
    company: "ENIAD-Berkane",
    location: "Berkane",
    period: "Workshop Lead",
    imageUrl: "/assets/git_workshop.jpg", // Make sure to save your group photo as 'git_workshop.jpg' in public/assets
    tasks: [
      "Designed and facilitated workshops on Git and GitHub fundamentals.",
      "Provided mentorship and support for students engaged in collaborative projects utilizing distributed version control systems."
    ]
  },
  {
    role: "Co-lead – Linux 101: Beyond the GUI",
    company: "ENIAD-Berkane",
    location: "Berkane",
    period: "Training Lead",
    imageUrl: "/assets/linux_101.jpg", // Make sure to save your photo as 'linux_101.jpg' in public/assets
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
];