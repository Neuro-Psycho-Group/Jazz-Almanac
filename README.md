# Jazz Almanac

A comprehensive, modular static site about jazz — built for GitHub Pages.

## Pages

| File | Content |
|------|---------|
| `index.html` | Home / landing page with animated vinyl record hero |
| `history.html` | Full history of jazz from New Orleans to contemporary |
| `styles-players.html` | Regional styles, genres, and iconic player profiles |
| `theory.html` | Music theory — ii-V-I, chord extensions, scales, modes |
| `beginners.html` | Guide for beginners, especially classically trained pianists |
| `neuroscience.html` | The neuroscience of jazz improvisation and the jazz brain |

## Structure

```
jazz-site/
├── index.html
├── history.html
├── styles-players.html
├── theory.html
├── beginners.html
├── neuroscience.html
├── css/
│   ├── main.css        ← Core styles, typography, layout, cards
│   ├── nav.css         ← Navigation styles (fixed, mobile-responsive)
│   └── animations.css  ← All keyframe animations
├── js/
│   ├── main.js         ← All interactive JS (scroll reveal, tabs, piano, etc.)
│   └── nav-template.js ← Nav HTML reference
└── README.md
```

## Deploying to GitHub Pages

1. Create a new GitHub repository
2. Push all files to the `main` branch
3. Go to Settings → Pages
4. Set Source to "Deploy from a branch" → `main` → `/ (root)`
5. Your site will be live at `https://yourusername.github.io/repo-name/`

## Design

- **Aesthetic**: Art Deco × Vintage Jazz Poster — warm parchment/beige, gold accents, deep ink backgrounds
- **Fonts**: Playfair Display (headlines) + Crimson Pro (body) — via Google Fonts
- **Animations**: Floating notes, animated waveform, vinyl record, EEG waves, brain diagram SVG, scroll reveal
- **Interactive**: Piano keyboard, tabbed content, accordion sections, scroll timeline
- **Responsive**: Mobile-first, hamburger nav on small screens
