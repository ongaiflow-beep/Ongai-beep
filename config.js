/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  ONGAI FLOW — Site Configuration
 *  Edit this file to update all website content.
 *  No code knowledge needed — just change the values.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */
const SITE = {

  /* ── COMPANY ──────────────────────────── */
  name: 'ongai flow.',
  tagline: 'branding. effectively, not aesthetic.',
  email: 'ongaiflow@gmail.com',
  year: '2025',

  /* ── CONTACT FORM ────────────────────────
     To enable the in-page contact form:
     1. Create a free account at https://formspree.io
     2. Click "New Form", enter your email
     3. Copy the endpoint (e.g. https://formspree.io/f/abcdefgh)
     4. Paste it below, replacing the placeholder
  ─────────────────────────────────────────── */
  formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',

  /* ── SOCIAL LINKS ─────────────────────── */
  social: {
    instagram: '#',   // e.g. 'https://instagram.com/ongaiflow'
    linkedin:  '#',   // e.g. 'https://linkedin.com/company/ongaiflow'
    behance:   '#',   // e.g. 'https://behance.net/ongaiflow'
  },

  /* ── LOGO ────────────────────────────────
     Leave both empty to use the default SVG mark.
     • image: path to a PNG/SVG file, e.g. 'assets/logo.png'
       (the image replaces the default mark entirely)
  ─────────────────────────────────────────── */
  logo: {
    image: '',  // e.g. 'assets/logo.png'
  },

  /* ── CLIENT LOGOS ────────────────────────
     Shown in a strip below the hero.
     • name: used for screen-reader alt text
     • image: path to logo file, e.g. 'assets/clients/acme.png'
       Leave image empty to show a placeholder block.
  ─────────────────────────────────────────── */
  clients: [
    { name: 'Client 01', image: '' },
    { name: 'Client 02', image: '' },
    { name: 'Client 03', image: '' },
    { name: 'Client 04', image: '' },
    { name: 'Client 05', image: '' },
    { name: 'Client 06', image: '' },
  ],

  /* ── SERVICES ─────────────────────────── */
  services: [
    {
      title: 'Visual Identity',
      desc: 'A complete visual system — color, type, and layout — that says who you are without a word.',
    },
    {
      title: 'Brand Strategy',
      desc: 'We flow to the core — identifying the real brand problem and building the right solution.',
    },
  ],

  /* ── PORTFOLIO / WORK ────────────────────
     • title: project name
     • category: e.g. 'Brand Identity'
     • year: e.g. '2025'
     • image: path to project image, e.g. 'assets/work/project1.jpg'
       Leave image empty to show a branded placeholder.
     • link: URL to case study, or '#' to disable
     • tall: true makes the card taller (use for the first/feature card)
  ─────────────────────────────────────────── */
  work: [
    { title: 'Project Name', category: 'Brand Identity',  year: '2025', image: '', link: '#', tall: true  },
    { title: 'Project Name', category: 'Logo & Branding', year: '2025', image: '', link: '#', tall: false },
    { title: 'Project Name', category: 'Brand Strategy',  year: '2025', image: '', link: '#', tall: false },
  ],

  /* ── ABOUT ────────────────────────────────
     • teamPhoto: path to a studio/team image, e.g. 'assets/team.jpg'
     • team: list of team members (leave empty array [] to hide section)
  ─────────────────────────────────────────── */
  about: {
    headline: 'flowing to\nthe core.',
    body: 'We are a business partner that helps your brand get <em class="brand-em">noticed.</em> We identify the core problems and give effective solutions — not just pretty visuals. We help you build your brand like it is our own. <em class="brand-em">We take it serious.</em>',
    values: ['Innovative', 'Creative', 'Adaptation'],
    quote: '"A Symbol Should Represent Personalities"',
    teamPhoto: '',   // e.g. 'assets/team.jpg'
    team: [
      // Uncomment and fill to add team members:
      // { name: 'Your Name', role: 'Creative Director', photo: '' },
    ],
  },

};

/* ── Admin overrides ──────────────────────────────────────────────
   The admin panel (admin.html) saves changes here in localStorage.
   Main pages automatically use them — no file editing needed.
────────────────────────────────────────────────────────────────── */
try {
  const _saved = localStorage.getItem('ongai_content');
  if (_saved) {
    const _overrides = JSON.parse(_saved);
    Object.keys(_overrides).forEach(function(k) { SITE[k] = _overrides[k]; });
  }
} catch(e) {}
