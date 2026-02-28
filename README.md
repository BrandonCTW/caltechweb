# CalTech Web

Redesign of [CalTechWeb.com](https://caltechweb.com) — an affordable web design company based in California.

**Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3006](http://localhost:3006) to see the app.

> Port 3006 is used because 3000–3005 are occupied by other local projects.

## Agents

Autonomous Claude-powered agents for development and design. Requires the shared ENGINE at `~/Projects/claude-lab/ENGINE/run.sh`.

### Discovery Agent

```
WORK=/Users/brandonhopkins/Projects/caltechweb/agents/discovery-agent MODEL="sonnet" MAX_LOOPS=1 bash ~/Projects/claude-lab/ENGINE/run.sh
```

### Visual Redesign Agent

```
WORK=/Users/brandonhopkins/Projects/caltechweb/agents/visual-enhancement-agent MODEL="sonnet" MAX_LOOPS=3 bash ~/Projects/claude-lab/ENGINE/run.sh
```

### PageSpeed Agent

```
WORK=/Users/brandonhopkins/Projects/caltechweb/agents/pagespeed-agent MODEL="sonnet" MAX_LOOPS=1 bash ~/Projects/claude-lab/ENGINE/run.sh
```
