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

Crawls CalTechWeb.com once to identify all distinct page templates and writes a prioritized queue for the redesign agent.

**Run once before starting redesign work:**
```bash
WORK=/Users/brandonhopkins/Projects/caltechweb/agents/discovery-agent MODEL="sonnet" MAX_LOOPS=1 bash ~/Projects/claude-lab/ENGINE/run.sh
```

**Output:** `agents/discovery-agent/output/pages-queue.md`

Review and edit the queue file before running the redesign agent — remove pages you don't want touched, reorder by priority.

### Visual Redesign Agent


WORK=/Users/brandonhopkins/Projects/caltechweb/agents/visual-enhancement-agent MODEL="sonnet" MAX_LOOPS=3 bash ~/Projects/claude-lab/ENGINE/run.sh


**Watch logs:**
```bash
tail -f agents/visual-enhancement-agent/output/agent-log.md
```

**Stop the agent:**
```bash
touch agents/visual-enhancement-agent/output/STOP
```

**Output:** `agents/visual-enhancement-agent/output/agent-log.md`

### Models

| Model | Quality | Speed | Use when |
|-------|---------|-------|----------|
| `opus` | Best | Slowest | Full redesign pass, production quality (default) |
| `sonnet` | Good | Medium | Quick iteration or targeted fixes |
| `haiku` | Basic | Fastest | Rapid scan, low-cost runs |

### Loops

Each loop is one full agent run (read → analyze → fix → log). More loops = more changes applied.

- `10` — Quick pass
- `15` — Standard full redesign (default)
- `20+` — Deep pass, revisits and refines
