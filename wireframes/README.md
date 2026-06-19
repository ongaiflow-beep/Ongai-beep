# Victory Utama Karya — Interface Wireframes

Low-fidelity (grayscale) HTML/CSS wireframes derived from the
`Victory_Utama_Karya_website_user_flow` document. The goal is to communicate
**layout and structure** — not visual design. All imagery is rendered as
crossed-box placeholders and all copy is rendered as greeked gray bars.

## How to view

**Quickest:** open `preview/victory-wireframes.pdf` — every screen rendered to
one page. Individual PNGs are in `preview/` too.

**Interactive:** open `flow.html` in any browser (no build step, no
dependencies). It is the index/launcher and shows how each screen maps to the
user flow. You can also open `index.html` (the Home wireframe) and click through
the navigation.

```
# optional: serve locally so relative links behave like production
python3 -m http.server 8000   # then visit http://localhost:8000/wireframes/flow.html
```

## Screens

| File | Screen | Flow |
|------|--------|------|
| `flow.html` | Wireframe index + user-flow map | — |
| `index.html` | Home Page | Entry point → all flows |
| `company.html` | Our Company | About · Culture · Milestone Timeline · Management · Community Events |
| `management-profile.html` | Management Profile | Our Company → Management → Profile |
| `services.html` | Our Services | Categories: Building Structure, Architectural, Interior, Electrical, Heavy Equipment Rental |
| `service-detail.html` | Service Profile | Service detail → Similar Projects |
| `projects.html` | Our Projects | Categories: Industrial, Civil, Soil Improvement, Electrical Power |
| `project-detail.html` | Project Profile | Project detail → Next Project → Contact |
| `news.html` | News | Categories: Company News, News |
| `news-detail.html` | News Profile | Article → Other News |
| `contact.html` | Contact Us | Conversion endpoint of all flows |

## Wireframe conventions

- **Crossed gray box** = image placeholder (the label notes its role, e.g. "Hero image").
- **Solid gray bars** = placeholder type. Wider/darker bars = headings; thin bars = body copy.
- **Dark sticky strip** at the very top of each page = wireframe annotation (screen name + flow note). Remove for production.
- **Light gray labels** (UPPERCASE) name a component's purpose; they are not final copy.
- Everything is monochrome on purpose — color, brand, and final imagery come in the next (mid/high-fidelity) pass.

## Structure

```
wireframes/
├── css/wireframe.css     # shared low-fi design system
├── flow.html             # START HERE — index + flow map
├── index.html            # Home
├── company.html
├── management-profile.html
├── services.html
├── service-detail.html
├── projects.html
├── project-detail.html
├── news.html
├── news-detail.html
└── contact.html
```

## Suggested next steps

1. Review layouts and section ordering against the user flow.
2. Decide which screens move to mid-fidelity (real copy + sample imagery).
3. Layer in brand (color, type, logo) for the high-fidelity / visual design pass.
