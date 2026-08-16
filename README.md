# Nexora — Student Opportunity Matcher

A front-end prototype that matches students to competitions, internships, freelance gigs,
scholarships, research, volunteering, fellowships, debates & conferences, lectures, workshops,
certifications, and study resources — based on their profile, not a search bar.

## Run it

No build step needed — it's plain HTML/CSS/JS.

1. Open this folder in VS Code.
2. Install the **Live Server** extension (if you don't have it).
3. Right-click `index.html` → **Open with Live Server**.

Or just double-click `index.html` to open it directly in a browser (voice search/voice
replies work best in Chrome).

## Structure

- `index.html` — app shell, login screen, chat widget, modal
- `styles.css` — design tokens and all component styling
- `data.js` — mock data: all opportunity listings, badges, per-section Q&A seeds, per-section FAQs
- `app.js` — app logic: routing, filters, per-section Q&A/FAQ tabs, badges, chatbot (speech reply), voice search, maps

## Key features

- **13 sections**, each with its own **Listings / Q&A / FAQ** tabs (never shared across sections)
- **Resources** is a standalone section with its own Q&A + FAQ
- **Scholarships** each list explicit eligibility criteria
- **3 languages**: English, Tamil, Tanglish (toggle in the sidebar)
- **Voice search** (speech-to-text) and an **AI assistant that replies in speech** (text-to-speech)
- Badge system (Bronze/Silver/Gold/Elite) based on participation count
- Per-opportunity detail view with location map and its own mini Q&A thread

## Out of scope for this prototype

Real user accounts/auth, live scraping of opportunities, push notifications, a true LLM-backed
chatbot, real-time translation, and a production maps API key — these need a real backend.
