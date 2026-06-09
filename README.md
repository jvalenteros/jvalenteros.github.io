# Johann Valenteros — Portfolio

A single-page personal portfolio built from scratch with vanilla HTML, CSS, and
JavaScript. No frameworks and no build step — everything lives in one
self-contained `index.html`. The design is deliberately minimal: a monochrome
palette, restrained typography, and motion that stays out of the way.

Live at [jvalenteros.github.io](https://jvalenteros.github.io).

## Design

- Hyperminimalist dark interface on a single monochrome palette
- A morphing intro — the name animates into its final position (FLIP) on enter
- Scroll-triggered reveals via `IntersectionObserver`
- Expandable project entries and a scroll-synced navigation state
- Live GitHub repository count from the public API, with a static fallback
- Fully keyboard-navigable and `prefers-reduced-motion` aware

## Sections

- About — short bio and contribution stats
- Selected work — security utilities, encryption tools, and web builds
- Skills — development and design
- AI Workflow — AI-assisted development with human authorship, review, and QA
- Education and certifications (AWS, Cisco)
- Contact

## Built with

- HTML5
- CSS3 — custom properties, grid, and hand-written animations
- Vanilla JavaScript — no dependencies
- Inter (Google Fonts)

There is no package manifest or build tooling; the styles and scripts are inlined
in `index.html`.

## Running locally

Clone the repository — there is nothing to install or compile.

```bash
git clone https://github.com/jvalenteros/jvalenteros.github.io
cd jvalenteros.github.io
```

Then open the file in any modern browser:

```bash
start index.html      # Windows
open index.html       # macOS
xdg-open index.html   # Linux
```

## Deployment

Hosted on GitHub Pages. Pushes to the default branch publish automatically.

## License

Released under the MIT License. See [LICENSE](LICENSE).

## Links

- GitHub — https://github.com/jvalenteros
- LinkedIn — https://www.linkedin.com/in/johannvalenteros/
- X — https://x.com/p_aizuri
- Bandcamp — https://spaceportside.bandcamp.com/
