# ✨ Vibe Check Quiz

**A beautifully designed personality quiz that reveals your current "vibe" based on your lifestyle choices. Built with React, styled using Tailwind CSS, and deployed on Netlify.**

---

## 🚀 Live Demo

👉 [https://vibequizapp.netlify.app](https://vibequizapp.netlify.app)  
_(Hosted on Netlify — fast, responsive, and ready for the world)_

---

## 🎯 Features

- 🧠 8 handcrafted personality-based questions
- 🌈 5 unique vibe results: **Locked-In, Chill, Creative, Cozy, Chaos**
- 💻 Responsive UI (mobile + desktop friendly)
- 🧊 Glassmorphism design with Tailwind utility classes
- 🔗 Share result via Web Share API (or clipboard)
- 🔁 Instant quiz retake button
- ⚡ Deployed with CI/CD on Netlify from GitHub

---

## 🛠️ Tech Stack

| Tool        | Purpose                      |
|-------------|------------------------------|
| React       | UI library for dynamic views |
| Tailwind CSS| Utility-first CSS framework  |
| Lucide React| Icon system                  |
| Netlify     | Hosting + continuous deploy  |
| Git + GitHub| Version control              |

---

## 📁 Folder Structure
vibe-check-quiz/
├── public/ # index.html and static assets
├── src/
│ ├── components/ # Screens
│ │ ├── WelcomeScreen.jsx
│ │ ├── QuizScreen.jsx
│ │ └── ResultScreen.jsx
│ ├── App.jsx # Main component + logic
│ ├── index.js # Entry point
│ └── index.css # Tailwind + global styles
├── tailwind.config.js # Tailwind setup
├── postcss.config.js # PostCSS plugins
├── package.json # Project config & scripts
└── README.md # This file

### 📦 Getting Started

1. Clone the repo

```bash
git clone https://github.com/janvi-04/Vibe-Check-Quiz.git
cd Vibe-Check-Quiz
```

2. Install dependencies

```bash
npm install
```

3. Run the app locally

```bash
npm start
```

Visit in browser: http://localhost:3000

4. Build for production

```bash
npm run build
```

This creates a `build/` folder with optimized production assets.
