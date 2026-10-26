import type { Content } from './en';

const cs: Content = {
  lang: 'cs',
  path: '/cs/',
  locale: 'cs_CZ',
  title: 'Vladislav Rajtmajer - Senior PHP / Laravel vývojář',
  description: 'Senior PHP/Laravel vývojář s více než dvanácti lety praxe. REST API, PostgreSQL, Livewire a Vue.js, LLM v produkci. Remote spolupráce na IČO.',

  role: 'Senior PHP / Laravel vývojář',
  meta: 'Plzeň · remote · spolupráce na IČO',
  avail: 'k dispozici pro novou spolupráci',

  about: [
    'Webové aplikace a backend stavím už víc než dvanáct let. Pracuji hlavně v Laravelu: navrhuji REST API a API pro frontend, data ukládám do PostgreSQL, řeším fronty a tu nudnou práci kolem spolehlivosti, díky které se API chová předvídatelně. Frontend dělám v Livewire a Vue.js.',
    'Než jsem přešel na web, deset let jsem dělal embedded a IoT: firmware v C pro Atmel AVR a PIC, binární protokoly a telemetrii. Tam jsem se naučil hlídat přesný formát dat a brát okrajové případy jako běžný provoz.',
    'AI používám každý den, v produktech i v editoru, a vím, kde selhává. AI proto dostává přísné schéma výstupu a deterministické nástroje. A o tom, jestli je práce hotová, rozhodují testy a já, ne AI.',
  ],
  aboutNote: '# Hledám dlouhodobou remote spolupráci na IČO, ideálně na moderním PHP/Laravel stacku.',

  ai: [
    { name: 'Billify', href: 'https://blog.rajtik.com/clanky/ai-dekoduje-pdf-faktury-cnb-sluzba-jako-nastroj-agenta', tag: 'LLM v produkci',
      desc: 'Claude převádí PDF faktury od dodavatelů do typovaného schématu. Kurz ČNB si model bere z nástroje napojeného na mou vlastní kurzovou službu. Co je nejasné, skončí v poznámce ke kontrole a každý řádek potvrdí člověk. Kvóta pro každý tým, auditní log a nejlevnější model, který obstojí (asi 0,01 USD za PDF).' },
    { name: 'pis-cesky', href: 'https://github.com/rajtik76/pis-cesky', tag: 'open-source plugin pro Claude Code',
      desc: 'Učí model psát česky tak, aby text nezněl jako strojový překlad. Nejde o blacklist frází: pravidla vycházejí z textů psaných lidmi a kontrolní agent nikdy nevidí zadání, takže posuzuje jen text.' },
    { name: 'Každodenní práce', href: 'https://blog.rajtik.com/clanky/napsal-jsem-192-tokenu-z-deseti-milionu', tag: 'Claude Code',
      desc: 'AI je pro mě nástroj, autorem kódu zůstávám já. Kde pomůže, nechám ji projít kód, porovnat možnosti, zkontrolovat změnu nebo převzít rutinu. Návrh a rozhodnutí zůstávají na mně a nic se nemerguje, dokud neprojdou Pest a PHPStan a já si diff nepřečtu. Měřím, kolik práce s AI stojí (audity tokenů), a na blog.rajtik.com píšu o jejích chybách.' },
  ],

  projects: [
    { name: 'CaptchaAPI',     tag: 'CAPTCHA bez sledování · EU', href: 'https://captchaapi.eu', repo: 'https://github.com/captchaapi/laravel', body: 'CAPTCHA na principu proof-of-work, od začátku navržená v souladu s GDPR. Nic nesleduje a Google nepotřebuje. Má vlastní balíček pro Laravel a plugin pro WordPress.' },
    { name: 'Billify',        tag: 'fakturační API · LLM · CZ', href: 'https://billify.cz',                   body: 'Faktury vystavíte přes jednoduché REST API. Pro vývojáře, kteří radši zavolají endpoint, než by se proklikávali účetním programem. Přijaté PDF faktury přečte LLM a aplikace z nich připraví měsíční přiznání k DPH.' },
    { name: 'Exile to Exile', tag: 'open-source produkt · PoE2', href: 'https://poe.rajtik.com',              body: 'Bezplatný pomocník pro Path of Exile 2 postavený na Laravelu, Reactu a Inertii: plánovač buildů, nástroje pro pasivní strom, generátor loot filtrů a sdílení buildů.' },
    { name: 'POE2 Toolkit',   tag: 'herní nástroje · OSS',      href: 'https://github.com/rajtik76/poe2-toolkit', body: 'TypeScript toolkit nezávislý na frameworku: extrakce z GGPK, typované extraktory herních dat a headless engine pro geometrii pasivního stromu s rendererem v Reactu. Používá ho Exile to Exile.' },
    { name: 'blog.rajtik.com', tag: 'psaní · CZ',               href: 'https://blog.rajtik.com',               body: 'Můj blog o Laravelu a každodenní práci na backendu.' },
    { name: 'Weather Station', tag: 'ESP32 · Laravel · PostgreSQL', href: 'https://weather.rajtik.com', repo: 'https://github.com/rajtik76/weather-station', body: 'Meteostanice na balkoně, můj vlastní koncept, od čidla po web. Firmware pro ESP32 v C++ čte čtyři senzory přes I2C a I2S, déšť pozná ze spektra mikrofonu, a když vypadne síť, uchová ve flash paměti měření za celý den. Schémata jsou v KiCadu. Data přijímá API v Laravelu a ukládá je do PostgreSQL. Slunce ohřívá radiační štít, a tak regresní model kalibrovaný podle stanice ČHMÚ Plzeň-Mikulka tenhle ohřev odečítá podle osvitu a polohy slunce. Model jde do provozu teprve tehdy, když je na dnech, na kterých se neučil, přesnější než RAW data z čidla.' },
  ],
  repoLabel: 'Repozitář na GitHubu',
  repoAria: (name: string) => `${name} na GitHubu`,

  packageReg: {
    wordpress: 'WordPress.org · schválený plugin',
  },
  packagesBadge: 'balíčky vycházejí ve 3 ekosystémech: Composer · WordPress.org · npm',

  codeCaption: 'Ověřená vydání herních dat se aktivují atomickou výměnou symlinku: každý požadavek vidí buď předchozí úplné vydání, nebo nové, nikdy napůl nahraná data.',
  codeCaptionPrefix: 'Ukázka z',

  experience: [
    { yr: '2022 - dosud', role: 'PHP vývojář',              org: 'Na volné noze (OSVČ)', desc: 'Webové aplikace, REST API a API pro frontend, Livewire, Vue.js, PostgreSQL.' },
    { yr: '2021 - 2022',  role: 'PHP vývojář',              org: 'UBK s.r.o.',           desc: 'Vývoj v Laravelu na několika klientských produktech.' },
    { yr: '2018 - 2021',  role: 'Vývojář',                  org: 'Na volné noze',        desc: 'CMS pro mezinárodní firmu. SCRUM, denní komunikace jen v angličtině. PHP 8, Nette, MariaDB.' },
    { yr: '2016 - 2018',  role: 'Vývojář',                  org: 'MySolutions s.r.o.',   desc: 'Seznamovací platformy ve 12 zemích. SCRUM, standupy v angličtině. PHP, Nette, MySQL.' },
    { yr: '2013 - 2015',  role: 'IT administrátor a vývojář', org: 'Yazaki',             desc: 'Interní software pro skladové hospodářství kabelových svazků, k tomu správa IT.' },
    { yr: 'před 2013',    role: 'Embedded, IoT a správa systémů', org: null,            desc: 'Deset let firmwaru v C (Atmel AVR / PIC) včetně validátoru bankovek, binární protokoly pro komunikaci s hardwarem, telemetrická API, LoRaWAN; servery s Linuxem a Windows; podnikové aplikace v Delphi a FoxPro.' },
  ],

  skills: ['PHP','Laravel','návrh REST API','PostgreSQL','MySQL','Redis','Pest / PHPUnit','PHPStan','Livewire','Vue.js','Inertia','TypeScript','integrace LLM (Claude, laravel/ai)','Claude Code','Docker','Linux','Nette (2016 - 2021)','embedded C','IoT / LoRaWAN'],
  languages: 'Čeština: rodilý mluvčí. Angličtina: pracovní úroveň, roky denních standupů jen v angličtině.',

  cv: [
    { href: '/cv-cs.pdf', download: 'Vladislav-Rajtmajer-CV-CZ.pdf', label: 'Stáhnout CV (PDF, česky)' },
    { href: '/cv.pdf',    download: 'Vladislav-Rajtmajer-CV.pdf',    label: 'Anglické CV (PDF)' },
  ],
};

export default cs;
