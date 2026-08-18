import { animate, inView, scroll, stagger } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

const translations = {
  pt: {
    nav_about: 'Sobre',
    nav_stack: 'Stack',
    nav_exp: 'Experiência',
    nav_projects: 'Projetos',
    nav_contact: 'Contato',

    hero_greeting: 'Olá, sou',
    hero_title: 'Engenheiro Full-stack Pleno',
    hero_tagline: 'NestJS · Next.js · TypeScript · IA Aplicada',
    hero_cta_wa: 'Conversar no WhatsApp',
    hero_cta_cv: 'Baixar CV',

    about_title: 'Sobre mim',
    about_bio: 'Engenheiro Full-stack com +5 anos de experiência em sistemas de produção para <strong>Fintech</strong>, especializado em NestJS, Node.js e React/Next.js. Construo APIs REST robustas, interfaces React e automações com <strong>agentes de IA e LLMs</strong> aplicados a produto. Tenho experiência prática com <strong>agentes de IA, n8n e Claude API</strong> em produção — integrando automações e IA aplicada em contextos reais de negócio.',
    stat1_label: 'anos de experiência',
    stat2_label: 'usuários no produto',
    stat3_label: 'app lançado nas stores',

    stack_title: 'Stack',
    stack_backend: 'Backend',
    stack_frontend: 'Frontend',
    stack_db: 'Banco de Dados',
    stack_ai: 'IA & Automação',
    stack_integrations: 'Integrações',

    exp_title: 'Experiência',
    exp1_role: 'Software Engineer (Backend)',
    exp1_date: 'jun 2025 – presente · São Paulo, SP',
    exp1_b1: 'Implementou módulo de <strong>Open Finance</strong> integrando APIs reguladas do Banco Central para consolidação e portabilidade de dados financeiros',
    exp1_b2: 'Desenvolveu integração com a <strong>B3</strong> para consulta e processamento de dados do mercado de capitais em tempo real',
    exp1_b3: 'Implementou workflows de automação com <strong>n8n, Zenvia, RD Station e Pipefy</strong>, eliminando tarefas repetitivas',
    exp1_b4: 'Desenvolveu <strong>skills customizadas para Claude Code</strong> adaptadas ao contexto da empresa, automatizando fluxos recorrentes de engenharia',

    exp2_role: 'Mobile & Web Developer',
    exp2_date: 'ago 2023 – jun 2025 · São Paulo, SP',
    exp2_b1: 'Desenvolveu app mobile do zero com <strong>React Native</strong> e liderou lançamento nas stores iOS e Android',
    exp2_b2: 'Construiu gráficos interativos e CRUDs complexos para plataforma financeira com <strong>+3.000 usuários</strong>',
    exp2_b3: 'Implementou lazy loading, prefetching e renderização condicional — melhorando performance em páginas críticas',

    exp4_role: 'Full-stack Developer',
    exp4_date: 'out 2024 – dez 2024 · São Paulo, SP',
    exp4_b1: 'Reduziu complexidade de UI consolidando <strong>4 telas em 1 dashboard</strong> unificado para assessores financeiros',
    exp4_b2: 'Implementou monitoramento com <strong>Datadog</strong>, reduzindo tempo de detecção e resolução de falhas em produção',

    proj_title: 'Projetos',
    proj2_title: 'Mundo Invest App',
    proj2_desc: 'Aplicativo de gestão financeira pessoal com +3.000 usuários, integração com Open Finance (BCB) e B3, construído com React Native e NestJS.',
    proj3_title: 'Automações IA & WhatsApp',
    proj3_desc: 'Pipelines de automação com n8n + Claude API + WhatsApp para atendimento e engajamento de clientes nos setores Agro e Fintech. Zero intervenção manual após setup.',

    talk_title: 'Palestras',
    talk_badge: 'Palestra',
    talk_event_title: 'Desenvolvimento de Soluções Inteligentes Aplicadas ao Agronegócio',
    talk_date: '15 de abril de 2026',
    talk_desc: 'Palestra convidada no módulo Seminários em Tendência e Tópicos Avançados em Engenharia de Software (Engenharia de Software II) — UFV Campus Rio Paranaíba.',

    talk2_badge: 'Minicurso',
    talk2_event_title: 'Desenvolva seu Portfólio Pessoal em React e TypeScript',
    talk2_date: 'nov 2023',
    talk2_desc: 'Ministrante no XIV Workshop de Sistemas de Informação (WSIS) — Universidade Federal de Viçosa. 1.200 minutos de carga horária. Certificado registrado no RAEX/UFV.',

    contact_title: 'Contato',
    orbital_hint: 'Clique em um nó para ver detalhes',
    proj_ofa_title: 'open-finance-advisor',
    proj_ofa_desc: 'API NestJS que simula o fluxo real de Open Finance (BCB) e usa Claude AI com tool use para gerar análises financeiras personalizadas via SSE streaming.',
    proj_ofa_status: 'Live Demo',
    proj_case_title: 'casecellshop',
    proj_case_desc: 'E-commerce de capinhas para celular com catálogo de produtos, carrinho e checkout. Open source no GitHub.',
    proj_ai_status: 'Produção',
    proj_cta_github: 'GitHub →',
    proj_cta_demo: 'Ver demo →',
  },

  en: {
    nav_about: 'About',
    nav_stack: 'Stack',
    nav_exp: 'Experience',
    nav_projects: 'Projects',
    nav_contact: 'Contact',

    hero_greeting: "Hi, I'm",
    hero_title: 'Full-stack Engineer',
    hero_tagline: 'NestJS · Next.js · TypeScript · Applied AI',
    hero_cta_wa: 'Chat on WhatsApp',
    hero_cta_cv: 'Download CV',

    about_title: 'About me',
    about_bio: 'Full-stack Engineer with 5+ years of experience building production systems for <strong>Fintech</strong>, specialized in NestJS, Node.js, and React/Next.js. I build robust REST APIs, React interfaces, and AI-powered automation with <strong>LLMs applied to real products</strong>. I have hands-on experience with <strong>AI agents, n8n, and Claude API</strong> in production — integrating automation and applied AI in real business contexts.',
    stat1_label: 'years of experience',
    stat2_label: 'product users',
    stat3_label: 'app shipped to stores',

    stack_title: 'Stack',
    stack_backend: 'Backend',
    stack_frontend: 'Frontend',
    stack_db: 'Databases',
    stack_ai: 'AI & Automation',
    stack_integrations: 'Integrations',

    exp_title: 'Experience',
    exp1_role: 'Software Engineer (Backend)',
    exp1_date: 'Jun 2025 – Present · São Paulo, Brazil',
    exp1_b1: 'Implemented <strong>Open Finance</strong> module integrating BCB-regulated APIs for user financial data consolidation and portability',
    exp1_b2: 'Built integration with <strong>B3</strong> (Brazilian Stock Exchange) for real-time market data retrieval and processing',
    exp1_b3: 'Implemented automation workflows with <strong>n8n, Zenvia, RD Station, and Pipefy</strong>, eliminating repetitive tasks',
    exp1_b4: 'Developed <strong>custom Claude Code skills</strong> tailored to the company\'s engineering workflows, automating recurring tasks',

    exp2_role: 'Mobile & Web Developer',
    exp2_date: 'Aug 2023 – Jun 2025 · São Paulo, Brazil',
    exp2_b1: 'Built mobile app from scratch with <strong>React Native</strong> and led its launch on iOS and Android stores',
    exp2_b2: 'Built interactive charts and complex CRUDs for a financial platform with <strong>3,000+ active users</strong>',
    exp2_b3: 'Implemented lazy loading, prefetching, and conditional rendering — improving performance on critical pages',

    exp4_role: 'Full-stack Developer',
    exp4_date: 'Oct 2024 – Dec 2024 · São Paulo, Brazil',
    exp4_b1: 'Reduced UI complexity consolidating <strong>4 screens into 1 dashboard</strong> for financial advisors',
    exp4_b2: 'Implemented <strong>Datadog</strong> monitoring, reducing MTTD and MTTR for production incidents',

    proj_title: 'Projects',
    proj2_title: 'Mundo Invest App',
    proj2_desc: 'Personal financial management app with 3,000+ users, Open Finance (BCB) and B3 integration, built with React Native and NestJS.',
    proj3_title: 'AI & WhatsApp Automations',
    proj3_desc: 'Automation pipelines with n8n + Claude API + WhatsApp for customer engagement in the Fintech sector. Zero manual intervention after setup.',

    talk_title: 'Talks',
    talk_badge: 'Talk',
    talk_event_title: 'Intelligent Solutions Applied to Agribusiness',
    talk_date: 'April 15, 2026',
    talk_desc: 'Guest speaker at the Trends and Advanced Topics in Software Engineering seminar module (Software Engineering II) — Federal University of Viçosa, Rio Paranaíba Campus.',

    talk2_badge: 'Workshop',
    talk2_event_title: 'Build Your Personal Portfolio in React and TypeScript',
    talk2_date: 'Nov 2023',
    talk2_desc: 'Instructor at the XIV Information Systems Workshop (WSIS) — Federal University of Viçosa. 1,200 minutes total. Certificate registered at RAEX/UFV.',

    contact_title: 'Contact',
    orbital_hint: 'Click a node to see details',
    proj_ofa_title: 'open-finance-advisor',
    proj_ofa_desc: 'NestJS API simulating real Open Finance (BCB) flow using Claude AI with tool use to generate personalized financial analyses via SSE streaming.',
    proj_ofa_status: 'Live Demo',
    proj_case_title: 'casecellshop',
    proj_case_desc: 'Phone case e-commerce with product catalog, cart, and checkout. Open source on GitHub.',
    proj_ai_status: 'Production',
    proj_cta_github: 'GitHub →',
    proj_cta_demo: 'See demo →',
  }
};

// ===== STATE =====
const html = document.documentElement;
let currentTheme = localStorage.getItem('theme') || 'dark';
let currentLang = localStorage.getItem('lang') || 'pt';
let orbitalReady = false; // true only after orbitalExpData is defined

html.setAttribute('data-theme', currentTheme);
updateThemeIcon();
applyLang(currentLang);

// ===== THEME =====
document.getElementById('theme-toggle').addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateThemeIcon();
});

function updateThemeIcon() {
  document.getElementById('theme-toggle').textContent = currentTheme === 'dark' ? '☀' : '☾';
}

// ===== LANGUAGE =====
document.getElementById('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  localStorage.setItem('lang', currentLang);
  applyLang(currentLang);
});

function applyLang(lang) {
  currentLang = lang;
  html.setAttribute('lang', lang === 'pt' ? 'pt-BR' : 'en');
  document.getElementById('lang-toggle').textContent = lang === 'pt' ? 'EN' : 'PT';

  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  const cvBtn = document.querySelector('.hero__ctas .btn--outline');
  if (cvBtn) {
    cvBtn.href = lang === 'pt'
      ? 'assets/nikholas-queiroz-curriculo.pdf'
      : 'assets/nikholas-queiroz-resume-en.pdf';
  }

  // Rebuild orbital when language changes (only after data is defined)
  if (orbitalReady) initOrbital();
}

// ===== NAV SCROLL =====
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ===== SCROLL PROGRESS BAR =====
scroll(
  animate('#scroll-progress', { scaleX: [0, 1] }, { easing: 'linear' })
);

// ===== HERO ENTRANCE =====
const ease = [0.16, 1, 0.3, 1];

animate(
  Array.from(document.querySelectorAll('.hero__content .fade-up')),
  { opacity: [0, 1], y: [28, 0] },
  { delay: stagger(0.12, { start: 0.1 }), duration: 0.75, easing: ease }
);

animate(
  '.hero__photo',
  { opacity: [0, 1], x: [40, 0] },
  { delay: 0.25, duration: 0.9, easing: ease }
);

// ===== SCROLL-DRIVEN FADE-UPS =====
// All fade-ups outside the hero
document.querySelectorAll('.section .fade-up, .timeline__item.fade-up, .project-card.fade-up, .talk-card.fade-up, .stats.fade-up').forEach((el) => {
  inView(
    el,
    () => animate(el, { opacity: [0, 1], y: [28, 0] }, { duration: 0.65, easing: ease }),
    { amount: 0.15 }
  );
});

// ===== STAGGERED STACK CATEGORIES =====
inView('.stack__grid', () => {
  animate(
    '.stack__category',
    { opacity: [0, 1], y: [20, 0] },
    { delay: stagger(0.07), duration: 0.55, easing: ease }
  );
}, { amount: 0.1 });

// ===== STAGGERED TIMELINE ITEMS =====
inView('.timeline', () => {
  animate(
    '.timeline__item',
    { opacity: [0, 1], x: [-16, 0] },
    { delay: stagger(0.12), duration: 0.6, easing: ease }
  );
}, { amount: 0.05 });

// ===== STAGGERED PROJECT CARDS =====
inView('.projects__grid', () => {
  animate(
    '.project-card',
    { opacity: [0, 1], y: [24, 0] },
    { delay: stagger(0.1), duration: 0.6, easing: ease }
  );
}, { amount: 0.1 });

// ===== STAGGERED CONTACT LINKS =====
inView('.contact__links', () => {
  animate(
    '.contact__link',
    { opacity: [0, 1], y: [16, 0] },
    { delay: stagger(0.08), duration: 0.5, easing: ease }
  );
}, { amount: 0.2 });

// ===== STAT COUNTER ANIMATION =====
const statRawValues = [5, 160000, 1];
const statDisplayValues = ['5+', '+160K', '1'];

inView('.stats', () => {
  document.querySelectorAll('.stat__value').forEach((el, i) => {
    const target = statRawValues[i];
    const display = statDisplayValues[i];
    const duration = 1.2;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      if (i === 1) {
        el.textContent = current >= 1000 ? `+${Math.floor(current / 1000)}K` : `+${current}`;
      } else if (i === 0) {
        el.textContent = current + (progress >= 1 ? '+' : '');
      } else {
        el.textContent = current;
      }

      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = display;
    }

    requestAnimationFrame(tick);
  });
}, { amount: 0.5 });

// ===== TUBELIGHT NAV =====
const tubelightItems = document.querySelectorAll('.tubelight-nav__item');
const navSections = ['sobre', 'stack', 'experiencia', 'projetos', 'contato'];

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      tubelightItems.forEach(item => {
        item.classList.toggle('active', item.dataset.section === entry.target.id);
      });
    }
  });
}, { threshold: 0.25, rootMargin: '-15% 0px -60% 0px' });

navSections.forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

tubelightItems.forEach(item => {
  item.addEventListener('click', () => {
    tubelightItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});

// ===== PILL HOVER MICRO-ANIMATION =====
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('mouseenter', () => {
    animate(pill, { scale: [1, 1.06] }, { duration: 0.2, easing: ease });
  });
  pill.addEventListener('mouseleave', () => {
    animate(pill, { scale: [1.06, 1] }, { duration: 0.2, easing: ease });
  });
});

// ===== BUTTON PRESS FEEDBACK =====
document.querySelectorAll('.btn, .contact__link').forEach(btn => {
  btn.addEventListener('mousedown', () => {
    animate(btn, { scale: 0.97 }, { duration: 0.1 });
  });
  btn.addEventListener('mouseup', () => {
    animate(btn, { scale: 1 }, { duration: 0.15, easing: ease });
  });
  btn.addEventListener('mouseleave', () => {
    animate(btn, { scale: 1 }, { duration: 0.15, easing: ease });
  });
});

// ===== ORBITAL EXPERIENCE TIMELINE =====
const orbitalExpData = {
  pt: [
    {
      label: 'Backend Eng.',
      company: 'Mundo Invest',
      date: 'jun 2025 – hoje',
      status: 'current',
      statusLabel: 'Atual',
      bullets: [
        'Módulo de <strong>Open Finance</strong> em arquitetura de microsserviços — resiliência por design',
        'Integração com <strong>B3</strong> em tempo real via REST + caching Redis',
        '<strong>CI/CD</strong> via GitHub Actions com rollback automatizado',
        'Automações com <strong>n8n, Zenvia, RD Station e Pipefy</strong>',
        '<strong>Skills para Claude Code</strong> que automatizam fluxos da squad',
      ],
      stack: 'Node.js · NestJS · TypeScript · Redis · Docker · Open Finance · B3 · n8n',
      icon: `<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    },
    {
      label: 'Mobile & Web',
      company: 'Mundo Invest',
      date: 'ago 2023 – jun 2025',
      status: 'done',
      statusLabel: 'Concluído',
      bullets: [
        'Componentes React/Next.js para dashboards com <strong>+3.000 usuários</strong>',
        '<strong>Lazy loading, code-splitting</strong> e renderização condicional — Core Web Vitals',
        'Qualidade garantida com <strong>Jest e React Testing Library</strong>, TDD',
        'App mobile do zero com <strong>React Native</strong> — iOS e Android',
      ],
      stack: 'ReactJS · Next.js · React Native · TypeScript · Redux Toolkit · Jest',
      icon: `<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    },
    {
      label: 'Full Stack',
      company: 'EWZ Capital',
      date: 'out – dez 2024',
      status: 'done',
      statusLabel: 'Concluído',
      bullets: [
        '<strong>4 telas unificadas em 1 dashboard</strong> — decisão validada com produto e backend',
        'Monitoramento com <strong>Datadog</strong> — MTTD e MTTR reduzidos',
      ],
      stack: 'Node.js · TypeScript · Express · PostgreSQL · Docker · Datadog',
      icon: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    },
    {
      label: 'Web Dev',
      company: 'Tradio Bank',
      date: 'nov 2022 – mar 2023',
      status: 'done',
      statusLabel: 'Concluído',
      bullets: [
        'Integração com <strong>PIX</strong> em sistema financeiro de alto volume transacional',
        '<strong>Redux</strong> para gerenciamento de estado global com cobertura TDD',
      ],
      stack: 'React.js · TypeScript · Redux · TDD',
      icon: `<svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
    },
    {
      label: 'Frontend Dev',
      company: 'DEVYX TECH',
      date: 'mai 2021 – jul 2022',
      status: 'done',
      statusLabel: 'Concluído',
      bullets: [
        'Interfaces responsivas com <strong>ReactJS e TypeScript</strong>',
        'Princípios <strong>SOLID</strong> e componentização desacoplada',
      ],
      stack: 'React.js · TypeScript · Styled Components · Figma · CSS',
      icon: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
    },
  ],
  en: [
    {
      label: 'Backend Eng.',
      company: 'Mundo Invest',
      date: 'Jun 2025 – Present',
      status: 'current',
      statusLabel: 'Current',
      bullets: [
        '<strong>Open Finance</strong> module in microservices architecture — resilience by design',
        '<strong>B3</strong> real-time integration via REST + Redis caching',
        '<strong>CI/CD</strong> via GitHub Actions with automated rollback',
        'Automation workflows with <strong>n8n, Zenvia, RD Station, Pipefy</strong>',
        'Custom <strong>Claude Code skills</strong> automating squad engineering flows',
      ],
      stack: 'Node.js · NestJS · TypeScript · Redis · Docker · Open Finance · B3 · n8n',
      icon: `<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    },
    {
      label: 'Mobile & Web',
      company: 'Mundo Invest',
      date: 'Aug 2023 – Jun 2025',
      status: 'done',
      statusLabel: 'Completed',
      bullets: [
        'React/Next.js components for dashboards with <strong>3,000+ users</strong>',
        '<strong>Lazy loading, code-splitting</strong> and conditional rendering — Core Web Vitals',
        'Quality assured with <strong>Jest and React Testing Library</strong>, TDD',
        '<strong>React Native</strong> app from scratch — iOS & Android',
      ],
      stack: 'ReactJS · Next.js · React Native · TypeScript · Redux Toolkit · Jest',
      icon: `<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    },
    {
      label: 'Full Stack',
      company: 'EWZ Capital',
      date: 'Oct – Dec 2024',
      status: 'done',
      statusLabel: 'Completed',
      bullets: [
        '<strong>4 screens → 1 dashboard</strong> — validated with product and backend teams',
        '<strong>Datadog</strong> monitoring — reduced MTTD and MTTR',
      ],
      stack: 'Node.js · TypeScript · Express · PostgreSQL · Docker · Datadog',
      icon: `<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    },
    {
      label: 'Web Dev',
      company: 'Tradio Bank',
      date: 'Nov 2022 – Mar 2023',
      status: 'done',
      statusLabel: 'Completed',
      bullets: [
        '<strong>PIX</strong> integration in a high-volume financial system',
        '<strong>Redux</strong> for global state management with TDD coverage',
      ],
      stack: 'React.js · TypeScript · Redux · TDD',
      icon: `<svg viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
    },
    {
      label: 'Frontend Dev',
      company: 'DEVYX TECH',
      date: 'May 2021 – Jul 2022',
      status: 'done',
      statusLabel: 'Completed',
      bullets: [
        'Responsive interfaces with <strong>ReactJS and TypeScript</strong>',
        '<strong>SOLID principles</strong> and decoupled componentization',
      ],
      stack: 'React.js · TypeScript · Styled Components · Figma · CSS',
      icon: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
    },
  ],
};

let orbitalAngle = 0;
let orbitalAutoRotate = true;
let orbitalActiveIdx = null;
let orbitalRAF = null;

function getOrbitalRadius() {
  const el = document.getElementById('orbital-timeline');
  if (!el) return 185;
  const val = getComputedStyle(el).getPropertyValue('--orbital-radius').trim();
  return parseInt(val) || 185;
}

function positionOrbitalNodes() {
  const nodes = document.querySelectorAll('.orbital__node');
  const total = nodes.length;
  if (!total) return;
  const radius = getOrbitalRadius();

  nodes.forEach((node, i) => {
    const angle = ((i / total) * 360 + orbitalAngle) % 360;
    const rad = (angle * Math.PI) / 180;
    const x = radius * Math.cos(rad);
    const y = radius * Math.sin(rad);
    const depth = Math.cos(rad);
    const zIndex = Math.round(100 + 50 * depth);
    const opacity = orbitalActiveIdx === i ? 1 : Math.max(0.38, 0.38 + 0.62 * ((1 + depth) / 2));
    node.style.transform = `translate(${x}px, ${y}px)`;
    node.style.zIndex = zIndex;
    node.style.opacity = opacity;
  });
}

function orbitalLoop() {
  if (orbitalAutoRotate) {
    orbitalAngle = (orbitalAngle + 0.22) % 360;
    positionOrbitalNodes();
  }
  orbitalRAF = requestAnimationFrame(orbitalLoop);
}

function openOrbitalCard(idx) {
  const data = orbitalExpData[currentLang];
  const exp = data[idx];
  const card = document.getElementById('orbital-card');
  if (!card) return;

  orbitalAutoRotate = false;
  orbitalActiveIdx = idx;

  document.querySelectorAll('.orbital__node').forEach((n, i) => n.classList.toggle('active', i === idx));

  const badge = document.getElementById('orbital-badge');
  badge.textContent = exp.statusLabel;
  badge.className = `orbital__card__badge orbital__card__badge--${exp.status === 'current' ? 'current' : 'done'}`;
  document.getElementById('orbital-date').textContent = exp.date;
  document.getElementById('orbital-title').textContent = exp.label;
  document.getElementById('orbital-company').textContent = exp.company;
  document.getElementById('orbital-bullets').innerHTML = exp.bullets.map(b => `<li>${b}</li>`).join('');
  document.getElementById('orbital-stack').textContent = exp.stack;

  // Position card near active node
  const total = document.querySelectorAll('.orbital__node').length;
  const radius = getOrbitalRadius();
  const angle = ((idx / total) * 360 + orbitalAngle) % 360;
  const rad = (angle * Math.PI) / 180;
  const nx = radius * Math.cos(rad);
  const ny = radius * Math.sin(rad);
  const container = document.getElementById('orbital-timeline');
  const halfW = container ? container.offsetWidth / 2 : 300;
  const halfH = container ? container.offsetHeight / 2 : 280;
  const cardW = 280;
  let cx = nx - cardW / 2;
  let cy = ny + 34;
  if (cx < -halfW + 12) cx = -halfW + 12;
  if (cx + cardW > halfW - 12) cx = halfW - cardW - 12;
  if (cy + 260 > halfH - 10) cy = ny - 270;
  card.style.left = `calc(50% + ${cx}px)`;
  card.style.top = `calc(50% + ${cy}px)`;
  card.classList.add('visible');
}

function closeOrbitalCard() {
  const card = document.getElementById('orbital-card');
  if (card) card.classList.remove('visible');
  document.querySelectorAll('.orbital__node').forEach(n => n.classList.remove('active'));
  orbitalAutoRotate = true;
  orbitalActiveIdx = null;
}

function initOrbital() {
  const container = document.getElementById('orbital-timeline');
  if (!container) return;

  if (orbitalRAF) { cancelAnimationFrame(orbitalRAF); orbitalRAF = null; }
  orbitalAutoRotate = true;
  orbitalActiveIdx = null;
  orbitalAngle = 0;

  const data = orbitalExpData[currentLang];
  container.innerHTML = `
    <div class="orbital__hub">
      <div class="orbital__hub-core"></div>
      <div class="orbital__hub-center"></div>
      <div class="orbital__hub-ping"></div>
      <div class="orbital__hub-ping"></div>
    </div>
    <div class="orbital__ring"></div>
    <div class="orbital__card" id="orbital-card">
      <div class="orbital__card__connector"></div>
      <div class="orbital__card__top">
        <span class="orbital__card__badge" id="orbital-badge"></span>
        <span class="orbital__card__date" id="orbital-date"></span>
      </div>
      <div class="orbital__card__title" id="orbital-title"></div>
      <div class="orbital__card__company" id="orbital-company"></div>
      <ul class="orbital__card__bullets" id="orbital-bullets"></ul>
      <div class="orbital__card__stack" id="orbital-stack"></div>
    </div>
  `;

  data.forEach((exp, i) => {
    const node = document.createElement('div');
    node.className = 'orbital__node';
    node.innerHTML = `
      <div class="orbital__node-btn">
        <div class="orbital__node-aura"></div>
        ${exp.icon}
      </div>
      <span class="orbital__node-label">${exp.label}</span>
    `;
    node.addEventListener('click', (e) => { e.stopPropagation(); openOrbitalCard(i); });
    container.appendChild(node);
  });

  container.addEventListener('click', closeOrbitalCard);
  positionOrbitalNodes();
  orbitalLoop();
}

// Initialize orbital on load (orbitalExpData is now defined)
orbitalReady = true;
initOrbital();
