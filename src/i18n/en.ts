const en = {
  lang: 'en',
  path: '/',
  locale: 'en_US',
  title: 'Vladislav Rajtmajer - Senior PHP / Laravel Engineer',
  description: 'Senior PHP/Laravel engineer, 12+ years. REST APIs, PostgreSQL, Livewire and Vue.js, LLM features in production. Available for remote contracting in the EU.',

  role: 'Senior PHP / Laravel Engineer',
  meta: 'Plzeň, Czech Republic · remote · contract (IČO)',
  avail: 'available now for new contracts',

  about: [
    '12+ years building web applications and backend systems. I work mostly in Laravel: REST and user-facing API design, PostgreSQL, queues, and the boring reliability work that keeps APIs predictable. On the frontend I build with Livewire and Vue.js.',
    'Before the web I spent a decade in embedded and IoT, writing firmware in C for Atmel AVR and PIC, binary protocols and telemetry pipelines. That is where I learned to keep data contracts strict and to treat edge cases as the normal case.',
    'I use AI every day, in the products and in the editor, and I know where it breaks. So the model gets a strict schema and the boring tools, and the tests, not the model, say when the work is done.',
  ],
  aboutNote: '# Open to long-term remote contracts on a modern PHP/Laravel stack.',

  ai: [
    { name: 'Billify', href: 'https://laravel-blog.cz/clanky/ai-dekoduje-pdf-faktury-cnb-sluzba-jako-nastroj-agenta', tag: 'LLM in production',
      desc: 'Claude reads supplier PDF invoices into a typed schema: structured output, temperature 0. The exchange rate of the Czech National Bank (ČNB) comes from a tool backed by my own rate service, never from the model. Anything ambiguous lands in a review note and a human confirms every row. Per-team quota, audit log, the cheapest model that holds up (about $0.01 per PDF).' },
    { name: 'pis-cesky', href: 'https://github.com/rajtik76/pis-cesky', tag: 'open-source Claude Code plugin',
      desc: 'Teaches the model to write Czech that does not read like a translation. Not a blacklist of phrases: rules derived from human-written Czech, and a proofreading agent that never sees the brief, so it judges only the text.' },
    { name: 'Daily workflow', href: 'https://laravel-blog.cz/clanky/napsal-jsem-192-tokenu-z-deseti-milionu', tag: 'Claude Code',
      desc: 'AI is one of my tools, not the author. When it helps, I use it to analyse a codebase, weigh options, review a change or take over routine work. Design and decisions stay with me, and nothing merges until Pest and PHPStan pass and I have read the diff. I measure what it costs (token audits) and write about where it fails on laravel-blog.cz.' },
  ],

  projects: [
    { name: 'CaptchaAPI',     tag: 'privacy CAPTCHA · EU',   href: 'https://captchaapi.eu', repo: 'https://github.com/captchaapi/laravel', body: 'Proof-of-work CAPTCHA, GDPR-first. No tracking, no Google. Ships with its own Laravel package and WordPress plugin.' },
    { name: 'Billify',        tag: 'invoicing API · LLM · CZ', href: 'https://billify.cz',                     body: "Issue invoices over a clean REST API. Built for developers who'd rather call an endpoint than click through accounting software. An LLM reads received PDF invoices into the monthly VAT return." },
    { name: 'Exile to Exile', tag: 'open-source product · PoE2', href: 'https://poe.rajtik.com',                 body: 'Free Path of Exile 2 companion built with Laravel, React and Inertia: build planner, passive-tree tools, loot-filter generator and shareable builds.' },
    { name: 'POE2 Toolkit',   tag: 'game tooling · OSS',     href: 'https://github.com/rajtik76/poe2-toolkit', body: 'Framework-agnostic TypeScript toolkit for GGPK extraction, typed game-data extractors and a headless passive-tree geometry engine with a React renderer. Used by Exile to Exile.' },
    { name: 'laravel-blog.cz', tag: 'writing · CZ',          href: 'https://laravel-blog.cz',                  body: 'A Czech-language blog where I write about Laravel and day-to-day backend engineering.' },
    { name: 'Weather Station', tag: 'ESP32 · Laravel · PostgreSQL', href: 'https://weather.rajtik.com', repo: 'https://github.com/rajtik76/weather-station', body: 'Balcony weather station, end to end. ESP32 firmware in C++ reads four sensors over I2C and I2S, hears rain in the microphone spectrum and keeps a day of readings on flash when the network drops; schematics in KiCad. A Laravel ingest API stores it in PostgreSQL. Sun heats the radiation shield, so a regression model calibrated against the Czech Hydrometeorological Institute (ČHMÚ) station Plzeň-Mikulka subtracts that heating from light and sun position. It only goes live after it beats the raw sensor on days it never saw.' },
  ],
  repoLabel: 'GitHub repository',
  repoAria: (name: string) => `${name} on GitHub`,

  packageReg: {
    wordpress: 'WordPress.org · reviewed plugin',
  },
  packagesBadge: 'ships across 3 ecosystems: Composer · WordPress.org · npm',

  codeCaption: 'Validated game-data releases activate through an atomic symlink swap: every request sees either the prior complete release or the new one, never partial data.',
  codeCaptionPrefix: 'Excerpt from',

  experience: [
    { yr: '2022 - now',  role: 'PHP Developer',          org: 'Freelance (OSVČ)',     desc: 'Web apps, REST + user-facing APIs, Livewire, Vue.js, PostgreSQL.' },
    { yr: '2021 - 2022', role: 'PHP Developer',          org: 'UBK s.r.o.',           desc: 'Laravel development across multiple client products.' },
    { yr: '2018 - 2021', role: 'Developer',              org: 'Freelance',            desc: 'CMS for an international company. SCRUM, English-only daily comms. PHP 8, Nette, MariaDB.' },
    { yr: '2016 - 2018', role: 'Developer',              org: 'MySolutions s.r.o.',   desc: 'Dating platforms across 12 countries. SCRUM, English-only standups. PHP, Nette, MySQL.' },
    { yr: '2013 - 2015', role: 'IT Administrator & Developer', org: 'Yazaki',     desc: 'In-house software for warehouse management of wiring harnesses, alongside IT administration.' },
    { yr: 'before 2013', role: 'Embedded, IoT & systems engineering', org: null,      desc: 'A decade of firmware in C (Atmel AVR / PIC) incl. a banknote validator, binary hardware protocols, telemetry APIs, LoRaWAN; Linux/Windows servers; Delphi/FoxPro business apps.' },
  ],

  skills: ['PHP','Laravel','REST API design','PostgreSQL','MySQL','Redis','Pest / PHPUnit','PHPStan','Livewire','Vue.js','Inertia','TypeScript','LLM integration (Claude, laravel/ai)','Claude Code','Docker','Linux','embedded C','IoT / LoRaWAN'],
  languages: 'English: working proficiency, years of English-only daily standups. Czech: native.',

  cv: [
    { href: '/cv.pdf',    download: 'Vladislav-Rajtmajer-CV.pdf',    label: 'Download CV (PDF, English)' },
    { href: '/cv-cs.pdf', download: 'Vladislav-Rajtmajer-CV-CZ.pdf', label: 'Czech CV (PDF)' },
  ],
};

export type Content = typeof en;

export default en;
