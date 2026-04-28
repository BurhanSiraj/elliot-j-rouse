export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  category: string;
  summary: string;
  image: string;
  href: string;
  tags: string[];
};

export type Expertise = {
  title: string;
  detail: string;
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  href: string;
};

export type Honor = {
  year: string;
  title: string;
  detail: string;
};

export const navItems: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Publications", href: "#publications" },
  { label: "Honors", href: "#honors" },
  { label: "About", href: "#about" },
  { label: "Lab", href: "#lab" },
  { label: "Contact", href: "#contact" },
];

export const heroLabels = [
  { label: "Based in", value: "Ann Arbor, Michigan" },
  { label: "Lab", value: "Neurobionics Lab" },
  { label: "Focus", value: "Mobility, prosthetics, wearable robotics" },
];

export const projects: Project[] = [
  {
    title: "Open-Source Leg",
    category: "Robotic prosthesis platform",
    summary:
      "A modular knee-ankle prosthesis platform designed to make high-performance bionic leg research more accessible across labs.",
    image: "/media/open-source-leg.jpg",
    href: "https://neurobionics.robotics.umich.edu/research/wearable-robotics/open-source-leg/",
    tags: ["Prosthetics", "Open hardware", "Clinical research"],
  },
  {
    title: "Variable Stiffness Orthosis",
    category: "Assistive robotics",
    summary:
      "Customizable mechanics for assistance and rehabilitation, connecting mechanical impedance with real human locomotion needs.",
    image: "/media/vso-action.gif",
    href: "https://neurobionics.robotics.umich.edu/research/publications/",
    tags: ["Orthoses", "Rehabilitation", "Human mobility"],
  },
  {
    title: "Variable Stiffness Prosthetic Ankle",
    category: "Patient preference and perception",
    summary:
      "Research on user-preferred ankle stiffness, stiffness perception thresholds, and the biomechanical effects of stiffness modulation.",
    image: "/media/vspa-foot.png",
    href: "https://neurobionics.robotics.umich.edu/research/wearable-robotics/variable-stiffness-prosthetic-ankle/",
    tags: ["Ankle mechanics", "Perception", "Biomechanics"],
  },
  {
    title: "Biomechanical Science",
    category: "Locomotion and control",
    summary:
      "System identification, dynamics, and control methods used to understand how the nervous system regulates movement.",
    image: "/media/neurobionics-lab.jpeg",
    href: "https://neurobionics.robotics.umich.edu/",
    tags: ["Controls", "Locomotion", "Neuroscience"],
  },
];

export const expertise: Expertise[] = [
  {
    title: "Wearable robotics",
    detail:
      "Designing robotic prostheses and exoskeletons that can be tested beyond narrow laboratory conditions.",
  },
  {
    title: "Human locomotion",
    detail:
      "Studying how people regulate joint mechanics during walking and other dynamic mobility tasks.",
  },
  {
    title: "Biomechanics and controls",
    detail:
      "Using system dynamics, identification, and control to connect human movement data with assistive device behavior.",
  },
  {
    title: "Human perception",
    detail:
      "Measuring how people perceive stiffness, damping, assistance, and mechanical changes during movement.",
  },
  {
    title: "Machine design",
    detail:
      "Building precise, portable, and reproducible hardware platforms for prosthetics and rehabilitation research.",
  },
  {
    title: "Clinical translation",
    detail:
      "Turning lab-grade robotic systems into tools that can improve mobility for people with disabilities.",
  },
];

export const publications: Publication[] = [
  {
    title:
      "Accurately Modeling the Output Torque and Stiffness of Ankle-Foot Orthoses with a Compliant Linkage Model",
    venue: "IEEE International Conference on Robotics and Automation",
    year: "2025",
    href: "https://neurobionics.robotics.umich.edu/research/publications/",
  },
  {
    title:
      "A Compensated Open-Loop Impedance Controller Evaluated on the Second-Generation Open-Source Leg Prosthesis",
    venue: "IEEE/ASME Transactions on Mechatronics",
    year: "2024",
    href: "https://doi.org/10.1109/TMECH.2024.3508469",
  },
  {
    title: "Design and clinical implementation of an open-source bionic leg",
    venue: "Nature Biomedical Engineering",
    year: "2020",
    href: "https://www.nature.com/articles/s41551-020-00619-3",
  },
];

export const honors: Honor[] = [
  {
    year: "2023",
    title: "Henry Russel Award",
    detail:
      "University of Michigan recognition for early or mid-career faculty excellence.",
  },
  {
    year: "2023",
    title: "Robotics Department Faculty Award",
    detail: "Departmental Faculty Award from the University of Michigan Department of Robotics.",
  },
  {
    year: "2020",
    title: "Fast Company's Most Innovative Robotics",
    detail:
      "The Neurobionics Lab was recognized in the robotics category for the Open Source Bionic Leg.",
  },
  {
    year: "2019",
    title: "NSF CAREER Award",
    detail: "National Science Foundation CAREER Award for early-career faculty research.",
  },
];

export const sourceLinks = [
  {
    label: "Neurobionics Lab",
    href: "https://neurobionics.robotics.umich.edu/",
  },
  {
    label: "University of Michigan profile",
    href: "https://me.engin.umich.edu/people/faculty/elliott-rouse/",
  },
  {
    label: "Publications",
    href: "https://neurobionics.robotics.umich.edu/research/publications/",
  },
];
