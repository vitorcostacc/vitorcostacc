const translations = {
  en: {
    title: 'Vitor Costa — Staff iOS Engineer',
    metaDesc: 'Vitor Costa — Staff iOS Engineer. I build the invisible infrastructure that makes mobile apps feel effortless, and the teams that sustain it.',
    heroRole: 'Staff iOS Engineer & Engineering Leader',
    tagline: 'I build the invisible infrastructure that makes mobile apps feel effortless — and the teams that sustain it.',
    about: 'I lead mobile teams and the engineers in them — and I still ship the code myself. With 15+ years writing code — the last 5+ in fintech — I\'ve built products used by millions of people, and learned that I\'m just as good at building teams as I am at building software. I\'m drawn to the unglamorous parts — pipelines, architecture, the systems and people that keep everything running — because that\'s what makes the rest feel effortless.',
    whatIDo: 'What I do',
    card1Title: 'Technical Leadership',
    card1Desc: 'Tech Lead, Engineering Manager, mentoring, cross-team alignment.',
    card2Title: 'Mobile Platform Engineering',
    card2Desc: 'CI/CD, release automation, SDKs, performance at scale.',
    card3Title: 'Problem Solving at Scale',
    card3Desc: 'Fintech apps, millions of users, complex systems made simple.',
    expTitle: 'Selected experience',
    picpayImpact: 'Sole Staff Mobile on the Core Mobile team — fronting mobile-wide technical decisions and automating the App Store release pipeline for an app used by millions.',
    stoneImpact: 'Led mobile teams across iOS and Android; drove the Kotlin Multiplatform migration strategy.',
    c6Impact: 'Built the PaymentsHub component adopted across multiple squads.',
    itauImpact: 'Implemented the design system for the bank\'s investments app (íon).',
    luizaImpact: 'Owned the checkout flow of one of Brazil\'s largest e-commerce apps.',
    earlyCareer: 'Early Career (2008–2019)',
    skillsTitle: 'Skills',
    skillLeadership: 'Leadership',
    skillEngMgmt: 'Engineering Management',
    skillMentoring: 'Mentoring',
    skillCrossTeam: 'Cross-team Alignment',
    skillTechDir: 'Technical Direction',
    skillMobile: 'Mobile',
    skillArch: 'Architecture',
    contactTitle: 'Contact',
    contactLine: 'Let\'s build something — or just talk.',
  },
  pt: {
    title: 'Vitor Costa — Staff iOS Engineer',
    metaDesc: 'Vitor Costa — Staff iOS Engineer. Construo a infraestrutura invisível que faz apps mobile parecerem sem esforço, e os times que a sustentam.',
    heroRole: 'Staff iOS Engineer & Engineering Leader',
    tagline: 'Construo a infraestrutura invisível que faz apps mobile parecerem sem esforço — e os times que a sustentam.',
    about: 'Lidero times mobile e os engenheiros neles — e ainda entrego código. Com mais de 15 anos escrevendo código — os últimos 5+ em fintech — já construí produtos usados por milhões de pessoas, e aprendi que sou tão bom em construir times quanto em construir software. Me atraem as partes pouco glamorosas — pipelines, arquitetura, os sistemas e pessoas que mantêm tudo funcionando — porque é isso que faz o resto parecer sem esforço.',
    whatIDo: 'O que eu faço',
    card1Title: 'Liderança Técnica',
    card1Desc: 'Tech Lead, Engineering Manager, mentoria, alinhamento entre times.',
    card2Title: 'Engenharia de Plataforma Mobile',
    card2Desc: 'CI/CD, automação de releases, SDKs, performance em escala.',
    card3Title: 'Resolução de Problemas em Escala',
    card3Desc: 'Apps fintech, milhões de usuários, sistemas complexos simplificados.',
    expTitle: 'Experiência selecionada',
    picpayImpact: 'Único Staff Mobile no time Core Mobile — liderando decisões técnicas abrangentes e automatizando o pipeline de releases da App Store para um app usado por milhões.',
    stoneImpact: 'Liderou times mobile de iOS e Android; conduziu a estratégia de migração para Kotlin Multiplatform.',
    c6Impact: 'Construiu o componente PaymentsHub adotado por múltiplos squads.',
    itauImpact: 'Implementou o design system para o app de investimentos do banco (íon).',
    luizaImpact: 'Responsável pelo fluxo de checkout de um dos maiores apps de e-commerce do Brasil.',
    earlyCareer: 'Carreira inicial (2008–2019)',
    skillsTitle: 'Habilidades',
    skillLeadership: 'Liderança',
    skillEngMgmt: 'Gestão de Engenharia',
    skillMentoring: 'Mentoria',
    skillCrossTeam: 'Alinhamento entre Times',
    skillTechDir: 'Direção Técnica',
    skillMobile: 'Mobile',
    skillArch: 'Arquitetura',
    contactTitle: 'Contato',
    contactLine: 'Vamos construir algo — ou só conversar.',
  },
};

function applyLang(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  document.querySelector('meta[name="description"]').content = t.metaDesc;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.getElementById('lang-toggle').textContent = lang === 'en' ? 'PT' : 'EN';
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang')
    || (navigator.language.startsWith('pt') ? 'pt' : 'en');
  applyLang(saved);
  document.getElementById('lang-toggle').addEventListener('click', () => {
    applyLang(localStorage.getItem('lang') === 'pt' ? 'en' : 'pt');
  });
});
