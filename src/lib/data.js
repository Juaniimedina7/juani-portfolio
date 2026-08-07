// Single source of truth for all portfolio content.

export const profile = {
  name: "Juan Ignacio",
  lastName: "Medina Fracchia",
  shortName: "Juan Medina",
  initials: "JM",
  role: "Software & Web Developer",
  // Hero intro — bold lead + short context. Keep it punchy, not a CV.
  lead: "Construyo productos web de punta a punta.",
  rest: "Del testing automatizado en Python al último frame de una animación.",
  location: "Buenos Aires, AR",
  timezone: "America/Argentina/Buenos_Aires",
  availability: "Disponible",
  email: "juanignaciomedina02@gmail.com",
  phone: "+54 9 11 6738 5354",
  whatsapp: "5491167385354",
  linkedin: "https://www.linkedin.com/in/juan-ignacio-medina-fracchia-5418101a9/",
  github: "https://github.com/Juaniimedina7",
  satori: "https://satori.ci",
};

export const stats = [
  { value: "4+", label: "años de experiencia" },
  { value: "6", label: "en producción" },
  { value: "AWS", label: "cloud certified" },
];

// Terminal lines for the hero signature (Satori-style assertion log).
export const terminalLines = [
  { cmd: "satori run ./juan.yml", delay: 0 },
  { log: "✔ role        Software & Web Developer", tone: "ok" },
  { log: "✔ stack       Python · Next.js · React · AWS", tone: "ok" },
  { log: "✔ shipped     6 products · 3 live domains", tone: "ok" },
  { log: "✔ status      open to work", tone: "ok" },
  { log: "all assertions passed · 100%", tone: "pass" },
];

// Short "how I work" cards — labels + one tiny line each.
export const focus = [
  { k: "01", title: "Performance", line: "Lighthouse en verde, sin excusas." },
  { k: "02", title: "Detalle", line: "Micro-interacciones que se sienten." },
  { k: "03", title: "End-to-end", line: "Del research de UX al deploy." },
];

export const skillGroups = [
  { title: "Frontend", items: ["React", "Next.js", "JavaScript", "Tailwind", "Framer Motion"] },
  { title: "Backend", items: ["Python", "Node.js", "MySQL", "PostgreSQL", "Supabase"] },
  { title: "Cloud / DevOps", items: ["AWS", "CI/CD", "YAML", "Docker", "Git"] },
  { title: "Craft", items: ["UI/UX", "SEO", "a11y", "WordPress", "Stripe"] },
];

export const marquee = [
  "Python", "Next.js", "React", "AWS", "Tailwind", "Framer Motion",
  "Supabase", "PostgreSQL", "YAML", "Stripe", "Auth0", "CI/CD",
];

export const experience = [
  {
    company: "Satori CI",
    role: "Software Developer",
    period: "2022 — now",
    url: "https://satori.ci",
    line: "Testing automatizado y seguridad. Python, infra en AWS y playbooks YAML.",
    tags: ["Python", "AWS", "CI/CD"],
  },
  {
    company: "Freelance",
    role: "Full-Stack & Diseño",
    period: "2021 — now",
    url: null,
    line: "Productos web para clientes reales, del diseño al deploy en Vercel.",
    tags: ["React", "Next.js", "UI/UX"],
  },
];

export const projects = [
  {
    name: "Satori CI",
    logo: "satori",
    kind: "Producto",
    year: "2022",
    description:
      "Plataforma de testing automatizado y seguridad. Landing en Next.js e integraciones de Stripe y Auth0.",
    stack: ["Next.js", "React", "Framer Motion", "Auth0"],
    href: "https://satori.ci",
    accent: "#e35c7c",
    span: "lg:col-span-7",
    logoPad: "p-9",
  },
  {
    name: "SAMPRE",
    logo: "sampre",
    kind: "Cliente",
    year: "2024",
    description:
      "Sitio institucional de la Sociedad Argentina de Medicina Prehospitalaria.",
    stack: ["Next.js", "Tailwind", "SEO"],
    href: "https://sampre.com.ar",
    accent: "#b12545",
    span: "lg:col-span-5",
    logoPad: "px-8 py-6",
  },
  {
    name: "RAMP",
    logo: "ramp",
    kind: "Cliente",
    year: "2024",
    description:
      "Revista científica open-access: ruteo dinámico de artículos, metadata bilingüe, DOI y ORCID.",
    stack: ["Next.js 16", "shadcn", "PDF"],
    href: "https://ramp.sampre.com.ar",
    accent: "#d33a5c",
    span: "lg:col-span-5",
    logoPad: "px-6 py-8",
  },
  {
    name: "Complejo El Abuelo",
    logo: "abuelo",
    kind: "Cliente",
    year: "2026",
    description:
      "Alquiler de cabañas con reserva por WhatsApp y panel admin self-service en Supabase.",
    stack: ["React", "Vite", "Supabase"],
    href: "https://complejo-el-abuelo.vercel.app",
    accent: "#c9435f",
    span: "lg:col-span-7",
    logoPad: "px-6 py-5",
  },
];

export const education = [
  { place: "UADE", title: "Lic. en Gestión de TI", period: "2022 — now" },
  { place: "UTN FRBA", title: "Full Stack Web Dev", period: "2021" },
  { place: "AWS", title: "Cloud Practitioner", period: "2023" },
  { place: "Trinity College", title: "English · B1", period: "2019" },
];
