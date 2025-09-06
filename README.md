Got it 👍 Let’s replace the boilerplate template README with one that reflects your actual portfolio site (sakiralisaiyed.github.io).

Here’s a ready-to-paste README.md you can put in your repo root:

⸻

🌐 Sakir Ali Saiyed — Portfolio

This is my personal developer portfolio, built with Astro and Tailwind CSS v4.
It showcases my background, skills, projects, and experience as a Senior Mobile Developer.

Live site 👉 sakiralisaiyed.com

⸻

🚀 Built With
	•	Astro — modern static site framework
	•	Tailwind CSS v4 — utility-first CSS
	•	TypeScript — type-safe configuration
	•	Tabler Icons — free, open-source icons

⸻

🧑‍💻 Portfolio Content

The site is configured from a single file: src/config.ts.
This file controls:
	•	Personal Info → name, title, description
	•	Accent Color → site-wide theme color
	•	Social Links → email, GitHub, LinkedIn, etc.
	•	About Section → bio/summary
	•	Skills → list of technologies
	•	Projects → showcase with descriptions & links
	•	Experience → job history with highlights
	•	Education → academic background

If you remove a section from config.ts, the site will hide it automatically.

⸻

📂 Project Structure

sakiralisaiyed.github.io/
├── public/
│   └── favicon.svg          # Favicon
├── src/
│   ├── components/          # Astro components for each section
│   ├── pages/
│   │   └── index.astro      # Main page
│   ├── styles/
│   │   └── global.css       # Tailwind global styles
│   └── config.ts            # Site configuration (edit me!)
├── astro.config.mjs         # Astro configuration
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript config


⸻

⚡ Local Development

Clone and run locally:

git clone https://github.com/shaqir/sakiralisaiyed.github.io.git
cd sakiralisaiyed.github.io
npm install
npm run dev

Then open http://localhost:4321.

⸻

🌍 Deployment

The site is deployed automatically via GitHub Actions → GitHub Pages:
	•	Branch: main
	•	Action: .github/workflows/deploy.yml
	•	Domain: sakiralisaiyed.com

Custom domain + HTTPS are configured through GitHub Pages + GoDaddy DNS.

⸻

📜 License

This portfolio is open-sourced under the MIT License.

⸻
