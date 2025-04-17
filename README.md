# quasr
QUASR is a lightweight, browser-based search assistant that helps users filter, highlight, and refine web search results in real-time.


# 🔍 QUASR – Intelligent Search Refinement

**QUASR** is a lightweight, browser-based search assistant that gives users powerful control over web search results in real time. It filters, highlights, promotes, or blocks content based on user-defined keywords — all with a clean UI and minimal setup.

---

## 🎯 Project Goals

QUASR aims to:

- ✅ Make web search smarter and more intentional
- ✅ Allow real-time filtering and prioritization of search results
- ✅ Help users block irrelevant sources or topics effortlessly
- ✅ Highlight useful content with keyword promotion
- ✅ Provide a browser-friendly UI with local memory persistence
- ✅ Expand toward Chrome Extension + AI assistant integration

---

## 🛠️ How It Works

1. **Search**: Enter a search term → uses DuckDuckGo API to fetch results
2. **Keyword Extraction**: QUASR analyzes top search results for key terms
3. **Promote/Block**: Users can click `+` to promote or `−` to block any keyword
4. **Display Results**: Promoted words are highlighted, blocked ones are filtered out
5. **Save Preferences**: User choices are stored locally using `localStorage`

---

## 🧩 Features

- DuckDuckGo Instant Search API
- Automatic keyword extraction from result titles/snippets
- Promote or block keywords visually
- Highlight promoted words in real-time
- Persist blocked/promoted state with `localStorage`
- Built with Vite, React 18, and TailwindCSS
- Super fast dev server and build system
- Clean codebase with modular components

---

## 🚧 Upcoming Features

- 🔌 Chrome Extension support
- 🧠 ChatGPT prompt integration per search
- 📋 Copy/Export top keywords
- 🔗 Source domain prioritization
- 🎨 Dark mode toggle

---

## 💻 Tech Stack

- **Frontend**: React + TailwindCSS
- **Bundler**: Vite
- **Data**: DuckDuckGo API (Instant Answer)
- **State**: React Hooks + localStorage

---

## 🚀 Running Locally

```bash
git clone https://github.com/yourusername/quasr.git
cd quasr
npm install
npm run dev
