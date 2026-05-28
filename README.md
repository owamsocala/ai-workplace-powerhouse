# Worksmith AI — Workplace Productivity Assistant

> **Build Prompt**
>
> Build a modern, responsive web application called **AI Workplace Productivity Assistant** that helps professionals automate workplace tasks using AI.
>
> The application should include:
> - Smart Email Generator
> - Meeting Notes Summarizer
> - AI Task Planner
> - AI Research Assistant
> - AI Chatbot Interface
>
> **Requirements:**
> - Modern dashboard UI
> - Sidebar navigation
> - Responsive design
> - Structured AI prompts
> - Editable AI outputs
> - Responsible AI disclaimer
>
> Design style should be clean, modern, and professional — similar to a SaaS platform.

---

A modern, responsive SaaS-style web app that helps professionals automate everyday workplace tasks with AI. Built with TanStack Start, React, Tailwind, and the Lovable AI Gateway (Google Gemini).

## ✨ Features

- **Smart Email Generator** — Draft professional emails from a short brief (recipient, tone, key points). Always includes a subject line and clean structure.
- **Meeting Notes Summarizer** — Paste raw notes or a transcript and get a clean Markdown summary with **Key Decisions**, **Action Items**, and **Open Questions**.
- **AI Task Planner** — Turn any goal into a prioritized, numbered plan with effort estimates, dependencies, and risk mitigations.
- **AI Research Assistant** — Structured briefings on any topic (Overview, Key Concepts, Notable Players, Trends, Open Questions) with explicit uncertainty flags.
- **AI Chatbot Interface** — Full conversational assistant with message history and auto-scroll.

Every tool ships with:
- Structured system prompts tuned per use case
- **Editable AI output** — refine the draft before you use it
- One-click copy to clipboard
- Responsible AI disclaimer on every output

## 🎨 Design

- Clean, modern SaaS aesthetic — charcoal primary with emerald accents
- Space Grotesk display + Inter body typography
- Collapsible sidebar navigation
- Fully responsive (mobile → desktop)
- Light & dark mode

## 🧠 AI Stack

- **Model**: `google/gemini-3-flash-preview` via the Lovable AI Gateway
- **Server function**: `src/lib/ai.functions.ts` (`aiComplete`) — handles system prompt + history + user message, with graceful 429 / 402 error handling
- No API key needed in the browser — the gateway is called server-side via TanStack `createServerFn`

## 🗂️ Project Structure

```
src/
├── components/
│   ├── AppSidebar.tsx        # Sidebar nav + branding + AI disclaimer
│   └── AiToolPanel.tsx       # Reusable tool UI (input → AI → editable output)
├── lib/
│   └── ai.functions.ts       # aiComplete server function
└── routes/
    ├── __root.tsx            # Shell + sidebar layout
    ├── index.tsx             # Dashboard
    ├── email.tsx             # Smart Email Generator
    ├── meeting.tsx           # Meeting Notes Summarizer
    ├── planner.tsx           # AI Task Planner
    ├── research.tsx          # AI Research Assistant
    └── chat.tsx              # AI Chatbot
```

## 🚀 Getting Started

```bash
bun install
bun run dev
```

Open the preview URL shown in the terminal.

## ⚠️ Responsible AI

Outputs are AI-generated and may contain errors, bias, or fabricated details. Always review, fact-check, and edit before sharing or acting on them. Do not paste confidential information you are not authorized to share with a third-party model provider.
